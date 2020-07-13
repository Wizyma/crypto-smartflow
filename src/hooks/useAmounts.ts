import { useMemo } from 'react';

import { CryptoRsponse } from 'types/dataContract';

/**
 * @function useAmounts
 * @summary get total amount based on user wallet and crypto value
 *
 * @export useAmounts
 * @param {{
 *   cryptos: CryptoRsponse;
 *   wallet: { [key: string]: number };
 * }} {
 *   cryptos,
 *   wallet,
 * }
 * @returns {{[key: string]: number}} Total amount
 */
export default function useAmounts({
  cryptos,
  wallet,
}: {
  cryptos: CryptoRsponse;
  wallet: { [key: string]: number };
}) {
  return useMemo(() => {
    return Object.keys(wallet)
      .map((key) => ({
        [key]: wallet[key] * cryptos[key].EUR,
      }))
      .reduce(
        (prev, next) => ({
          ...prev,
          ...next,
        }),
        {},
      );
  }, [cryptos, wallet]);
}
