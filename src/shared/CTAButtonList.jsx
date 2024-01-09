import { View, TouchableOpacity, Image } from "react-native"
import { AppStyles } from "../styles/AppStyles"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";

const CTAButtonList = ( { navigation, isAddEdit = false } ) => {
  const [ calendar, setCalendar ] = useState( false )

  const onFilterDate = ( selectedDate ) => {
    console.log( selectedDate )
  }

  const {
    ctaContainer,
    ctaButtonContainer,
    ctaButton  
  } = AppStyles

  return (
    <View style={ ctaContainer }>
      { isAddEdit ? 
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            
          }}
          style={ ctaButtonContainer }
        >
          <Image
            source={ require( '../assets/icons/check-dark.png' ) }
            resizeMode='contain'
            style={ ctaButton }
          />
        </TouchableOpacity>
        :
        null
      }

      { !isAddEdit ? 
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            navigation.reset( { index: 0, routes: [ { name: 'Home' } ] } )
          }}
          style={ ctaButtonContainer }
        >
          <Image
            source={ require( '../assets/icons/menu.png' ) }
            resizeMode='contain'
            style={ ctaButton }
          />
        </TouchableOpacity>
        :
        null
      }

      { !isAddEdit ? 
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            setCalendar( true )
          }}
          style={ ctaButtonContainer }
        >
          <Image
            source={ require( '../assets/icons/calendar.png' ) }
            resizeMode='contain'
            style={ ctaButton }
          />
        </TouchableOpacity>
        :
        null
      }

      { !isAddEdit ? 
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            navigation.navigate( "TaskManage", {
              func: 'add',
              taskDetails: []
            })
          }}
          style={ ctaButtonContainer }
        >
          <Image
            source={ require( '../assets/icons/plus.png' ) }
            resizeMode='contain'
            style={ ctaButton }
          />
        </TouchableOpacity>
        :
        null
      }

      <TouchableOpacity
        activeOpacity={ 0.75 }
        onPress={ () => {
          navigation.goBack()
        }}
        style={ ctaButtonContainer }
      >
        <Image
          source={ require( '../assets/icons/return.png' ) }
          resizeMode='contain'
          style={ ctaButton }
        />
      </TouchableOpacity>

      <DateTimePickerModal 
        isVisible={ calendar }
        mode={ "date" }
        is24Hour={ true }
        display={ 'calendar' }
        onConfirm={ onFilterDate }
        onCancel={ () => setCalendar( false ) }
      />
    </View>
  )
}

export default CTAButtonList