import { Text, View } from "react-native"
import { AppStyles } from "../styles/AppStyles"
import CTADetailButtonList from "../shared/CTADetailButtonList"

const TaskDetail = ( { navigation } ) => {
  const {
    taskDetailContainer,
    taskDetailLeft,
    taskDetailRight,
    taskContentContainer,
    taskTitle,
    taskDetail
  } = AppStyles

  return (
    <View style={ taskDetailContainer }>
      <View style={ taskDetailLeft }>
        <Text style={ taskTitle }>Meeting with The Queen</Text>

        <View style={ taskContentContainer }>
          <Text style={ taskDetail }>Time:</Text>
          <Text style={ taskDetail }>4:00pm to 7:00pm</Text>
        </View>

        <View style={ taskContentContainer }>
          <Text style={ taskDetail }>Duration:</Text>
          <Text style={ taskDetail }>3 hours</Text>
        </View>

        <View style={ taskContentContainer }>
          <Text style={ taskDetail }>Description:</Text>
          <Text style={ taskDetail }>Lorem ipsum dolor sit actum lorem ipsum</Text>
        </View>
      </View>

      <View style={ taskDetailRight }>
        <CTADetailButtonList navigation={ navigation } />
      </View>
    </View>
  )
}

export default TaskDetail