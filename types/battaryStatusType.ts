export type ChargingState = {
  internalEventId: number;
  date: string;
  chargingLevel: number;
};

export type RootState = {
  charging: {
    states: ChargingState[];
    loading: boolean;
    error: string | null;
  };
};
