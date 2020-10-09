import React, { useCallback, useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';

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
  const { signIn } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      password,
      rememberMe,
    };

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'A senha deve ter no minimo 6 digitos'),
        rememberMe: Yup.boolean(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      });

      history.push('landing');
    } catch (err) {
      alert('Erro no login, tente novamente');
    }
  }, [email, history, password, rememberMe, signIn]);

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
          <SubmitButton onClick={handleSignIn}>Entrar</SubmitButton>
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
