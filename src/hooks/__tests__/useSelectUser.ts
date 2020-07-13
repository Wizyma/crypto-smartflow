import { renderHook, act } from '@testing-library/react-hooks';

import useSelectUser from 'hooks/useSelectUser';

test('by default the current user should be undefined', () => {
  const { result } = renderHook(() => useSelectUser());

  expect(result.current.user).toBe(undefined);
});

test('should set a new user when onChange is called', () => {
  const { result } = renderHook(() => useSelectUser());

  act(() => {
    result.current.onUserChange(2);
  });

  expect(result.current.user).toBe(2);
});
