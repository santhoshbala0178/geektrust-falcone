import styled from 'styled-components';

export const VehicleSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const VehicleSelectorTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const VehicleSelectorInput = styled.input`
  cursor: pointer;

  &: disabled {
    cursor: inherit;
  }
`;
