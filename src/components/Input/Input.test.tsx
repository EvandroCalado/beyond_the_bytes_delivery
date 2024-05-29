import { fireEvent, render, screen } from 'utils';

import { Input } from './Input';

describe('Input', () => {
  it('should render default', () => {
    render(<Input label="test" name="name" type="text" />);

    const label = screen.getByText('test');
    const input = screen.getByRole('textbox');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'name');
    expect(input).toHaveValue('');
  });

  it('should render with type email', () => {
    render(<Input label="test" name="email" type="email" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'email');
  });

  it('should render on change', () => {
    render(<Input label="test" name="name" type="text" />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });

  it('should render a snapshot', () => {
    const { container } = render(
      <Input label="test" name="email" type="email" />,
    );

    expect(container).toMatchSnapshot();
  });
});
