import { v4 as uuid } from 'uuid'

const NoteSchema: Realm.ObjectSchema = {
  name: 'Note',
  primaryKey: '_noteId',
  properties: {
    _noteId: { type: 'uuid', indexed: true, default: uuid },
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