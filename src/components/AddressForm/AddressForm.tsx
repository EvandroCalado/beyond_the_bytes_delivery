import { ChevronLeft } from 'lucide-react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Heading, Input } from 'components';

import * as S from './AddressForm.styles';

interface Address {
  lot: string;
  details: string;
}

export interface AddressFormProps {
  title: string;
  address?: Address;
  onSave: (address: Address) => void;
}

export const AddressForm: FC<AddressFormProps> = ({
  title,
  address,
  onSave,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Address>(
    address || { lot: '', details: '' },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'lot' && value.length <= 4) {
      const numericValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numericValue });
      return;
    }

    if (name === 'details' && value.length <= 20) {
      const alphaValue = value.replace(/[^a-zA-Z]/g, '');
      setFormData({ ...formData, [name]: alphaValue });
      return;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave(formData);
    navigate('/');
  };

  return (
    <S.Container>
      <S.Addresses>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          <ChevronLeft size={16} />
        </Button>

        <Heading as="h2" size="2xl" fontWeight="600">
          {title}
        </Heading>

        <form onSubmit={handleSubmit}>
          <Input
            label="lote"
            name="lot"
            type="text"
            placeholder="Digite apenas números"
            maxLength={4}
            minLength={4}
            required
            value={formData.lot}
            onChange={handleChange}
          />

          <Input
            label="detalhes"
            name="details"
            type="text"
            placeholder="Digite apenas letras"
            maxLength={20}
            minLength={4}
            required
            value={formData.details}
            onChange={handleChange}
          />
          <Button type="submit">salvar</Button>
        </form>
      </S.Addresses>
    </S.Container>
  );
};
