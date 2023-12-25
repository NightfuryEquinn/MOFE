import { NavigationContainer } from "@react-navigation/native"
import TaskMain from "./tasks/TaskMain"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={ { headerShown: false } } 
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="TaskMain" component={ TaskMain } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App