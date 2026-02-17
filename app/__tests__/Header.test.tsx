import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Header from '../components/Header';

describe('Header component', () => {
  it('renders the Task Manager title', () => {
    render(<Header />);
    expect(screen.getByText('Task Manager')).toBeTruthy();
  });
});
