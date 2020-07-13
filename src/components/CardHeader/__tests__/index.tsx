import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import useTab from 'hooks/useTab';
import CardHeader from 'components/CardHeader';

test(`render ${CardHeader.name} correctly`, async () => {
  const { result } = renderHook(() => useTab());
  const { asFragment, getByText } = render(
    <CardHeader tab={result.current.tab} onTabChange={result.current.onTabChange} />,
  );
  const fragment = asFragment();
  const node = getByText('List');
  const nodeGraph = getByText('Graph');

  expect(node.tagName).toBe('B');
  expect(nodeGraph.tagName).toBe('P');
  expect(fragment).toMatchSnapshot();
});
