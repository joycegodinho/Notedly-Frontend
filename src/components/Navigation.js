import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GoHome } from "react-icons/go";
import { GoComment } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";

const Nav = styled.nav`
    padding: 1em;
    background: #FFFFFF;


    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 300px;
        height: calc(100% - 64px);
    }
`;

const NavList = styled.ul`
    margin: 40px;
    padding: 35px;
    list-style: none;
    line-height: 2;



    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #5D8AFF;
    }

    a:visited {
        color: #5D8AFF;
    }

    a:focus,
    a:hover,
    a:active {
      color: #004499;
    }
`;

const Navigation = () => {
    return(
        <Nav>
            <NavList>
                <li>
                    <p></p>
                    <Link to="/">Home <GoHome size="1.5em" /></Link>
                </li>
                <li>
                <p></p>
                    <Link to="/mynotes">My Notes <GoComment size="1.5em"/></Link>
                </li>
                <li>
                    <p></p>
                    <Link to="/favorites">Favorites <AiOutlineStar size="1.5em" /></Link>
                </li>
            </NavList>
        </Nav>
    );
};

export default Navigation;