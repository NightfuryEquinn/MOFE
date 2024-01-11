import { useEffect, useState } from "react"
import { AppState } from "react-native"
import realmDb from "../../realm/RealmDB"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"

const NoteMain = ( { navigation } ) => {
  const [ appState, setAppState ] = useState( AppState.currentState )
  const [ notes, setNotes ] = useState( [] )

  const handleAppStateChange = ( nextAppState ) => {
    if( appState.match( /inactive | background/ ) && nextAppState === 'active' ) {
      const noteSchema = realmDb.objects( 'Note' )
      const noteArray = noteSchema.map( note => ( { ...note } ) )

      setTasks( noteArray )
    }

    setAppState( nextAppState )
  }

  useEffect( () => {
    AppState.addEventListener( 'change', handleAppStateChange )

    console.log( `All Notes -- ${ notes }` )
  }, [] )

  const {
    container
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      
    </SafeAreaView>
  )
}

export default NoteMain
 