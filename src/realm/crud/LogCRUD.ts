import moment from "moment"
import realmDb from "../RealmDB"
import uuid from "react-native-uuid"

export const getLogs = () => {
  try {
    const logs = realmDb.objects( 'Log' )
    const logArray = logs.map( log => ( { ...log } ) )
    const logGroup: any = {}

    logArray.forEach( log => {
      const groupMonthYear: any = log.date
      const key = groupMonthYear.slice( -7 )

      if( !logGroup[ key ] ) {
        logGroup[ key ] = { month: key, monthLog: [] }
      }

      logGroup[ key ].monthLog.push( log )
    })

    return sortLog( Object.values( logGroup ) )
  } catch ( err ) {
    console.log( err )
  }
}

export const getLogToday = () => {
  try {
    const todayDate = moment( Date.now() ).format( "DD MM YYYY" )
    const logs = realmDb.objects( 'Log' ).filtered( "date == $0", todayDate )
    const logArray = logs.map( log => ( { ...log } ) )
  
    return logArray.length > 0
  } catch ( err ) {
    console.log( err )
  }
}

export const getFilteredLog = ( date: string ) => {
  try {
    // Create default empty log
    insertDefaultLog( date )

    const logs = realmDb.objects( 'Log' ).filtered( "date == $0", date )
    const logArray = logs.map( log => ( { ...log } ) )
    const logGroup: any = {}

    logArray.forEach( log => {
      const groupMonthYear: any = log.date
      const key = groupMonthYear.slice( -7 )

      if( !logGroup[ key ] ) {
        logGroup[ key ] = { month: key, monthLog: [] }
      }

      logGroup[ key ].monthLog.push( log )
    })

    return Object.values( logGroup )
  } catch ( err ) {
    console.log( err )
  }
}

export const sortLog = ( logGroup: any[] ) => {
  const sortedLogGroup = logGroup.map( group => {
    const sortedMonthLog = [ ...group.monthLog ].sort( ( log1, log2 ) => {
      const date1 = moment( log1.date, "DD MM YYYY" ).toDate()
      const date2 = moment( log2.date, "DD MM YYYY" ).toDate()

      if( date1 < date2 ) {
        return -1
      } else if( date1 > date2 ) {
        return 1
      } else {
        return 0
      }
    })

    return { ...group, monthLog: sortedMonthLog }
  })

  sortedLogGroup.sort( ( group1, group2 ) => {
    const date1 = moment( group1.month, 'MM YYYY' ).toDate();
    const date2 = moment( group2.month, 'MM YYYY' ).toDate();

    if ( date1 > date2 ) {
      return -1
    } else if ( date1 < date2 ) {
      return 1
    } else {
      return 0
    }
  })

  return sortedLogGroup
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

export const insertDefaultLog = ( date: string ) => {
  try {
    realmDb.write( () => {
      realmDb.create( 'Log', {
        _logId: uuid.v4(),
        description: "",
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