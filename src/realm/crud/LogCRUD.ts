import moment from "moment"
import realmDb from "../RealmDB"
import uuid from "react-native-uuid"

interface Log {
  _logId: string
  description: string
  date: string
}

interface LogGroup {
  month: string
  monthLog: Log[]
}

export const getLogs = (): LogGroup[] => {
  try {
    const logs = realmDb.objects( 'Log' )
    const logArray = logs.map( log => ( { ...log } ) )
    const logGroup: any = {}

    logArray.forEach( log => {
      const groupMonthYear: any = log.date
      const key: string = groupMonthYear.slice( -7 )

      if( !logGroup[ key ] ) {
        logGroup[ key ] = { month: key, monthLog: [] }
      }

      logGroup[ key ].monthLog.push( log )
    })

    const sortedGetLogs: LogGroup[] = sortLog( Object.values( logGroup ) )

    return sortedGetLogs
  } catch ( err ) {
    console.log( err )

    return []
  }
}

export const getLogToday = (): boolean => {
  try {
    const todayDate = moment( Date.now() ).format( "DD MM YYYY" )
    const logs = realmDb.objects( 'Log' ).filtered( "date == $0", todayDate )
    const logArray = logs.map( log => ( { ...log } ) )
  
    return logArray.length > 0
  } catch ( err ) {
    console.log( err )

    return false
  }
}

export const getFilteredLog = ( date: string ): LogGroup[] => {
  try {
    // Create default empty log
    insertDefaultLog( date )

    const logs = realmDb.objects( 'Log' ).filtered( "date == $0", date )
    const logArray = logs.map( log => ( { ...log } ) )
    const logGroup: any = {}

    logArray.forEach( log => {
      const groupMonthYear: any = log.date
      const key: string = groupMonthYear.slice( -7 )

      if( !logGroup[ key ] ) {
        logGroup[ key ] = { month: key, monthLog: [] }
      }

      logGroup[ key ].monthLog.push( log )
    })

    const filteredLog: LogGroup[] = Object.values( logGroup )

    return filteredLog
  } catch ( err ) {
    console.log( err )

    return []
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
        logToUpdate.description = description;
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

const sortLog = ( logGroup: LogGroup[] ): LogGroup[] => {
  try {
    const sortedLogGroup: LogGroup[] = logGroup.map( ( group ): LogGroup => {
      const sortedMonthLog = [ ...group.monthLog ].sort( ( log1: Log, log2: Log ) => {
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
  
    sortedLogGroup.sort( ( group1: LogGroup, group2: LogGroup ) => {
      const date1 = moment( group1.month, 'MM YYYY' ).toDate()
      const date2 = moment( group2.month, 'MM YYYY' ).toDate()
  
      if( date1 > date2 ) {
        return -1
      } else if( date1 < date2 ) {
        return 1
      } else {
        return 0
      }
    })
  
    return sortedLogGroup
  } catch ( err ) {
    console.log( err )

    return []
  }
}