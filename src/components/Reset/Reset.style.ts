import styled from 'styled-components';

const ResetButton = styled.button`
  color: ${(props) => props.theme.colors.textColor};
  background: none;
  outline: none;
  border: solid black 1px;
  border-radius: 0.3em;
  padding: 0.3em 0.8em;
  font-weight: 700;
  cursor: pointer;
  margin-right: 1em;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryColor};
    border: solid ${(props) => props.theme.colors.secondaryColor} 1px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export default ResetButton;
