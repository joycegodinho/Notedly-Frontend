import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { BiXCircle } from "react-icons/bi";

import ButtonAsLink from './ButtonAsLink';
import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = props => {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId
    },
    // refetch the note list queries to update the cache
    refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
    onCompleted: data => {
      // redirect the user to the "my notes" page
      props.history.push('/mynotes');
    }
  });

  console.log(props.noteId)

  return <ButtonAsLink onClick={deleteNote}><BiXCircle size="1.5em" /></ButtonAsLink>;
};

export default withRouter(DeleteNote);