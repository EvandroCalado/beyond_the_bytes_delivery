import { ButtonHTMLAttributes, FC } from 'react';

import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <S.Button variant={variant} {...rest}>
      {children}
    </S.Button>
  );
};
