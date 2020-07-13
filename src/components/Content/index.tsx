import React from 'react';

import List from 'components/List';
import Graph from 'components/Graph';

export default function Content({
  cryptos,
  wallet,
  tab,
}: {
  cryptos: { [key: string]: { EUR: number } };
  wallet: { [key: string]: number };
  tab: string;
}) {
  if (tab === 'list') {
    return <List cryptos={cryptos} wallet={wallet} />;
  }

  return <Graph cryptos={cryptos} wallet={wallet} />;
}
