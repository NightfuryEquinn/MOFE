import moment from "moment"

export const isDateBetween = ( target: Date, start: Date, end: Date ): boolean => {
  return target >= start && target <= end
}

export const convertTimeStringToMinutes = ( time: string ): number => {
  const [ hours, minutes ] = time.split( 'H' ).map( str => parseInt( str, 10 ) )

  return hours * 60 + minutes
}

export const convertDateToString = ( time: Date ): string => {
  const fDate: string = time.getFullYear() + 'Y ' + ( time.getMonth() + 1 ) + 'M ' + time.getDate() + 'D'

  return fDate
}

export const convertTimeStringToDate = ( time: string ) => {
  if( time ) {
    const splitTime = time.match( /(\d+)H (\d+)M/ )

    if( splitTime ) {
      const hours = parseInt( splitTime[ 1 ], 10 )
      const minutes = parseInt( splitTime[ 2 ], 10 )
  
      const date = new Date()
      date.setHours( hours )
      date.setMinutes( minutes )
  
      return date
    }
  }
}

export const convertDateToDateFormat = ( time: any ): Date => {
  if( time ) {
    const [ years, months, days ] = time.split( ' ' ).map( ( str: string ) => parseInt( str ) )
    const convertToString = years + '-' + months + '-' + days
  
    const convertToDate = new Date( convertToString )
  
    return convertToDate
  }

  return new Date()
}

export const convertDateTimeToDateFormat = ( date: any, time: any ): string => {
  if( date && time ) {
    const [ years, months, days ] = time.split( ' ' ).map( ( str: string ) => parseInt( str ) )
    const convertToString = years + '-' + months + '-' + days
  
    const convertToDate = new Date( convertToString )

    console.log( convertToDate )

    const splitTime = time.match( /(\d+)H (\d+)M/ )
    const hours = parseInt( splitTime[ 1 ], 10 )
    const minutes = parseInt( splitTime[ 2 ], 10 )

    convertToDate.setHours( hours )
    convertToDate.setMinutes( minutes )
  
    return convertToDate.toLocaleString()
  }

  return ""
}

export const formatDateToDisplay = ( time: string ): string => {
  const [ years, months, days ] = time.split( ' ' ).map( str => parseInt( str ) )
  const convertToString = years + '-' + months + '-' + days

  const convertToDate = new Date( convertToString )

  const day = convertToDate.getDate().toString().padStart( 2, '0' )
  const month = ( convertToDate.getMonth() + 1 ).toString().padStart( 2, '0' )
  const year = convertToDate.getFullYear().toString()

  return `${ day } ${ month } ${ year }`
}

export const formatTimeToDisplay = ( time: string ): string => {
  const splitTime = time.match( /(\d+)H (\d+)M/ )

  if( !splitTime ) {
    return "Invalid"
  }

  const hours = parseInt( splitTime[ 1 ], 10 )
  const minutes = parseInt( splitTime[ 2 ], 10 )

  const date = new Date()
  date.setHours( hours )
  date.setMinutes( minutes )

  const formattedTime = date.toLocaleTimeString( [], { hour: 'numeric', minute: '2-digit', hour12: true } )

  return formattedTime
}

export const calculateDuration = ( startTime: string, endTime: string ): string => {
  const start = moment( startTime, 'h:mma' )
  const end = moment( endTime, 'h:mma' )

  const duration = moment.duration( end.diff( start ) )

  const hours = Math.floor( duration.asHours() )
  const minutes = duration.minutes()

  return `${ hours } ${ hours > 1 ? 'hours': 'hour' } ${ minutes } ${ minutes > 1 ? 'minutes' : 'minute' }`
}