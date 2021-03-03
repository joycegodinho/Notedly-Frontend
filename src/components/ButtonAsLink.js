import styled from 'styled-components';

const ButtonAsLink = styled.button` 
    backgound: none;
    color: #0077cc;
    padding: 0px;
    border: none;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

    :hover,
    :active {
        color: #004499;
    }
`;

export default ButtonAsLink;