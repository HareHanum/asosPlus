import * as React from 'react';
import { Text } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Root from './src/Root';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Root />
  </SafeAreaView>
);

export default App;
