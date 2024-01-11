import Realm from "realm";
import { TaskSchema } from "./models/TaskSchema";
import { LogSchema } from "./models/LogSchema";
import { NoteSchema } from "./models/NoteSchema";

const realmDb = new Realm({
  schema: [
    TaskSchema,
    LogSchema,
    NoteSchema
  ]
})

export default realmDb