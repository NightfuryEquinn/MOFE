import { Text, TouchableOpacity, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"

const NoteDaily = ( { note, navigation } ) => {
  const {
    noteContainer,
    noteDateContainer,
    noteDate,
    notePreviewContainer,
    notePreview,
    notePreviewLabel
  } = AppStyles
  
  return (
    <TouchableOpacity
      activeOpacity={ 0.75 }
      onPress={ () => {
        navigation.navigate( "NoteDailyDetail", {
          details: note
        })
      }}
      style={ noteContainer }
    >
      <View style={ noteDateContainer }>
        <Text style={ noteDate }>{ note.month }</Text>
      </View>

      <View style={ notePreviewContainer }>
        <View style={ notePreview }>
          <Text style={ notePreviewLabel }>
            { note.notePending > 0 ?
              `${ note.notePending } ${ note.notePending > 1 ? 'Reminders' : 'Reminder' }`
              :
              `All is Well`
            }
          </Text>
          <Text style={ notePreviewLabel }>
            {
              note.noteCompleted > 0 && note.notePending > 0 ?
              `${ note.noteCompleted } ${ note.noteCompleted > 1 ? 'Reminders' : 'Reminder' } Completed`
              : note.noteCompleted <= 0 && note.notePending > 0 ?
              `Tick-tock-ding! Remember to do.`
              :
              `Your mind has been cleared`
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NoteDaily