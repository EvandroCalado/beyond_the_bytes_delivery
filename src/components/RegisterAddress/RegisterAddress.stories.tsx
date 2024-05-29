import { Meta, StoryFn } from '@storybook/react';

import { RegisterAddress, RegisterAddressProps } from '.';

export default {
  title: 'Components/RegisterAddress',
  component: RegisterAddress,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<RegisterAddressProps> = () => <RegisterAddress />;
