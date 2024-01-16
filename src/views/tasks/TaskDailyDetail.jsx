import { Image, ScrollView, Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import CTAButtonList from "../../shared/CTAButtonList"
import TaskDetail from "./TaskDetail"
import { formatDateToDisplay } from "../../assets/utils/Formatter"

const TaskDailyDetail = ( { route, navigation } ) => {
  const { details } = route.params

  console.log( details )

  const {
    container,
    headerDividerAlt,
    headerAlt,
    taskMainContainer,
    taskMainLeft,
    taskScroll,
    taskMainRight,
    bookmarkContainer,
    bookmark,
    noValueLabel
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ taskMainContainer }>
        <View style={ taskMainLeft }>
          <View style={ headerDividerAlt }>
            <Text style={ headerAlt }>{ formatDateToDisplay( details.date ) }</Text>
          </View>

          <ScrollView
            style={ taskScroll }
            showsVerticalScrollIndicator={ false }
          >
            { details.dateTask && details.dateTask.length ?
              details.dateTask.map( ( taskDetails, index ) => (
                <TaskDetail key={ index } taskDetails={ taskDetails } navigation={ navigation } />
              ))
              : <Text style={ noValueLabel }>No Task Details</Text>
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
            isInDetail={ true }
            manageViewName={ "TaskManage" } 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default TaskDailyDetail