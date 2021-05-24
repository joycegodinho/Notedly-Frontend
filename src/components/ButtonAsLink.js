import styled from 'styled-components';

const ButtonAsLink = styled.button`
  background: none;
  color: #5D8AFF;
  border: none;
  padding: 0;
  font: inherit;
  text-decoration: none;
  cursor: pointer;

  :hover,
  :active {
    color: #004499;
  }
`;

export default ButtonAsLink;