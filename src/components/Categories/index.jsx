import { useContext } from 'react';
import { CategoriesContainer } from './style';
// contexts
import { CredentialsContext } from '../../contexts/credentialsContext';
import { CardsContext } from '../../contexts/cardsContext';
import { NotesContext } from '../../contexts/notesContext';
import { NetworksContext } from '../../contexts/networksContext';

// images
import credentialIcon from '../../assets/images/credential.svg';
import cardIcon from '../../assets/images/card.svg';
import noteIcon from '../../assets/images/note.svg';
import networkIcon from '../../assets/images/network.svg';

export default function Categories() {
  const { credentials } = useContext(CredentialsContext);
  const { cards } = useContext(CardsContext);
  const { notes } = useContext(NotesContext);
  const { networks } = useContext(NetworksContext);

  return (
    <CategoriesContainer>
      <li>
        <div>
          <img src={credentialIcon} alt="credentials" />
          <span>Credenciais</span>
        </div>
        <div>{credentials?.data.length || 0}</div>
      </li>
      <li>
        <div>
          <img src={noteIcon} alt="notes" />
          <span>Notas Seguras</span>
        </div>
        <div>{cards?.data.length || 0}</div>
      </li>
      <li>
        <div>
          <img src={cardIcon} alt="cards" />
          <span>Cartoes</span>
        </div>
        <div>{notes?.data.length || 0}</div>
      </li>
      <li>
        <div>
          <img src={networkIcon} alt="networks" />
          <span>Senhas de Wi-Fi</span>
        </div>
        <div>{networks?.data.length || 0}</div>
      </li>
    </CategoriesContainer>
  );
}
