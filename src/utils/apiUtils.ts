import { PlanetDetailsType } from '../components/MainPage/MainPage/MainPage.type';
import {
  PLANETS_API,
  RESULT_API,
  TOKEN_API,
  VEHICLES_API,
} from '../constants/constants';
import { GetResultType, ResultResponseType } from './apiUtils.type';

export const getPlanetDetails = async () => {
  const response = await fetch(PLANETS_API);
  const planets = await response.json();

  const planetNames = planets.map((item: PlanetDetailsType) => item.name);

  const planetDistances = planets.map(
    (item: PlanetDetailsType) => item.distance,
  );

  const result = Object.assign.apply(
    {},
    planetNames.map((v: string, i: number) => ({ [v]: planetDistances[i] })),
  );

  return result;
};

export const getVehicleDetails = async () => {
  const response = await fetch(VEHICLES_API);
  const vehicles = await response.json();

  return vehicles;
};

export const getToken = async () => {
  const response = await fetch(TOKEN_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  });
  const token = await response.json();

  return token.token;
};

export const getResult = async ({
  token,
  planetNames,
  vehicleNames,
}: GetResultType) => {
  const response = await fetch(RESULT_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify({
      token: token,
      planet_names: planetNames,
      vehicle_names: vehicleNames,
    }),
  });
  const result: ResultResponseType = await response.json();

  return result;
};
