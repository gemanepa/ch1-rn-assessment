import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Index from '../index';

describe('Index screen', () => {
  it('renders the edit message', () => {
    render(<Index />);
    expect(
      screen.getByText('Edit app/index.tsx to edit this screen.')
    ).toBeTruthy();
  });
});
