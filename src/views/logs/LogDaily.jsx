import { Text, TouchableOpacity } from "react-native"
import { AppStyles } from "../../styles/AppStyles"

const LogDaily = ( { log, navigation, isCompleted } ) => {
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
          details: [ log._logId, log.description, log.date ]
        })
      }}
      style={ isCompleted ? logDailyButtonContainerCompleted : logDailyButtonContainer }
    >
      <Text style={ isCompleted ? logDailyButtonCompleted : logDailyButton }>{ log.date }</Text>
    </TouchableOpacity>
  )
}

export default LogDaily