import { Data } from './style';

export default function Note({ note }) {
  return (
    <Data>
      <h1>{note.title}</h1>
      <div>
        <h2>Nota</h2>

        {note.content}
      </div>
    </Data>
  );
}
