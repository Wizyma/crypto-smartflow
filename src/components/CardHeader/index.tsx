import { Row, Text } from '@zeit-ui/react';
import React from 'react';

export default function CardHeader({
  tab,
  onTabChange,
}: {
  tab?: string;
  onTabChange: (e: unknown) => void;
}) {
  console.log(tab);
  return (
    <Row justify="space-between" align="middle">
      <Text b>Your Wallet</Text>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Text
          style={{ margin: '1rem 5px', cursor: 'pointer' }}
          b={tab === 'list'}
          id="list"
          onClick={onTabChange}
        >
          List
        </Text>
        <Text
          style={{ margin: '1rem 5px', cursor: 'pointer' }}
          b={tab === 'graph'}
          id="graph"
          onClick={onTabChange}
        >
          Graph
        </Text>
      </div>
    </Row>
  );
}
