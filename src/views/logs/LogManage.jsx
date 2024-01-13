import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { AppStyles } from "../../styles/AppStyles"
import { SafeAreaView } from "react-native-safe-area-context"
import CTAButtonList from "../../shared/CTAButtonList"
import { colors } from "../../assets/colors/Colors"
import { useState } from "react"
import { insertLog, updateLog } from "../../realm/crud/LogCRUD"
import moment from "moment"

const LogManage = ( { route, navigation } ) => {
  const { func, details } = route.params

  const [ logText, setLogText ] = useState( details[ 1 ] || null )

  const {
    container,
    logMainContainer,
    logMainLeft,
    logMainRight,
    logManageHeader,
    logManageTitle,
    logContentContainer,
    logTextarea,
    bookmarkContainer,
    bookmark
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <View style={ logMainContainer }>
          <View style={ logMainLeft }>
            <View style={ logManageHeader }>
              <Text style={ logManageTitle }>{ func === 'add' ? moment( Date.now() ).format( 'DD MM YYYY' ) : details[ 2 ] }</Text>
            </View>
            
            <KeyboardAvoidingView behavior="height" style={ logContentContainer }>
              <TextInput
                multiline
                textAlignVertical="top"
                placeholder="write your daily log..."
                placeholderTextColor={ colors.greyblue }
                style={ logTextarea }
                onChangeText={ text => setLogText( text ) }
                value={ logText }
              />
            </KeyboardAvoidingView>

            <Image
              source={ require( "../../assets/images/seaside.jpg" ) }
              style={{ 
                width: 'fit-content', 
                height: 120,
                resizeMode: 'cover',
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20
              }}
            />          
          </View>

          <View style={ logMainRight }>
            <View style={ bookmarkContainer }>
              <Text style={ bookmark }>M</Text>
              <Text style={ bookmark }>Y</Text>
              <Text style={ bookmark }>L</Text>
              <Text style={ bookmark }>O</Text>
              <Text style={ bookmark }>G</Text>
              <Text style={ bookmark }>S</Text>
            </View>

            <CTAButtonList 
              navigation={ navigation } 
              isAddEdit={ true } 
              manageViewName={ "LogManage" } 
              manageData={ () => {
                if( details[ 0 ] ) {
                  updateLog( details[ 0 ], logText )
                } else {
                  insertLog( logText, moment( Date.now() ).format( 'DD MM YYYY' ) )
                }
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default LogManage