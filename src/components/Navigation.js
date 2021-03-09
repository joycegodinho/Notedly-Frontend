import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;
    background: #1F2027;
    background-image: linear-gradient(to bottom, #000000  ,#242537);

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
    }
`;

const NavList = styled.ul`
    margin: 10px;
    padding: 10px;
    list-style: none;
    line-height: 2;



    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #333;
    }

    a:visited {
        color: #FFFFFF;
    }

    a:hover,
    a:focus {
        color: #0077cc;
    }
`;

const Navigation = () => {
    return(
        <Nav>
            <NavList>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mynotes">My Notes</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to='/new'>+ new</Link>
                </li>
            </NavList>
        </Nav>
    );
};

export default Navigation;