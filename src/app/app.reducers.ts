import { ActionReducerMap } from "@ngrx/store";
import { SHIPMENT_LIST_PAGE_REDUCER } from "./shipment-common/store/shipments/shipment-list-page/shipment-list-page.reducer";
import { TASK_LIST_PAGE_REDUCER } from "./shipment-common/store/tasks/task-list-page.reducer";
import {
  ERROR_REDUCER,
  ERROR_SLICE_INITIAL_STATE,
  ErrorSlice
} from "educama-frontend-shared";
import { SHIPMENT_CAPTURE_PAGE_REDUCER } from "./shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.reducer";
import { ShipmentListSlice } from "./shipment-common/store/shipments/shipment-list-page/shipment-list-page.slice";
import { TaskListSlice } from "./shipment-common/store/tasks/task-list-page.slice";
import { ShipmentCaptureSlice } from "./shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.slice";
import { TASK_LIST_SLICE_INITIAL_STATE } from "./shipment-common/store/tasks/task-list-page.initial-state";
import { SHIPMENT_LIST_SLICE_INITIAL_STATE } from "./shipment-common/store/shipments/shipment-list-page/shipment-list-page.initial-state";
import { SHIPMENT_CAPTURE_SLICE_INITIAL_STATE } from "./shipment-common/store/shipments/shipment-capture-page/shipment-capture-page.initial-state";
import { EnabledTaskListSlice } from "./shipment-common/store/enbaled-tasks/enabled-task-list-page.slice";
import { ENABLED_TASK_LIST_SLICE_INITIAL_STATE } from "./shipment-common/store/enbaled-tasks/enabled-task-list-page.initial-state";
import { ENABLED_TASK_LIST_PAGE_REDUCER } from "./shipment-common/store/enbaled-tasks/enabled-task-list-page.reducer";
import { CompletedTaskListSlice } from "./shipment-common/store/completed-tasks/completed-task-list-page.slice";
import { COMPLETED_TASK_LIST_SLICE_INITIAL_STATE } from "./shipment-common/store/completed-tasks/completed-task-list-page.initial-state";
import { COMPLETED_TASK_LIST_PAGE_REDUCER } from "./shipment-common/store/completed-tasks/completed-task-list-page.reducer";
import { ORGANIZE_FLIGHT_PAGE_REDUCER } from "./shipment-common/store/shipments/organize-flight-page/organize-flight-page.reducer";
import { OrganizeFlightSlice } from "./shipment-common/store/shipments/organize-flight-page/organize-flight-page.slice";
import { ORGANIZE_FLIGHT_SLICE_INITIAL_STATE } from "./shipment-common/store/shipments/organize-flight-page/organize-flight-page.initial-state";
import { InvoicePageSlice } from "./shipment-common/store/shipments/invoice-page/invoice-page.slice";
import { INVOICE_LIST_SLICE_INITIAL_STATE } from "./shipment-common/store/shipments/invoice-page/invoice-page.initial-state";
import { INVOICE_PAGE_REDUCER } from "./shipment-common/store/shipments/invoice-page/invoice-page.reducer";
import { CASE_UI_CENTER_AREA_SLICE } from "./shipment-common/store/shipments/case-ui-center-area-page/case-ui-center-area-page.initial-state";
import { CaseUiCenterAreaSlice } from "./shipment-common/store/shipments/case-ui-center-area-page/case-ui-center-area-page.slice";
import { CASE_UI_CENTER_AREA_REDUCER } from "./shipment-common/store/shipments/case-ui-center-area-page/case-ui-center-area-page.reducer";

export interface State {
  shipmentListSlice: ShipmentListSlice;
  taskListSlice: TaskListSlice;
  errorSlice: ErrorSlice;
  shipmentCaptureSlice: ShipmentCaptureSlice;
  completedTaskListSlice: CompletedTaskListSlice;
  enabledTaskListSlice: EnabledTaskListSlice;
  organizeFlightPageSlice: OrganizeFlightSlice;
  invoicePageSlice: InvoicePageSlice;
  caseUiCenterAreaSlice: CaseUiCenterAreaSlice;
}

export const INITIAL_STATE = {
  shipmentListSlice: SHIPMENT_LIST_SLICE_INITIAL_STATE,
  taskListSlice: TASK_LIST_SLICE_INITIAL_STATE,
  errorSlice: ERROR_SLICE_INITIAL_STATE,
  shipmentCaptureSlice: SHIPMENT_CAPTURE_SLICE_INITIAL_STATE,
  completedTaskListSlice: COMPLETED_TASK_LIST_SLICE_INITIAL_STATE,
  enabledTaskListSlice: ENABLED_TASK_LIST_SLICE_INITIAL_STATE,
  organizeFlightSlice: ORGANIZE_FLIGHT_SLICE_INITIAL_STATE,
  invoiceSlice: INVOICE_LIST_SLICE_INITIAL_STATE,
  caseUiCenterAreaSlice: CASE_UI_CENTER_AREA_SLICE
};

export const reducers: ActionReducerMap<State> = {
  shipmentListSlice: SHIPMENT_LIST_PAGE_REDUCER,
  taskListSlice: TASK_LIST_PAGE_REDUCER,
  errorSlice: ERROR_REDUCER,
  shipmentCaptureSlice: SHIPMENT_CAPTURE_PAGE_REDUCER,
  completedTaskListSlice: COMPLETED_TASK_LIST_PAGE_REDUCER,
  enabledTaskListSlice: ENABLED_TASK_LIST_PAGE_REDUCER,
  organizeFlightPageSlice: ORGANIZE_FLIGHT_PAGE_REDUCER,
  invoicePageSlice: INVOICE_PAGE_REDUCER,
  caseUiCenterAreaSlice: CASE_UI_CENTER_AREA_REDUCER
};
