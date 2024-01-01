import { Text, View } from "react-native"
import { AppStyles } from "../styles/AppStyles"
import CTADetailButtonList from "../shared/CTADetailButtonList"

const TaskDetail = ( { navigation, isCompleted } ) => {
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
        <Text style={ isCompleted ? taskTitleCompleted : taskTitle }>Meeting with The Queen</Text>

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Time:</Text>
            <Text style={ taskDetail }>4:00pm to 7:00pm</Text>
          </View> 
        }

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Duration:</Text>
            <Text style={ taskDetail }>3 hours</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ taskContentContainer }>
            <Text style={ taskDetail }>Description:</Text>
            <Text style={ taskDetail }>Lorem ipsum dolor sit actum lorem ipsum</Text>
          </View>
        }
      </View>

      <View style={ taskDetailRight }>
        <CTADetailButtonList navigation={ navigation } isCompleted={ isCompleted } />
      </View>
    </View>
  )
}

export default TaskDetail