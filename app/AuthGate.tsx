import { usePrivy } from "@privy-io/expo";
import { Tabs } from "expo-router";
import LoginScreen from "./login";

export default function AuthGate() {
  const { isReady, user } = usePrivy();

  if (!isReady) return null;
  if (!user) return <LoginScreen />;

  return <Tabs />
}
