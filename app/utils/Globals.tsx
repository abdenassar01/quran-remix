import { createGlobalStyle } from "styled-components";

import Shrikhand from "./fonts/Shrikhand-Regular.ttf"
import Poppins from "./fonts/Poppins-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    @font-face {
        font-family: 'Shrikhand-Regular';
        src: local('Shrikhand-Regular'), local('Shrikhand-Regular'),
        url(${Shrikhand}) format('truetype'),
        url(${Poppins}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`