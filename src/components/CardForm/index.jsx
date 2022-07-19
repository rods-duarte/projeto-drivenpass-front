import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../contexts/tokenContext';
import * as s from './style';
import API from '../../config';
import Modal from '../Modal';
import confirmIcon from '../../assets/images/confirm.svg';

export default function CardForm() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [createCard, setCreateCard] = useState({ virtual: false });

  function handleSubmit(e) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API}/cards`, createCard, config)
      .then(() => {
        setSuccessModal(true);
      })
      .catch((err) => {
        console.log(err);
        setFailModal(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  let modal;
  if (successModal) {
    const title = 'Muito Bem!';
    const message = 'Cadastro feito com sucesso!';
    modal = (
      <Modal
        title={title}
        message={message}
        setOpenModal={setSuccessModal}
        doFunction={() => navigate('/home')}
      />
    );
  }

  if (failModal) {
    const title = 'Ooooops!';
    const message = 'Insira os dados corretamente!';
    modal = (
      <Modal title={title} message={message} setOpenModal={setFailModal} />
    );
  }

  return (
    <>
      {modal}
      <s.Form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Titulo
          <input
            className={loading ? 'disabled' : ''}
            id="title"
            type="text"
            placeholder="cartao Mastercard"
            disabled={loading}
            value={createCard?.title}
            onChange={(e) => {
              setCreateCard({ ...createCard, title: e.target.value });
            }}
          />
        </label>
        <label htmlFor="cardNumber">
          Numero
          <input
            className={loading ? 'disabled' : ''}
            id="cardNumber"
            type="text"
            placeholder="0000-0000-0000-0000"
            disabled={loading}
            value={createCard?.number}
            onChange={(e) => {
              setCreateCard({ ...createCard, number: e.target.value });
            }}
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            className={loading ? 'disabled' : ''}
            id="name"
            type="text"
            placeholder="Fulano D Ciclano"
            disabled={loading}
            value={createCard?.cardHolderName}
            onChange={(e) => {
              setCreateCard({ ...createCard, cardHolderName: e.target.value });
            }}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className={loading ? 'disabled' : ''}
            id="password"
            type="text"
            placeholder="1234"
            disabled={loading}
            value={createCard?.password}
            onChange={(e) => {
              setCreateCard({ ...createCard, password: e.target.value });
            }}
          />
        </label>
        <label htmlFor="securityCode">
          CVV
          <input
            className={loading ? 'disabled' : ''}
            id="securityCode"
            type="text"
            placeholder="123"
            disabled={loading}
            value={createCard?.securityCode}
            onChange={(e) => {
              setCreateCard({ ...createCard, securityCode: e.target.value });
            }}
          />
        </label>
        <label htmlFor="expirationDate">
          Data de expiracao
          <input
            className={loading ? 'disabled' : ''}
            id="expirationDate"
            type="text"
            placeholder="MM/YY"
            disabled={loading}
            value={createCard?.expirationDate}
            onChange={(e) => {
              setCreateCard({ ...createCard, expirationDate: e.target.value });
            }}
          />
        </label>
        <label htmlFor="type">
          Tipo
          <input
            className={loading ? 'disabled' : ''}
            id="type"
            list="cardTypes"
            type="text"
            placeholder="Credito/Debito/Ambos"
            disabled={loading}
            value={createCard?.type}
            onChange={(e) => {
              setCreateCard({ ...createCard, type: e.target.value });
            }}
          />
          <datalist id="cardTypes">
            <option>Credit</option>
            <option>Debit</option>
            <option>Both</option>
          </datalist>
        </label>
        <label htmlFor="virtual">
          Virtual
          <input
            className={loading ? 'disabled' : ''}
            id="virtual"
            type="checkbox"
            disabled={loading}
            value={createCard?.virtual}
            onChange={(e) => {
              if (e.target.value === false)
                setCreateCard({ ...createCard, virtual: false });
              else setCreateCard({ ...createCard, virtual: true });
            }}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading || !createCard}
        >
          <img src={confirmIcon} alt="confirm" />
        </button>
      </s.Form>
    </>
  );
}
