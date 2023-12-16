import Realm from "realm";
import { TaskSchema } from "./models/TaskSchema";

const realm = new Realm({
  schema: [
    TaskSchema,
  ]
})

export default realm