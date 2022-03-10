import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 5.5rem;

  ${media.greaterThan('medium')`
    width: 10.5rem;
  `}
`
