import {
  PLANETS_API,
  RESULT_API,
  TOKEN_API,
  VEHICLES_API,
} from '../constants/constants';
import {
  PlanetDetailsType,
  GetResultType,
  ResultResponseType,
} from './apiUtils.type';

export const getPlanetDetails = async () => {
  let result = {};
  try {
    const response = await fetch(PLANETS_API);
    const planets = await response.json();
    const planetNames = planets.map((item: PlanetDetailsType) => item.name);

    const planetDistances = planets.map(
      (item: PlanetDetailsType) => item.distance,
    );
    // Convert the format to key-pair values
    result = Object.assign.apply(
      {},
      planetNames.map((v: string, i: number) => ({ [v]: planetDistances[i] })),
    );
  } catch {
    console.log('Get Planet Details API Call Failed.');
  }

  return result;
};

export const getVehicleDetails = async () => {
  let vehicles = [];
  try {
    const response = await fetch(VEHICLES_API);
    vehicles = await response.json();
  } catch {
    console.log('Get Vehicle Details API Failed.');
  }
  return vehicles;
};

export const getToken = async () => {
  try {
    const response = await fetch(TOKEN_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });
    const token = await response.json();

    return token.token;
  } catch {
    console.log('Token API Failed');
    return '';
  }
};

export const getResult = async ({
  token,
  planetNames,
  vehicleNames,
}: GetResultType) => {
  try {
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
  } catch {
    console.log('Result API Failed.');
    return {};
  }
};
