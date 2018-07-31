import { NgModule } from "@angular/core";
import { FrontendSharedModule } from "educama-frontend-shared";
import { ShipmentListPageComponent } from "./container/shipment-list-page.component";
import { ShipmentListComponent } from "./presentationals/shipment-list.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    ShipmentListPageComponent,
    ShipmentListComponent
  ],
  exports: [
    ShipmentListPageComponent
  ]
})
export class ShipmentListModule {
}
