import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { TaskListPageComponent } from "./container/task-list-page.component";
import { TaskListComponent } from "./presentationals/task-list.component";
import { CaseUITaskListComponent } from "./caseUI-presentationals/caseUI-task-list.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    TaskListPageComponent,
    TaskListComponent,
    CaseUITaskListComponent
  ],
  exports: [
    TaskListPageComponent
  ]
})
export class TaskListModule {
}
