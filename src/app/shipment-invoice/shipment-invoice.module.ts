import { FrontendSharedModule } from "educama-frontend-shared";
import { NgModule } from "@angular/core";
import { ShipmentInvoiceComponent } from "./presentationals/shipment-invoice.component";
import { ShipmentInvoicePageComponent } from "./container/shipment-invoice-page.component";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    ShipmentInvoiceComponent,
    ShipmentInvoicePageComponent
  ],
  exports: [
    ShipmentInvoiceComponent
  ]
})
export class ShipmentInvoiceModule {
}
