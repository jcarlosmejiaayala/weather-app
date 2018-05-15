import styledNormalize from "styled-normalize";
import {injectGlobal} from "styled-components";

export default injectGlobal `
    ${styledNormalize}
    html {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-size: 16px;
        font-family:  Verdana, sans-serif;
        box-sizing: content-box;
        > div {
            height: 100%;
        }
    }
`;