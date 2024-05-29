import { Meta, StoryFn } from '@storybook/react';

import { EditAddress, EditAddressProps } from '.';

export default {
  title: 'Components/EditAddress',
  component: EditAddress,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<EditAddressProps> = () => <EditAddress />;
