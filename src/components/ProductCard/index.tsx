import React from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { Product } from '../../lib/apiClient';
import config from '../../config';
import ProductPrice from '../ProductPrice';
import * as Styled from './style';

interface Props {
  product: Product;
  isFree: boolean;
}

const ProductCard = ({ product, isFree }: Props) => (
  <Styled.Container>
    <Link
      href="/performance/[id]/[slug]"
      as={`/performance/${product.id}/${slugify(
        product.title,
        config.app.slugFormat,
      )}`}
      passHref
    >
      <Styled.Link />
    </Link>
    <Styled.Wrapper
      accentColor={product.accent_colour_code}
      image={product.image_hero_url}
    >
      <Styled.Title backgroundColor={product.accent_colour_code}>
        {product.title}
      </Styled.Title>
      <ProductPrice price={product.price} isFree={isFree} />
      <Styled.Description
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </Styled.Wrapper>
  </Styled.Container>
);

export default ProductCard;
