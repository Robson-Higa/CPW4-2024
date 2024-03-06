import { createGlobalStyle } from "styled-components"

import RegularFont from "./Lato-Regular.ttf"
import BoldFont from "./Lato-Bold.ttf"

const fontStyles = createGlobalStyle`
    @font-face {
        font-family : 'regular';
        src: url($(RegularFont));
    }

    @font-face {

        font-family: 'bold';
        src: url($(BoldFont));
    }
`
export default fontStyles
