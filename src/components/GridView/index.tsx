import React from 'react';
import * as Styled from './style';

interface Props {
  items: React.ReactNode[];
}

const GridView = ({ items }: Props) => (
  <Styled.Container>
    <Styled.Row>
      {items.map((item, index) => (
        <Styled.Item key={`$grid_item_${index}`}>{item}</Styled.Item>
      ))}
    </Styled.Row>
  </Styled.Container>
);

export default GridView;
