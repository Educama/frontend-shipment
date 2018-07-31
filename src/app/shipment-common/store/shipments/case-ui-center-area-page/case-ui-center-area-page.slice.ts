import { ShipmentResource } from "../../../api/resources/shipment.resource";
import { InvoiceResource } from "../../../api/resources/invoice.resource";
import { TaskListResource } from "../../../api/resources/task-list.resource";

export interface CaseUiCenterAreaSlice {
  invoice?: InvoiceResource;
  shipment?: ShipmentResource;
  enabledTaskList?: TaskListResource;
  completedTaskList?: TaskListResource;
  activeTaskList?: TaskListResource;
}
