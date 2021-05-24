import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BiChevronDownSquare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai"

import foto from '../images/profile-placeholder.jpg'
import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query'

const StyledNote = styled.article`
    max-width: 700px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 0.7em;
    padding-bottom: 1em;
    padding-left: 1.8em;
    padding-right: 1.5em;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-image: #FFFFFF;
    color: #000000;
`;

const StyledMarkDown = styled.div`
    margin-left: 10%

`

const NoteLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const ImageLayout = styled.div`
    height: auto; 
    width: 70px;
`


const StyledImage = styled.img`
    width: 50px; 
    height: 50px; 
    border-radius: 50%;
    margin-top: 17px;

`

const MetaData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const MetaInfo = styled.div`
    width: auto; 
    height: auto; 
    color: #212121;

   
`;

const MetaInfoTime = styled.div`
    width: auto; 
    height: auto;   
    margin-top: 15px;
    text-align: center;    
`;

const LinkOptions = styled.div`
    width: auto; 
    height: auto;  
    justify-content: space-between;
    margin-top: 15px; 
    padding-right: 10px; 
    color: #5D8AFF
`

const StyledDate = styled.div`
    color: #979797;
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
            <NoteLayout>

                    <ImageLayout>

                        <StyledImage src={foto}   />


                    </ImageLayout>

                    <MetaData>

                        <MetaInfo>        
                            <h4>
                                {note.author.username} 
                            </h4>
                        </MetaInfo>    

                        <MetaInfoTime>
                            <StyledDate>
                                {format(new Date(note.createdAt), 'H:mm MM/dd/yyyy')} <br />

                            </StyledDate>               
                        </MetaInfoTime>

                        <LinkOptions>
                            {data.isLoggedIn ? (
                                <UserActions>
                                    <NoteUser note={note} />
                                </UserActions>
                            ) : (
                                <UserActions>
                                    <AiOutlineHeart size="1.5em"/> {note.favoriteCount}
                                </UserActions>
                            )}                
                            <Link to={`note/${note.id}`}><BiChevronDownSquare color="#5D8AFF" size="1.5em" /></Link>
                        </LinkOptions>


                    </MetaData>

            </NoteLayout>

            <StyledMarkDown>
                <ReactMarkdown source={note.content} />
            </StyledMarkDown>


            

        </StyledNote>
    );
};

export default Note;

