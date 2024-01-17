import moment from "moment"
import realmDb from "../RealmDB"
import uuid from "react-native-uuid"
import { convertTimeStringToMinutes } from "../../assets/utils/Formatter"

interface Task {
  _taskId: string,
  title: string,
  description: string,
  date: string,
  startTime: string,
  endTime: string,
  isCompleted: boolean
}

interface TaskGroup {
  date: string,
  dateTask: Task[],
  taskPending: number,
  taskCompleted: number
}

export const getTasks = (): TaskGroup[] => {
  try {
    const tasks = realmDb.objects( 'Task' )
    const taskArray = tasks.map( task => ( { ...task } ) )
    const taskGroup: any = {}

    taskArray.forEach( task => {
      const key: any = task.date
      let taskPending: number = 0
      let taskCompleted: number = 0

      if( !taskGroup[ key ] ) {
        taskGroup[ key ] = { date: key, dateTask: [], taskPending, taskCompleted }
      }

      if( !task.isCompleted ) {
        taskGroup[ key ].taskPending += 1
      } else {
        taskGroup[ key ].taskCompleted += 1
      }

      taskGroup[ key ].dateTask.push( task )
    })

    const sortedGetTasks: TaskGroup[] = sortTask( Object.values( taskGroup ) )

    return sortedGetTasks
  } catch ( err ) {
    console.log( err )

    return []
  }
}

export const getFilteredTask = ( date: string ): TaskGroup[] => {
  try {
    const tasks = realmDb.objects( 'Task' ).filtered( "date == $0", date )
    const taskArray = tasks.map( task => ( { ...task } ) )
    const taskGroup: any = {}

    taskArray.forEach( task => {
      const key: any = task.date
      let taskPending: number = 0
      let taskCompleted: number = 0

      if( !taskGroup[ key ] ) {
        taskGroup[ key ] = { date: key, dateTask: [], taskPending, taskCompleted }
      }

      if( !task.isCompleted ) {
        taskGroup[ key ].taskPending += 1
      } else {
        taskGroup[ key ].taskCompleted += 1
      }

      taskGroup[ key ].dateTask.push( task )
    })

    const filteredTask: TaskGroup[] = Object.values( taskGroup )

    return filteredTask
  } catch ( err ) {
    console.log( err )

    return []
  }
}

export const insertTask = ( title: string, description: string, date: string, startTime: string, endTime: string ) => {
  try {
    realmDb.write( () => {
      realmDb.create( 'Task', {
        _taskId: uuid.v4(),
        title: title,
        description: description,
        date: date,
        startTime: startTime,
        endTime: endTime,
        isCompleted: false
      })
    })
  } catch ( err ) {
    console.log( err )
  }
}

export const updateTask = ( _taskId: string, title: string, description: string, date: string, startTime: string, endTime: string ) => {
  const taskToUpdate = realmDb.objectForPrimaryKey( 'Task', _taskId )

  try {
    if( taskToUpdate ) {
      realmDb.write( () => {
        taskToUpdate.title = title;
        taskToUpdate.description = description;
        taskToUpdate.date = date;
        taskToUpdate.startTime = startTime;
        taskToUpdate.endTime = endTime;
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

export const completeTask = ( _taskId: string, isCompleted: boolean ) => {
  const taskToComplete = realmDb.objectForPrimaryKey( 'Task', _taskId )

  try {
    if( taskToComplete ) {
      realmDb.write( () => {
        taskToComplete.isCompleted = isCompleted
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

export const deleteTask = ( _taskId: string ) => {
  const taskToDelete = realmDb.objectForPrimaryKey( 'Task', _taskId )

  try {
    if( taskToDelete ) {
      realmDb.write( () => {
        realmDb.delete( taskToDelete )
      })
    }
  } catch ( err ) {
    console.log( err )
  }
}

const sortTask = ( taskGroup: TaskGroup[] ): TaskGroup[] => {
  try {
    const sortedTaskGroup: TaskGroup[] = taskGroup.map( ( group ): TaskGroup => {
      const sortedDateTask = [ ...group.dateTask ].sort( ( task1: Task, task2: Task ) => {
        const time1 = convertTimeStringToMinutes( task1.startTime )
        const time2 = convertTimeStringToMinutes( task2.startTime )

        if( time1 < time2 ) {
          return -1
        } else if( time1 > time2 ) {
          return 1
        } else {
          return 0
        }
      })

      return { ...group, dateTask: sortedDateTask }
    })

    sortedTaskGroup.sort( ( group1: TaskGroup, group2: TaskGroup ) => {
      const date1 = moment( group1.date, "DD MM YYYY" ).toDate()
      const date2 = moment( group2.date, "DD MM YYYY" ).toDate()

      if( date1 > date2 ) {
        return -1
      } else if( date1 < date2 ) {
        return 1
      } else {
        return 0
      }
    })

    return sortedTaskGroup
  } catch ( err ) {
    console.log( err )

    return []
  }
}