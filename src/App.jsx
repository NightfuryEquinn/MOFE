import { NavigationContainer } from "@react-navigation/native"
import TaskMain from "./views/tasks/TaskMain"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./Home"
import TaskDailyDetail from "./views/tasks/TaskDailyDetail"
import TaskManage from "./views/tasks/TaskManage"
import { AppStyles } from "./styles/AppStyles"
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import LogMain from "./views/logs/LogMain"

const Stack = createNativeStackNavigator()

const App = () => {
  const { 
    flexFull 
  } = AppStyles

  return (
    <GestureHandlerRootView style={ flexFull }>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={ Home } 
            options={{ 
              headerShown: false, 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              animation: 'slide_from_bottom',
              animationDuration: 750
            }} 
          />
          <Stack.Screen 
            name="TaskStack"
            component={ TaskStack } 
            options={{ 
              headerShown: false, 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              animation: 'slide_from_bottom',
              animationDuration: 750
            }} 
          />
          <Stack.Screen 
            name="LogStack"
            component={ LogStack } 
            options={{ 
              headerShown: false, 
              gestureEnabled: true,
              gestureDirection: 'horizontal',
              animation: 'slide_from_bottom',
              animationDuration: 750
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const TaskStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TaskMain">
      <Stack.Screen 
        name="TaskMain" 
        component={ TaskMain } 
        options={{ 
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationDuration: 750
        }} 
      />
      <Stack.Screen 
        name="TaskDailyDetail" 
        component={ TaskDailyDetail } 
        options={{ 
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationDuration: 750
        }} 
      />
      <Stack.Screen 
        name="TaskManage" 
        component={ TaskManage } 
        options={{ 
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationDuration: 750
        }} 
      />
    </Stack.Navigator>
  )
}

const LogStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LogMain">
      <Stack.Screen 
        name="LogMain" 
        component={ LogMain } 
        options={{ 
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animation: 'slide_from_bottom',
          animationDuration: 750
        }} 
      />
    </Stack.Navigator>
  )
}

export default App