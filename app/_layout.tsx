import '@/global.css';
import { Stack } from 'expo-router';
import { cssInterop } from 'nativewind';
import {
  Button,
  IconButton,
  Text,
  TextInput,
  PaperProvider,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CosmicColors, CosmicTheme } from '@/theme/colors';

cssInterop(Text, { className: 'style' });
cssInterop(TextInput, { className: 'style' });
cssInterop(Button, { className: 'style' });
cssInterop(IconButton, { className: 'style' });

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={CosmicTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: CosmicColors.background },
          }}
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
