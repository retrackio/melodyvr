import fetch from 'isomorphic-fetch';
import { getReleases, getPerformance } from './apiClient';
import config from '../config';

jest.mock('isomorphic-fetch', () => jest.fn());
const mockedFetch = fetch as jest.Mock;

describe('API Client', () => {
  beforeEach(() => jest.clearAllMocks());

  describe('getReleases()', () => {
    it('uses the correct api endpoint', async () => {
      mockedFetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue({ result: { releases: [] } }),
      });
      await getReleases();
      expect(fetch).toHaveBeenCalledWith(
        `${config.services.apiBaseUrl}/products`,
      );
    });

    it('retuns the data sorted by "feature_order"', async () => {
      mockedFetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          result: {
            releases: [
              {
                feature_order: 2,
                is_free: false,
                product: { id: 2 },
              },
              {
                feature_order: 1,
                is_free: false,
                product: { id: 1 },
              },
            ],
          },
        }),
      });
      const releases = await getReleases();
      expect(releases[0].product.id).toEqual(1);
      expect(releases[1].product.id).toEqual(2);
    });
  });

  describe('getPerformance()', () => {
    it('uses the correct api endpoint', async () => {
      mockedFetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue({ result: [] }),
      });
      await getPerformance(1);
      expect(fetch).toHaveBeenCalledWith(
        `${config.services.apiBaseUrl}/products/1`,
      );
    });

    it('returns the correct data', async () => {
      mockedFetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue({ result: [{ some: 'data' }] }),
      });
      const performance = await getPerformance(1);
      expect(performance).toEqual([{ some: 'data' }]);
    });
  });
});
