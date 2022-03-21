import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.darkBackground};
`;

export const HeaderText = styled.h1`
  flex: 1;
  text-align: center;
  margin-left: 5em;

  @media (max-width: 500px) {
    text-align: left;
    margin-left: 0em;
  }
`;

export const HeaderOptions = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;
