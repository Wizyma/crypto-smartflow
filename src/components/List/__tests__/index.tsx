import { render } from '@testing-library/react';
import React from 'react';

import List from 'components/List';
import data from '../../../__fixtures__';

test('render List component correctly', () => {
  const { asFragment } = render(<List {...data} />);

  expect(asFragment()).toMatchSnapshot();
});
