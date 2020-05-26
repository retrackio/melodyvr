import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './';

describe('<ToggleButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ToggleButton<string>
        id="test1"
        value="a"
        leftLabel="A"
        leftValue="a"
        rightLabel="B"
        rightValue="b"
        onChange={jest.fn()}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the onChange callback with the correct value', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <ToggleButton<string>
        id="test1"
        value="a"
        leftLabel="A"
        leftValue="a"
        rightLabel="B"
        rightValue="b"
        onChange={onChange}
      />,
    );
    const checkbox = wrapper.find('[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    expect(onChange).toHaveBeenCalledWith('b');
    checkbox.simulate('change', { target: { checked: false } });
    expect(onChange).toHaveBeenCalledWith('a');
  });
});
