import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { credentials } = useContext(CredentialsContext);
  const { cards } = useContext(CardsContext);
  const { notes } = useContext(NotesContext);
  const { networks } = useContext(NetworksContext);

  return (
    <CategoriesContainer>
      <li
        onClick={() =>
          navigate('/credentials', { state: { data: credentials } })
        }
      >
        <div>
          <img src={credentialIcon} alt="credentials" />
          <span>Credenciais</span>
        </div>
        <div>{credentials?.length || 0}</div>
      </li>
      <li onClick={() => navigate('/notes', { state: { data: notes } })}>
        <div>
          <img src={noteIcon} alt="notes" />
          <span>Notas Seguras</span>
        </div>
        <div>{cards?.length || 0}</div>
      </li>
      <li onClick={() => navigate('/cards', { state: { data: cards } })}>
        <div>
          <img src={cardIcon} alt="cards" />
          <span>Cartoes</span>
        </div>
        <div>{notes?.length || 0}</div>
      </li>
      <li onClick={() => navigate('/networks', { state: { data: networks } })}>
        <div>
          <img src={networkIcon} alt="networks" />
          <span>Senhas de Wi-Fi</span>
        </div>
        <div>{networks?.length || 0}</div>
      </li>
    </CategoriesContainer>
  );
}
