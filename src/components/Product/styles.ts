import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tags/styles'

export const Card = styled.div`
  background-color: ${color.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
