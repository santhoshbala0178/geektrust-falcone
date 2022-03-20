export type PlanetKeyPairDetailType = {
  [key: string]: number;
};

export type PlanetDetailsActionType = {
  type: string;
  planetDetails: PlanetKeyPairDetailType;
};
