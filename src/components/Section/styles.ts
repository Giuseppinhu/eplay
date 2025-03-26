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

  p {
    font-size: 14px;
    max-width: 640px;
    line-height: 22px;
    text-align: justify;
  }
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
