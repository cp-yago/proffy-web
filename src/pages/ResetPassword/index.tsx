import React, {
  useCallback, useState, FormEvent,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import {
  Container,
  ForgotPasswordContainer,
  Header,
  GobackIcon,
  Form,
  FormTitle,
  FormSubTitle,
  InputBorder,
  IntroContainer,
  Intro,
  LogoImg,
  IntroText,
} from './styles';

import CustomizedInput from '../../components/CustomizedInput';
import SubmitButton from '../../components/SubmitButton';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const history = useHistory();

  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const data = {
      password,
    };

    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required('E-mail obrigatório')
          .min(6),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('password/reset', data, {
        params: {
          token,
        },
      });

      history.push('/');
    } catch (err) {
      alert(err.message);
    }
  }, [password, history]);

  return (
    <Container>
      <ForgotPasswordContainer>
        <Header>
          <Link to="/">
            <GobackIcon src={backIcon} />
          </Link>
        </Header>

        <Form onSubmit={handleSubmit}>
          <FormTitle>
            Vamos resetar
            <br />
            sua senha!
          </FormTitle>
          <FormSubTitle>Insira sua nova senha abaixo.</FormSubTitle>
          <InputBorder>
            <CustomizedInput
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Nova senha"
            />
          </InputBorder>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </ForgotPasswordContainer>

      <IntroContainer>
        <Intro>
          <LogoImg src={logoImg} />
          <IntroText>
            Sua plataforma de
            {' '}
            <br />
            estudos online.
          </IntroText>
        </Intro>
      </IntroContainer>
    </Container>
  );
};

export default ForgotPassword;
