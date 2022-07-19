import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from './style';
import { TokenContext } from '../../contexts/tokenContext';
import API from '../../config';

export default function Note({ note }) {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  function deleteNote() {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios.delete(`${API}/notes/${note.id}`, config).then(() => {
      navigate('/home');
    });
  }

  return (
    <Data>
      <h1>{note.title}</h1>
      <div>
        <h2>Nota</h2>

        {note.content}
      </div>
      <button type="button" onClick={deleteNote}>
        X
      </button>
    </Data>
  );
}
