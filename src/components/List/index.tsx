import { Row, Col, Text, Divider, Card, Image, Capacity } from '@zeit-ui/react';
import React from 'react';

import useTotalAmount from 'hooks/useTotalAmount';
import { ICON_URL, CRYPTO_DICTIONNARY } from '../../constatns';
import { CryptoRsponse } from 'types/dataContract';

export default function List({
  cryptos,
  wallet,
}: {
  cryptos: CryptoRsponse;
  wallet: { [key: string]: number };
}) {
  const { total, percentage } = useTotalAmount({ cryptos, wallet });

  return (
    <>
      {percentage.map((item) => {
        const key = Object.keys(item)[0];

        return (
          <React.Fragment key={key}>
            <Card.Content>
              <Row gap={0.8}>
                <Col span={6}>
                  <Image src={ICON_URL(key)} width={50} height={50} alt={key} />
                </Col>
                <Col>
                  <Text>{CRYPTO_DICTIONNARY[key]}</Text>
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginRight: 5,
                  }}
                >
                  <Capacity value={parseInt(item[key], 10)} />
                  <Text style={{ marginLeft: 15 }}>{item[key]} %</Text>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Text>
                    {wallet[key]} {key}
                  </Text>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Text style={{ color: '#ccc' }}>{(cryptos[key].EUR * wallet[key]).toFixed(2)} €</Text>
                </Col>
              </Row>
            </Card.Content>
            <Divider y={0} />
          </React.Fragment>
        );
      })}
      <Card.Content>
        <Text style={{ color: '#ccc', textAlign: 'center', fontWeight: 700 }}>Total Amount = {total} €</Text>
      </Card.Content>
    </>
  );
}
