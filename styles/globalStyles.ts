import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme } : {theme: any}) => theme.body};
    color: ${({ theme } : {theme: any}) => theme.text};
    transition: all 0.25s linear;
  }
  a, 
  p, 
  button {
    color: ${({ theme } : {theme: any}) => theme.text};
  }
  .header {
    background-color: ${({ theme } : {theme: any}) => theme.textActiveOpp};
  }
  .right-nav > span.active > a,
  .left-nav > ul > li.active > a {
    color: ${({ theme } : {theme: any}) => theme.textActive};
    font-weight: 700;
  }
  .footer {
    background-color: ${({ theme } : {theme: any}) => theme.footerBg};
    border-top: 1px solid ${({ theme } : {theme: any}) => theme.borderColor};
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme } : {theme: any}) => theme.textActive};
  }
  .slick-dots li button:before {
    color: ${({ theme } : {theme: any}) => theme.text};
  }
`;