import React from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import * as S from './styles'

import { gaEvent } from 'utils/ga'
import Container from 'components/Container'
import { LogoProps, HeaderProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          {/* <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOFEV22"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper> */}
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.data.attributes.url)}
          alt="Ilustração de um gato brincando com um novelo de lã em uma sala."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
