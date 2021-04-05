import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiChevronDownSquare } from "react-icons/bi";

const NoteWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;
    border-bottom: 1px groove #B8B8B9;
    border-top: 1px groove #B8B8B9;
    border-left: 1px groove #B8B8B9;
    border-right: 1px groove #B8B8B9;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #1F2027 ,#242537);
    
    
`;

import Note from './Note'


const NoteFeed = ({ notes }) => {

    return(
        <div>
            {notes.map(note => (
                <NoteWrapper key={note.id}>
                    <Note note={note} /> <br />
                    <Link to={`note/${note.id}`}><BiChevronDownSquare size="1.5em" /></Link>
                </NoteWrapper>
            ))}    
        </div>
    );
};

export default NoteFeed;