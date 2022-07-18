import { createContext, useState } from 'react';

export const CredentialsContext = createContext();

export function CredentialsProvider({ children }) {
  const [credentials, setCredentials] = useState(null);

  return (
    // eslint-disable-next-line
    <CredentialsContext.Provider value={{ credentials, setCredentials }}> 
      {children}
    </CredentialsContext.Provider>
  );
}
