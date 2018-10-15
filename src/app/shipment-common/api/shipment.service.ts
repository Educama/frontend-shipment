import { Injectable } from "@angular/core";
import {
  AddErrorWithKeyAction,
  AddErrorWithTextAction,
  RestClientService
} from "educama-frontend-shared";
import {
  Observable,
  throwError as observableThrowError
} from "rxjs";
import { ShipmentListResource } from "./resources/shipment-list.resource";
import { ShipmentResource } from "./resources/shipment.resource";
import { OrganizeFlightResource } from "./resources/organize-flight.resource";
import { InvoiceResource } from "./resources/invoice.resource";
import { environment } from "../../../environments/environment";
import { Store } from "@ngrx/store";
import { State } from "../../app.reducers";
import { catchError } from "rxjs/operators";

/*
 * Service to communicate with Shipments Resource
 */
@Injectable()
export class ShipmentService {

  private SHIPMENT_RESOURCE_PATH = "shipments";

  constructor(private _restClientService: RestClientService,
              private _store: Store<State>) {
  }

  /*
   * Create a new shipment
   *
   * @param shipment The shipment to be created
   * @return An observable of a shipment
   */
  public createShipment(shipment: ShipmentResource): Observable<ShipmentResource> {
    const x = JSON.stringify(shipment);
    return this._restClientService
               .post(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH, JSON.stringify(shipment))
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Find all shipments
   *
   * @return An observable array of shipments
   */
  public findShipments(): Observable<ShipmentListResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Update a shipment
   * @param shipment The Shipment to be updated
   * @return An observable of a shipment
   */
  public updateShipment(trackingId: string, shipment: ShipmentResource): Observable<ShipmentResource> {
    return this._restClientService
               .put(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH + "/" + trackingId, JSON.stringify(shipment))
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   * Find a single shipment
   */
  public findShipmentbyId(trackingid: string): Observable<ShipmentResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH + "/" + trackingid)
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
   *  Add flight to existing shipment
   *  @param trackingId of shipment and shipmentFlight to add
   *  @return Observable of updated shipment
   */
  public addFlightToShipment(trackingId: string, flight: OrganizeFlightResource): Observable<ShipmentResource> {
    return this._restClientService
               .put(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH + "/flight/" + trackingId,
                 "{\"shipmentFlight\":" + JSON.stringify(flight) + "}")
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
  *  Creates a invoice for a specific shipment
  *  @param trackingId of shipment and invoice to be created
  *  @return Observable of the created invoice
  */
  public createInvoice(trackingId: string, invoice: InvoiceResource): Observable<InvoiceResource> {
    return this._restClientService
               .post(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH + "/invoice/" + trackingId, JSON.stringify(invoice))
               .pipe(catchError(error => this.handleError(error)));
  }

  /*
  *  Get all invoices for a specfic shipment
  *  @param trackingId of shipment of the invoices
  *  @return Observable of all invoices
  */
  public getInvoice(trackingId: string): Observable<InvoiceResource> {
    return this._restClientService
               .get(environment.apiBaseUrl, this.SHIPMENT_RESOURCE_PATH + "/invoice/" + trackingId)
               .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: any) {
    let errMsg: string;
    if (error.status === 0) {
      errMsg = "REST-CLIENT-SERVICE_ERROR-SERVER-UNREACHABLE";
      this._store.dispatch(new AddErrorWithKeyAction(errMsg));
    } else {
      errMsg = error._body;
      this._store.dispatch(new AddErrorWithTextAction(errMsg));
    }
    return observableThrowError(errMsg);
  }
}
