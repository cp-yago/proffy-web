import React, {
  ChangeEvent, FormEvent, useCallback, useState,
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container, Header, GobackIcon, SectionDivider, Avatar,
} from './styles';
import warningIcon from '../../assets/images/icons/warning.svg';
import backIcon from '../../assets/images/icons/back.svg';
import CustomizedInput from '../../components/CustomizedInput';
import SubmitButton from '../../components/SubmitButton';

const Profile: React.FC = () => {
  const { updateUser, user } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(() => (user.avatar_url ? user.avatar_url : 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg'));
  const [whatsapp, setWhatsapp] = useState(() => (user.whatsapp ? user.whatsapp : ''));
  const [bio, setBio] = useState(() => (user.bio ? user.bio : ''));

  const handleUpdateProfile = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    try {
      const data = {
        name,
        email,
        whatsapp,
        bio,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        whatsapp: Yup.string(),
        bio: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.put('/users', data);

      history.push('/');

      updateUser(response.data);
    } catch {
      alert('Erro ao atualizar perfil. Tente novamente!');
    }
  }, [bio, email, history, name, whatsapp, updateUser]);

  const handleUpdateAvatar = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        try {
          const response = await api.patch('/users/avatar', data);

          updateUser(response.data);
          setAvatar(response.data.avatar_url);
        } catch {
          alert('Erro ao atualizar avatar. Tente novamente!');
        }
      }
    },
    [updateUser],
  );

  return (
    <Container className="container">
      <Header>
        <Link to="/">
          <GobackIcon src={backIcon} />
        </Link>
        <p>Meu perfil</p>
      </Header>
      <div className="intro-container">
        <h1>
          Aqui você encontra
          <br />
          seus dados
        </h1>
        <span>
          Mantenha suas informações atualizadas
          <br />
          para que outros usuários possam contatá-lo.
        </span>
      </div>

      <form onSubmit={handleUpdateProfile}>
        <main>
          <h1>Seus dados</h1>
          <SectionDivider />
          <div className="user-data">
            <Avatar>
              <img src={avatar} alt={name} />
              <label htmlFor="avatar">
                <input type="file" id="avatar" onChange={handleUpdateAvatar} />
              </label>
            </Avatar>

            <div className="user-data-main">
              <CustomizedInput
                type="text"
                name="name"
                label="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomizedInput
                type="text"
                name="whatsapp"
                label="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />

              <CustomizedInput
                type="text"
                name="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="user-bio">
            <label className={bio ? 'filled' : ''} htmlFor="bio">Biografia</label>
            <textarea
              name="bio"
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </main>

        <footer>
          <div className="footer-alert">
            <img src={warningIcon} alt="warning" />
            <p>
              Importante!
              <span>
                Preencha todos os dados corretamente.
              </span>
            </p>
          </div>

          <SubmitButton type="submit">Salvar</SubmitButton>
        </footer>

      </form>
    </Container>
  );
};

export default Profile;
