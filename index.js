import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { RealmProvider } from '@realm/react';
import Home from './src/Home';

const AppRoot = () => (
  <RealmProvider>
    <Home />
  </RealmProvider>
)

AppRegistry.registerComponent( appName, () => AppRoot );
