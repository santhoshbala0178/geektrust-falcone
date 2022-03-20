import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.darkBackground};
`;

export const HeaderText = styled.h1`
  color: ${(props) => props.theme.colors.textColor};
  flex: 1;
  text-align: center;
  margin-left: 5em;
`;

export const HeaderOptions = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;
