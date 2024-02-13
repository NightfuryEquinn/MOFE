import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';

import { appId, baseUrl } from './realm-config.json';
import { TaskSchema } from "./src/realm/models/TaskSchema";
import { LogSchema } from "./src/realm/models/LogSchema";
import { NoteSchema } from "./src/realm/models/NoteSchema";

import Home from './src/App';
import WelcomeView from './src/views/WelcomeView';
import LoadingView from './src/views/LoadingView';

const AppRoot = () => (
  <AppProvider id={ appId } baseUrl={ baseUrl }>
    {/* <UserProvider fallback={ WelcomeView }>
      <RealmProvider
        schema={ [ LogSchema, NoteSchema, TaskSchema ] }
        sync={{
          flexible: true,
          onError: ( _session, error ) => {
            console.log( `Realm Error: ${ error }` )
          }
        }}
        fallback={ LoadingView }
      > */}
        <Home />
      {/* </RealmProvider>
    </UserProvider> */}
  </AppProvider>
)

AppRegistry.registerComponent( appName, () => AppRoot );
