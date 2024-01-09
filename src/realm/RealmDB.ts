import Realm from "realm";
import { TaskSchema } from "./models/TaskSchema";
import { LogSchema } from "./models/LogSchema";

const realmDb = new Realm({
  schema: [
    TaskSchema,
    LogSchema
  ]
})

export default realmDb