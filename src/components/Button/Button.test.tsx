import { render, screen } from 'utils';

import theme from 'styles/theme';

import { Button } from './Button';

describe('Button', () => {
  it('should render default', () => {
    render(<Button>button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('button');
    expect(button).toHaveStyle({
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
    });
  });

  it('should render with variant secondary', () => {
    render(<Button variant="secondary">button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.white,
      color: theme.colors.primary,
    });
  });

  it('should render a snapshot', () => {
    render(<Button variant="secondary">button</Button>);

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });
});
