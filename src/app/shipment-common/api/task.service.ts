import { Injectable } from "@angular/core";
import {
  AddErrorWithKeyAction,
  AddErrorWithTextAction,
  RestClientService
} from "educama-frontend-shared";
import {
  Observable,
  throwError as observableThrowError
} from "rxjs";
import { TaskListResource } from "./resources/task-list.resource";
import { environment } from "../../../environments/environment";
import { Store } from "@ngrx/store";
import { State } from "../../app.reducers";
import { catchError } from "rxjs/operators";

/*
 * Service to communicate with Task Resource
 */
@Injectable()
export class TaskService {

  private TASK_RESOURCE_PATH = "tasks";

  constructor(private _restClientService: RestClientService,
              private _store: Store<State>) {
  }

  /*
   * Find all tasks
   *
   * @return An observable array of all active tasks
   */
  public findTasks(): Observable<TaskListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/active")
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Find all active tasks for a shipment
   *
   * @return An observable array of all active tasks
   */
  public findTasksForShipment(trackingId: string): Observable<TaskListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/active/" + trackingId)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Find all enabled tasks
   *
   * @return An observable array of all enabled tasks
   */
  public findAllEnabledTasks(): Observable<TaskListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/enabled")
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Find all enabled tasks for a specific shipment
   *
   * @return An observable array of all enabled tasks for a shipment
   */
  public findEnabledTasksToShipment(trackingId: string): Observable<TaskListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/enabled/" + trackingId)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
  * Find all completed tasks for a specific shipment
  *
  * @return An observable array of all enabled tasks for a shipment
  */
  public findCompletedTasksForShipment(trackingId: string): Observable<TaskListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/completed/" + trackingId)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
  * Start a enabled task
  *
  * @return An observable array of all remaining enabled tasks for a shipment
  */
  public manuallyStartEnabledTask(trackingId: string, name: string): Observable<TaskListResource> {
    return this._restClientService
               .post(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/enabled/start/" + trackingId + "/" + name)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
  * Complete a task by its name
  *
  * @return An observable array of all remaining active tasks for a shipment
  */
  public manualyCompleteTaskByName(trackingId: string, name: string): Observable<TaskListResource> {
    return this._restClientService
               .post(environment.apiBaseUrl, this.TASK_RESOURCE_PATH + "/active/complete/" + trackingId + "/" + name)
               .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: any) {
    let errMsg: string;
    if (error.status === 0) {
      errMsg = "REST-CLIENT-SERVICE_ERROR-SERVER-UNREACHABLE";
      this._store.dispatch(new AddErrorWithKeyAction(errMsg));
    } else {
      errMsg = error._body;
      this._store.dispatch(new AddErrorWithTextAction(errMsg));
    }
    return observableThrowError(errMsg);
  }
}
