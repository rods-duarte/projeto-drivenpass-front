import styled from 'styled-components';

export const CategoriesContainer = styled.ul`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 30px;

  li {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 40px;
    }

    div:first-child {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }

    div:last-child {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #005985;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
`;
