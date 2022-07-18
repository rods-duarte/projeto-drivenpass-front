import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
  }

  input {
    width: 250px;
    height: 40px;
    border: 3px solid #005985;
    border-radius: 5px;
    padding-left: 3px;
  }

  button {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-size: 18px;
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

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 113px;
  }

  span {
    color: #005985;
    font-family: Righteous, 'sans-serif';
    font-size: 36px;
  }
`;
