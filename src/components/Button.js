import styled from 'styled-components';

const Button = styled.button` 
    display: block;
    padding: 8px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    background-color: #82B7DC;
    margin-bottom: 25px;
    margin-left: 43%;
    left:100px;
    color: #FFFFFF;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 #000000;

    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    :active {
        background-color: #242537;
    }
`;

export default Button;