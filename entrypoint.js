// Import required polyfills first
import 'react-native-get-random-values';
import '@ethersproject/shims';
import 'fast-text-encoding';
// Then import the expo router
import { Buffer } from 'buffer';
import 'expo-router/entry';
global.Buffer = Buffer;
