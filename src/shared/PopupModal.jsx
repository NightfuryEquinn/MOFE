import { Text, TouchableOpacity, View } from "react-native"
import Modal from "react-native-modal"

import { AppStyles } from "../styles/AppStyles"
import { colors } from "../assets/colors/Colors"

const PopupModal = ( { 
  showDialog, 
  setShowDialog, 
  modalTitle, 
  manageDelete, 
  manageComplete 
} ) => {
  const {
    modalContainer,
    modalContent,
    modalText,
    modalButtonContainer,
    modalButton,
    modalButtonText
  } = AppStyles

  return (
    <Modal
      isVisible={ showDialog }
      onSwipeComplete={ () => setShowDialog( false ) }
      onBackdropPress={ () => setShowDialog( false ) }
      swipeDirection={ 'right' }
      animationIn={ 'fadeIn' }
      animationOut={ 'fadeOut' }
      style={ modalContainer }
      backdropColor={ colors.greyblue }
    >
      <View style={ modalContent }>
        <Text style={ modalText }>{ modalTitle }</Text>

        <View style={ modalButtonContainer }>
          <TouchableOpacity
            activeOpacity={ 0.75 }
            style={ modalButton }
            onPress={ () => {
              manageDelete ? manageDelete() : null
              manageComplete ? manageComplete() : null
              setShowDialog( false )
            }}
          >
            <Text style={ modalButtonText }>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={ 0.75 }
            style={ modalButton }
            onPress={ () => {
              setShowDialog( false )
            }}
          >
            <Text style={ modalButtonText }>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default PopupModal