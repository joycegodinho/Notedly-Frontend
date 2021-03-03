import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory'

import ButtonAsLink from './ButtonAsLink';

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    diplay: flex;
    height: 64px
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const LogoText = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;
`;

const UserState = styled.div`
    margin-left: auto;
`;

const Header = props => {
    const { data, client } = useQuery(IS_LOGGED_IN);
    return (
        <HeaderBar>
            <LogoText>Notedly</LogoText>
            <UserState>
                {data.isLoggedIn ? (
                    <ButtonAsLink onClick={() => {
                        client.writeQuery({ 
                            query: gql`
                                query Logged {
                                    isLoggedIn
                                }
                            `,
                            data: {isLoggedIn: false}})
                        localStorage.removeItem('token');
                        //client.resetStore();

                        props.history.push('/')
                    }}
                    >
                        Log Out
                    </ButtonAsLink>
                ) : (
                    <p>
                        <Link to={'/signin'}>Sign In</Link> or{' '}
                        <Link to={'/signup'}>Sign Up</Link>
                    </p>
                )}
            </UserState> 


        </HeaderBar>
    );
};

export default withRouter(Header);