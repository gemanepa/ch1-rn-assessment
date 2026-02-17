import { CosmicColors, CosmicTheme } from '../theme/colors';

describe('CosmicColors', () => {
  it('has all required tokens', () => {
    const requiredTokens = [
      'background', 'surface', 'card', 'cardBorder',
      'primary', 'primaryLight', 'accent',
      'textPrimary', 'textSecondary', 'textMuted',
      'danger', 'inputBg', 'inputBorder',
    ];
    requiredTokens.forEach((token) => {
      expect(CosmicColors).toHaveProperty(token);
    });
  });

  it('all token values are hex color strings', () => {
    Object.values(CosmicColors).forEach((value) => {
      expect(value).toMatch(/^#[0-9A-Fa-f]{6}$/);
    });
  });
});

describe('CosmicTheme', () => {
  it('uses the cosmic primary color', () => {
    expect(CosmicTheme.colors.primary).toBe(CosmicColors.primary);
  });

  it('uses the cosmic background color', () => {
    expect(CosmicTheme.colors.background).toBe(CosmicColors.background);
  });
});
