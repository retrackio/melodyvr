import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`;

export const Header = styled.header`
  padding: 20px;
  background: #000;
  color: #fff;
  font-family: 'Proza Libre';
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.2rem;
  flex-grow: 1;
  margin-right: 10px;
  & svg {
    height: 30px;
  }
`;

export const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5px;
  background: #fff;
  color: #000;
  font-family: 'Open Sans';
  font-weight: 400;
`;
