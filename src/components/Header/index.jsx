import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './style';
import logo from '../../assets/images/Logo.svg';
import logout from '../../assets/images/exit.svg';
import { TokenContext } from '../../contexts/tokenContext';

export default function Header() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logo" />
        <h1>DrivenPass</h1>
      </div>
      <img
        src={logout}
        alt="Logout"
        onClick={() => {
          setToken(null);
        }}
      />
    </HeaderContainer>
  );
}
