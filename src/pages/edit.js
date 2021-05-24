import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
// import the NoteForm component
import NoteForm from '../components/NoteForm';
import { GET_NOTE, GET_ME } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = props => {
    const id = props.match.params.id;
    console.log (id)
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id }});
    console.log(data)
    

    const { data: userdata } = useQuery(GET_ME);
    console.log(userdata)
    const [editNote] = useMutation(EDIT_NOTE, { variables: { id },
        onCompleted: () => {
            props.history.push(`/note/${id}`)
        }
    });

    if (loading) return '';
    if (error) return <p>Error! Note not found</p>;
    if (userdata.me.id !== data.note.author.id) {

        return <p>You do not have access to edit this note</p>
    }
    return <NoteForm content={data.note.content} action={editNote} />
}

export default EditNote;