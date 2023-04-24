import { render, screen } from '@testing-library/react';
import App from './App';

test('test', () => {
  render(<App />);
  expect(1).toBe(1);
});
