import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  const { getByTestId } = render(<App />);
  const appContainer = getByTestId('app-container');
  expect(appContainer).toBeInTheDocument();
});
