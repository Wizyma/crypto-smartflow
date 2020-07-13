import { useCallback, useState } from 'react';

/**
 * @function useSelectUser
 * @summary get selected user to determine wich wallet to use
 *
 * @export useSelectUser
 * @returns {user, onUserChange}
 */
export default function useSelectUser() {
  const [user, setUser] = useState(undefined);
  const onUserChange = useCallback(
    (id) => {
      setUser(id);
    },
    [setUser],
  );

  return {
    user,
    onUserChange,
  };
}
