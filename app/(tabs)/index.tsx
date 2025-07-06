import { useEmbeddedSolanaWallet } from '@privy-io/expo';
import { Text, View } from 'react-native';

export default function Home() {
  const { wallets } = useEmbeddedSolanaWallet();
  const wallet = wallets?.[0];

    return (
        <View>
            <Text >Your Wallet</Text>

            {wallet ? (
                <Text>Your Solana wallet address is: {wallet.address}</Text>
            ) : (
                <Text>No embedded Solana wallet found.</Text>
            )}
        </View>
    );
}