import { createContext, useState } from 'react';

export const CardsContext = createContext();

export function CardsProvider({ children }) {
  const [cards, setCards] = useState(null);

  return (
    // eslint-disable-next-line
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}
