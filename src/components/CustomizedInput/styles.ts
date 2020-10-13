import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  background: var(--color-box-footer);
  border: 0.1rem solid var(--color-line-in-white);
  border-radius: 8px;

  .focused {
    opacity: 0;
    transition: 0s;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -2.5rem;
  left: 5%;
  display: block;
  transition: 0.2s;
  font-size: 14px;
  line-height: 24px;
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 5%;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-text-base);
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 12%;

  padding: 3px;

  border: 0;
  outline: 0;
  background: transparent;
`;

export const EyeIcon = styled.img`
  margin-bottom: -1rem;
`;
