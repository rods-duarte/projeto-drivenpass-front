import { createContext } from 'react';
import { useLocalStorage } from '../hooks';

export const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [token, setToken] = useLocalStorage('token', undefined);

  return (
    // eslint-disable-next-line
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
