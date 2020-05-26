import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Row = styled.div`
  width: 0;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

export const Item = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 10px;
`;
