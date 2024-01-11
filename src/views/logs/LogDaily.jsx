import { Text, TouchableOpacity } from "react-native"
import { AppStyles } from "../../styles/AppStyles"

const LogDaily = ( { navigation, isCompleted } ) => {
  const {
    logDailyButtonContainer,
    logDailyButtonContainerCompleted,
    logDailyButton,
    logDailyButtonCompleted
  } = AppStyles

  return (
    <TouchableOpacity
      activeOpacity={ 0.75 }
      onPress={ () => {
        navigation.navigate( 'LogManage', {
          func: 'edit',
          details: []
        })
      }}
      style={ isCompleted ? logDailyButtonContainerCompleted : logDailyButtonContainer }
    >
      <Text style={ isCompleted ? logDailyButtonCompleted : logDailyButton }>30 11 2023</Text>
    </TouchableOpacity>
  )
}

export default LogDaily