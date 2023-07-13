import { render, screen, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../src/App';
import { rest, server } from './setup/mocks/server.ts';

describe('App', () => {
  it('should render page header', () => {
    render(<App />);
    const header = screen.getByRole('heading');
    expect(header).toHaveTextContent('Products');
  });

  it('should render counter', async () => {
    render(<App />);

    await waitFor(() => {
      const counter = screen.getByText('5 items');
      expect(counter).toBeInTheDocument();
    });
  });

  it('should render loading indicator', () => {
    render(<App />);
    const loadingIndicator = screen.getByText('Loading...');
    expect(loadingIndicator).toBeInTheDocument();
  });

  it('should render error message', async () => {
    server.use(
      rest.get('http://localhost:3001/products', (_req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ error: 'An error occurred while getting products' }),
        );
      }),
    );

    render(<App />);

    await waitFor(() => {
      const errorText = screen.getByText('Cannot fetch products');
      expect(errorText).toBeInTheDocument();
    });
  });
});
