import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

export const Content = styled.article`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  & > div:first-child {
    width: 100%;
    height: 41px;
    background-color: #005985;
    color: #fff;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }
`;

export const AddData = styled.button`
  width: 51px;
  height: 51px;
  background-color: #005985;
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
`;
