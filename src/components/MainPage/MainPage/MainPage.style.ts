import styled from 'styled-components';

export const MainPageContainer = styled.div`
  flex: 1;
  margin: 5em;
  text-align: center;
`;

export const MainPageHeaderText = styled.div`
  font-size: 1.5em;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textColor};
`;

export const PlanetSelectors = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
  flex-wrap: wrap;
`;

export const SelectorPanel = styled.div`
  margin-bottom: 0.5em;
`;

export const TimeTaken = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.textColor};
`;

export const TimeTakenDescription = styled.div`
  margin-right: 0.2em;
`;

export const TimeTakenValue = styled.div``;
