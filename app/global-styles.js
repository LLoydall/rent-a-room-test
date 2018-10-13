import { injectGlobal } from 'styled-components';
import './fonts/global-fonts';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Museo Sans', Helvetica, Arial, sans-serif;
  }

  /* body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-size: 14pt;
    line-height: 1.5em;
  }
`;
