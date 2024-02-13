import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

class Notifications {
  constructor() {
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
  
    PushNotification.createChannel(
      {
        channelId: 'mofe-notifications',
        channelName: 'MOFE Notifications',
        channelDescription: 'Notifications from MOFE',
      },
      () => {}
    )
  
    PushNotification.getScheduledLocalNotifications( rn => {
      console.log( 'Scheduled Notifications:', rn )
    })
  }

  scheduleNotification( id, title, desc, date ) {
    PushNotification.localNotificationSchedule({
      channelId: 'mofe-notifications',
      title: title,
      message: desc,
      date: date,
      id: id
    })
  }
}

export default new Notifications()