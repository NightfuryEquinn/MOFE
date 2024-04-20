import PushNotification from 'react-native-push-notification';

const Notifications = () => {
  const createNotificationChannel = () => {
    PushNotification.channelExists( 'mofe-push-id', function ( exists ) {
      if( !exists ) {
        PushNotification.createChannel(
          {
            channelId: 'mofe-push-id',
            channelName: 'MOFE Scheduled Notifications',
            channelDescription: 'Scheduled Notifications from MOFE',
            soundName: 'alert.mp3',
            importance: 4,
            vibrate: true
          },
          ( created ) => {
            if( created ) {
              console.log( `Channel Created: ${ created }`)
            } else {
              console.log( 'Failed to create channel' )
            }
          }
        )
      }
    })
  }

  const scheduleNotification = ( id, title, date ) => {
    createNotificationChannel()

    PushNotification.localNotificationSchedule(
      {
        id,
        title,
        date: new Date( date ),
        channelId: 'mofe-push-id',
        message: "😗 Remember to do...",
        allowWhileIdle: true
      }
    )

    console.log( 'Notification scheduled for:', date )
  }

  const cancelNotification = ( id ) => {
    PushNotification.cancelLocalNotification( id )

    console.log( 'Cancelled notification of id:', id )
  }

  const rescheduleNotification = ( id, title, date ) => {
    cancelNotification( id )
    scheduleNotification( id, title, date )

    console.log( 'Rescheduled notification for:', date )
  }

  return {
    scheduleNotification,
    cancelNotification, 
    rescheduleNotification
  }
}

export default Notifications()