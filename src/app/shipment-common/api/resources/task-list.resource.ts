import { TaskResource } from "./task.resource";
import { AbstractListResource } from "educama-frontend-shared";

export class TaskListResource extends AbstractListResource {
  public tasks: TaskResource[];
}
