import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(245, 245, 245);
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle