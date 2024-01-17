import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import CTAButtonList from "../../shared/CTAButtonList"
import { useState } from "react"
import { colors } from "../../assets/colors/Colors"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { convertDateToDateFormat, convertDateToString, convertTimeStringToDate } from "../../assets/utils/Formatter"
import { insertNote, updateNote } from "../../realm/crud/NoteCRUD"

const NoteManage = ( { route, navigation } ) => {
  const { func, details } = route.params

  const [ showStartDate, setShowStartDate ] = useState( false )
  const [ showStartTime, setShowStartTime ] = useState( false )
  const [ showEndDate, setShowEndDate ] = useState( false )
  const [ showEndTime, setShowEndTime ] = useState( false )

  const [ noteTitle, setNoteTitle ] = useState( details[ 'title' ] || null )
  const [ noteDesc, setNoteDesc ] = useState( details[ 'description' ] || null )
  const [ noteStartDate, setNoteStartDate ] = useState( details[ 'startDate' ] || null )
  const [ noteStartTime, setNoteStartTime ] = useState( details[ 'startTime' ] || null )
  const [ noteEndDate, setNoteEndDate ] = useState( details[ 'endDate' ] || null )
  const [ noteEndTime, setNoteEndTime ] = useState( details[ 'endTime' ] || null )

  const [ startDate, setStartDate ] = useState( convertDateToDateFormat( details[ "startDate" ] ) || null )
  const [ endDate, setEndDate ] = useState( convertDateToDateFormat( details[ "startDate" ] ) || null )
  const [ startTime, setStartTime ] = useState( convertTimeStringToDate( details[ 'startTime' ] || null ) )
  const [ endTime, setEndTime ] = useState( convertTimeStringToDate( details[ 'startTime' ] || null ) )
  
  const onChangeStartDate = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    setStartDate( tempDate )
    
    let fDate = convertDateToString( tempDate )

    setNoteStartDate( fDate )
    setShowStartDate( false )
  }

  const onChangeStartTime = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    setStartTime( tempDate )

    let fTime = tempDate.getHours() + 'H ' + tempDate.getMinutes() + 'M'

    setNoteStartTime( fTime )
    setShowStartTime( false )
  }

  const onChangeEndDate = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    setEndDate( tempDate )

    let fDate = convertDateToString( tempDate )

    setNoteEndDate( fDate )
    setShowEndDate( false )
  }

  const onChangeEndTime = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    setEndTime( tempDate )

    let fTime = tempDate.getHours() + 'H ' + tempDate.getMinutes() + 'M'

    setNoteEndTime( fTime )
    setShowEndTime( false )
  }

  const {
    container,
    noteMainContainer,
    noteMainLeft,
    noteMainRight,
    headerDividerAlt,
    headerAlt,
    bookmark,
    bookmarkContainer,
    noteManageContainer,
    noteInputContainer,
    noteInputHeader,
    noteInput,
    noteDescInput
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <View style={ noteMainContainer }>
          <View style={ noteMainLeft }>
            <View style={ headerDividerAlt }>
              <Text style={ headerAlt }>{ func === 'add' ? 'ADD NOTE' : 'EDIT NOTE' }</Text>
            </View>

            <KeyboardAvoidingView behavior='height' style={ noteManageContainer }>
              <View style={ noteInputContainer }>
                <Text style={ noteInputHeader }>Title</Text>
                <TextInput
                  placeholder="your title"
                  placeholderTextColor={ colors.skyblue }
                  style={ noteInput }
                  onChangeText={ text => setNoteTitle( text ) }
                  value={ noteTitle }
                />
              </View>

              <View style={ noteInputContainer }>
                <Text style={ noteInputHeader }>Description</Text>
                <TextInput
                  multiline
                  textAlignVertical="top"
                  placeholder="your description"
                  placeholderTextColor={ colors.skyblue }
                  style={ [ noteInput, noteDescInput ] }
                  onChangeText={ text => setNoteDesc( text ) }
                  value={ noteDesc }
                />
              </View>

              <View style={ noteInputContainer }>
                <Text style={ noteInputHeader }>Start Date</Text>
                <TouchableOpacity 
                  activeOpacity={ 0.75 }
                  onPress={ () => setShowStartDate( true ) }
                >
                  <TextInput
                    editable={ false }
                    placeholder="your start date"
                    placeholderTextColor={ colors.skyblue }
                    style={ noteInput }
                    value={ noteStartDate }
                  />
                </TouchableOpacity>
              </View>

              { noteStartDate ?
                <View style={ noteInputContainer }>
                  <Text style={ noteInputHeader }>Start Time</Text>
                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={ () => setShowStartTime( true ) }
                  >
                    <TextInput
                      editable={ false }
                      placeholder="your start time"
                      placeholderTextColor={ colors.skyblue }
                      style={ noteInput }
                      value={ noteStartTime }
                    />
                  </TouchableOpacity>
                </View>
                :
                null 
              }

              { noteStartDate && noteStartTime ?
                <View style={ noteInputContainer }>
                  <Text style={ noteInputHeader }>End Date</Text>
                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={ () => setShowEndDate( true ) }
                  >
                    <TextInput
                      editable={ false }
                      placeholder="your end date"
                      placeholderTextColor={ colors.skyblue }
                      style={ noteInput }
                      value={ noteEndDate }
                    />
                  </TouchableOpacity>
                </View>
                :
                null
              }

              { noteStartDate && noteStartTime && noteEndDate ?
                <View style={ noteInputContainer }>
                  <Text style={ noteInputHeader }>End Time</Text>
                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={ () => setShowEndTime( true ) }
                  >
                    <TextInput
                      editable={ false }
                      placeholder="your end time"
                      placeholderTextColor={ colors.skyblue }
                      style={ noteInput }
                      value={ noteEndTime }
                    />
                  </TouchableOpacity>
                </View>
                :
                null
              }
            </KeyboardAvoidingView>

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
              isAddEdit={ true } 
              manageViewName={ "NoteManage" }
              hasEmptyField={ noteTitle && noteDesc && noteStartDate && noteStartTime && noteEndDate && noteEndTime && ( new Date( `${ startDate }` ).setHours( startTime.getHours(), startTime.getMinutes() ) < new Date( `${ endDate }` ).setHours( endTime.getHours(), endTime.getMinutes() ) ) }
              manageData={ () => {
                if( details[ "_noteId" ] ) {
                  updateNote( details[ "_noteId" ], noteTitle, noteDesc, noteStartDate, noteEndDate, noteStartTime, noteEndTime )
                } else { 
                  insertNote( noteTitle, noteDesc, noteStartDate, noteEndDate, noteStartTime, noteEndTime)
                }
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <DateTimePickerModal
        isVisible={ showStartDate }
        mode={ "date" }
        is24Hour={ true }
        display={ "calendar" }
        onConfirm={ onChangeStartDate }
        onCancel={ () => setShowStartDate( false ) }
      />

      <DateTimePickerModal
        isVisible={ showStartTime }
        mode={ "time" }
        is24Hour={ true }
        display={ "clock" }
        onConfirm={ onChangeStartTime }
        onCancel={ () => setShowStartTime( false ) }
      />

      <DateTimePickerModal
        isVisible={ showEndDate }
        mode={ "date" }
        is24Hour={ true }
        display={ "calendar" }
        onConfirm={ onChangeEndDate }
        onCancel={ () => setShowEndDate( false ) }
      />

      <DateTimePickerModal
        isVisible={ showEndTime }
        mode={ "time" }
        is24Hour={ true }
        display={ "clock" }
        onConfirm={ onChangeEndTime }
        onCancel={ () => setShowEndTime( false ) }
      />
    </SafeAreaView>
  )
}

export default NoteManage