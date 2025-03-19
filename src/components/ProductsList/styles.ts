import styled from 'styled-components'
import { color } from '../../styles'

import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? color.black : color.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? color.gray : color.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
