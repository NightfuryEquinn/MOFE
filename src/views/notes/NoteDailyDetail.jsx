import { Image, ScrollView, Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import NoteDetail from "./NoteDetail"
import CTAButtonList from "../../shared/CTAButtonList"

const NoteDailyDetail = ( { route, navigation } ) => {
  const { details } = route.params

  console.log( details )

  const {
    container,
    noteMainContainer,
    noteMainLeft,
    noteMainRight,
    headerDividerAlt,
    headerAlt,
    noteScroll,
    bookmarkContainer,
    bookmark,
    noValueLabel
  } = AppStyles
  
  return (
    <SafeAreaView style={ container }>
      <View style={ noteMainContainer }>
        <View style={ noteMainLeft }>
          <View style={ headerDividerAlt }>
            <Text style={ headerAlt }>{ details[ "month" ] }</Text>
          </View>

          <ScrollView
            style={ noteScroll }
            showsVerticalScrollIndicator={ false }
          >
            {
              details.monthNote && details.monthNote.length ?
              details.monthNote.map( ( noteDetails, index ) => (
                <NoteDetail key={ index } noteDetails={ noteDetails } navigation={ navigation } />
              ))
              : <Text style={ noValueLabel }>No Note Details</Text>
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
            isInDetail={ true }
            manageViewName={ "NoteManage" } 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NoteDailyDetail