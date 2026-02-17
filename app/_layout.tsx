import "../global.css";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CosmicColors, CosmicTheme } from "../theme/colors";

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
