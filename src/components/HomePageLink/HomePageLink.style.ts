import styled from 'styled-components';

const PageLink = styled.a`
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    text-decoration: underline;
  }
`;

export default PageLink;
