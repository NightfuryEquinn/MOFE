import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../../styles/AppStyles"
import CTAButtonList from "../../shared/CTAButtonList"
import { useState } from "react"
import { colors } from "../../assets/colors/Colors"
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TaskManage = ( { route, navigation } ) => {
  const { func, taskDetails } = route.params

  const [ showDate, setShowDate ] = useState( false )
  const [ showStart, setShowStart ] = useState( false )
  const [ showEnd, setShowEnd ] = useState( false )

  const [ taskTitle, setTaskTitle ] = useState( null )
  const [ taskDesc, setTaskDesc ] = useState( null )
  const [ taskDate, setTaskDate ] = useState( null )
  const [ taskStart, setTaskStart ] = useState( null )
  const [ taskEnd, setTaskEnd ] = useState( null )

  const onChangeDate = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    let fDate = tempDate.getFullYear() + 'Y ' + ( tempDate.getMonth() + 1 ) + 'M ' + tempDate.getDate() + 'D'

    setTaskDate( fDate )
    setShowDate( false )
  }

  const onChangeStart = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    let fTime = tempDate.getHours() + 'H ' + tempDate.getMinutes() + 'M'

    setTaskStart( fTime )
    setShowStart( false )
  }

  const onChangeEnd = ( selectedDate ) => {
    let tempDate = new Date( selectedDate )
    let fTime = tempDate.getHours() + 'H ' + tempDate.getMinutes() + 'M'

    setTaskEnd( fTime )
    setShowEnd( false )
  }

  const {
    container,
    taskMainContainer,
    taskMainLeft,
    taskMainRight,
    headerDividerAlt,
    headerAlt,
    bookmarkContainer,
    bookmark,
    taskManageContainer,
    taskInputContainer,
    taskInputHeader,
    taskInput,
    taskDescInput,
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <View style={ taskMainContainer }>
          <View style={ taskMainLeft }>
            <View style={ headerDividerAlt }>
              <Text style={ headerAlt }>{ func === 'add' ? 'ADD TASK' : 'EDIT TASK' }</Text>
            </View>

            <KeyboardAvoidingView behavior="height" style={ taskManageContainer }>
              <View style={ taskInputContainer }>
                <Text style={ taskInputHeader }>Title</Text>
                <TextInput
                  placeholder="your title"
                  placeholderTextColor={ colors.skyblue }
                  style={ taskInput }
                  onChangeText={ text => setTaskTitle( text ) }
                  value={ taskTitle }
                />
              </View>
              
              <View style={ taskInputContainer }>
                <Text style={ taskInputHeader }>Description</Text>
                <TextInput
                  multiline
                  placeholder="your description"
                  placeholderTextColor={ colors.skyblue }
                  style={ [ taskInput, taskDescInput ] }
                  onChangeText={ text => setTaskDesc( text ) }
                  value={ taskDesc }
                />
              </View>

              <View style={ taskInputContainer }>
                <Text style={ taskInputHeader }>Date</Text>
                <TouchableOpacity 
                  activeOpacity={ 0.75 }
                  onPress={ () => setShowDate( true ) }
                >
                  <TextInput
                    editable={ false }
                    placeholder="your task date"
                    placeholderTextColor={ colors.skyblue }
                    style={ taskInput }
                    value={ taskDate }
                  />
                </TouchableOpacity>
              </View>

              { taskDate ? 
                <View style={ taskInputContainer }>
                  <Text style={ taskInputHeader }>Start Time</Text>
                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={ () => setShowStart( true ) }
                  >
                    <TextInput
                      editable={ false }
                      placeholder="your start time"
                      placeholderTextColor={ colors.skyblue }
                      style={ taskInput }
                      value={ taskStart }
                    />
                  </TouchableOpacity>
                </View>
                :
                null
              }

              { taskDate && taskStart ?
                <View style={ taskInputContainer }>
                  <Text style={ taskInputHeader }>End Time</Text>
                  <TouchableOpacity 
                    activeOpacity={ 0.75 }
                    onPress={ () => setShowEnd( true ) }
                  >
                    <TextInput
                      editable={ false }
                      placeholder="your end time"
                      placeholderTextColor={ colors.skyblue }
                      style={ taskInput }
                      value={ taskEnd }
                    />
                  </TouchableOpacity>
                </View>
                :
                null
              }
            </KeyboardAvoidingView>

            <Image
              source={ require( "../../assets/images/town.jpg" ) }
              style={{ 
                width: 'fit-content', 
                height: 120,
                resizeMode: 'cover',
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20
              }}
            />
          </View>

          <View style={ taskMainRight }>
            <View style={ bookmarkContainer }>
              <Text style={ bookmark }>M</Text>
              <Text style={ bookmark }>Y</Text>
              <Text style={ bookmark }>T</Text>
              <Text style={ bookmark }>A</Text>
              <Text style={ bookmark }>S</Text>
              <Text style={ bookmark }>K</Text>
            </View>

            <CTAButtonList navigation={ navigation } isAddEdit={ true } />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <DateTimePickerModal
        isVisible={ showDate }
        mode={ "date" }
        is24Hour={ true }
        display={ "calendar" }
        onConfirm={ onChangeDate }
        onCancel={ () => setShowDate( false ) }
      />
      
      <DateTimePickerModal 
        isVisible={ showStart }
        mode={ "time" }
        is24Hour={ true }
        display={ "clock" }
        onConfirm={ onChangeStart }
        onCancel={ () => setShowStart( false ) }
      />

      <DateTimePickerModal 
        isVisible={ showEnd }
        mode={ "time" }
        is24Hour={ true }
        display={ "clock" }
        onConfirm={ onChangeEnd }
        onCancel={ () => setShowEnd( false ) }
      />
    </SafeAreaView>
  )
}

export default TaskManage