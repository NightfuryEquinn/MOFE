import { Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import CTADetailButtonList from "../../shared/CTADetailButtonList"

const NoteDetail = ( { navigation, isCompleted } ) => {
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
        <Text style={ isCompleted ? noteTitleCompleted : noteTitle }>Meeting with The Queen</Text>

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Period:</Text>
            <Text style={ noteDetail }>29-12-2023 4:00pm to 30-12-2023 5:00pm</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Timeline:</Text>
            <Text style={ noteDetail }>1 day 1 hour</Text>
          </View>
        }

        { !isCompleted && 
          <View style={ noteContentContainer }>
            <Text style={ noteDetail }>Description:</Text>
            <Text style={ noteDetail }>Lorem ipsum dolor sit actum lorem ipsum</Text>
          </View>
        }
      </View>

      <View style={ noteDetailRight }>
        <CTADetailButtonList navigation={ navigation } isCompleted={ isCompleted } manageViewName={ "NoteManage" } />
      </View>
    </View>
  )
}

export default NoteDetail