import { useLoginWithEmail, usePrivy } from '@privy-io/expo';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const { sendCode, loginWithCode } = useLoginWithEmail();
  const {isReady} = usePrivy();

  if(isReady){
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        inputMode="email"
        style={{ marginBottom: 12, padding: 10, borderWidth: 1, borderRadius: 8 }}
      />

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
        />
      ) : (
        <>
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Verification Code"
            inputMode="numeric"
            style={{ marginVertical: 12, padding: 10, borderWidth: 1, borderRadius: 8 }}
          />
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
          />
        </>
      )}
    </View>
  );
}
}
