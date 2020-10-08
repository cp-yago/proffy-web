import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  IntroContainer,
  Intro,
  LogoImg,
  IntroText,
  LoginContainer,
  Form,
  Legend,
  InputsContainer,
  FormFooter,
  Rememberme,
  Checkbox,
  Footer,
  SignUpContainer,
  SignUpLabel,
  Heart,
  HeartImage,
} from './styles';

import CustomizedInput from '../../components/CustomizedInput';
import SubmitButton from '../../components/SubmitButton';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Container>
      <IntroContainer>
        <Intro>
          <LogoImg src={logoImg} />
          <IntroText>Sua plataforma de estudos online</IntroText>
        </Intro>
      </IntroContainer>

      <LoginContainer>
        <Form>
          <Legend>Fazer Login</Legend>
          <InputsContainer>
            <CustomizedInput
              type="text"
              name="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomizedInput
              type="password"
              name="password"
              password
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputsContainer>
          <FormFooter>
            <Rememberme>
              <Checkbox
                type="checkbox"
                name="rememberme"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Lembrar-me
            </Rememberme>
            <Link to="forgot-password">Esqueci minha senha</Link>
          </FormFooter>
          <SubmitButton>Entrar</SubmitButton>
        </Form>

        <Footer>
          <SignUpContainer>
            <SignUpLabel>Não tem conta?</SignUpLabel>
            <Link to="signup">Cadastre-se</Link>
          </SignUpContainer>
          <Heart>
            É de graça
            <HeartImage src={purpleHeartIcon} />
          </Heart>
        </Footer>
      </LoginContainer>
    </Container>
  );
};

export default SignIn;
