import { HeaderContainer } from './style';
import logo from '../../assets/images/Logo.svg';
import logout from '../../assets/images/exit.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logo" />
        <h1>DrivenPass</h1>
      </div>
      <img src={logout} alt="Logout" />
    </HeaderContainer>
  );
}
