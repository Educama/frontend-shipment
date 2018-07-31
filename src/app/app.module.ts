// angular modules
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// ngrx module
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
// global app parts
import { AppComponent } from "./app.component";
import {
  APP_ROUTING_PROVIDERS,
  ROUTING
} from "./app.routes";
import {
  INITIAL_STATE,
  reducers
} from "./app.reducers";
import { environment } from "../environments/environment";
// shared module and feature modules
import { FrontendSharedModule } from "educama-frontend-shared";
import { ShipmentCaptureModule } from "./shipment-capture/shipment-capture.module";
import { EnabledTaskListModule } from "./enabled-task-list/enabled-task-list.module";
import { CompletedTaskListModule } from "./completed-task-list/completed-task-list.module";
import { ShipmentRoutingModule } from "./shipment-routing/shipment-routing.module";
import { ShipmentCommonModule } from "./shipment-common/shipment-common.module";
import { TaskListModule } from "./task-list/task-list.module";
import { ShipmentListModule } from "./shipment-list/shipment-list.module";
import { OrganizeFlightFormModule } from "./organize-flight-form/organize-flight-form.module";
import { ShipmentInvoiceModule } from "./shipment-invoice/shipment-invoice.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    ROUTING,
    FrontendSharedModule.forRoot(),
    ShipmentCaptureModule,
    ShipmentCommonModule,
    ShipmentListModule,
    ShipmentRoutingModule,
    TaskListModule,
    EnabledTaskListModule,
    CompletedTaskListModule,
    OrganizeFlightFormModule,
    ShipmentInvoiceModule,
    StoreModule.forRoot(reducers, { initialState: INITIAL_STATE }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    APP_ROUTING_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
