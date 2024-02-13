import uuid from 'react-native-uuid';

const NoteSchema: Realm.ObjectSchema = {
  name: 'Note',
  primaryKey: '_noteId',
  properties: {
    _noteId: { type: 'string', indexed: true, default: uuid.v4() },
    _noteNotificationId: { type: 'string', default: uuid.v4() },
    title: { type: 'string', default: null },
    description: { type: 'string', default: null },
    startDate: { type: 'string', default: null },
    endDate: { type: 'string', default: null },
    startTime: { type: 'string', default: null },
    endTime: { type: 'string', default: null },
    isCompleted: { type: 'bool', default: false }
  }
}

export { NoteSchema }