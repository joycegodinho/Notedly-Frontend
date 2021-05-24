import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
import { GoCommentDiscussion } from "react-icons/go";

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 2em;
    diplay: flex;
    height: 64px
    position: fixed;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const LogoText = styled.h1`
    margin-left: 270px;
    padding-top: 100px;
    padding: 0;
    display: inline;
    color: #2f4c58;
 
`;

const UserState = styled.div`
    margin-left: 1200px;
`;



const Header = props => {
    // query hook for user logged in state
    const { data, client } = useQuery(IS_LOGGED_IN);
  
    return (
      <HeaderBar>
        <LogoText>Note </LogoText><GoCommentDiscussion color="#b5d1f1" size="2.8em"/>
        {/* If logged in display a log out link, else display sign in options */}
        <UserState>
          {data.isLoggedIn ? (
            <ButtonAsLink
              onClick={() => {
                // remove the token
                localStorage.removeItem('token');
                // clear the application's cache
                client.resetStore();
                // update local state
                client.writeQuery({ 
                    query: gql`
                        query Logged {
                            isLoggedIn
                        }
                    `,
                    data: {isLoggedIn: false}})
                // redirect the user to the homepage
                props.history.push('/');
              }}
            >
              Logout
            </ButtonAsLink>
          ) : (
            <p style={{ color: '#464646' }}>
              <Link  to={'/signin'}>Sign In</Link> or{' '}
              <Link to={'/signup'}>Sign Up</Link>
            </p>
          )}
        </UserState>
      </HeaderBar>
    );
  };
  
  export default withRouter(Header);
  