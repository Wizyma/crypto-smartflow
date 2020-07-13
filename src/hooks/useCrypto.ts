import { QueryResult, useQuery } from 'react-query';

import Fetcher from 'fetcher';
import { CRYPTO_QUERY_KEY } from '../constatns';
import { CryptoRsponse } from 'types/dataContract';

async function fetchCrypto(_, cryptos: string[]) {
  const instance = Fetcher.getInstance();
  if (!Array.isArray(cryptos) || cryptos.length < 1) {
    throw new Error('Crypto array must contains at list one item');
  }

  const { data } = await instance.getAsync<CryptoRsponse>({
    path: '/data/pricemulti',
    params: `fsyms=${cryptos.join(',')}&tsyms=EUR`,
  });

  return data;
}

/**
 * @function useCrypto
 * @summary async hooks to retrieve cryptocurrency value
 *
 * @export useCrypto
 * @param {{ cryptos: string[]; isEnabled: boolean }} { cryptos, isEnabled }
 * @returns {QueryResult<CryptoRsponse>}
 */
export default function useCrypto({
  cryptos,
  isEnabled,
}: {
  cryptos: string[];
  isEnabled: boolean;
}): QueryResult<CryptoRsponse> {
  const queryResponse: QueryResult<CryptoRsponse> = useQuery<CryptoRsponse, [string, string[]]>(
    [CRYPTO_QUERY_KEY, cryptos],
    fetchCrypto,
    {
      enabled: isEnabled,
      refetchInterval: 10000,
      retry: false,
    },
  );

  return queryResponse;
}
