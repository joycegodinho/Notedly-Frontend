import React from 'react';

import Note from './Note'


const NoteFeed = ({ notes }) => {

    return(
        <div>
            {notes.map(note => (
                <div key={note.id}>
                    {' '}{note.author.username} {note.createdAt} {note.favoriteCount}{' '}
                    <Note note={note} />
                </div>
            ))}    
        </div>
    );
};

export default NoteFeed;