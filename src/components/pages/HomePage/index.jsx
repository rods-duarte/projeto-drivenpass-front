import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Page, Content } from './style';
import Header from '../../Header/index';
import Categories from '../../Categories';
import API from '../../../config';
import { TokenContext } from '../../../contexts/tokenContext';
import { CredentialsContext } from '../../../contexts/credentialsContext';
import { CardsContext } from '../../../contexts/cardsContext';
import { NotesContext } from '../../../contexts/notesContext';
import { NetworksContext } from '../../../contexts/networksContext';

export default function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { token } = useContext(TokenContext);
  const { setCredentials } = useContext(CredentialsContext);
  const { setCards } = useContext(CardsContext);
  const { setNotes } = useContext(NotesContext);
  const { setNetworks } = useContext(NetworksContext);

  const getData = useCallback(() => {
    setLoading(true);
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const credentialsPromise = axios.get(`${API}/credentials`, config);
    const cardsPromise = axios.get(`${API}/cards`, config);
    const notesPromise = axios.get(`${API}/notes`, config);
    const networksPromise = axios.get(`${API}/networks`, config);
    Promise.all([
      credentialsPromise,
      cardsPromise,
      notesPromise,
      networksPromise,
    ])
      .then((values) => {
        setCredentials(values[0].data.data);
        setCards(values[1].data.data);
        setNotes(values[2].data.data);
        setNetworks(values[3].data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    getData();
  }, []);

  return (
    <Page>
      <Header />
      <Content>
        <div>Minhas Senhas</div>
        <Categories loading={loading} />
      </Content>
    </Page>
  );
}
