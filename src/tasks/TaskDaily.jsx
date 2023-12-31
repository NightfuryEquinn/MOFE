import { Image, Text, TouchableOpacity, View } from "react-native"
import { AppStyles } from "../styles/AppStyles"

const TaskDaily = ( { navigation } ) => {
  const {
    taskContainer,
    taskDateContainer,
    taskDate,
    taskPreviewContainer,
    taskMore,
    taskPreview,
    taskPreviewLabel
  } = AppStyles

  return (
    <TouchableOpacity 
      activeOpacity={ 0.75 }
      onPress={ () => {
        navigation.navigate( "TaskDailyDetail" )
      }}
      style={ taskContainer }
    >
      <View style={ taskDateContainer }>
        <Text style={ taskDate }>25 12 2023</Text>
      </View>
      
      <View style={ taskPreviewContainer }>
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {

          }}
        >
          <Image
            source={ require( "../assets/icons/more.png" ) }
            style={ taskMore }
          />
        </TouchableOpacity>

        <View style={ taskPreview }>
          <Text style={ taskPreviewLabel }>2 Tasks To Do</Text>
          <Text style={ taskPreviewLabel }>3 Tasks Completed</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TaskDaily