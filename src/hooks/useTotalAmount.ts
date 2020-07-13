import { useMemo } from 'react';

import useAmounts from 'hooks/useAmounts';
import { CryptoRsponse } from 'types/dataContract';

/**
 * @function useTotalAmount
 * @summary get total amount based on user wallet and crypto value
 *
 * @export useTotalAmount
 * @param {{
 *   cryptos: CryptoRsponse;
 *   wallet: { [key: string]: number };
 * }} {
 *   cryptos,
 *   wallet,
 * }
 * @returns {{ percentage: {[key: string]: number}, total: number }} Total amount
 */
export default function useTotalAmount({
  cryptos,
  wallet,
}: {
  cryptos: CryptoRsponse;
  wallet: { [key: string]: number };
}) {
  const amounts = useAmounts({ cryptos, wallet });
  const total = useMemo(() => Object.values(amounts).reduce((prev, next) => prev + next, 0), [amounts]);
  const percentage = useMemo(
    () =>
      Object.keys(amounts).map((key) => ({
        [key]: ((100 * amounts[key]) / total).toFixed(2),
      })),
    [amounts, total],
  );

  return {
    total: total.toFixed(2),
    percentage,
  };
}
