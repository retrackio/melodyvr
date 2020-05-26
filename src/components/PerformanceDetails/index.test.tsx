import React from 'react';
import { shallow } from 'enzyme';
import PerformanceDetails from './';
import { Performance } from '../../lib/apiClient';

const mockedPerformance: Performance = {
  id: 2,
  title: 'Imagine Dragons',
  description:
    '<i>Performance contains flashing or strobe lighting.</i>\n\nThe biggest rock band of 2018 perform their eagerly anticipated new album from Red Rocks Amphitheatre, Colorado. Expect ground-shaking tracks, huge vocals and even bigger confetti cannons…',
  image_hero_url:
    'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Hero.jpg',
  image_landscape_url:
    'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Landscape.jpg',
  accent_colour_code: 'F52459',
  background_colour_code: '1e1e1e',
  text_colour_code: 'ffffff',
  production_type_code: 'performance',
  price: '9.99',
  venue: {
    id: 1508,
    name: 'Red Rocks Amphitheatre',
    description: '',
    city: 'Colorado',
    country_code: 'US',
  },
  artist: {
    id: 2145,
    name: 'Imagine Dragons',
    description:
      'Imagine Dragons is an American rock band from Las Vegas, Nevada, consisting of lead vocalist Dan Reynolds, lead guitarist Wayne Sermon, bassist and keyboardist Ben McKee, and drummer Daniel Platzman.',
    country_code: 'US',
    website_url: 'https://www.imaginedragonsmusic.com/',
    facebook_url: 'https://www.facebook.com/ImagineDragons/',
    instagram_url: 'https://www.instagram.com/imaginedragons/?hl=en',
    twitter_url: 'https://twitter.com/Imaginedragons',
    image_url:
      'https://d17jafawxl91z1.cloudfront.net/58e8398bb1229b89fc9fa1c55f77e6bf_IMD_P0063_IMG_Square.jpg',
    artist_background_colour_code: '1E1E1E',
    artist_text_colour_code: 'FFFFFF',
    artist_accent_colour_code: 'BA8F65',
  },
  genre: {
    id: 680,
    name: 'Alternative',
    description: null,
  },
};

describe('<PerformanceDetails />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <PerformanceDetails performance={mockedPerformance} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
