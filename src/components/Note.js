import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { BsChatSquareDots } from "react-icons/bs"


import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query'

const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
    color: #FFFFFF;

`;
const StyledDate = styled.div`
    color: #B2BACD;
    
`;
const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`;
const MetaInfo = styled.div`
    max-height: 2px;
    padding-right: 1em;
    border-bottom: 0em;
`;
const UserActions = styled.div`
    margin-left: auto;
`;



const Note = ({ note }) => {

    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>
    return(
        <StyledNote>
            <MetaData>
                <MetaInfo>
                <BsChatSquareDots size="2em"/>
                <em>  by</em> {note.author.username} 
               
                <StyledDate>
                    {format(new Date(note.createdAt), 'H:mm MM/dd/yyyy')} <br />
                    <p></p>
                 
                </StyledDate>
             
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <NoteUser note={note} />
                    </UserActions>
                ) : (
                    <UserActions>
                        <em>Favorites:</em> {note.favoriteCount}
                    </UserActions>
                )}
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
};

export default Note;

