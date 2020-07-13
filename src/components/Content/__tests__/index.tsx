import { render } from '@testing-library/react';
import React from 'react';

import Content from 'components/Content';
import data from '../../../__fixtures__';

describe(`it should render every variant of ${Content.name}`, () => {
  it('render list component correctly', () => {
    const { asFragment } = render(<Content {...data} tab="list" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('render the graph correctly', () => {
    const { asFragment } = render(<Content {...data} tab="graph" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
