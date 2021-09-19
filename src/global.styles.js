import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    font-family: "Open Sans Condensed",serif;
    padding: 20px 40px;

    @media screen and (max-width: 767px) {
      padding: 20px 15px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  .menuItem {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  
  .header .logoContainer {
    @media screen and (max-width: 767px) {
      padding: 0;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .header .options {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  
  .collectionItem, .checkoutPage {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
.collectionFooter {
  @media screen and (max-width: 767px) {
    height: 10%;
  }
}
  }
`

export default GlobalStyle;