import { ChargingState } from "./battaryStatusType";

export type InitialState = {
  states: ChargingState[];
  loading: boolean;
  error: string | null;
};
