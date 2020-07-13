import { renderHook } from '@testing-library/react-hooks';

import useAmounts from 'hooks/useAmounts';

test('it should return the correct amounts', () => {
  const { result } = renderHook(() =>
    useAmounts({
      cryptos: {
        BTC: { EUR: 8567 },
        ETH: { EUR: 200 },
        DASH: { EUR: 0.66 },
        BAT: { EUR: 2.57 },
        USDC: { EUR: 98 },
      },
      wallet: { BTC: 0.1005, ETH: 2.2349, DASH: 0.2527, BAT: 82.4851, USDC: 14.5099 },
    }),
  );

  expect(result.current).toMatchObject({
    BTC: 860.9835,
    ETH: 446.98,
    DASH: 0.16678199999999999,
    BAT: 211.986707,
    USDC: 1421.9702,
  });
  expect(Object.keys(result.current).length).toBe(5);
});
