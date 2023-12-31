import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { AppStyles } from "../styles/AppStyles"
import CTAButtonList from "../shared/CTAButtonList"

const TaskManage = ( { route, navigation } ) => {
  const { func } = route.params

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
    taskInput
  } = AppStyles

  return (
    <SafeAreaView style={ container }>
      <View style={ taskMainContainer }>
        <View style={ taskMainLeft }>
          <View style={ headerDividerAlt }>
            <Text style={ headerAlt }>{ func === 'add' ? 'ADD TASK' : 'EDIT TASK' }</Text>
          </View>

          <KeyboardAvoidingView behavior="height" style={ taskManageContainer }>
            <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
              <View style={ taskInputContainer }>
                <Text style={ taskInputHeader }>Title</Text>
                <TextInput
                  placeholder="your title"
                  style={ taskInput }
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>

          <Image
            source={ require( "../assets/images/town.jpg" ) }
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
    </SafeAreaView>
  )
}

export default TaskManage