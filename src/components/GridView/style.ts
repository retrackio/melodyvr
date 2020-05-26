import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const Item = styled.div`
  flex-basis: 25%;
  box-sizing: border-box;
  /* position: relative; */
  padding: 10px;

  @media (max-width: 1024px) {
    flex-basis: 33.3%;
  }

  @media (max-width: 768px) {
    flex-basis: 50%;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;
