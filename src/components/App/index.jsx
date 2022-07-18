import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';
import { TokenProvider } from '../../contexts/tokenContext';

export default function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </TokenProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
