import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { CompletedTaskListPageComponent } from "./container/completed-task-list-page.component";
import { CompletedTaskListComponent } from "./presentationals/completed-task-list.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    CompletedTaskListPageComponent,
    CompletedTaskListComponent
  ],
  exports: [
    CompletedTaskListPageComponent
  ]
})
export class CompletedTaskListModule {
}
