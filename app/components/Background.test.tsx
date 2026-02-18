import React from 'react';
import { render } from '@testing-library/react-native';
import Background from '@/app/components/Background';

describe('Background component', () => {
  it('renders without crashing', () => {
    expect(() => render(<Background />)).not.toThrow();
  });

  it('renders an SVG element', () => {
    const { UNSAFE_getByType } = render(<Background />);
    const { default: Svg } = require('react-native-svg');
    expect(UNSAFE_getByType(Svg)).toBeTruthy();
  });
});
