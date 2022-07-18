import { createContext, useState } from 'react';

export const NetworksContext = createContext();

export function NetworksProvider({ children }) {
  const [networks, setNetworks] = useState(null);

  return (
    // eslint-disable-next-line
    <NetworksContext.Provider value={{networks, setNetworks}}>
      {children}
    </NetworksContext.Provider>
  );
}
