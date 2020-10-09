import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';
import SubmitButton from '../../components/SubmitButton';

const SignUpSuccess: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <div id="page-success">
      <main className="success-container">
        <img src={successIcon} alt="Success check icon" />
        <strong>Cadastro concluído</strong>
        <p>
          Agora você faz parte da plataforma Proffy.
          <br />
          Tenha uma ótima experiência.
        </p>

        <SubmitButton
          type="button"
          className="success-button"
          onClick={handleClick}
        >
          Fazer login
        </SubmitButton>
      </main>
    </div>
  );
};

export default SignUpSuccess;
