import { useState } from "react"
import { View, TouchableOpacity, Image } from "react-native"

import { AppStyles } from "../styles/AppStyles"
import PopupModal from "./PopupModal"
import { completeTask, deleteTask } from "../realm/crud/TaskCRUD"
import { completeNote, deleteNote } from "../realm/crud/NoteCRUD"

const CTADetailButtonList = ( { 
  navigation, 
  isCompleted,
  manageViewName,
  details
} ) => {
  const [ showDeleteDialog, setShowDeleteDialog ] = useState( false )
  const [ showCompleteDialog, setShowCompleteDialog ] = useState( false )

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
        showDialog={ showCompleteDialog }
        setShowDialog={ setShowCompleteDialog }
        modalTitle={ "COMPLETE?" }
        manageComplete={ () => { 
          manageViewName === "taskManage" ? completeTask( details[ "_taskId" ], true ) : completeNote( details[ "_noteId" ], true )
          navigation.reset( { index: 0, routes: [ { name: 'Home' } ] } )
        }}
      />

      <PopupModal 
        showDialog={ showDeleteDialog }
        setShowDialog={ setShowDeleteDialog }
        modalTitle={ "DELETE?" }
        manageDelete={ () => { 
          manageViewName === "taskManage" ? deleteTask( details[ "_taskId" ] ) : deleteNote( details[ "_noteId" ] )
          navigation.reset( { index: 0, routes: [ { name: 'Home' } ] } )
        }}
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
              navigation.navigate( manageViewName, {
                func: 'edit',
                details: details
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
              setShowCompleteDialog( true )
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