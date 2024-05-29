import { Meta, StoryFn } from '@storybook/react';

import { EditAddress, EditAddressProps } from '.';

export default {
  title: 'Components/EditAddress',
  component: EditAddress,
  args: {
    addresses: [
      {
        lot: '1234',
        details: 'monitor',
      },
      {
        lot: '4321',
        details: 'placa',
      },
    ],
    updateAddress: () => {},
  },
  parameters: {
    layout: 'fullscreen',
    reactRouter: {
      routePath: '/edit-address/:id',
      routeParams: {
        id: '0',
      },
    },
  },
} as Meta;

export const Default: StoryFn<EditAddressProps> = (args) => (
  <EditAddress {...args} />
);
