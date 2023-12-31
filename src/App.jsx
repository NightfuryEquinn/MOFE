import { NavigationContainer } from "@react-navigation/native"
import TaskMain from "./tasks/TaskMain"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"
import TaskDailyDetail from "./tasks/TaskDailyDetail"
import TaskManage from "./tasks/TaskManage"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } } initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } options={{ headerShown: false, presentation: "modal" }} />
        <Stack.Screen name="TaskStack" component={ TaskStack } options={{ headerShown: false, presentation: "modal" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TaskStack = () => {
  return (
    <Stack.Navigator screenOptions={ { headerShown: false } } initialRouteName="TaskMain">
      <Stack.Screen name="TaskMain" component={ TaskMain } options={{ headerShown: false, presentation: "modal" }} />
      <Stack.Screen name="TaskDailyDetail" component={ TaskDailyDetail } options={{ headerShown: false, presentation: "modal" }} />
      <Stack.Screen name="TaskManage" component={ TaskManage } options={{ headerShown: false, presentation: "modal" }} />
    </Stack.Navigator>
  )
}

export default App