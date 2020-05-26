import React from 'react';
import { shallow } from 'enzyme';
import slugify from 'slugify';
import ProductCard from '.';
import { Product } from '../../lib/apiClient';
import config from '../../config';

jest.mock('slugify', () => jest.fn().mockReturnValue('some_slug'));

const mockedProduct: Product = {
  id: 2,
  title: 'Imagine Dragons',
  description: '<i>Performance contains flashing or strobe lighting</i>.',
  image_hero_url: 'hero_image.jpg',
  image_landscape_url: 'landscape_image.jpg',
  accent_colour_code: 'F52459',
  background_colour_code: '1e1e1e',
  text_colour_code: 'ffffff',
  production_type_code: 'performance',
  price: '9.99',
};

describe('<ProductCard />', () => {
  afterAll(() => jest.resetAllMocks());

  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductCard product={mockedProduct} isFree={false} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('generates the correct slug for the url', () => {
    shallow(<ProductCard product={mockedProduct} isFree={false} />);
    expect(slugify).toHaveBeenCalledWith(
      mockedProduct.title,
      config.app.slugFormat,
    );
  });

  it('links to the correct page', () => {
    const wrapper = shallow(
      <ProductCard product={mockedProduct} isFree={false} />,
    );
    const link = wrapper.find('Link');
    expect(link.prop('href')).toEqual('/performance/[id]/[slug]');
    expect(link.prop('as')).toEqual('/performance/2/some_slug');
  });
});
