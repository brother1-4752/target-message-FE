import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const fontFaces = css`
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeoB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansNeoT';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansNeoM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'SpoqaHanSansNeoL';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
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
