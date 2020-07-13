import { renderHook } from '@testing-library/react-hooks';

import useGraphColor from 'hooks/useGraphColor';
import { COLORS } from '../../constatns';

test('it should give the right color based on the value', () => {
  const { result } = renderHook(() => useGraphColor());

  const getColor = result.current;
  const base = 18;
  const keys = Object.keys(COLORS);
  const map = keys.map((_, index) => base * (index + 1));

  map.forEach((item, index) => {
    expect(getColor(item)).toBe(COLORS[keys[index]]);
  });
});
