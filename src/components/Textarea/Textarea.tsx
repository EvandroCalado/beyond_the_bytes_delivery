import { FC } from 'react';

import * as S from './Textarea.styles';

export interface TextareaProps {
  label: string;
  name: string;
}

export const Textarea: FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>

      <textarea name={name} id={name} {...rest}></textarea>
    </S.Container>
  );
};
