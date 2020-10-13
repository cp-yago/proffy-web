import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import signOutIcon from '../../assets/images/icons/sign-out.svg';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

import {
  Container,
  TopContent,
  Header,
  Avatar,
  Username,
  SignOutButton,
  SignOutIcon,
  MainContent,
  LogoContainer,
  LogoImg,
  Text,
  LandingImg,
  BottomContent,
  BottomContainer,
  BottomText,
  Welcome,
  WelcomeStrong,
  TotalConnections,
  HeartIcon,
  ButtonsContainer,
  StudyIcon,
  GiveClassesIcon,
  LinkStudy,
  LinkGiveClasses,
} from './styles';

const Landing: React.FC = () => {
  const { user, signOut } = useAuth();

  const [totalConnections, setTotalConnections] = useState(0);
  const [avatar] = useState(() => {
    if (user.avatar_url) {
      return user.avatar_url;
    }
    return 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg';
  });

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  useEffect(() => {
    const loadConnections = async () => {
      const response = await api.get('/connections');

      setTotalConnections(response.data);
    };

    loadConnections();
  }, []);

  return (
    <Container>
      <TopContent>
        <Header>
          <Link
            to="Profile"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >

            <Avatar src={avatar} />

            <Username>Meu perfil</Username>
          </Link>

          <SignOutButton onClick={handleSignOut}>
            <SignOutIcon src={signOutIcon} />
          </SignOutButton>
        </Header>

        <MainContent>
          <LogoContainer>
            <LogoImg src={logoImg} />
            <Text>Sua plataforma de estudos online.</Text>
          </LogoContainer>
          <LandingImg src={landingImg} />
        </MainContent>

      </TopContent>

      <BottomContent>
        <BottomContainer>
          <BottomText>
            <Welcome>
              Seja bem-vindo.
              {' '}
              <br />
              <WelcomeStrong>O que deseja fazer?</WelcomeStrong>
            </Welcome>
            <TotalConnections>
              Total de
              {' '}
              {totalConnections}
              {' '}
              conexões já realizadas
              <HeartIcon src={purpleHeartIcon} />
            </TotalConnections>
          </BottomText>

          <ButtonsContainer>
            <LinkStudy
              to="/study"
            >
              <StudyIcon src={studyIcon} />
              Estudar
            </LinkStudy>
            <LinkGiveClasses
              to="/give-classes"
            >
              <GiveClassesIcon src={giveClassesIcon} />
              Dar aulas
            </LinkGiveClasses>
          </ButtonsContainer>
        </BottomContainer>
      </BottomContent>

    </Container>
  );
};

export default Landing;
