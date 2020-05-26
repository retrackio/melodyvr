import React from 'react';
import { Reset } from 'styled-reset';
import Link from 'next/link';
import Logo from '../Logo';
import * as Styled from './style';

interface Props {
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}

const Wrapper = ({ children, toolbar }: Props) => (
  <>
    <Reset />
    <Styled.GlobalStyle />
    <Styled.Header>
      <Styled.HeaderTitle>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </Styled.HeaderTitle>
      {toolbar}
    </Styled.Header>
    <Styled.MainContainer>{children}</Styled.MainContainer>
  </>
);

export default Wrapper;
