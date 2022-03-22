import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import MainPage from './MainPage';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { store } from '../../../store';

//Mock Data
jest.mock('../../../utils/apiUtils', () => ({
  getPlanetDetails: () => {
    return {
      Donlon: 100,
      Enchai: 200,
      Jebing: 300,
      Lerbin: 500,
      Pingasor: 600,
      Sapir: 400,
    };
  },
  getVehicleDetails: () => [
    { name: 'Space pod', total_no: 2, max_distance: 200, speed: 2 },
  ],
}));

const Wrapper = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

describe('User', () => {
  it('should display planet selector', async () => {
    // Render and select a planet
    render(<MainPage />, { wrapper: Wrapper });
    const planetSearch = await screen.findByText(
      'Select planets you want to search in:',
    );

    expect(planetSearch).toBeTruthy();
  });

  it(`select planet, verify planet is selected and vehicle is visible,
      Select vehicle, verify vehicle count is reduced and time taken increases`, async () => {
    // Render and select a planet
    render(<MainPage />, { wrapper: Wrapper });

    const autocomplete = await screen.getByTestId('planet-dropdown-0');
    const input = autocomplete.querySelector('input');

    if (input) {
      autocomplete.focus();
      // assign value to input field and select dropdown
      fireEvent.change(input, { target: { value: 'Donlon' } });
      fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
      // select the first item
      fireEvent.keyDown(autocomplete, { key: 'Enter' });
    }

    // check the new value of the dropdown
    expect(input?.value).toEqual('Donlon');

    // Select Vehicle and verify Count to be reduced by 1 & Time Taken increases to 50
    expect(screen.queryByText('Space pod (2)')).not.toBe(null);
    expect(screen.queryByTestId('time-taken')?.textContent).toBe('0');

    const vehicleSelector = await screen.getByTestId('vehicle-selector-0-0');
    fireEvent.click(vehicleSelector);
    expect(screen.queryByText('Space pod (1)')).not.toBe(null);
    expect(screen.queryByTestId('time-taken')?.textContent).toBe('50');
  });
});
