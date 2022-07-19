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
  const [createCredential, setCreateCredential] = useState({});

  function handleSubmit(e) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API}/credentials`, createCredential, config)
      .then(() => {
        setSuccessModal(true);
        navigate('/home');
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
      <Modal title={title} message={message} setOpenModal={setSuccessModal} />
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
            placeholder="site X"
            disabled={loading}
            value={createCredential?.title}
            onChange={(e) => {
              setCreateCredential({
                ...createCredential,
                title: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="url">
          Website
          <input
            className={loading ? 'disabled' : ''}
            id="url"
            type="text"
            placeholder="https://site.com"
            disabled={loading}
            value={createCredential?.title}
            onChange={(e) => {
              setCreateCredential({
                ...createCredential,
                url: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            className={loading ? 'disabled' : ''}
            id="username"
            type="text"
            placeholder="username"
            disabled={loading}
            value={createCredential?.username}
            onChange={(e) => {
              setCreateCredential({
                ...createCredential,
                username: e.target.value,
              });
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
            value={createCredential?.password}
            onChange={(e) => {
              setCreateCredential({
                ...createCredential,
                password: e.target.value,
              });
            }}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading || !createCredential}
        >
          <img src={confirmIcon} alt="confirm" />
        </button>
      </s.Form>
    </>
  );
}
