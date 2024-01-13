import uuid from 'react-native-uuid';

const TaskSchema: Realm.ObjectSchema = {
  name: "Task",
  primaryKey: "_taskId",
  properties: {
    _taskId: { type: 'string', indexed: true, default: uuid.v4() },
    title: { type: 'string', default: null },
    description: { type: 'string', default: null },
    date: { type: 'string', default: null },
    startTime: { type: 'string', default: null },
    endTime: { type: 'string', default: null },
    isCompleted: { type: 'bool', default: false }
  }
}

export { TaskSchema }