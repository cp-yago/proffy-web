import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container, Header, GobackIcon, SectionDivider,
} from './styles';
import warningIcon from '../../assets/images/icons/warning.svg';
import backIcon from '../../assets/images/icons/back.svg';
import CustomizedInput from '../../components/CustomizedInput';
import SubmitButton from '../../components/SubmitButton';
import Select from '../../components/Select';

interface ScheduleItem {
  id: number;
  week_day: string;
  from: string;
  to: string;
}

const CreateClass: React.FC = () => {
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);

  const [subject, setSubject] = useState<string>('');
  const [cost, setCost] = useState<string>('');

  const addNewScheduleItem = useCallback(() => {
    if (scheduleItems.length > 0) {
      const id = scheduleItems.length;

      setScheduleItems([
        ...scheduleItems,
        {
          id, week_day: '', from: '', to: '',
        },
      ]);
    } else {
      setScheduleItems([{
        id: 0, week_day: '', from: '', to: '',
      }]);
    }
  }, [scheduleItems]);

  const removeScheduleItem = useCallback(
    (id: number) => {
      if (scheduleItems) {
        const newScheduleItems = scheduleItems.filter(
          (scheduleItem) => scheduleItem.id !== id,
        );
        setScheduleItems(newScheduleItems);
      }
    },
    [scheduleItems],
  );

  const setScheduleItemValue = useCallback(
    (id: number, field: string, value: string) => {
      const updateScheduleItems = scheduleItems.map((scheduleItem) => {
        if (scheduleItem.id === id) {
          return { ...scheduleItem, [field]: value };
        }
        return scheduleItem;
      });
      setScheduleItems(updateScheduleItems);
    },
    [scheduleItems],
  );

  const handleCreateClass = useCallback(async (): Promise<void> => {
    const parsedScheduleItem = scheduleItems.map((scheduleItem) => {
      const { week_day, from, to } = scheduleItem;

      return { week_day: Number(week_day), from, to };
    });

    const checkIfIsNotSelected = parsedScheduleItem.find(
      (scheduleItem) => (!scheduleItem.week_day || !scheduleItem.from || !scheduleItem.to),
    );

    if (checkIfIsNotSelected || !subject || !cost) {
      alert(
        'Atenção! Você deve selecionar um valor',
      );
      return;
    }

    const checkIfStartIsBeforeFinish = parsedScheduleItem.find(
      (scheduleItem) => Number(scheduleItem.from.slice(0, 2))
        >= Number(scheduleItem.to.slice(0, 2)),
    );

    if (checkIfStartIsBeforeFinish) {
      alert(
        'Atenção! Sua aula deve acabar em um horário posterior ao que começa.',
      );
      return;
    }

    try {
      const response = await api.post('/classes', {
        subject,
        cost: Number(cost),
      });

      const class_id = response.data.id;

      if (!class_id) {
        alert('Erro ao cadastrar aula. Tente novamente!');
        return;
      }

      if (parsedScheduleItem.length === 0) {
        history.push('give-classes');
        return;
      }

      await api.post(`/classes/${class_id}/class_schedules`, {
        classSchedules: parsedScheduleItem,
      });

      history.push('give-classes');
    } catch (err) {
      alert('Erro ao cadastrar aula. Tente novamente!');
    }
  }, [cost, scheduleItems, subject, history]);

  return (
    <Container className="container">
      <Header>
        <Link to="/give-classes">
          <GobackIcon src={backIcon} />
        </Link>
        <p>Criar aula</p>
      </Header>

      <div className="intro-container">
        <h1>
          Que incrível
          <br />
          que você quer dar aulas!
        </h1>
        <span>
          O primeiro passo é preencher o formulário abaixo
          <br />
          e manter seu
          perfil sempre atualizado.
        </span>
      </div>

      <form onSubmit={handleCreateClass}>
        <main>
          <h1>Sobre a aula</h1>

          <SectionDivider />

          <div className="class-data">
            <Select
              label="Matéria"
              name="subject"
              id="subject"
              onChange={(item) => setSubject(item.target.value)}
              options={[{ label: 'Artes', value: 'Artes' },
                { label: 'Biologia', value: 'Biologia' },
                { label: 'Matemática', value: 'Matemática' },
                { label: 'Inglês', value: 'Inglês' },
                { label: 'Geografia', value: 'Geografia' },
                { label: 'História', value: 'História' },
                { label: 'Português', value: 'Português' },
                { label: 'Química', value: 'Química' },
                { label: 'Física', value: 'Física' },
              ]}
            />

            <CustomizedInput
              type="number"
              min="1"
              max="999"
              name="cost"
              placeholder="Digite o valor"
              label="Valor da hora/aula"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>

          <div className="class-schedule">
            <header>
              <h1>Horários disponíveis</h1>
              <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
            </header>

            <SectionDivider />

            <div className="class-schedule-content">
              {scheduleItems.length > 0
                ? scheduleItems.map((scheduleItem) => (
                  <div className="class-schedule-item" key={scheduleItem.id}>
                    <div className="info">
                      <Select
                        className="day"
                        label="Dia da semana"
                        name="week_day"
                        onChange={(item) => setScheduleItemValue(
                          scheduleItem.id,
                          'week_day',
                          item.target.value,
                        )}
                        options={[
                          { label: '1', value: 'Segunda' },
                          { label: '2', value: 'Terça' },
                          { label: '3', value: 'Quarta' },
                          { label: '4', value: 'Quinta' },
                          { label: '5', value: 'Sexta' },
                        ]}
                      />

                      <Select
                        className="hour"
                        label="Das"
                        name="from"
                        onChange={(item) => setScheduleItemValue(
                          scheduleItem.id,
                          'from',
                          item.target.value,
                        )}
                        options={[
                          { label: '00:00', value: '00:00' },
                          { label: '01:00', value: '01:00' },
                          { label: '02:00', value: '02:00' },
                          { label: '03:00', value: '03:00' },
                          { label: '05:00', value: '05:00' },
                          { label: '06:00', value: '06:00' },
                          { label: '07:00', value: '07:00' },
                          { label: '08:00', value: '08:00' },
                          { label: '09:00', value: '09:00' },
                          { label: '10:00', value: '10:00' },
                          { label: '11:00', value: '11:00' },
                          { label: '12:00', value: '12:00' },
                          { label: '13:00', value: '13:00' },
                          { label: '14:00', value: '14:00' },
                          { label: '15:00', value: '15:00' },
                          { label: '16:00', value: '16:00' },
                          { label: '17:00', value: '17:00' },
                          { label: '18:00', value: '18:00' },
                          { label: '19:00', value: '19:00' },
                          { label: '20:00', value: '20:00' },
                          { label: '21:00', value: '21:00' },
                          { label: '22:00', value: '22:00' },
                          { label: '23:00', value: '23:00' },
                        ]}
                      />

                      <Select
                        className="hour"
                        label="Até"
                        name="to"
                        onChange={(item) => setScheduleItemValue(
                          scheduleItem.id,
                          'to',
                          item.target.value,
                        )}
                        options={[
                          { label: '00:00', value: '00:00' },
                          { label: '01:00', value: '01:00' },
                          { label: '02:00', value: '02:00' },
                          { label: '03:00', value: '03:00' },
                          { label: '05:00', value: '05:00' },
                          { label: '06:00', value: '06:00' },
                          { label: '07:00', value: '07:00' },
                          { label: '08:00', value: '08:00' },
                          { label: '09:00', value: '09:00' },
                          { label: '10:00', value: '10:00' },
                          { label: '11:00', value: '11:00' },
                          { label: '12:00', value: '12:00' },
                          { label: '13:00', value: '13:00' },
                          { label: '14:00', value: '14:00' },
                          { label: '15:00', value: '15:00' },
                          { label: '16:00', value: '16:00' },
                          { label: '17:00', value: '17:00' },
                          { label: '18:00', value: '18:00' },
                          { label: '19:00', value: '19:00' },
                          { label: '20:00', value: '20:00' },
                          { label: '21:00', value: '21:00' },
                          { label: '22:00', value: '22:00' },
                          { label: '23:00', value: '23:00' },
                        ]}
                      />
                    </div>

                    <div className="delete-schedule-container">
                      <div className="divider" />
                      <button
                        type="button"
                        onClick={() => removeScheduleItem(scheduleItem.id)}
                      >
                        Excluir horário
                      </button>
                      <div className="divider" />
                    </div>
                  </div>
                )) : (<p className="no-schedule-registered">Nenhum horário cadastrado.</p>)}
            </div>
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

          <SubmitButton type="submit">Cadastrar aula</SubmitButton>
        </footer>

      </form>
    </Container>
  );
};

export default CreateClass;
