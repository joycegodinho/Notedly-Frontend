import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { BiPencil } from "react-icons/bi";

import { GET_ME } from '../gql/query';
import DeleteNote from './DeleteNote'
import FavoriteNote from './FavoriteNote'

const NoteUser = props => {
    const { loading, error, data } = useQuery(GET_ME);
    if (loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    return (
        <React.Fragment>
            <FavoriteNote me={data.me} noteId={props.note.id} favoriteCount={props.note.favoriteCount} /><br />

            {data.me.id === props.note.author.id && (
                <React.Fragment>
                        <DeleteNote noteId={props.note.id} /> <br />
                        <Link to={`/edit/${props.note.id}`}><BiPencil size="1.5em"/></Link>
                        
                </React.Fragment>
            )}
        <p></p>

        </React.Fragment>
        
    )
    

};

export default NoteUser;