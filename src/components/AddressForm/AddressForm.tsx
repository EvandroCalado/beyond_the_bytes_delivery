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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave(formData);
    navigate('/');
  };

  return (
    <S.Container>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        <ChevronLeft size={16} />
      </Button>

      <Heading as="h2" size="3xl" fontWeight="800">
        {title}
      </Heading>

      <form onSubmit={handleSubmit}>
        <Input
          label="lote"
          name="lot"
          type="text"
          value={formData.lot}
          onChange={handleChange}
        />
        <Input
          label="detalhes"
          name="details"
          type="text"
          value={formData.details}
          onChange={handleChange}
        />
        <Button type="submit">salvar</Button>
      </form>
    </S.Container>
  );
};
