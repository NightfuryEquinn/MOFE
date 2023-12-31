import { View, TouchableOpacity, Image } from "react-native"
import { AppStyles } from "../styles/AppStyles"

const CTADetailButtonList = ( { navigation } ) => {
  const {
    ctaDetailContainer,
    ctaDetailButtonContainer,
    ctaDetailButton
  } = AppStyles

  return (
    <View style={ ctaDetailContainer }>
      <TouchableOpacity
        activeOpacity={ 0.75 }
        onPress={ () => {
          
        }}
        style={ ctaDetailButtonContainer }
      >
        <Image
          source={ require( '../assets/icons/delete.png' ) }
          resizeMode='contain'
          style={ ctaDetailButton }
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={ 0.75 }
        onPress={ () => {
          
        }}
        style={ ctaDetailButtonContainer }
      >
        <Image
          source={ require( '../assets/icons/edit.png' ) }
          resizeMode='contain'
          style={ ctaDetailButton }
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={ 0.75 }
        onPress={ () => {
          
        }}
        style={ ctaDetailButtonContainer }
      >
        <Image
          source={ require( '../assets/icons/check.png' ) }
          resizeMode='contain'
          style={ ctaDetailButton }
        />
      </TouchableOpacity>
    </View>
  )
}

export default CTADetailButtonList