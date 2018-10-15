import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { EnabledTaskListPageComponent } from "./container/enabled-task-list-page.component";
import { EnabledTaskListComponent } from "./presentationals/enabled-task-list.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    EnabledTaskListPageComponent,
    EnabledTaskListComponent
  ],
  exports: [
    EnabledTaskListPageComponent
  ]
})
export class EnabledTaskListModule {
}
