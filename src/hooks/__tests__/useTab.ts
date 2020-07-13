import { renderHook, act } from '@testing-library/react-hooks';

import useTab from 'hooks/useTab';

test('by default the current tab should be the list', () => {
  const { result } = renderHook(() => useTab());

  expect(result.current.tab).toBe('list');
});

test('tab swtichs to graph', () => {
  const { result } = renderHook(() => useTab());

  act(() => {
    result.current.onTabChange({ target: { id: 'graph' } });
  });

  expect(result.current.tab).toBe('graph');
});
