import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../../assets/styles/global';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';
import HomePage from '../pages/HomePage';
import { TokenProvider } from '../../contexts/tokenContext';
import { CredentialsProvider } from '../../contexts/credentialsContext';
import { CardsProvider } from '../../contexts/cardsContext';
import { NotesProvider } from '../../contexts/notesContext';
import { NetworksProvider } from '../../contexts/networksContext';

export default function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <CredentialsProvider>
          <CardsProvider>
            <NotesProvider>
              <NetworksProvider>
                <Routes>
                  <Route path="/" element={<SigninPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/home" element={<HomePage />} />
                </Routes>
              </NetworksProvider>
            </NotesProvider>
          </CardsProvider>
        </CredentialsProvider>
      </TokenProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
