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
  const [createNote, setCreateNote] = useState({});

  function handleSubmit(e) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API}/notes`, createNote, config)
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
            placeholder="Titulo"
            disabled={loading}
            value={createNote?.title}
            onChange={(e) => {
              setCreateNote({
                ...createNote,
                title: e.target.value,
              });
            }}
          />
        </label>
        <label htmlFor="content">
          Nota
          <textarea
            className={loading ? 'disabled' : ''}
            id="content"
            type="text"
            placeholder="lorem ipsum dolor..."
            disabled={loading}
            value={createNote?.content}
            onChange={(e) => {
              setCreateNote({
                ...createNote,
                content: e.target.value,
              });
            }}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading || !createNote}
        >
          <img src={confirmIcon} alt="confirm" />
        </button>
      </s.Form>
    </>
  );
}
