import { Meta, StoryFn } from '@storybook/react';

import { RegisterAddress, RegisterAddressProps } from '.';

export default {
  title: 'Components/RegisterAddress',
  component: RegisterAddress,
  args: {
    addAddress: () => {},
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<RegisterAddressProps> = (args) => (
  <RegisterAddress {...args} />
);
