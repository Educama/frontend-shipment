import { AbstractListResource } from "educama-frontend-shared";
import { EnabledTaskResource } from "./enabled-task.resource";

export class EnabledTaskListResource extends AbstractListResource {
  public enabledTasks: EnabledTaskResource[];
}
