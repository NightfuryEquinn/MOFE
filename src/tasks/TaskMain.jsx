import { useEffect, useState } from "react"
import { AppState, ScrollView, Text, View } from "react-native"
import realmDb from "../realm/RealmDB"
import Animated from 'react-native-reanimated'
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../styles/AppStyles"
import TaskDaily from "./TaskDaily"

const TaskMain = ( { navigation } ) => {
  const [ appState, setAppState ] = useState( AppState.currentState )
  const [ tasks, setTasks ] = useState( [] )

  const handleAppStateChange = ( nextAppState ) => {
    if( appState.match( /inactive | background/ ) && nextAppState === 'active' ) {
      const taskSchema = realmDb.objects( 'Task' )
      const taskArray = taskSchema.map( ( task ) => ( { ...task } ) )

      setTasks( taskArray )
    }

    setAppState( nextAppState )
  }

  useEffect( () => {
    AppState.addEventListener( 'change', handleAppStateChange )
  }, [] )

  const {
    container,
    taskMainContainer,
    taskMainLeft,
    taskMainRight,
    taskScroll,
    bookmark,
    bookmarkContainer
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ taskMainContainer }>
        <View style={ taskMainLeft }>
          <ScrollView
            style={ taskScroll }
            showsVerticalScrollIndicator={ false }
          >
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />
            <TaskDaily />

          </ScrollView>
          
          <Animated.Image
            source={ require( "../assets/images/town.jpg" ) }
            style={{ 
              width: 'fit-content', 
              height: 120,
              resizeMode: 'cover',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20
            }}
            sharedTransitionTag="town"
          />
        </View>

        <View style={ taskMainRight }>
          <View style={ bookmarkContainer }>
            <Text style={ bookmark }>M</Text>
            <Text style={ bookmark }>Y</Text>
            <Text style={ bookmark }>T</Text>
            <Text style={ bookmark }>A</Text>
            <Text style={ bookmark }>S</Text>
            <Text style={ bookmark }>K</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TaskMain