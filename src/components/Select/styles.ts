import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  background: var(--color-box-footer);
  border: 0.1rem solid var(--color-line-in-white);
  border-radius: 8px;

  label {
    position: absolute;
    top: -2.5rem;
    left: 5%;
    display: block;
    transition: 0.2s;
    font-size: 14px;
    line-height: 24px;
  }

  select {
    width: 95%;
    height: 100%;
    padding: 5%;
    border: none;
    outline: none;
    background: transparent;
    padding-top: auto;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-text-base);

    &:focus {
        outline: none;
    }
  }
`;
