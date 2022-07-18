import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
    align-items: flex-end;
    column-gap: 10px;

    img {
      width: 40px;
    }
  }

  img {
    width: 45px;
  }

  h1 {
    font-family: Righteous, 'sans-serif';
    font-size: 36px;
    color: #005985;
  }
`;
