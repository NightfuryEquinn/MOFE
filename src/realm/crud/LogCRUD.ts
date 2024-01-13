import moment from "moment"
import realmDb from "../RealmDB"
import uuid from "react-native-uuid"

export const getLogs = () => {
  try {
    const logs = realmDb.objects( 'Log' )
    const logArray = logs.map( log => ( { ...log } ) )
  
    return logArray
  } catch ( err ) {
    console.log( err )
  }
}

export const getLogToday = () => {
  try {
    const todayDate = moment( Date.now() ).format( "MM YYYY" )
    const logs = realmDb.objects( 'Log' ).filtered( `date ENDSWITH "${ todayDate }" ` )
    const logArray = logs.map( log => ( { ...log } ) )
  
    return logArray ? true : false
  } catch ( err ) {
    console.log( err )
  }
}

export const insertLog = ( description: string, date: string ) => {
  try {
    realmDb.write( () => {
      realmDb.create( 'Log', {
        _logId: uuid.v4(),
        description: description,
        date: date
      })
    })
  } catch ( err ) {
    console.log( err )
  }
}

export const updateLog = ( _logId: string, description: string ) => {
  const logToUpdate = realmDb.objectForPrimaryKey( 'Log', _logId )

  try {
    if( logToUpdate ) {
      realmDb.write( () => {
        logToUpdate.description = description
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

export const deleteLog = ( _logId: string ) => {
  const logToDelete = realmDb.objectForPrimaryKey( 'Log', _logId )

  try {
    if( logToDelete ) {
      realmDb.write( () => {
        realmDb.delete( logToDelete )
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}