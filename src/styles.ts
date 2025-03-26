import { createGlobalStyle } from 'styled-components'

export const color = {
  white: '#eeeeee',
  black: '#111111',
  gray: '#333333',
  lightgray: '#a3a3a3',
  green: '#10AC84'
}

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    }
    
    body {
      background-color: ${color.black};
      color: ${color.white};
      padding-top: 40px;
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
`
