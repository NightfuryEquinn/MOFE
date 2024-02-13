import moment from "moment"
import uuid from "react-native-uuid"

import realmDb from "../RealmDB"
import { convertDateTimeToDate, convertDateToDateFormat, formatDateToDisplay, formatTimeToDisplay, isDateBetween } from "../../assets/utils/Formatter"
import Notifications from "../../Notifications"

interface Note {
  _noteId: string,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  isCompleted: boolean
}

interface NoteGroup {
  month: string,
  monthNote: Note[],
  notePending: number,
  noteCompleted: number
}

export const getNotes = (): NoteGroup[] => {
  try {
    const notes = realmDb.objects( 'Note' )
    const noteArray = notes.map( note => ( { ...note } ) )
    const noteGroup: any = {}
    const seenNoteIds = new Set()

    noteArray.forEach( note => {
      if( seenNoteIds.has( note._noteId ) ) {
        return 
      }

      const currentDate: Date = moment( Date.now() ).toDate()
      const startDate: Date = convertDateToDateFormat( note.startDate )
      const endDate: Date = convertDateToDateFormat( note.endDate )

      if( isDateBetween( currentDate, startDate, endDate ) ) {
        const groupMonthYear: any = note.startDate
        const key: string = formatDateToDisplay( groupMonthYear ).slice( -7 )
  
        let notePending: number = 0
        let noteCompleted: number = 0
  
        if( !noteGroup[ key ] ) {
          noteGroup[ key ] = { month: key, monthNote: [], notePending, noteCompleted }
        }
  
        if( !note.isCompleted ) {
          noteGroup[ key ].notePending += 1
        } else {
          noteGroup[ key ].noteCompleted += 1
        }
  
        noteGroup[ key ].monthNote.push( note )
      }

      seenNoteIds.add( note._noteId )
    })

    const sortedGetNotes: NoteGroup[] = sortNote( Object.values( noteGroup ) )

    return sortedGetNotes
  } catch ( err ) {
    console.log( err )

    return []
  }
}

export const getFilteredNote = ( date: string ): NoteGroup[] => {
  try {
    const notes = realmDb.objects( 'Note' )
    const noteArray = notes.map( note => ( { ...note } ) )
    const noteGroup: any = {}
    const seenNoteIds = new Set()

    noteArray.forEach( note => {
      if( seenNoteIds.has( note._noteId ) ) {
        return
      }

      const startDate = convertDateToDateFormat( note.startDate )
      const endDate = convertDateToDateFormat( note.endDate )
      const filterDate = convertDateToDateFormat( date )

      if( isDateBetween( filterDate, startDate, endDate ) ) {
        const groupMonthYear: any = note.startDate
        const key: string = formatDateToDisplay( groupMonthYear ).slice( -7 )

        let notePending: number = 0
        let noteCompleted: number = 0

        if( !noteGroup[ key ] ) {
          noteGroup[ key ] = { month: key, monthNote: [], notePending, noteCompleted }
        }

        if( !note.isCompleted ) {
          noteGroup[ key ].notePending += 1
        } else {
          noteGroup[ key ].noteCompleted += 1
        }

        noteGroup[ key ].monthNote.push( note )
      }

      seenNoteIds.add( note._noteId )
    })

    const filteredNote: NoteGroup[] = Object.values( noteGroup )

    return filteredNote
  } catch ( err ) {
    console.log( err )

    return []
  }
}

export const insertNote = ( title: string, description: string, startDate: string, endDate: string, startTime: string, endTime: string ) => {
  try {
    const _notificationId = uuid.v4()

    realmDb.write( () => {
      realmDb.create( 'Note', {
        _noteId: uuid.v4(),
        _noteNotificationId: _notificationId,
        title: title,
        description: description,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        isCompleted: false
      })
    })

    Notifications.scheduleNotification( _notificationId, title, description, convertDateTimeToDate( startDate, startTime ) )
  } catch ( err ) {
    console.log( err )
  }
}

export const updateNote = ( _noteId: string, _notificationId: string, title: string, description: string, startDate: string, endDate: string, startTime: string, endTime: string ) => {
  const noteToUpdate = realmDb.objectForPrimaryKey( 'Note', _noteId )

  try {
    if( noteToUpdate ) {
      realmDb.write( () => {
        noteToUpdate.title = title;
        noteToUpdate.description = description;
        noteToUpdate.startDate = startDate;
        noteToUpdate.endDate = endDate;
        noteToUpdate.startTime = startTime;
        noteToUpdate.endTime = endTime;
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

export const completeNote = ( _noteId: string, isCompleted: boolean ) => {
  const noteToUpdate = realmDb.objectForPrimaryKey( 'Note', _noteId )

  try {
    if( noteToUpdate ) {
      realmDb.write( () => {
        noteToUpdate.isCompleted = isCompleted
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

export const deleteNote = ( _noteId: string, _notificationId: string ) => {
  const noteToDelete = realmDb.objectForPrimaryKey( 'Note', _noteId )

  try {
    if( noteToDelete ) {
      realmDb.write( () => {
        realmDb.delete( noteToDelete )
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

const sortNote = ( noteGroup: NoteGroup[] ): NoteGroup[] => {
  try {
    const sortedNoteGroup: NoteGroup[] = noteGroup.map( ( group ): NoteGroup => {
      const sortedMonthNote = [ ...group.monthNote ].sort( ( note1: Note, note2: Note ) => {
        const noteDate1 = formatDateToDisplay( note1.startDate )
        const noteTime1 = formatTimeToDisplay( note1.startTime )
        const noteDatetime1 = noteDate1 + " " + noteTime1

        const noteDate2 = formatDateToDisplay( note2.startDate )
        const noteTime2 = formatTimeToDisplay( note2.startTime )
        const noteDatetime2 = noteDate2 + " " + noteTime2

        const datetime1 = moment( noteDatetime1, "DD MM YYYY H:mma" ).toDate()
        const datetime2 = moment( noteDatetime2, "DD MM YYYY H:mma" ).toDate()

        if( datetime1 < datetime2 ) {
          return -1
        } else if( datetime1 > datetime2 ) {
          return 1
        } else {
          return 0
        }
      })

      return { ...group, monthNote: sortedMonthNote }
    })

    sortedNoteGroup.sort( ( group1: NoteGroup, group2: NoteGroup ) => {
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

    return sortedNoteGroup
  } catch ( err ) {
    console.log( err )

    return []
  }
}