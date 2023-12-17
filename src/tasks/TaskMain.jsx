import { useEffect, useState } from "react"
import { AppState, Button, Text, View } from "react-native"
import realmDb from "../realm/RealmDB"
import Animated from 'react-native-reanimated'
import { sharedTransition } from "../styles/SharedTransitions"
import { SafeAreaView } from "react-native"

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

  return (
    <SafeAreaView>
      <Animated.Image
        source={ require( "../assets/images/town.jpg" ) }
        style={ { width: 250, height: 100 } }
        sharedTransitionTag="tag"
        sharedTransitionStyle={ sharedTransition }
      />
      <Button
        title="Go back"
        onPress={ () => navigation.navigate('App') }
      />
    </SafeAreaView>
  )
}

export default TaskMain