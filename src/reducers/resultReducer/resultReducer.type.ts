export type ResultReducerActionType = ResultReducerType & {
  type: string;
};

export type ResultReducerType = {
  planet: string;
  status: string;
  timeTaken: number;
};
