import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Button {...rest}>
    {children}
  </Button>
);

export default SubmitButton;
