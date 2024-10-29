import React from 'react';
import { IButtonProps } from './types';
import { ButtonContainer } from './styles';

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick}>{title}</ButtonContainer>
  );
};

export default Button;
