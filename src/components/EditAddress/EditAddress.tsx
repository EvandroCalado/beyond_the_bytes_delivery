import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { AddressForm } from 'components';

import * as S from './EditAddress.styles';

interface Address {
  lot: string;
  details: string;
}

export interface EditAddressProps {
  addresses: Address[];
  updateAddress: (index: number, updatedAddress: Address) => void;
}

export const EditAddress: FC<EditAddressProps> = ({
  addresses,
  updateAddress,
}) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid id</div>;
  }

  const address = addresses[parseInt(id)];

  return (
    <S.Container>
      <AddressForm
        title="editar"
        address={address}
        onSave={(updatedAddress) => updateAddress(parseInt(id), updatedAddress)}
      />
    </S.Container>
  );
};
