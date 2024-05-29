import { Meta, StoryFn } from '@storybook/react';

import { AddressList, AddressListProps } from '.';

export default {
  title: 'Components/AddressList',
  component: AddressList,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<AddressListProps> = () => <AddressList />;
