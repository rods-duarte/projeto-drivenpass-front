import { ModalContainer, Content } from './style';

export default function Modal({ title, message, setOpenModal }) {
  return (
    <ModalContainer>
      <Content>
        <h1>{title}</h1>
        <p>{message}</p>
        <button type="button" onClick={() => setOpenModal(false)}>
          Ok
        </button>
      </Content>
    </ModalContainer>
  );
}
