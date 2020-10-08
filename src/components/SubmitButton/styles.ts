import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 1.5rem;
  font: 600 1.6rem Archivo;
  height: 5.6rem;
  outline: 0;
  border: 0;
  border-radius: 0.8rem;
  transition: background-color 0.2s;

  &:enabled {
    background: var(--color-secundary);
    color: var(--color-button-text);
  }

  &:disabled {
    background: #DCDCE5;
  }

  &:hover {
    background: var(--color-secundary-dark);
  }
`;
