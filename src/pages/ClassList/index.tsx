import React, {
  useCallback,
  useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container, Header, GobackIcon,
} from './styles';
import backIcon from '../../assets/images/icons/back.svg';
import convertMinutesToHour from '../../utils/convertMinuteToHour';
import SubmitButton from '../../components/SubmitButton';
import Select from '../../components/Select';

interface Teacher {
  id: string;
  name: string;
  whatsapp?: string;
  avatar_url: string;
  bio?: string;
}

interface ScheduleItem {
  id: string;
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

interface ClassItemProps {
  id: string;
  cost: string;
  subject: string;
  user: Teacher;
  classes_schedules?: ScheduleItem[];
}

interface GetFilteredClassesResponse {
  totalClassesFound: number;
  totalClassesInPage: number;
  from: number;
  to: number;
  page: number;
  classes: ClassItemProps[];
}

const ClassList: React.FC = () => {
  const [filteredClassesData, setFilteredClassesData] = useState<
    GetFilteredClassesResponse
  >({
    totalClassesFound: 0,
    totalClassesInPage: 0,
    from: 0,
    to: 0,
    classes: [],
    page: 1,
  });

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    async function loadClasses() {
      if (subject === 'Selecione') {
        setSubject('');
      }

      if (week_day === 'Selecione') {
        setWeekDay('');
      }

      if (time === 'Selecione') {
        setTime('');
      }

      const data = {};

      subject && Object.assign(data, { subject });
      week_day && Object.assign(data, { week_day });
      time && Object.assign(data, { time });

      const response = await api.get('/classes', {
        params: data,
      });

      setFilteredClassesData(response.data);
    }
    loadClasses();
  }, [subject, week_day, time]);

  const handleContactTeacher = useCallback(async (teacher_id, teacher_phone) => {
    window.open(`https://wa.me/+55${teacher_phone}`, '_blank');

    await api.post('/connections', {
      teacher_id,
    });
  }, []);

  return (
    <Container className="container">
      <Header>
        <Link to="/">
          <GobackIcon src={backIcon} />
        </Link>
        <p>Estudar</p>
      </Header>
      <div className="intro-container">
        <h1>
          Esta são as
          <br />
          aulas disponíveis.
        </h1>
      </div>

      <div className="filters">

        <Select
          className="filter-item"
          label="Matéria"
          name="subject"
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

        <Select
          className="filter-item"
          label="Dia da semana"
          name="week_day"
          onChange={(item) => setWeekDay(item.target.value)}
          options={[{ label: '1', value: 'Segunda' },
            { label: '2', value: 'Terça' },
            { label: '3', value: 'Quarta' },
            { label: '4', value: 'Quinta' },
            { label: '5', value: 'Sexta' },
          ]}
        />

        <Select
          className="filter-item"
          label="Horário"
          name="time"
          onChange={(item) => setWeekDay(item.target.value)}
          options={[{ label: '00:00', value: '00:00' },
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

      <main>
        {filteredClassesData.classes.length > 0 ? (
          filteredClassesData.classes.map((classItem) => (
            <div className="class-container" key={classItem.id}>
              <div className="class-header">
                <img src={classItem.user.avatar_url ? classItem.user.avatar_url : 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg'} alt="teacher" />
                <div className="teacher-and-subject">
                  <h1>{classItem.user.name}</h1>
                  <span>{classItem.subject}</span>
                </div>
              </div>
              <p className="user-bio">{classItem.user.bio}</p>
              <div className="schedule-container">
                {classItem.classes_schedules && classItem.classes_schedules.length > 0 ? (
                  classItem.classes_schedules.map((daySchedule: ScheduleItem) => (
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
              <footer>
                <div className="cost">
                  <label htmlFor="cost">
                    Preço/hora:
                  </label>
                  <p id="cost">{classItem.cost}</p>
                </div>

                <SubmitButton type="button" onClick={() => handleContactTeacher(classItem.user.id, classItem.user.whatsapp)}>Entrar em contato</SubmitButton>
              </footer>

            </div>
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

export default ClassList;
