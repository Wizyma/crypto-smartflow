import { useCallback, useState } from 'react';

/**
 * @function useTab
 * @summary get current tab and make it easy to switch
 *
 * @export
 * @returns {tab, onTabChange}
 */
export default function useTab() {
  const [tab, setTab] = useState('list');
  const onTabChange = useCallback(
    (e) => {
      setTab(e.target.id);
    },
    [setTab],
  );

  return {
    tab,
    onTabChange,
  };
}
