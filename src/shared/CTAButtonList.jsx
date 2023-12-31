import { View, TouchableOpacity, Image } from "react-native"
import { AppStyles } from "../styles/AppStyles"

const CTAButtonList = ( { navigation, isAddEdit = false } ) => {
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
    </View>
  )
}

export default CTAButtonList