import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --background-color: #ffffff;
    --sidebar-color: #ce3f3f;
    --sidebar-border-color: #cc6464;
    --main-title: #25110bb3;
    --main-title-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    --main-title-shadow1: 2px 2px 0 rgba(0, 0, 0, 0.2);
    --small-title-shadow: 3px 3px 0 rgba(46, 43, 43, 0.2);
    --button-hover: rgba(247, 80, 80, 0.2);
    --small-title-hover: 3px 3px 0 rgba(102, 98, 98, 0.2);
    --small-card: 3px 3px 0 rgba(240, 230, 230, 0.2)
    --skills-subtitles: 3px 3px 0 rgba(240, 230, 230, 0.2)
    --gray: #808080;
    --gray-medium: #c1bfbf;
    --gray-light: #d3d3d3;
    --paper-color: #eff8fe;
    --trunk-brown: #A07F65;
    --sky-blue: #9CE6FC;
    --ant-color: #1d1602;
    --leaf-color: #8ABD29;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background: radial-gradient( ellipse at center, #e7dfdfbb, #b8a49129, #e29349bb); 
        font-family: 'Oswald', sans-serif;
    }
`;

export default GlobalStyle;
