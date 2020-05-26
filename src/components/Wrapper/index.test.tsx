import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './';

describe('<Wrapper />', () => {
  it('is rendered correctly without a toolbar', () => {
    const wrapper = shallow(<Wrapper>some content</Wrapper>);
    expect(wrapper).toMatchSnapshot();
  });

  it('is rendered correctly with a toolbar', () => {
    const wrapper = shallow(
      <Wrapper toolbar={<div>I am the toolbar</div>}>some content</Wrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
