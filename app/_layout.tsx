import { PrivyProvider } from "@privy-io/expo";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const extra = Constants.expoConfig?.extra || {};
  const PRIVY_APP_ID = extra.PRIVY_APP_ID;
  const PRIVY_CLIENT_ID = extra.PRIVY_CLIENT_ID;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <PrivyProvider
          appId={PRIVY_APP_ID}
          clientId={PRIVY_CLIENT_ID}
          config={{
            embedded: {
              solana: {
                createOnLogin: "users-without-wallets",
              },
            },
          }}
        >
          <ThemeProvider value={DefaultTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "#151915" },
              }}
            >
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </PrivyProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
