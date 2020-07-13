import { useCallback } from 'react';

import { COLORS } from '../constatns';

export default function useGraphColor() {
  const getColor = useCallback((value: number) => {
    if (value <= 20) {
      return COLORS.lowest;
    } else if (value > 20 && value <= 40) {
      return COLORS.mid;
    } else if (value > 40 && value <= 60) {
      return COLORS.high;
    }
    return COLORS.highest;
  }, []);

  return getColor;
}
