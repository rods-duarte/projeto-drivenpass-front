import { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks';

export const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useLocalStorage('token', undefined);
  const value = useMemo(() => ({ token, setToken }), []);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}
