import { ShipmentResource } from "./shipment.resource";
import { AbstractListResource } from "educama-frontend-shared";

export class ShipmentListResource extends AbstractListResource {
  public shipments: ShipmentResource[];
}
