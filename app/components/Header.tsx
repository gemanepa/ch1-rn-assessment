import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CosmicColors } from '../theme/colors';

export default function Header() {
  return (
    <View className="px-4 pt-6 pb-2">
      <Text
        variant="labelSmall"
        style={{ color: CosmicColors.accent, letterSpacing: 3 }}
      >
        COSMIC TASKS
      </Text>
      <Text
        variant="headlineLarge"
        style={{ fontWeight: '800' }}
      >
        <Text variant="headlineLarge" style={{ color: CosmicColors.textPrimary, fontWeight: '800' }}>Task </Text>
        <Text variant="headlineLarge" style={{ color: CosmicColors.primaryLight, fontWeight: '800' }}>Manager</Text>
      </Text>
    </View>
  );
}
