import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../src/App';

describe('App', () => {
  it('should render hello message', () => {
    render(<App />);
    const headline = screen.getByText('Hello, KPS!');
    expect(headline).toBeInTheDocument();
  });
});
