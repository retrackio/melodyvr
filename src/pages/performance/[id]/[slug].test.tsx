import React from 'react';
import { NextPageContext } from 'next';
import { shallow } from 'enzyme';
import PerformancePage from './[slug]';
import { getPerformance } from '../../../lib/apiClient';

jest.mock('../../../lib/apiClient', () => ({
  getPerformance: jest.fn().mockResolvedValue({ fake: 'performance' }),
}));

const mockedPerformance: any = {
  title: 'Some performance',
};

describe('<Performance /> page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <PerformancePage performance={mockedPerformance} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('getInitialProps', () => {
    it('returns the correct data', async () => {
      const mockContext = {
        query: {
          id: 99,
        },
      };
      const data = await PerformancePage.getInitialProps(
        (mockContext as any) as NextPageContext,
      );
      expect(data).toEqual({ performance: { fake: 'performance' } });
      expect(getPerformance).toHaveBeenCalledWith(99);
    });
  });
});
