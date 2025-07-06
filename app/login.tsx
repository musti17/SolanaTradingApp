import { useLoginWithEmail, usePrivy } from '@privy-io/expo';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const { sendCode, loginWithCode } = useLoginWithEmail();
  const { isReady } = usePrivy();

  if (!isReady) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7fa' }}>
      <View style={{ width: '90%', maxWidth: 350, padding: 24, backgroundColor: '#fff', borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: '#222' }}>Welcome</Text>
        <Text style={{ fontSize: 18, marginBottom: 24, textAlign: 'center', color: '#666' }}>Sign in to continue</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          inputMode="email"
          style={{ marginBottom: 16, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, backgroundColor: '#fafbfc', fontSize: 16 }}
        />
        {codeSent && (
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Verification Code"
            inputMode="numeric"
            style={{ marginBottom: 16, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, backgroundColor: '#fafbfc', fontSize: 16 }}
          />
        )}
        {!codeSent ? (
          <Button
            title="Send Code"
            onPress={async () => {
              if (!email) return alert('Please enter an email');
              try {
                await sendCode({ email });
                setCodeSent(true);
              } catch (err) {
                console.error(err);
                alert('Failed to send code.');
              }
            }}
            color="#4f46e5"
          />
        ) : (
          <Button
            title="Login"
            onPress={async () => {
              if (!code) return alert('Enter the code');
              try {
                await loginWithCode({ code, email });
              } catch (err) {
                console.error(err);
                alert('Failed to login');
              }
            }}
            color="#4f46e5"
          />
        )}
      </View>
    </View>
  );
}
