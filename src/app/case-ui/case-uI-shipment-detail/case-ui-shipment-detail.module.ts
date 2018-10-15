import { FrontendSharedModule } from "educama-frontend-shared";
import { CaseUIShipmentDetailComponent } from "./presentationals/case-ui-shipment-detail.component";
import { CaseUIShipmentDetailPageComponent } from "./container/case-ui-shipment-detail-page.component";
import { NgModule } from "@angular/core";
import { FieldsetModule } from "primeng/primeng";

@NgModule({
  imports: [
    FrontendSharedModule,
    FieldsetModule
  ],
  declarations: [
    CaseUIShipmentDetailComponent,
    CaseUIShipmentDetailPageComponent
  ],
  exports: [
    CaseUIShipmentDetailPageComponent
  ]
})
export class CaseUIShipmentDetailModule {
}
