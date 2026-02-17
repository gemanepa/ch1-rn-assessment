import "../global.css";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { CosmicColors, CosmicTheme } from "./theme/colors";

export default function RootLayout() {
  return (
    <PaperProvider theme={CosmicTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: CosmicColors.background },
        }}
      />
    </PaperProvider>
  );
}
