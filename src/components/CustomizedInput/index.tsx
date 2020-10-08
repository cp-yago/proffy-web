import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import {
  Container,
  Input,
  Label,
  EyeButton,
  EyeIcon,
  ClosedEye,
} from './styles';

import eyeIcon from '../../assets/images/icons/eye.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label: string;
  password?: boolean;
}

const CustomizedInput: React.FC<InputProps> = ({
  name, placeholder, label, password, type, ...rest
}) => {
  const [inputType, setInputType] = useState('password');
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassowd = useCallback((event) => {
    setShowPassword(!showPassword);

    if (!showPassword) {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }, [showPassword]);

  return (
    <Container>
      <Input
        placeholder={placeholder}
        name={name}
        type={password ? inputType : type}
        {...rest}
      />
      <Label>{label}</Label>
      {password && (
        <EyeButton type="button" onClick={toggleShowPassowd}>
          {
            showPassword
              ? <EyeIcon src={eyeIcon} />
              : <ClosedEye />
          }
        </EyeButton>
      )}
    </Container>
  );
};

export default CustomizedInput;
