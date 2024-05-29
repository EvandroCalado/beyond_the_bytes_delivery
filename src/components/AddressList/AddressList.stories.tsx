import { Meta, StoryFn } from '@storybook/react';

import { AddressList, AddressListProps } from '.';

export default {
  title: 'Components/AddressList',
  component: AddressList,
  args: {
    addresses: [
      {
        lot: '1234',
        details: 'monitor',
      },
      {
        lot: '4321',
        details: 'placa mãe',
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AddressListProps> = (args) => (
  <AddressList {...args} />
);
