import React, {
  SelectHTMLAttributes,
} from 'react';

import {
  Container,
} from './styles';

interface Option {
  label: string;
  value: string;
}
interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Option[];
}

const Select: React.FC<InputProps> = ({
  label, name, options, onChange, ...rest
}) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} onChange={onChange}>
      <option defaultValue="">Selecione</option>
      {options && options.map((option) => <option value={option.label}>{option.value}</option>)}
    </select>
  </Container>
);

export default Select;
