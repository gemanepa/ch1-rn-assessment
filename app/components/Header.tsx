import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Header() {
  return (
    <View className="px-4 pt-6 pb-2">
      <Text variant="labelSmall" className="text-cosmic-accent tracking-[3px]">
        CHAPTER ONE ASSESSMENT
      </Text>
      <Text variant="headlineLarge" className="font-extrabold">
        <Text
          variant="headlineLarge"
          className="text-cosmic-textPrimary font-extrabold"
        >
          Task{' '}
        </Text>
        <Text
          variant="headlineLarge"
          className="text-cosmic-primaryLight font-extrabold"
        >
          Manager
        </Text>
      </Text>
    </View>
  );
}
