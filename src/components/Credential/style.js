import styled from 'styled-components';

export const Data = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-left: 20px;
  margin-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  h1 {
    font-family: Recurisve;
    font-weight: 400;
  }

  h1,
  h2 {
    font-size: 20px;
  }

  button {
    width: 51px;
    height: 51px;
    background-color: #f52424;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bolder;
  }
`;
