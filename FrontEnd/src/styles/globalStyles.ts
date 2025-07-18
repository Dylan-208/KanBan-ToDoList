import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family:"roboto-thin" ;
    src: url("/assets/fonts/Roboto-VariableFont_wdth,wght.ttf") format("truetype");
    
}

@font-face {
    font-family:"OpenSans" ;
    src: url("/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf") format("truetype");
}


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html, body{
    height: 100%;
    font-family: "OpenSans", sans-serif;
    background: linear-gradient(to right, #CAF0F8, #0077B6);
}
`;
