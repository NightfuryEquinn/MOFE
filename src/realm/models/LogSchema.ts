import uuid from 'react-native-uuid';

const LogSchema: Realm.ObjectSchema = {
  name: "Log",
  primaryKey: "_logId",
  properties: {
    _logId: { type: 'string', indexed: true, default: uuid.v4() },
    description: { type: 'string', default: null },
    date: { type: 'string', default: null }
  }
}

export { LogSchema }