import styled from 'styled-components'
import { color } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  background-color: ${color.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  justify-content: space-between;

  a {
    color: ${color.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
