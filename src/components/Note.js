import React from 'react';
import ReactMarkdown from 'react-markdown'


const Note = ({ note }) => {

    return(
        <article>
            {' '}{note.author.username} {note.createdAt} {note.favoriteCount}{' '}
            <ReactMarkdown source={note.content} />
        </article>

    );
};

export default Note;