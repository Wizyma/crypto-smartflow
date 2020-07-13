import { Card, Divider, Grid, Select, Text, Loading, Row } from '@zeit-ui/react';
import React from 'react';

import { useEffect, useState } from 'react';
import CardHeader from 'components/CardHeader';
import Content from 'components/Content';
import fakeWallet from 'utils/fake-wallet';
import useCrypto from 'hooks/useCrypto';
import useSelectUser from 'hooks/useSelectUser';
import useTab from 'hooks/useTab';

export default function Main() {
  const { user, onUserChange } = useSelectUser();
  const { tab, onTabChange } = useTab();
  const [wallet, setWallet] = useState<{ [key: string]: number }>(undefined);
  const { data } = useCrypto({ cryptos: Object.keys(wallet ?? {}), isEnabled: Boolean(wallet) });

  useEffect(() => {
    if (user) {
      const current = fakeWallet.find((item) => item.id === parseInt(user, 10)).assets;
      setWallet(current);
    }
  }, [user]);

  return (
    <Grid.Container gap={2}>
      <Grid sm={24}>
        <Text>User</Text>
        <Select placeholder="Select a user" initialValue={user} onChange={onUserChange}>
          {fakeWallet.map(({ profile, id }) => (
            <Select.Option key={id} value={id.toString()}>
              {profile.name}
            </Select.Option>
          ))}
        </Select>
      </Grid>
      <Grid sm={24}>
        {user && (
          <Card shadow>
            <Card.Content>
              <CardHeader tab={tab} onTabChange={onTabChange} />
            </Card.Content>
            <Divider y={0} />
            {!data ? (
              <Row style={{ padding: '60px 0' }}>
                <Loading>Loading</Loading>
              </Row>
            ) : (
              <Content tab={tab} cryptos={data} wallet={wallet} />
            )}
          </Card>
        )}
      </Grid>
    </Grid.Container>
  );
}
