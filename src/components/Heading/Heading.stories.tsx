import { Meta, StoryFn } from '@storybook/react';

import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Headings: StoryFn<HeadingProps> = () => (
  <div style={{ display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
    <div>
      <Heading size="6xl">Heading</Heading>
      <Heading as="h2" size="5xl">
        Heading
      </Heading>
      <Heading as="h3" size="4xl">
        Heading
      </Heading>
      <Heading as="h4" size="3xl">
        Heading
      </Heading>
      <Heading as="h5" size="2xl">
        Heading
      </Heading>
      <Heading as="h6" size="xl">
        Heading
      </Heading>
    </div>
  </div>
);
