import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const TopContent = styled.div`
  max-width: none;
  width: 100%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 120rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 3rem 3rem 2rem;
`;

export const Avatar = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
`;

export const Username = styled.span`
  font: 500 1.4rem Poppins;
  color: var(--color-text-in-primary);
  margin-left: 2rem;
`;

export const SignOutButton = styled.button`
  height: 4rem;
  width: 4rem;
  border-radius: 1rem;
  border: 0;

  background: var(--color-primary-dark);
  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-primary-light);
  }
`;

export const SignOutIcon = styled.img``;

export const MainContent = styled.div`
  width: 120rem;
  height: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  align-self: center;
  margin: 0;
  text-align: left;
`;

export const LogoImg = styled.img``;

export const Text = styled.h2`
  width: 60%;
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
  text-align: initial;
`;

export const LandingImg = styled.img`
  width: 60rem;
  height: 35rem;
`;

export const BottomContent = styled.div`
  margin-top: auto;
  width: 100%;
  height: 30vh;
  background: var(--color-background);
  display: flex;
  justify-content: center;
`;

export const BottomContainer = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BottomText = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  width: 40%;
`;

export const Welcome = styled.p`
  font: 400 2rem Poppins;
  color: var(--color-text-base);
`;

export const WelcomeStrong = styled.strong``;

export const TotalConnections = styled.span`
  font-size: 1.2rem;
  color: var(--color-text-complement);

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:  auto;
`;

export const HeartIcon = styled.img`
  margin-left: 0.8rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
`;

export const StudyIcon = styled.img`
  margin-right: 2.4rem;
`;

export const GiveClassesIcon = styled.img`
  margin-right: 2.4rem;
`;

export const LinkStudy = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;
  background: var(--color-primary-lighter);
  margin-right: 1.6rem;

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const LinkGiveClasses = styled(Link)`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  font: 700 2.0rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;
  margin-right: 1.6rem;
  background: var(--color-secundary);

  &:hover {
    background: var(--color-secundary-dark);
  }
`;
