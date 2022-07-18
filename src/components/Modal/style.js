import styled from 'styled-components';

export const ModalContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  width: 338px;
  height: 250px;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1,
  p {
    text-align: center;
    font-size: 18px;
  }

  h1 {
    font-weight: 700;
  }

  button {
    width: 250px;
    height: 40px;
    background-color: #9bfbb0;
    border: 3px solid #9bfbb0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;
