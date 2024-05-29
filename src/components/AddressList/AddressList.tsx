import { Pencil } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';

import * as S from './AddressList.styles';

interface Address {
  lot: string;
  details: string;
}

export interface AddressListProps {
  addresses: Address[];
}

export const AddressList: FC<AddressListProps> = ({ addresses }) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Addresses>
        <Heading as={'h1'} size="xl" fontWeight="600">
          lista de endereços
        </Heading>

        {addresses.length === 0 && <span>não há endereços</span>}

        <ul>
          {addresses.length > 0 &&
            addresses.map((address, index) => (
              <li key={index}>
                <div className="address">
                  <span>Lote:</span> {address.lot}
                  <span>Detalhes:</span> {address.details}
                </div>
                <Button onClick={() => navigate(`/edit-address/${index}`)}>
                  <Pencil size={16} />
                </Button>
              </li>
            ))}
        </ul>

        <Button onClick={() => navigate('/register-address')}>
          novo endereço
        </Button>
      </S.Addresses>
    </S.Container>
  );
};
