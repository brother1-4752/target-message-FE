import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const fontFaces = css`
  @font-face {
    font-family: 'SpoqaHanSans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansT';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansL';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
  }

  @keyframes fadeIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`

export const GlobalStyle = createGlobalStyle`
    ${reset}

    ${fontFaces}
    
    html {
      font-family :  'SpoqaHanSansNeo', 'sans-serif';
      font-size: var(--font-size14);
    }

`
