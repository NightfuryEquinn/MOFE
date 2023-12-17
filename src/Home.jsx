import { NavigationContainer } from "@react-navigation/native"
import TaskMain from "./tasks/TaskMain"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import App from "./App"

const Home = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={ { headerShown: false } } 
        initialRouteName="App"
      >
        <Stack.Screen name="App" component={ App } />
        <Stack.Screen name="TaskMain" component={ TaskMain } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Home