import RegularFont from "./Lato-Regular.ttf"
import BoldFont from "./Lato-Bold.ttf"
import { createGlobalStyle } from "styled-components"

export const FontStyles = createGlobalStyle`
    @font-face {

        font-family: "regular";
        src: url(${RegularFont});
    }

    @font-face {
        font-family: "bold";
        src: url(${BoldFont});
    }
`
