import React, {
  useCallback, useState, FormEvent, useEffect,
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

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email,
    };

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('password/recover', data);

      history.push('forgot-password-sent');
    } catch (err) {
      alert(err.message);
    }
  }, [email, history]);

  useEffect(() => {
    if (email) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

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
            Eita, esqueceu
            <br />
            sua senha?
          </FormTitle>
          <FormSubTitle>Não esquenta, vamos dar um jeito nisso.</FormSubTitle>
          <InputBorder>
            <CustomizedInput
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
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
