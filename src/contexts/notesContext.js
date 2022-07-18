import { createContext, useState } from 'react';

export const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(null);

  return (
    // eslint-disable-next-line
    <NotesContext.Provider value={{notes, setNotes}}>{children}</NotesContext.Provider>
  );
}
