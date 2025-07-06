import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEmbeddedSolanaWallet } from '@privy-io/expo';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export function WalletHeader() {
  const { wallets } = useEmbeddedSolanaWallet();
  const colorScheme = useColorScheme() ?? 'light';
  const wallet = wallets?.[0];
  const address = wallet?.address;
  const truncated = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : null;

  return (
    <BlurView intensity={60} tint={colorScheme} style={styles.header}>
      {/* App name on left */}
      <ThemedText
        type="title"
        style={[
          styles.appName,
          { color: colorScheme === 'dark' ? '#fff' : '#111' },
        ]}
      >
        SolanaX
      </ThemedText>

      <View style={styles.walletChip}>
        <ThemedText
          type="default"
          style={[
            styles.walletText,
            { color: colorScheme === 'dark' ? '#fff' : '#111' },
          ]}
        >
          {truncated || 'No wallet'}
        </ThemedText>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 20,
      marginHorizontal: 16,
      marginTop: 16,
      borderRadius: 16,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.08)',
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
    appName: {
      fontSize: 18,
      fontFamily: 'SpaceMono',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    walletChip: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 12,
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,0.15)',
    },
    walletText: {
      fontFamily: 'SpaceMono',
      fontSize: 13,
      letterSpacing: 0.5,
    },
  });
  