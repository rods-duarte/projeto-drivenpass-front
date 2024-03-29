import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './style';
import { TokenContext } from '../../contexts/tokenContext';
import API from '../../config';

export default function Credential({ credential }) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  function deleteCredential() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.delete(`${API}/credentials/${credential.id}`, config).then(() => {
      navigate('/home');
    });
  }

  return (
    <Data>
      <h1>{credential.title}</h1>
      <div>
        <h2>URL</h2>

        {credential.url}
      </div>
      <div>
        <h2>Usuario</h2>

        {credential.username}
      </div>
      <div>
        <h2>Senha</h2>

        {credential.password}
      </div>
      <button type="button" onClick={deleteCredential}>
        X
      </button>
    </Data>
  );
}
