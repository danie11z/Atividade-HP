import { createGlobalStyle } from "styled-components"
import BG from "../assets/BG.jpg"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        color: #FFFFFF;
        
        body{
            background-image: url(${BG});
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`