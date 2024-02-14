import React, { useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"
import { View, Text, TouchableOpacity, Image } from "react-native"
import moment from "moment"
import SplashScreen from 'react-native-lottie-splash-screen'
import { SafeAreaView } from "react-native-safe-area-context"
import PushNotification, { Importance } from 'react-native-push-notification';

import { quotes } from "./assets/utils/Quotes"
import { AppStyles } from "./styles/AppStyles"

const Home = ( { navigation } ) => {
  const isFocused = useIsFocused()

  const [ nowTime, setNowTime ] = useState( "" )
  const [ leftQuote, setLeftQuote ] = useState( "" )
  const [ rightQuote, setRightQuote ] = useState( "" )

  const realTime = () => {
    const currentTime = moment()
    const formattedTime = currentTime.format( "DD MMMM YYYY h:mm:ss A" )

    setNowTime( formattedTime )
  }

  const randomQuote = () => {
    const leftQuote = quotes[ Math.floor( Math.random() * quotes.length ) ]
    const rightQuote = quotes[ Math.floor( Math.random() * quotes.length ) ]

    setLeftQuote( leftQuote )
    setRightQuote( rightQuote )
  }

  useEffect( () => {
    SplashScreen.hide()

    setTimeout( randomQuote, 500 )
    setInterval( realTime, 1000 )

    PushNotification.channelExists( 'MOFE PUSH', function ( exists ) {
      if( !exists ) {
        PushNotification.createChannel(
          {
            channelId: 'MOFE PUSH',
            channelName: 'MOFE Notifications',
            channelDescription: 'Notifications from MOFE',
            soundName: './assets/audios/alert.mp3',
            importance: Importance.HIGH,
          },
          ( created ) => console.log( `Channel Created: ${ created }`)
        )
      }
    })

    PushNotification.getScheduledLocalNotifications( rn => {
      console.log( 'Scheduled Notifications:', rn )
    })
  }, [ isFocused ] )

  const { 
    container,
    containerWrapper,
    headerDivider, 
    header,
    topImageButton,
    middleImageButton,
    bottomImageButton,
    buttonWrapper,
    buttonWrapperAlt,
    buttonWrapperAltAlt,
    buttonLabel,
    middleDivider,
    middleSection,
    quote
  } = AppStyles
  
  return (
    <SafeAreaView style={ container }>
      <View style={ containerWrapper }>
        <View style={ headerDivider }>
          <Text style={ header }>{ nowTime || "... Configuring Time ..." }</Text>
        </View>

        <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ topImageButton }
          onPress={ () => {
            navigation.navigate( 'TaskStack' )
          }}
        >
          <Image
            source={ require( "./assets/images/town.jpg" ) }
            style={{ 
              width: 'fit-content', 
              resizeMode: 'cover',
              height: 125,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />

          <View style={ buttonWrapper }>
            <Text style={ buttonLabel }>Task</Text>
          </View>
        </TouchableOpacity>

        <View style={ middleDivider }>
          <View style={ middleSection }>
            <TouchableOpacity
              activeOpacity={ 0.75 }
              style={ middleImageButton }
              onPress={ () => {
                navigation.navigate( 'LogStack' )
              }}
            >
              <Image 
                source={ require( './assets/images/seaside.jpg' ) }
                style={{
                  width: 'fit-content',
                  height: 250,
                  resizeMode: 'cover',
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20
                }}
              />

              <View style={ buttonWrapper }>
                <Text style={ buttonLabel }>Logs</Text>
              </View>
            </TouchableOpacity>

            <Text style={ quote }>{ leftQuote }</Text>
          </View>

          <View style={ middleSection }>
            <Text style={ quote }>{ rightQuote }</Text>

            <TouchableOpacity
              activeOpacity={ 0.75 }
              style={ middleImageButton }
              onPress={ () => {
                navigation.navigate( 'NoteStack' )
              }}
            >
              <Image 
                source={ require( './assets/images/cliff.jpg' ) }
                style={{
                  width: 'fit-content',
                  height: 250,
                  resizeMode: 'cover',
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20
                }}
              />

              <View style={ buttonWrapperAlt }>
                <Text style={ buttonLabel }>Note</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={ 0.75 }
          style={ bottomImageButton }
          onPress={ () => {
            navigation.navigate( 'FuryStack' )
          }}
        >
          <Image 
            source={ require( './assets/images/volcano.jpg' ) }
            style={{
              width: 'fit-content', 
              resizeMode: 'cover',
              height: 125,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20
            }}
          />

          <View style={ buttonWrapperAltAlt }>
            <Text style={ buttonLabel }>Doge</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home