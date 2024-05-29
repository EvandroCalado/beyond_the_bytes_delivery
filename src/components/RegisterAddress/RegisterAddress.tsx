import { FC } from 'react';

import { AddressForm } from 'components';

import * as S from './RegisterAddress.styles';

interface Address {
  lot: string;
  details: string;
}

export interface RegisterAddressProps {
  addAddress: (address: Address) => void;
}

export const RegisterAddress: FC<RegisterAddressProps> = ({ addAddress }) => {
  return (
    <S.Container>
      <AddressForm title="adicionar" onSave={addAddress} />
    </S.Container>
  );
};
