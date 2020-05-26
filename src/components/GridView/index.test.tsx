import React from 'react';
import { shallow } from 'enzyme';
import GridView from './';

const mockedItems: React.ReactNode[] = [
  <div key="1">Item 1</div>,
  <div key="2">Item 2</div>,
];

describe('<GridView />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GridView items={mockedItems} />);
    expect(wrapper).toMatchSnapshot();
  });
});
