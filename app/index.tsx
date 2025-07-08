import { usePrivy } from "@privy-io/expo";
import { Redirect } from "expo-router";

export default function AuthGate() {
  const { isReady, user } = usePrivy();

  // Show nothing while Privy is initializing
  if (!isReady) {
    return null;
  }

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Redirect href="/login" />;
  }

  // If user is authenticated, redirect to tabs
  return <Redirect href="/(tabs)" />;
} 