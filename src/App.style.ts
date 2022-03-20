import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  font-family: verdana;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default AppContainer;
