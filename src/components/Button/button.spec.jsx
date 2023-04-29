import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe("<Button />", () => {
  test("render button with the text 'Load More'", () => {
    render(<Button text="Load More"/>);
    expect.assertions(1);
    
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  
  test("call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClickMethod={fn} />);
    expect.assertions(1);
    
    const button = screen.getByRole('button', { name: /load more/i });
    
    userEvent.click(button);
    
    expect(fn).toHaveBeenCalledTimes(1);
  });
  
  test('be disabled when disabled is true', () => {
    render(<Button text="Load more" isDisabled={true} />);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
  
  test('be enabled when disabled is false', () => {
    const fn = jest.fn();
    expect.assertions(1);
    render(<Button text="Load more" isDisabled={false} onClickMethod={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });
});