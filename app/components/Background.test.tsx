import React from 'react';
import { render } from '@testing-library/react-native';
import Svg from 'react-native-svg';
import Background from '@/app/components/Background';

describe('Background component', () => {
  it('renders without crashing', () => {
    expect(() => render(<Background />)).not.toThrow();
  });

  it('renders an SVG element', () => {
    const { UNSAFE_getByType } = render(<Background />);
    expect(UNSAFE_getByType(Svg)).toBeTruthy();
  });
});
