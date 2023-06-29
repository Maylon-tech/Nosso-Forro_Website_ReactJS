import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
   } 

   :root {
        --BG-default: #eee;
   }

   html, body {
     scroll-behavior: smooth;
   }

   
`

export default GlobalStyles