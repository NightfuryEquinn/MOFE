import { useEffect, useState } from "react"
import { AppState, Image, ScrollView, Text, View } from "react-native"
import realmDb from "../../realm/RealmDB"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import TaskDaily from "./TaskDaily"
import CTAButtonList from "../../shared/CTAButtonList"

const TaskMain = ( { navigation } ) => {
  const [ appState, setAppState ] = useState( AppState.currentState )
  const [ tasks, setTasks ] = useState( [] )

  const handleAppStateChange = ( nextAppState ) => {
    if( appState.match( /inactive | background/ ) && nextAppState === 'active' ) {
      const taskSchema = realmDb.objects( 'Task' )
      const taskArray = taskSchema.map( task => ( { ...task } ) )

      setTasks( taskArray )
    }

    setAppState( nextAppState )
  }

  useEffect( () => {
    AppState.addEventListener( 'change', handleAppStateChange )

    console.log( `All Tasks -- ${ tasks }` )
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
            <TaskDaily navigation={ navigation } />
          </ScrollView>
          
          <Image
            source={ require( "../../assets/images/town.jpg" ) }
            style={{ 
              width: 'fit-content', 
              height: 120,
              resizeMode: 'cover',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20
            }}
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

          <CTAButtonList navigation={ navigation } manageViewName={ "TaskManage" } />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TaskMain