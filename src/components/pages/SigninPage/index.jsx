import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import * as s from './style';
import logo from '../../../assets/images/Logo.svg';
import API from '../../../config';
import { TokenContext } from '../../../contexts/tokenContext';
import Modal from '../../Modal';

export default function SigninPage() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API}/signin`, { email, password })
      .then((response) => {
        setToken(response.data.token);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
        setOpenModal(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (token) {
    navigate('/home');
  }

  let modal;
  if (openModal) {
    const title = 'Login Invalido!';
    const message =
      'Confira o seu nome de usuário e senha para validar o seu acesso.';
    modal = (
      <Modal title={title} message={message} setOpenModal={setOpenModal} />
    );
  }

  return (
    <s.Page>
      {modal}
      <s.LogoContainer>
        <img src={logo} alt="LOGO" />
        <span>DrivenPass</span>
      </s.LogoContainer>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Usuario (e-mail)
          <input
            className={loading && 'disabled'}
            id="email"
            type="text"
            disabled={loading}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            className={loading && 'disabled'}
            id="password"
            type="password"
            disabled={loading}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button
          className="confirm"
          type="submit"
          disabled={loading || !email || password.length < 10}
        >
          Acessar
        </button>
      </form>
      <Link to="/signup">Primeiro acesso? Crie sua conta!</Link>
    </s.Page>
  );
}
