import Realm from "realm";
import { TaskSchema } from "./models/TaskSchema";

const realmDb = new Realm({
  schema: [
    TaskSchema,
  ]
})

export default realmDb