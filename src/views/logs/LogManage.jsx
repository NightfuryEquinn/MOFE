import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import moment from "moment"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

import CTAButtonList from "../../shared/CTAButtonList"
import { colors } from "../../assets/colors/Colors"
import { getLogToday, insertLog, updateLog } from "../../realm/crud/LogCRUD"
import { AppStyles } from "../../styles/AppStyles"

const LogManage = ( { route, navigation } ) => {
  const { func, details } = route.params

  const [ logText, setLogText ] = useState( details[ 1 ] || null )
  const [ hasLogToday, setHasLogToday ] = useState( getLogToday() )

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
            
            <ScrollView showsVerticalScrollIndicator={ false } style={ logContentContainer }>
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
            </ScrollView>
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
              hasLogToday={ hasLogToday }
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