import { Data } from './style';

export default function Credential({ credential }) {
  return (
    <Data>
      <h1>{credential.title}</h1>
      <div>
        <h2>URL</h2>

        {credential.url}
      </div>
      <div>
        <h2>Usuario</h2>

        {credential.username}
      </div>
      <div>
        <h2>Senha</h2>

        {credential.password}
      </div>
    </Data>
  );
}
