import React, {
  useCallback, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container, Header, GobackIcon, SectionDivider,
} from './styles';
import backIcon from '../../assets/images/icons/back.svg';
import convertMinutesToHour from '../../utils/convertMinuteToHour';

interface ClassSchedule {
  week_day: number;
  from: number;
  to: number;
}

interface Class {
  id: string;
  user_id: string;
  subject: string;
  cost: number;
  classes_schedules: ClassSchedule[];
}

const GiveClasses: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        const response = await api.get('/teacher-classes');

        setClasses(response.data);
      } catch {
        alert('Erro ao listar suas aulas. Atualize a página e tente novamente!');
      }
    };

    loadClasses();
  }, [classes]);

  const handleDeleteClass = useCallback(
    async (class_id) => {
      try {
        await api.delete(`/classes/${class_id}`);

        const updatedClasses = classes.filter(
          (classItem) => classItem.id !== class_id,
        );

        setClasses(updatedClasses);

        alert('A aula foi excluída!');
      } catch {
        alert('Não foi possível deletar essa aula. Tente novamente!');
      }
    },
    [classes],
  );

  return (
    <Container className="container">
      <Header>
        <Link to="/">
          <GobackIcon src={backIcon} />
        </Link>
        <p>Minhas aulas</p>
      </Header>
      <div className="intro-container">
        <h1>
          Aqui você encontra
          <br />
          suas aulas!
        </h1>
        <span>
          Verifique abaixo todas suas aulas cadastradas
          <br />
          e fique à vontade para criar novas.
        </span>
      </div>

      <main>
        <header>
          <h1>Suas aulas</h1>
          <Link to="/create-class">
            + Criar aula
          </Link>
        </header>

        <SectionDivider />
        {classes.length > 0 ? (
          classes.map((classItem) => (
            <>
              <div className="class-container" key={classItem.id}>
                <div className="class-header">
                  <div className="class-info">
                    <div className="class-info-item">
                      <label htmlFor="subject">
                        Matéria:
                        {'  '}
                      </label>
                      <p id="subject">{classItem.subject}</p>
                    </div>
                    <div className="class-info-item">
                      <label htmlFor="cost">
                        Preço/hora:
                        {'  '}
                      </label>
                      <p id="cost">{classItem.cost}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteClass(classItem.id)}
                  >
                    Apagar
                  </button>
                </div>
                <div className="schedule-container">
                  {classItem.classes_schedules.length > 0 ? (
                    classItem.classes_schedules.map((daySchedule) => (
                      <div key={daySchedule.week_day} className="schedule-item">
                        <span>Dia</span>
                        {daySchedule.week_day === 1 && <p>Segunda</p>}
                        {daySchedule.week_day === 2 && <p>Terça</p>}
                        {daySchedule.week_day === 3 && <p>Quarta</p>}
                        {daySchedule.week_day === 4 && <p>Quinta</p>}
                        {daySchedule.week_day === 5 && <p>Sexta</p>}

                        <span>Horário</span>
                        <p>
                          {convertMinutesToHour(daySchedule.from)}
                          {' - '}
                          {convertMinutesToHour(daySchedule.to)}
                        </p>
                      </div>
                    ))
                  ) : (
                    <footer>
                      Não há cronograma para exibir
                    </footer>
                  )}
                </div>
              </div>
              <SectionDivider />
            </>
          ))
        ) : (
          <footer>
            Não há aulas para exibir
          </footer>
        )}
      </main>
    </Container>
  );
};

export default GiveClasses;
