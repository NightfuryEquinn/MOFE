import { AppRegistry } from 'react-native';
import App from './src/assets/App';
import { name as appName } from './app.json';
import { RealmProvider } from '@realm/react';

const AppRoot = () => (
  <RealmProvider>
    <App />
  </RealmProvider>
)

AppRegistry.registerComponent( appName, () => App );
