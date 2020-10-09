import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex: 1;

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
  font-size: 2.4rem;
  text-align: start;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 35rem;
  /* margin-top: auto; */

  animation-name: appearFromRight;
  animation-duration: 2s;
`;

export const Legend = styled.legend`
  color: black;
  font: 700 3.6rem Poppins;
  margin-bottom: 3rem;
`;

export const InputsContainer = styled.div`
  border-radius: 0.8rem;
`;

export const FormFooter = styled.div`
  margin: 1.0rem 0 ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Rememberme = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input``;

export const Footer = styled.div`
  width: 35rem;
  margin-top: 5rem;
  margin-bottom: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SignUpContainer = styled.div`
  font: 400 1.6rem Poppins;
`;

export const SignUpLabel = styled.p``;

export const Heart = styled.span`
  color: var(--color-text-complement);
`;

export const HeartImage = styled.img``;
