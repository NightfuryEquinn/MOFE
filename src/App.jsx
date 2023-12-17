import React, { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"
import { AppStyles } from "./styles/AppStyles"
import SplashScreen from "react-native-splash-screen"
import moment from "moment"
import Animated from 'react-native-reanimated'
import { sharedTransition } from "./styles/SharedTransitions"
import { SafeAreaView } from "react-native"

const App = ( { navigation } ) => {
  const [ nowTime, setNowTime ] = useState( "" )

  const realTime = () => {
    const currentTime = moment()
    const formattedTime = currentTime.format( "DD MMMM YYYY h:mm:ss A" )

    setNowTime( formattedTime )
  }

  useEffect( () => {
    SplashScreen.hide()

    setInterval( realTime, 1000 )
  }, [] )

  const { 
    container,
    containerWrapper,
    headerDivider, 
    header,
  } = AppStyles
  
  return (
    <SafeAreaView style={ container }>
      <View style={ containerWrapper }>
        <View style={ headerDivider }>
          <Text style={ header }>{ nowTime }</Text>
        </View>

        <Animated.Image
          source={ require( "./assets/images/town.jpg" ) }
          style={ { width: 150, height: 150 } }
          sharedTransitionTag="tag"
          sharedTransitionStyle={ sharedTransition }
        />

        <Button     
          title="Go to Task"
          onPress={ () => navigation.navigate( 'TaskMain' ) }
        />
      </View>
    </SafeAreaView>
  )
}

export default App