import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 15px 0 0;
  height: 6.5rem;
  width: 100%;
  border: 0.1rem solid var(--color-line-in-white);
  background: var(--color-box-footer);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  margin-left: 1rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1.6rem;
  margin-left: 1rem;

`;

export const EyeButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 2.5rem;

  padding: 3px;

  border: 0;
  outline: 0;
  background: transparent;
`;

export const EyeIcon = styled.img`
  margin-bottom: -1rem;
`;

export const ClosedEye = styled.div`
  width: 1.8rem;
  height: 0.2rem;
  background: var(--color-text-complement);
`;
