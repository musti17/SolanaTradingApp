import { Text, View } from 'react-native';

export default function TokensScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Tokens</Text>
      <Text style={{ marginTop: 12 }}>Your tokens will be displayed here.</Text>
    </View>
  );
} 