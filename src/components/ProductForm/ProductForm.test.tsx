import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import ProductForm from './ProductForm.tsx';
import userEvent from '@testing-library/user-event';
import { rest, server } from '../../setup/mocks/server.ts';

const onSubmit = vi.fn(() => {});

describe('ProductForm', () => {
  it('should change form inputs', () => {
    render(<ProductForm />);

    const nameInput = screen.getByPlaceholderText('Product name');
    expect(nameInput).toBeInTheDocument();

    fireEvent.change(nameInput, { target: { value: 'Iphone' } });
    expect(nameInput).toHaveValue('Iphone');

    const priceInput = screen.getByPlaceholderText('Price');
    expect(priceInput).toBeInTheDocument();

    fireEvent.change(priceInput, { target: { value: '12345' } });
    expect(priceInput).toHaveValue('12345');

    const imageInput = screen.getByPlaceholderText('Image link');
    expect(imageInput).toBeInTheDocument();

    fireEvent.change(imageInput, {
      target: { value: 'https://img.com/img.jpg' },
    });
    expect(imageInput).toHaveValue('https://img.com/img.jpg');
  });

  it('should make submit button enabled', async () => {
    render(<ProductForm />);

    const submitButton = screen.getByText('Create');
    expect(submitButton).toBeDisabled();

    await userEvent.type(
      screen.getByPlaceholderText('Product name'),
      'Iphone 15',
    );

    await userEvent.type(screen.getByPlaceholderText('Price'), '12');

    expect(submitButton).toBeEnabled();
  });

  it('should execute callback function', async () => {
    server.use(
      rest.post('http://localhost:3001/products', (_req, res, ctx) => {
        return res(ctx.status(200));
      }),
    );

    render(<ProductForm onSubmit={onSubmit} />);

    const submitButton = screen.getByText('Create');

    await userEvent.type(
      screen.getByPlaceholderText('Product name'),
      'Iphone 15',
    );
    await userEvent.type(screen.getByPlaceholderText('Price'), '12');
    await userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
