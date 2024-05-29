import { render, screen } from 'utils';

import theme from 'styles/theme';

import { Heading } from './Heading';

describe('Heading', () => {
  it('should render default', () => {
    render(<Heading>test</Heading>);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('test');
    expect(heading).toHaveStyle({
      fontSize: theme.font.sizes.md,
    });
  });

  it('should render with as, size and fontWeight', () => {
    render(
      <Heading as="h2" size="lg" fontWeight="bold">
        test
      </Heading>,
    );

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveStyle({
      fontSize: theme.font.sizes.lg,
      fontWeight: 'bold',
    });
  });

  it('should render a snapshot', () => {
    const { container } = render(<Heading>test</Heading>);

    expect(container).toMatchSnapshot();
  });
});
