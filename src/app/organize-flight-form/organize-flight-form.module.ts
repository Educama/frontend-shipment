import { FrontendSharedModule } from "educama-frontend-shared";
import { OrganizeFlightFormComponent } from "./presentationals/organize-flight-form.component";
import { NgModule } from "@angular/core";
import { OrganizeFlightFormPageComponent } from "./container/organize-flight-form-page.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    OrganizeFlightFormComponent,
    OrganizeFlightFormPageComponent
  ],
  exports: [
    OrganizeFlightFormComponent
  ]
})
export class OrganizeFlightFormModule {
}
