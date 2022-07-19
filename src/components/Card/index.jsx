import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './style';
import { TokenContext } from '../../contexts/tokenContext';
import API from '../../config';

export default function Card({ card }) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  function deleteCard() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.delete(`${API}/cards/${card.id}`, config).then(() => {
      navigate('/home');
    });
  }

  return (
    <Data>
      <h1>{card.title}</h1>
      <div>
        <h2>Nome</h2>

        {card.cardHolderName}
      </div>
      <div>
        <h2>Numero</h2>

        {card.number}
      </div>
      <div>
        <h2>Senha</h2>

        {card.password}
      </div>
      <div>
        <h2>CVV</h2>

        {card.securityCode}
      </div>
      <div>
        <h2>Validade</h2>

        {card.expirationDate}
      </div>
      <div>
        <h2>Tipo</h2>

        {card.type}
      </div>
      <div>
        <h2>Virtual</h2>

        {card.virtual ? 'Sim' : 'Nao'}
      </div>
      <button type="button" onClick={deleteCard}>
        X
      </button>
    </Data>
  );
}
