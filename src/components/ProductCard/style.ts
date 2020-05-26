import styled from 'styled-components';

interface WrapperProps {
  accentColor: string;
  image: string;
}

interface TitleProps {
  backgroundColor: string;
}

export const Container = styled.div`
  position: relative;
`;

export const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

export const Wrapper = styled.div<WrapperProps>`
  box-sizing: initial;
  height: 250px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-top: 6px solid ${(props) => `#${props.accentColor}`};
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: 50% 50%;
`;

export const Title = styled.h2<TitleProps>`
  font-family: 'Proza Libre';
  font-weight: 600;
  font-size: 1.8rem;
  color: #fff;
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 10px;
  background-color: ${(props) => `#${props.backgroundColor}`};
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.4);
`;

export const Description = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  line-height: 1.8rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.3rem;
`;
