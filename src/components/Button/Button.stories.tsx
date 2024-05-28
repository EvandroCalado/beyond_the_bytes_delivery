import { Meta, StoryFn } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Buttons: StoryFn<ButtonProps> = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Button>primary</Button>

    <Button variant="secondary">secondary</Button>

    <Button disabled>disabled</Button>
  </div>
);
