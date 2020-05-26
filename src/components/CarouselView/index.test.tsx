import React from 'react';
import { shallow, mount } from 'enzyme';
import debounce from 'lodash.debounce';
import { act } from 'react-dom/test-utils';
import CarouselView, { RESIZE_DEBOUNCE_MS } from './';
import * as Styled from './style';

const items = [<div key="1">item 1</div>, <div key="2">item 2</div>];

jest.mock('lodash.debounce', () =>
  jest.fn().mockImplementation((fnc: Function) => () => fnc()),
);

describe('<CarouselView/>', () => {
  beforeEach(() => {
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: {
        get() {
          return 10;
        },
      },
    });
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CarouselView items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calculates and applies the correct width for the container and each item inside it', () => {
    const wrapper = mount(<CarouselView items={items} />);
    expect(wrapper.find(Styled.Row).prop('style').width).toEqual(20);
    wrapper
      .find(Styled.Item)
      .forEach((item) => expect(item.prop('style').width).toEqual(10));
  });

  describe('Resizing', () => {
    it('applies a new width once the window resizes', () => {
      const wrapper = mount(<CarouselView items={items} />);
      expect(wrapper.find(Styled.Row).prop('style').width).toEqual(20);
      Object.defineProperties(window.HTMLElement.prototype, {
        offsetWidth: {
          get() {
            return 50;
          },
        },
      });
      act(() => {
        ((global as unknown) as Window).dispatchEvent(new Event('resize'));
      });
      wrapper
        .update()
        .find(Styled.Item)
        .forEach((item) => expect(item.prop('style').width).toEqual(50));
      expect(wrapper.find(Styled.Row).prop('style').width).toEqual(100);
      expect(debounce).toHaveBeenCalledTimes(2);
    });

    it('adds the resize listener once mounted', () => {
      const originalAddEventListener = window.addEventListener;
      window.addEventListener = jest.fn();
      mount(<CarouselView items={items} />);
      expect(window.addEventListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function),
      );
      expect(debounce).toHaveBeenCalledWith(
        expect.any(Function),
        RESIZE_DEBOUNCE_MS,
      );
      window.addEventListener = originalAddEventListener;
    });

    it('removes the resize listener once the component unmounts', () => {
      const originalRemoveEventListener = window.removeEventListener;
      window.removeEventListener = jest.fn();
      const wrapper = mount(<CarouselView items={items} />);
      wrapper.unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith(
        'resize',
        expect.any(Function),
      );
      window.removeEventListener = originalRemoveEventListener;
    });
  });

  describe('Buttons', () => {
    it('moves the items correctly when "next" and "prev" are clicked', () => {
      const wrapper = mount(<CarouselView items={items} />);
      wrapper.find('button[name="next"]').simulate('click');
      expect(wrapper.find(Styled.Row).prop('style').transform).toEqual(
        'translateX(-10px)',
      );
      wrapper.find('button[name="prev"]').simulate('click');
      expect(wrapper.find(Styled.Row).prop('style').transform).toEqual(
        'translateX(0px)',
      );
    });

    it('disables the buttons correctly', () => {
      const wrapper = mount(<CarouselView items={items} />);
      const expectButtonDisabledStateToBe = (name: string, state: boolean) => {
        expect(wrapper.find(`button[name="${name}"]`).prop('disabled')).toEqual(
          state,
        );
      };
      expectButtonDisabledStateToBe('next', false);
      expectButtonDisabledStateToBe('prev', true);
      wrapper.find('button[name="next"]').simulate('click');
      expectButtonDisabledStateToBe('next', true);
      expectButtonDisabledStateToBe('prev', false);
    });
  });
});
