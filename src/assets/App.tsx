import React from "react"
import { View, Text } from "react-native"
import { AppStyles } from "./styles/AppStyles"

const App: React.FC = () => {
  const { container, title, body } = AppStyles
  
  return (
    <View style={ container }>
      <Text style={ title }>Welcome</Text>
      <Text style={ body }>Hello, React Native!</Text>
    </View>
  )
}

export default App