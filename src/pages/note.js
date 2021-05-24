import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount 
            author {
                username
                id
            }
        }
    }
`

const NotePage = props => {
    const id = props.match.params.id;
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    if (loading) return <p></p>;
    if (error) return <p>Note not found</p>;
    return (
        <Note note={data.note} />
    )
}

export default NotePage;