import { AbstractListResource } from "educama-frontend-shared";
import { CompletedTaskResource } from "./completed-task.resource";

export class CompletedTaskListResource extends AbstractListResource {
  public completedTasks: CompletedTaskResource[];
}
