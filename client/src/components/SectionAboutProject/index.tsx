import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutProject: SectionAboutProjectProps
}

const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={getImageUrl(sectionAboutProject.media.data.attributes.url)}
            type="image/webp"
          />
          <source
            srcSet={getImageUrl(sectionAboutProject.media.data.attributes.url)}
            type="image/jpg"
          />
          <img
            src={getImageUrl(sectionAboutProject.media.data.attributes.url)}
            loading="lazy"
            alt={sectionAboutProject.media.data.attributes.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text>{sectionAboutProject.description}</S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
