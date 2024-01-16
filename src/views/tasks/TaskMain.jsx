import { useEffect, useState } from "react"
import { AppState, Image, ScrollView, Text, View } from "react-native"
import realmDb from "../../realm/RealmDB"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import TaskDaily from "./TaskDaily"
import CTAButtonList from "../../shared/CTAButtonList"
import { getFilteredTask, getTasks } from "../../realm/crud/TaskCRUD"

const TaskMain = ( { navigation } ) => {
  const [ tasks, setTasks ] = useState( [] )
  const [ filterDate, setFilterDate ] = useState( null )

  useEffect( () => {
    filterDate ? setTasks( getFilteredTask( filterDate ) ) : setTasks( getTasks() )

    console.log( `All Tasks -- ${ tasks }` )
  }, [ filterDate ] )

  const {
    container,
    taskMainContainer,
    taskMainLeft,
    taskMainRight,
    taskScroll,
    bookmark,
    bookmarkContainer,
    noValueLabel
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ taskMainContainer }>
        <View style={ taskMainLeft }>
          <ScrollView
            style={ taskScroll }
            showsVerticalScrollIndicator={ false }
          >
            {
              tasks && tasks.length ?
              tasks.map( ( task, index ) => (
                <TaskDaily key={ index } task={ task } navigation={ navigation } />
              ))
              : <Text style={ noValueLabel }>No Tasks</Text>
            }
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

          <CTAButtonList 
            navigation={ navigation } 
            manageViewName={ "TaskManage" } 
            setFilterDate={ setFilterDate }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TaskMain