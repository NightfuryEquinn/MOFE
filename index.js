import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { AppProvider, RealmProvider, UserProvider } from '@realm/react';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import { appId, baseUrl } from './realm-config.json';
import { TaskSchema } from "./src/realm/models/TaskSchema";
import { LogSchema } from "./src/realm/models/LogSchema";
import { NoteSchema } from "./src/realm/models/NoteSchema";

import Home from './src/App';
import WelcomeView from './src/views/WelcomeView';
import LoadingView from './src/views/LoadingView';

PushNotification.configure({
  onRegister: function ( token ) {
    console.log( "TOKEN:", token )
  },
  onNotification: function ( notification ) {
    console.log( "NOTIFICATION:", notification )

    notification.finish( PushNotificationIOS.FetchResult.NoData )
  },
  onAction: function ( notification ) {
    console.log( "ACTION:", notification.action )
    console.log( "NOTIFICATION:", notification )
  },
  onRegistrationError: function ( err ) {
    console.error( err.message, err )
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },
  popInitialNotification: true,
  requestPermissions: true
})

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
