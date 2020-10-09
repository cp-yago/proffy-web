import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import {
  Container,
  SignUpContainer,
  Header,
  GobackIcon,
  Form,
  FormTitle,
  FormSubTitle,
  InputBorder,
  IntroContainer,
  Intro,
  LogoImg,
  IntroTitle,
} from './styles';

import CustomizedInput from '../../components/CustomizedInput';
import SubmitButton from '../../components/SubmitButton';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = useCallback(async () => {
    const data = {
      name,
      email,
      password,
      confirm_password: confirmPassword,
    };

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email(),
        password: Yup.string()
          .required('Senha é obrigatória'),
        confirm_password: Yup.string().oneOf(
          [Yup.ref('password'), undefined],
          'Senhas não conferem',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users', data);

      history.push('signup-success');
    } catch (err) {
      alert(err.message);
    }
  }, [name, email, password, confirmPassword, history]);

  return (
    <Container>
      <SignUpContainer>
        <Header>
          <Link to="/">
            <GobackIcon src={backIcon} />
          </Link>
        </Header>

        <Form onSubmit={handleSignUp}>
          <FormTitle>Cadastro</FormTitle>
          <FormSubTitle>
            Preencha os dados abaixo
            {' '}
            <br />
            para começar.
          </FormSubTitle>
          <InputBorder>
            <CustomizedInput
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome"
            />
            <CustomizedInput
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
            />
            <CustomizedInput
              type="password"
              name="password"
              password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Senha"
            />
            <CustomizedInput
              type="password"
              name="confirm_password"
              password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirme sua senha"
            />
          </InputBorder>
          <SubmitButton type="submit">Concluir cadastro</SubmitButton>
        </Form>
      </SignUpContainer>

      <IntroContainer>
        <Intro>
          <LogoImg src={logoImg} />
          <IntroTitle>
            Sua plataforma de
            {' '}
            <br />
            estudos online.
          </IntroTitle>
        </Intro>
      </IntroContainer>
    </Container>
  );
};

export default SignUp;
