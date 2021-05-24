import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";
import { TiPlusOutline } from "react-icons/ti"

import Note from './Note'



const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 55px;
    height: 55px;
    position: fixed;
    bottom: 120px;
    right: 100px;
 
    background-color: #82B7DC;
    border-radius: 50%;
    color: #000000
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 7px 0 #000000;

 

    :hover {
        opacity: 0.8;
    }

    :active {
        background-color: #FFFFFF;
    }


`


const NoteFeed = ({ notes }) => {

    return(
        <div>
            {notes.map(note => (
                <div key={note.id}>
                    <Note note={note} /> <br />                 
                </div>
            ))} 
            <AddButton as={Link} to="/new" >
                <TiPlusOutline color="#FFFFFF" size="2.3em" />
            </AddButton>   
        </div>

    );
};

export default NoteFeed;