import { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import CTAButtonList from "../../shared/CTAButtonList"
import NoteDaily from "./NoteDaily"
import { getFilteredNote, getNotes } from "../../realm/crud/NoteCRUD"

const NoteMain = ( { navigation } ) => {
  const [ notes, setNotes ] = useState( [] )
  const [ filterDate, setFilterDate ] = useState( null )

  useEffect( () => {
    filterDate ? setNotes( getFilteredNote( filterDate ) ) : setNotes( getNotes() )

    console.log( `All Notes -- ${ notes }` )
  }, [ filterDate ] )

  const {
    container,
    noteMainContainer,
    noteMainLeft,
    noteMainRight,
    noteScroll,
    bookmarkContainer,
    bookmark,
    noValueLabel
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ noteMainContainer }>
        <View style={ noteMainLeft }>
          <ScrollView 
            style={ noteScroll }
            showsVerticalScrollIndicator={ false }
          >
            {
              notes && notes.length ?
              notes.map( ( note, index ) => (
                <NoteDaily key={ index } note={ note } navigation={ navigation } />
              ))
              : <Text style={ noValueLabel }>No Notes</Text>
            }
          </ScrollView>

          <Image
            source={ require( "../../assets/images/cliff.jpg" ) }
            style={{ 
              width: 'fit-content', 
              height: 120,
              resizeMode: 'cover',
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20
            }}
          />
        </View>

        <View style={ noteMainRight }>
          <View style={ bookmarkContainer }>
            <Text style={ bookmark }>M</Text>
            <Text style={ bookmark }>Y</Text>
            <Text style={ bookmark }>N</Text>
            <Text style={ bookmark }>O</Text>
            <Text style={ bookmark }>T</Text>
            <Text style={ bookmark }>E</Text>
          </View>

          <CTAButtonList 
            navigation={ navigation } 
            manageViewName={ "NoteManage" }
            setFilterDate={ setFilterDate }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NoteMain
 