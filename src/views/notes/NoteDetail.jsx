import { Text, View } from "react-native"

import { AppStyles } from "../../styles/AppStyles"
import CTADetailButtonList from "../../shared/CTADetailButtonList"
import { calculateDays, convertDateTimeToDateFormat } from "../../assets/utils/Formatter"

const NoteDetail = ( { noteDetails, navigation } ) => {
  const { title, description, startDate, endDate, startTime, endTime, isCompleted } = noteDetails 

  const {
    noteDetailContainer,
    noteDetailContainerCompleted,
    noteDetailLeft,
    noteDetailRight,
    noteTitle,
    noteTitleCompleted,
    noteDetail,
    noteContentContainer
  } = AppStyles
  
  return (
    <View style={ isCompleted ? noteDetailContainerCompleted : noteDetailContainer }>
      <View style={ noteDetailLeft }>
        <Text style={ isCompleted ? noteTitleCompleted : noteTitle }>{ title }</Text>

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Period:</Text>
            <Text style={ noteDetail }>{ `${ convertDateTimeToDateFormat( startDate, startTime ) } to ${ convertDateTimeToDateFormat( endDate, endTime ) }` }</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Timeline:</Text>
            <Text style={ noteDetail }>{ `${ calculateDays( convertDateTimeToDateFormat( startDate, startTime ), convertDateTimeToDateFormat( endDate, endTime ) ) }` }</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Description:</Text>
            <Text style={ noteDetail }>{ description }</Text>
          </View>
        }
      </View>

      <View style={ noteDetailRight }>
        <CTADetailButtonList 
          navigation={ navigation } 
          isCompleted={ isCompleted } 
          manageViewName={ "NoteManage" }
          details={ noteDetails }
        />
      </View>
    </View>
  )
}

export default NoteDetail