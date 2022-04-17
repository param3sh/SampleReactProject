import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



test('title bar', () => {
  render(<App />);
  const linkElement = screen.getByText(/coding challenge/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders actors column', () => {
  render(<App />);
  const actorElement = screen.getByText(/Actors/i);
  expect(actorElement).toBeInTheDocument();
});
