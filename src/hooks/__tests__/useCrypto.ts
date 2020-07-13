import { renderHook, cleanup } from '@testing-library/react-hooks';
import axios from 'axios';

import useCrypto from 'hooks/useCrypto';

jest.mock('axios');

beforeEach(() => {
  cleanup();
});

test('it should not trigger the request when disabled', () => {
  const { result } = renderHook(() =>
    useCrypto({ cryptos: ['BTC', 'ETH', 'DASH', 'BAT', 'USDC'], isEnabled: false }),
  );

  expect(result.current.isFetching).toBe(false);
});

test('it trigger the request correctly', async () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  axios.get.mockResolvedValueOnce({
    data: {
      BTC: { EUR: 8567 },
      ETH: { EUR: 200 },
      DASH: { EUR: 0.66 },
      BAT: { EUR: 2.57 },
      USDC: { EUR: 98 },
    },
  });

  const { result, waitForNextUpdate } = renderHook(() =>
    useCrypto({ cryptos: ['BTC', 'ETH', 'DASH', 'BAT', 'USDC'], isEnabled: true }),
  );

  expect(result.current.isFetching).toBe(true);
  await waitForNextUpdate();

  expect(result.current.data).toMatchObject({
    BTC: { EUR: 8567 },
    ETH: { EUR: 200 },
    DASH: { EUR: 0.66 },
    BAT: { EUR: 2.57 },
    USDC: { EUR: 98 },
  });
});

test('it should fail with when bad parameter', async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useCrypto({ cryptos: 'jest', isEnabled: true }),
  );
  await waitForNextUpdate();

  expect(result.current.isError).toBe(true);
});
