import React from 'react';
import { shallow } from 'enzyme';
import { Release, getReleases } from '../lib/apiClient';
import IndexPage from './';

jest.mock('../lib/apiClient', () => ({
  getReleases: jest.fn().mockResolvedValue({ fake: 'releases' }),
}));

const mockedReleases: Release[] = [
  {
    feature_order: 4,
    is_free: false,
    product: {
      id: 2,
      title: 'Imagine Dragons',
      description: 'some description',
      image_hero_url: 'IMD_P0129_IMG_Hero.jpg',
      image_landscape_url: 'IMD_P0129_IMG_Landscape.jpg',
      accent_colour_code: 'F52459',
      background_colour_code: '1e1e1e',
      text_colour_code: 'ffffff',
      production_type_code: 'performance',
      price: '9.99',
    },
  },
  {
    feature_order: 2,
    is_free: false,
    product: {
      id: 8,
      title: 'Cypress Hill',
      description: 'description',
      image_hero_url: 'ee913e3692d48e04dfa972a03e8511c7_CYP_P0098_IMG_Hero.jpg',
      image_landscape_url: 'placeholder.jpg',
      accent_colour_code: '0081AD',
      background_colour_code: '003145',
      text_colour_code: 'ffffff',
      production_type_code: 'performance',
      price: null,
    },
  },
];

describe('<Index /> page', () => {
  it('renders in grid view by default', () => {
    const wrapper = shallow(<IndexPage releases={mockedReleases} />);
    const gridView = wrapper.find('GridView');
    expect(gridView.length).toEqual(1);
    expect(wrapper.find('CarouselView').length).toEqual(0);
    expect(gridView.prop<React.ReactNode[]>('items').length).toEqual(2);
  });

  it('renders a carousel when view mode is changed', () => {
    const wrapper = shallow(<IndexPage releases={mockedReleases} />);
    const changeViewModeFnc = wrapper.find('Wrapper').prop<any>('toolbar').props
      .onChange;
    changeViewModeFnc('carousel');
    expect(wrapper.find('GridView').length).toEqual(0);
    expect(wrapper.find('CarouselView').length).toEqual(1);
  });

  describe('getInitialProps', () => {
    it('returns the correct data', async () => {
      const data = await IndexPage.getInitialProps();
      expect(data).toEqual({ releases: { fake: 'releases' } });
      expect(getReleases).toHaveBeenCalledTimes(1);
    });
  });
});
