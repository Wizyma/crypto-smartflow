import React, { useMemo } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Card, Text, Divider } from '@zeit-ui/react';

import useTotalAmount from 'hooks/useTotalAmount';
import useGraphColor from 'hooks/useGraphColor';
import { CryptoRsponse } from 'types/dataContract';
import { CRYPTO_DICTIONNARY } from '../../constatns';

export default function Graph({
  cryptos,
  wallet,
}: {
  cryptos: CryptoRsponse;
  wallet: { [key: string]: number };
}) {
  const { total, percentage } = useTotalAmount({ cryptos, wallet });
  const pieData = useMemo(
    () =>
      percentage.map((item) => {
        const key = Object.keys(item)[0];

        return {
          name: CRYPTO_DICTIONNARY[key],
          value: parseFloat(item[key]),
        };
      }),
    [percentage],
  );
  const handleColor = useGraphColor();

  return (
    <>
      <Card.Content>
        <PieChart width={800} height={800}>
          <Pie
            isAnimationActive
            data={pieData}
            dataKey="value"
            fill="#8884d8"
            label={({ value }) => `${value} %`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={handleColor(entry.value)} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} %`} />
        </PieChart>
      </Card.Content>
      <Divider y={0} />
      <Card.Content>
        <Text style={{ color: '#ccc', textAlign: 'center', fontWeight: 700 }}>Total Amount = {total} €</Text>
      </Card.Content>
    </>
  );
}
