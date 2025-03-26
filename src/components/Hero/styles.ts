import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tags/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  padding: 16px 0;

  background: no-repeat center / cover;
  background-size: 100%;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${color.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
