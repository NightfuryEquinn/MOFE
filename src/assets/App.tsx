import React, { useEffect } from "react"
import { View, Text } from "react-native"
import { AppStyles } from "./styles/AppStyles"
import SplashScreen from "react-native-splash-screen"
import realm from "../realm/RealmDB"

const App: React.FC = () => {
  const { container, title, body } = AppStyles

  useEffect( () => {
    SplashScreen.hide()

    const taskSchema = realm.objects('Task')

    console.log( taskSchema )
  }, [] )
  
  return (
    <View style={ container }>
      <Text style={ title }>Welcomes</Text>
      <Text style={ body }>Hello, React Native!</Text>
    </View>
  )
}

export default App