import styled from 'styled-components';

export const Form = styled.form`
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }

  input,
  textarea {
    width: 250px;
    height: 40px;
    border: 3px solid #005985;
    border-radius: 5px;
    padding-left: 3px;
  }

  textarea {
    height: 150px;
  }

  button {
    width: 51px;
    height: 51px;
    background-color: #0000;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    font-size: 40px;
  }

  .confirm {
    background-color: #9bfbb0;
    border: 3px solid #9bfbb0;
  }

  .return {
    margin-top: 20px;
    background-color: #fb9b9b;
    border: 3px solid #fb9b9b;
  }

  .disabled {
    opacity: 0.3;
  }

  .teste {
    background-color: #666;
  }
`;
