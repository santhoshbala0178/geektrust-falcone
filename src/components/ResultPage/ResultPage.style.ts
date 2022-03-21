import styled from 'styled-components';

export const ResultPageContainer = styled.div`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 2em;
`;

export const Message = styled.div`
  margin-bottom: 0.5em;
`;

export const Content = styled.div``;

export const StartAgain = styled.button`
  margin-top: 2em;
  padding: 0.5em 1em;
  border-radius: 4px;
  outline: none;
  border: none;
  box-shadow: 0.3em 0.3em;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
