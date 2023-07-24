import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import Navigation from './navigation';
// App.js

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
<Navigation />
  );
}

