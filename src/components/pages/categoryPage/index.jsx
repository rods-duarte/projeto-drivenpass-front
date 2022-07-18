import { Link, useLocation } from 'react-router-dom';
import { Page, Content, AddData } from './style';
import Header from '../../Header/index';
// images
import credentialIcon from '../../../assets/images/credential.svg';
import cardIcon from '../../../assets/images/card.svg';
import noteIcon from '../../../assets/images/note.svg';
import networkIcon from '../../../assets/images/network.svg';

export default function CategoryPage({ title }) {
  const location = useLocation();
  const icons = {
    Credenciais: credentialIcon,
    'Notas Seguras': noteIcon,
    Cartoes: cardIcon,
    Redes: networkIcon,
  };

  console.log(title);
  console.log(icons[title]);

  const categoryList = location.state.data.map((credential) => (
    <li>
      <img src={icons[title]} alt="" />
      {credential.title}
    </li>
  ));

  const list = categoryList || 'Vazio :C';

  return (
    <Page>
      <Header />
      <Content>
        <div>{title}</div>
        <ul>{list}</ul>
      </Content>
      <AddData>+</AddData>
      <Link to="/home">{'< Voltar'}</Link>
    </Page>
  );
}
