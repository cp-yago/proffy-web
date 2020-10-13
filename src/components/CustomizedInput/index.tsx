import React, {
  InputHTMLAttributes, useCallback, useState,
} from 'react';

import {
  Container,
  Input,
  Label,
  EyeButton,
  EyeIcon,
} from './styles';

import eyeIcon from '../../assets/images/icons/eye.svg';
import closedEyeIcon from '../../assets/images/icons/closed-eye.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label: string;
  password?: boolean;
}

const CustomizedInput: React.FC<InputProps> = ({
  name, placeholder, label, password, type, value, ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkedType, setCheckedType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const toggleShowPassword = useCallback(() => {
    if (showPassword) {
      setCheckedType('password');
    } else {
      setCheckedType('text');
    }

    setShowPassword(!showPassword);
  }, [showPassword]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(!isFocused);
    setIsFilled(!!value);
  }, [isFocused, value]);

  return (
    <Container>
      <Input
        placeholder={placeholder}
        name={name}
        type={checkedType}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        value={value}
        {...rest}
      />
      <Label className={isFocused || isFilled || value ? 'focused' : ''}>{label}</Label>
      {type === 'password' && (
        <EyeButton type="button" onClick={toggleShowPassword}>
          {
            showPassword
              ? <EyeIcon src={closedEyeIcon} />
              : <EyeIcon src={eyeIcon} />
          }
        </EyeButton>
      )}
    </Container>
  );
};

export default CustomizedInput;
