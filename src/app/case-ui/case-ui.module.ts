import { LeftSideBarModule } from "./case-uI-left-side-bar/case-ui-left-side-bar.module";
import { NgModule } from "@angular/core";
import { CaseUiComponent } from "./case-ui.component";
import { CaseUIShipmentDetailModule } from "./case-uI-shipment-detail/case-ui-shipment-detail.module";
import { ROUTING } from "../app.routes";
import { CaseUiCenterAreaModule } from "./case-ui-center-area/case-ui-center-area.module";

@NgModule({
  imports: [
    LeftSideBarModule,
    CaseUIShipmentDetailModule,
    CaseUiCenterAreaModule,
    ROUTING
  ],
  declarations: [
    CaseUiComponent
  ],
  exports: [
    CaseUiComponent
  ]
})
export class CaseUIModule {
}
