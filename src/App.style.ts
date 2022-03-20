import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  font-family: verdana;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
`;

export default AppContainer;
