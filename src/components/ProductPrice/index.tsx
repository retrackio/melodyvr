import React from 'react';
import * as Styled from './style';

interface Props {
  price: string | null;
  isFree: boolean;
}

function getPriceLabel({ price, isFree }: Props) {
  if (!isFree && !price) {
    return 'N/A';
  }
  if (isFree) {
    return 'FREE';
  }
  return <span>&pound;{price}</span>;
}

const ProductPrice = (props: Props) => (
  <Styled.Container>{getPriceLabel(props)}</Styled.Container>
);

export default ProductPrice;
