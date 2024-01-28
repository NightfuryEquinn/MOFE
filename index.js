import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import Home from './src/App';
import realmDb from './src/realm/RealmDB';
import { appId, baseUrl } from './realm-config.json';

const AppRoot = () => (
  // <AppProvider id={ appId } baseUrl={ baseUrl }>
  //   <UserProvider fallback={ null }>
      <RealmProvider
        // schema={[ realmDb ]}
        // sync={{
        //   flexible: true,
        //   onError: ( _session, error ) => {
        //     console.log( `Realm Error: ${ error }` )
        //   }
        // }}
        // fallback={ null }
      >
        <Home />
      </RealmProvider>
  //   </UserProvider>
  // </AppProvider>
)

AppRegistry.registerComponent( appName, () => AppRoot );
