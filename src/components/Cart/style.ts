import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tags/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${color.gray};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .cart-empty {
    font-weight: bold;
    margin-bottom: 50px;
    text-align: center;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${color.white};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${color.lightgray};
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${color.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${color.lightgray};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${color.white}
    font-weight: bold; 
    font-size: 16px;
  }

  span {
  display: block;
    color: ${color.white}
    font-weight: bold; 
    font-size: 14px;
  }

 ${TagContainer} {
    margin: 8px 8px 16px 0;
 }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0; 
  }
`
