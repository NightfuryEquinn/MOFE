import { View, TouchableOpacity, Image } from "react-native"
import { AppStyles } from "../styles/AppStyles"

const CTADetailButtonList = ( { navigation, isCompleted } ) => {
  const {
    ctaDetailContainer,
    ctaDetailContainerCompleted,
    ctaDetailButtonContainer,
    ctaDetailButtonContainerCompleted,
    ctaDetailButton
  } = AppStyles

  return (
    <View style={ isCompleted ? ctaDetailContainerCompleted : ctaDetailContainer }>
      <TouchableOpacity
        activeOpacity={ 0.75 }
        onPress={ () => {
          
        }}
        style={ isCompleted ? ctaDetailButtonContainerCompleted : ctaDetailButtonContainer }
      >
        <Image
          source={ require( '../assets/icons/delete.png' ) }
          resizeMode='contain'
          style={ ctaDetailButton }
        />
      </TouchableOpacity>

      { !isCompleted && 
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            navigation.navigate( "TaskManage", {
              func: 'edit',
              taskDetails: []
            })
          }}
          style={ ctaDetailButtonContainer }
        >
          <Image
            source={ require( '../assets/icons/edit.png' ) }
            resizeMode='contain'
            style={ ctaDetailButton }
          />
        </TouchableOpacity>
      }

      { !isCompleted && 
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
      }
    </View>
  )
}

export default CTADetailButtonList