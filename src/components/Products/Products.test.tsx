import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, it } from 'vitest';
import Products from './Products';
import { rest, server } from '../../setup/mocks/server.ts';

const products = [
  {
    id: 1,
    name: 'Apple AirPods Pro 2nd generation',
    image: 'https://s.ek.ua/jpg/2272446.jpg',
    price: 8199,
    available: true,
  },
  {
    id: 2,
    name: 'Apple AirPods 3 with Wireless Charging Case',
    image: 'https://s.ek.ua/jpg/2349078.jpg',
    price: 12499,
    available: false,
  },
  {
    id: 3,
    name: 'Apple AirPods Max',
    image: 'https://s.ek.ua/jpg/1924984.jpg',
    price: 24799,
    available: true,
  },
];

describe('Products', () => {
  it('should render products', async () => {
    render(<Products products={products} />);

    await waitFor(() => {
      const loadingIndicator = screen.queryByText('Loading...');
      expect(loadingIndicator).not.toBeInTheDocument();

      const list = screen.getByRole('list');
      const { getAllByRole } = within(list);
      const items = getAllByRole('listitem');

      expect(items.length).toBe(3);
    });
  });

  it('should render no items message', async () => {
    server.use(
      rest.get('http://localhost:3001/products', (_req, res, ctx) => {
        return res(ctx.json([]));
      }),
    );

    render(<Products products={[]} />);

    await waitFor(() => {
      const emptyText = screen.getByText('No items found');
      expect(emptyText).toBeInTheDocument();
    });
  });
});
