import { useState } from 'react';
import axios from 'axios';
// import { shade } from 'polished';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import logo from '../../../assets/images/Logo.svg';
import API from '../../../config';

export default function SignupPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API}/signup`, { email, password })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Erro enquanto tentava cadastrar !');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <s.Page>
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
          Criar
        </button>
      </form>
      <button
        className="return"
        type="button"
        disabled={loading}
        onClick={() => navigate('/')}
      >
        {`< Voltar`}
      </button>
    </s.Page>
  );
}
