import { Text, TouchableOpacity, View } from "react-native"
import { AppStyles } from "../styles/AppStyles"
import Modal from "react-native-modal"
import { colors } from "../assets/colors/Colors"

const PopupModal = ( { showDialog, setShowDialog, modalTitle } ) => {
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

            }}
          >
            <Text style={ modalButtonText }>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={ 0.75 }
            style={ modalButton }
            onPress={ () => {

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