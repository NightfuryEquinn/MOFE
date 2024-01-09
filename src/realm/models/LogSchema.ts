import { v4 as uuid } from "uuid"

const LogSchema: Realm.ObjectSchema = {
  name: "Log",
  primaryKey: "_logId",
  properties: {
    _logId: { type: 'uuid', indexed: true, default: uuid },
    description: { type: 'string', default: null },
    date: { type: 'string', default: null }
  }
}

export { LogSchema }