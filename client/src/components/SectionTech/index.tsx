import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import icons from './content'
import * as S from './styles'
import { SectionPetProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionPet: SectionPetProps
}

const SectionTech = ({ sectionPet }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{sectionPet.title}</Heading>
      {console.log('sectionpet', sectionPet.petImage)}
      <S.IconsContainer>
        {sectionPet.petImage.map(({ petName, image }) => (
          <S.Icon key={petName}>
            <S.Icons
              src={getImageUrl(image.data[0].attributes.url)}
              alt={petName}
              loading="lazy"
            />
            <S.IconsName>{petName}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
