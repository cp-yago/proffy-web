import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 100%;
`;

export const Header = styled.header`
  width: 40rem;
  margin-top: 2rem;
  margin-bottom: 24%;
`;

export const GobackIcon = styled.img``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;

export const FormTitle = styled.legend`
  color: black;
  font: 700 3.6rem Poppins;
  margin-bottom: 2rem;
`;

export const FormSubTitle = styled.span`
  color: var(-color-text-base);
  font: 400 1.6rem Poppins;
  line-height: 2.6rem;
  margin-bottom: 4rem;
`;

export const InputBorder = styled.div`
  div {
    label {
      top: 30%;
      font: 400 16px Poppins;
      line-height: 24px;
      color: var(--color-text-complement);
    }
  }

  div:first-child {
    margin-top: -16px;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
  background-image: url('../../assets/images/background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 65rem;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img``;

export const IntroText = styled.span`
  font-size: 2rem;
  text-align: start;
`;
