import React from 'react';
import { shallow } from 'enzyme';
import ProductPrice from './';

describe('<ProductPrice />', () => {
  it('renders correctly when product is free', () => {
    const wrapper = shallow(<ProductPrice isFree={true} price={null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when product is not free and no price is available', () => {
    const wrapper = shallow(<ProductPrice isFree={false} price={null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when product is not free and a price is available', () => {
    const wrapper = shallow(<ProductPrice isFree={false} price="12.54" />);
    expect(wrapper).toMatchSnapshot();
  });
});
