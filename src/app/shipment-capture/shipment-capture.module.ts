import { NgModule } from "@angular/core";
import { ShipmentCapturePageComponent } from "./container/shipment-capture-page.component";
import { ShipmentCaptureComponent } from "./presentationals/shipment-capture.component";
import { FrontendSharedModule } from "educama-frontend-shared";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    ShipmentCapturePageComponent,
    ShipmentCaptureComponent
  ],
  exports: [
    ShipmentCapturePageComponent
  ]
})
export class ShipmentCaptureModule {
}
