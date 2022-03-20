export type GetResultType = {
  token: string;
  planetNames: string[];
  vehicleNames: string[];
};

export type ResultResponseType = {
  planet_name?: string;
  status?: string;
  error?: string;
};
