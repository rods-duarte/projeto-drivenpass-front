import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './style';
import { TokenContext } from '../../contexts/tokenContext';
import API from '../../config';

export default function Network({ network }) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  function deleteNetwork() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.delete(`${API}/networks/${network.id}`, config).then(() => {
      navigate('/home');
    });
  }

  return (
    <Data>
      <h1>{network.title}</h1>
      <div>
        <h2>Rede</h2>

        {network.name}
      </div>
      <div>
        <h2>Senha</h2>

        {network.password}
      </div>
      <button type="button" onClick={deleteNetwork}>
        X
      </button>
    </Data>
  );
}
