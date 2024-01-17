import { Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import CTADetailButtonList from "../../shared/CTADetailButtonList"
import { calculateDuration, formatTimeToDisplay } from "../../assets/utils/Formatter"

const TaskDetail = ( { taskDetails, navigation } ) => {
  const { title, description, startTime, endTime, isCompleted } = taskDetails

  const {
    taskDetailContainer,
    taskDetailContainerCompleted,
    taskDetailLeft,
    taskDetailRight,
    taskContentContainer,
    taskTitle,
    taskTitleCompleted,
    taskDetail,
  } = AppStyles

  return (
    <View style={ isCompleted ? taskDetailContainerCompleted : taskDetailContainer }>
      <View style={ taskDetailLeft }>
        <Text style={ isCompleted ? taskTitleCompleted : taskTitle }>{ title }</Text>

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Time:</Text>
            <Text style={ taskDetail }>{ `${ formatTimeToDisplay( startTime ) } to ${ formatTimeToDisplay( endTime ) }` }</Text>
          </View> 
        }

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Duration:</Text>
            <Text style={ taskDetail }>{ calculateDuration( startTime, endTime ) }</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Description:</Text>
            <Text style={ taskDetail }>{ description }</Text>
          </View>
        }
      </View>

      <View style={ taskDetailRight }>
        <CTADetailButtonList 
          navigation={ navigation } 
          isCompleted={ isCompleted } 
          manageViewName={ "TaskManage" }
          details={ taskDetails }
        />
      </View>
    </View>
  )
}

export default TaskDetail