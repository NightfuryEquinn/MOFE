import { View, TouchableOpacity, Image } from "react-native"
import { AppStyles } from "../styles/AppStyles"
import PopupModal from "./PopupModal"
import { useState } from "react"

const CTADetailButtonList = ( { navigation, isCompleted } ) => {
  const [ showDeleteDialog, setShowDeleteDialog ] = useState( false )

  const {
    ctaDetailContainerWrapper,
    ctaDetailContainerWrapperCompleted,
    ctaDetailContainer,
    ctaDetailButtonContainer,
    ctaDetailButtonContainerCompleted,
    ctaDetailButton
  } = AppStyles

  return (
    <View style={ isCompleted ? ctaDetailContainerWrapperCompleted : ctaDetailContainerWrapper }>
      <PopupModal 
        showDialog={ showDeleteDialog }
        setShowDialog={ setShowDeleteDialog }
        modalTitle={ "DELETE?" }
      />
      
      <View style={ ctaDetailContainer }>
        <TouchableOpacity
          activeOpacity={ 0.75 }
          onPress={ () => {
            setShowDeleteDialog( true )
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
    </View>
  )
}

export default CTADetailButtonList