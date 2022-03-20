import styled from 'styled-components';

export const FindContainer = styled.div`
  margin-top: 1em;
`;

export const FindFalcone = styled.button`
  font-size: 1.2em;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.textColor};
  box-shadow: 0.3em 0.3em;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
