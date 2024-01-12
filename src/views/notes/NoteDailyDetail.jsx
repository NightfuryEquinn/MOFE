import { Image, ScrollView, Text, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import NoteDetail from "./NoteDetail"
import CTAButtonList from "../../shared/CTAButtonList"

const NoteDailyDetail = ( { navigation } ) => {
  const {
    container,
    noteMainContainer,
    noteMainLeft,
    noteMainRight,
    headerDividerAlt,
    headerAlt,
    noteScroll,
    bookmarkContainer,
    bookmark
  } = AppStyles
  
  return (
    <SafeAreaView style={ container }>
      <View style={ noteMainContainer }>
        <View style={ noteMainLeft }>
          <View style={ headerDividerAlt }>
            <Text style={ headerAlt }>12 2023</Text>
          </View>

          <ScrollView
            style={ noteScroll }
            showsVerticalScrollIndicator={ false }
          >
            <NoteDetail navigation={ navigation } isCompleted={ false } />
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

          <CTAButtonList navigation={ navigation } manageViewName={ "NoteManage" } />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NoteDailyDetail