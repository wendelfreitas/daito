import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render default button', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Hello World</Button>);

    const button = screen.getByText('Hello World');

    expect(button).toBeInTheDocument();
  });
});
