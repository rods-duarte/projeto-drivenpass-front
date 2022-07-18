import { Data } from './style';

export default function Network({ network }) {
  return (
    <Data>
      <h1>{network.title}</h1>
      <div>
        <h2>Rede</h2>

        {network.name}
      </div>
      <div>
        <h2>Senha</h2>

        {network.password}
      </div>
    </Data>
  );
}
