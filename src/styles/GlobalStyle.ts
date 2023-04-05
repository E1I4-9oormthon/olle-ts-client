import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *:not(input) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline-style:none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;     
    -webkit-user-drag:none; 
    -moz-user-drag:none; 
    -ms-user-drag:none; 
    -khtml-user-drag: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 	
  }

  body {
    font-family:'Pretendard-Regular',sans-serif;
  }

  a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input, button {
    background-color: transparent;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
