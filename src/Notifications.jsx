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
  }

  scheduleNotification( id, title, date ) {
    PushNotification.localNotificationSchedule({
      channelId: 'MOFE PUSH',
      title: title,
      message: "😗 Remember to do...",
      date: date,
      id: id,
      allowWhileIdle: true
    })
  }

  cancelNotification( id ) {
    PushNotification.cancelLocalNotification( id )
  }

  rescheduleNotification( id, title, date ) {
    this.cancelNotification( id )
    this.scheduleNotification( id, title, date )
  }
}

export default new Notifications()