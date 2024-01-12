import { Image, Text, TouchableOpacity, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { useState } from "react"
import PopupModal from "../../shared/PopupModal"

const NoteDaily = ( { navigation } ) => {
  const [ showDeleteAllDialog, setShowDeleteAllDialog ] = useState( false )

  const {
    noteContainer,
    noteDateContainer,
    noteDate,
    notePreviewContainer,
    noteMore,
    notePreview,
    notePreviewLabel
  } = AppStyles
  
  return (
    <TouchableOpacity
      activeOpacity={ 0.75 }
      onPress={ () => {
        navigation.navigate( "NoteDailyDetail" )
      }}
      style={ noteContainer }
    >
      <PopupModal 
        showDialog={ showDeleteAllDialog }
        setShowDialog={ setShowDeleteAllDialog }
        modalTitle={ "DELETE ALL?" }
      />

      <View style={ noteDateContainer }>
        <Text style={ noteDate }>12 2023</Text>
      </View>

      <View style={ notePreviewContainer }>
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            setShowDeleteAllDialog( true )
          }}
        >
          <Image 
            source={ require( "../../assets/icons/more.png" ) }
            style={ noteMore }
          />
        </TouchableOpacity>

        <View style={ notePreview }>
          <Text style={ notePreviewLabel }>2 Reminders</Text>
          <Text style={ notePreviewLabel }>3 Finished</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NoteDaily