import { renderHook } from '@testing-library/react-hooks';

import useTotalAmount from 'hooks/useTotalAmount';

const dataTest = {
  cryptos: {
    BTC: { EUR: 8567 },
    ETH: { EUR: 200 },
    DASH: { EUR: 0.66 },
    BAT: { EUR: 2.57 },
    USDC: { EUR: 98 },
  },
  wallet: { BTC: 0.1005, ETH: 2.2349, DASH: 0.2527, BAT: 82.4851, USDC: 14.5099 },
};

test('it should return the total amount and percentage by crypto', () => {
  const { result } = renderHook(() => useTotalAmount(dataTest));
  expect(parseFloat(result.current.total)).toBe(2942.09);
  expect(result.current.percentage).toMatchSnapshot();
});
