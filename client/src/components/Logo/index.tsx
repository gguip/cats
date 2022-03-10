import React from 'react'
import { LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'

const Logo = ({ data }: LogoProps) => (
  <S.LogoWrapper
    src={getImageUrl(data.attributes.url)}
    alt={data.attributes.alternativeText}
  />
)

export default Logo
