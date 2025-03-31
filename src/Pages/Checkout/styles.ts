import styled from 'styled-components'
import { breakpoint, color } from '../../styles'

type InputGroupPros = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
    margin-top: 16px;
  }
`

export const InputGroup = styled.div<InputGroupPros>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 14px;
    display: block;
  }

  input,
  select {
    background-color: ${color.white};
    border: 1px solid ${color.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) => (props.isActive ? color.green : color.black)};
  color: ${color.white};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
