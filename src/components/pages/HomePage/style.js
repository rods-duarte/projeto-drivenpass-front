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
  margin-top: 20px;
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
