import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Page, Content, AddData } from './style';
// components
import Header from '../../Header';
import Credential from '../../Credential';
import Note from '../../Notes';
import Card from '../../Card';
import Network from '../../Network';
// images
import credentialIcon from '../../../assets/images/credential.svg';
import cardIcon from '../../../assets/images/card.svg';
import noteIcon from '../../../assets/images/note.svg';
import networkIcon from '../../../assets/images/network.svg';

export default function CategoryPage({ title }) {
  const location = useLocation();
  const [data, setData] = useState(null);

  const icons = {
    Credenciais: credentialIcon,
    'Notas Seguras': noteIcon,
    Cartoes: cardIcon,
    Redes: networkIcon,
  };

  const components = {
    Credenciais: <Credential credential={data} />,
    'Notas Seguras': <Note note={data} />,
    Cartoes: <Card card={data} />,
    Redes: <Network network={data} />,
  };

  const categoryList = location.state.data.map((credential) => (
    <li onClick={() => setData(credential)}>
      <img src={icons[title]} alt="" />
      {credential.title}
    </li>
  ));

  const list = categoryList || 'Vazio :C';

  if (data) {
    return (
      <Page>
        <Header />
        <div className="category">{title}</div>
        {components[title]}
        <button className="return" type="button" onClick={() => setData(null)}>
          {'< Voltar'}
        </button>
      </Page>
    );
  }

  return (
    <Page>
      <Header />
      <Content>
        <div className="category">{title}</div>
        <ul>{list}</ul>
      </Content>
      <AddData>+</AddData>
      <Link to="/home">{'< Voltar'}</Link>
    </Page>
  );
}
