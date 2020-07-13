import { render } from '@testing-library/react';
import React from 'react';

import Graph from 'components/Graph';
import data from '../../../__fixtures__';

test('render Graph component correctly', () => {
  const { asFragment } = render(<Graph {...data} />);

  expect(asFragment()).toMatchSnapshot();
});
