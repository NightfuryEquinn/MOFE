import { Text, TouchableOpacity, View } from "react-native"

import { AppStyles } from "../../styles/AppStyles"
import { formatDateToDisplay } from "../../assets/utils/Formatter"

const TaskDaily = ( { task, navigation } ) => {
  const {
    taskContainer,
    taskDateContainer,
    taskDate,
    taskPreviewContainer,
    taskPreview,
    taskPreviewLabel
  } = AppStyles

  return (
    <TouchableOpacity 
      activeOpacity={ 0.75 }
      onPress={ () => {
        navigation.navigate( "TaskDailyDetail", {
          details: task
        })
      }}
      style={ taskContainer }
    >
      <View style={ taskDateContainer }>
        <Text style={ taskDate }>{ formatDateToDisplay( task.date ) }</Text>
      </View>
      
      <View style={ taskPreviewContainer }>
        <View style={ taskPreview }>
          <Text style={ taskPreviewLabel }>
            { task.taskPending > 0 ?
              `${ task.taskPending } ${ task.taskPending > 1 ? 'Tasks' : 'Task' } To Do` 
              :
              `Well Done`
            }
          </Text>
          <Text style={ taskPreviewLabel }>
            { task.taskCompleted > 0 && task.taskPending > 0 ? 
              `${ task.taskCompleted } ${ task.taskCompleted > 1 ? 'Tasks' : 'Task' } Completed` 
              : task.taskCompleted <= 0 && task.taskPending > 0 ?
              `Don't think. Just do` 
              : 
              `All Tasks Completed`
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TaskDaily