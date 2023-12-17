import { v4 as uuid } from "uuid"

interface Task {
  id: string,
  title: string,
  description: string,
  date: string,
  startTime: string,
  endTime: string,
  isCompleted: boolean
}

const TaskSchema: Realm.ObjectSchema = {
  name: "Task",
  primaryKey: "_taskId",
  properties: {
    _taskId: { type: 'uuid', indexed: true, default: uuid },
    title: { type: 'string', default: null },
    description: { type: 'string', default: null },
    date: { type: 'string', default: null },
    startTime: { type: 'string', default: null },
    endTime: { type: 'string', default: null },
    isCompleted: { type: 'bool', default: false }
  }
}

export type { Task }
export { TaskSchema }