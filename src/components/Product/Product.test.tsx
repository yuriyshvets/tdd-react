import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Product from './Product';

const product = {
  id: 1,
  name: 'Apple AirPods Pro 2nd generation',
  image: 'https://s.ek.ua/jpg/2272446.jpg',
  price: 8199,
  available: false,
};

const productWithoutImage = {
  id: 1,
  name: 'Apple AirPods Pro 2nd generation',
  image: null,
  price: 8199,
  available: true,
};

describe('Product', () => {
  it('should render product title', () => {
    render(<Product product={product} />);
    const title = screen.getByText('Apple AirPods Pro 2nd generation');
    expect(title).toBeInTheDocument();
  });

  it('should render no image message', () => {
    render(<Product product={productWithoutImage} />);
    const text = screen.getByText('No image');
    expect(text).toBeInTheDocument();
  });

  it('should render no Out of stock label', () => {
    render(<Product product={product} />);
    const text = screen.getByText('Product is out of stock');
    expect(text).toBeInTheDocument();
  });
});
