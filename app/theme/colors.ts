import { MD3LightTheme } from 'react-native-paper';

export const CosmicColors = {
  background: '#F5F3FF',
  surface: '#EDE9FE',
  card: '#FFFFFF',
  cardBorder: '#C4B5FD',
  primary: '#7C3AED',
  primaryLight: '#6D28D9',
  accent: '#0891B2',
  textPrimary: '#1E1B4B',
  textSecondary: '#4C1D95',
  textMuted: '#94A3B8',
  success: '#059669',
  danger: '#DC2626',
  inputBg: '#FFFFFF',
  inputBorder: '#7C3AED',
} as const;

export const CosmicTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: CosmicColors.primary,
    outline: CosmicColors.inputBorder,
    surface: CosmicColors.surface,
    surfaceVariant: CosmicColors.card,
    background: CosmicColors.background,
    error: CosmicColors.danger,
    elevation: {
      level0: 'transparent',
      level1: '#EDE9FE',
      level2: '#E8E3FC',
      level3: '#E0D9FA',
      level4: '#D8CFF8',
      level5: '#D0C5F6',
    },
  },
};
