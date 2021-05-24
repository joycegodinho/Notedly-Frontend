import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';  

export default createGlobalStyle `
    ${normalize}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body,
    html {
        height: 100%;
        margin: 0;
        background-color: #000000 
        opacity: 0.3;
    }

    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        background-color: #FFFFFF;
        
        line-height: 1.4;
    }

    a:link, 
    a:visited {
        color: #5D8AFF
        text-decoration: none;
    }

    a:hover, 
    a:focus {
        color: #004499
    }

    code,
    pre {
        max-width: 100%;
    }
`;