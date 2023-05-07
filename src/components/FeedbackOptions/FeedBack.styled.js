import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px; */
`;

export const Button = styled.button`
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  :hover,
  :focus {
    background-color: orange;
    color: white;
    transition: all 0.2s;
  }
`;
