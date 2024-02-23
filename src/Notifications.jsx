import PushNotification from 'react-native-push-notification';

const Notifications = () => {
  const createNotificationChannel = () => {
    PushNotification.channelExists( 'MOFE PUSH', function ( exists ) {
      if( !exists ) {
        PushNotification.createChannel(
          {
            channelId: 'MOFE PUSH',
            channelName: 'MOFE Scheduled Notifications',
            channelDescription: 'Scheduled Notifications from MOFE',
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
    PushNotification.localNotificationSchedule(
      {
        channelId: 'MOFE PUSH',
        title: title,
        message: "😗 Remember to do...",
        date,
        id,
        soundName: 'alert',
      }
    )

    console.log( 'Scheduled notification for:', date )
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

  createNotificationChannel()

  return {
    scheduleNotification,
    cancelNotification, 
    rescheduleNotification
  }
}

export default Notifications()