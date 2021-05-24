import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';
import foto from '../images/profile-placeholder.jpg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin-left: 15%
`;

const NoteLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

const ImageLayout = styled.div`
    height: auto; 
`

const ContentLayout = styled.div`
    width: 2%; 
    height: auto; 
    
`

const StyledImage = styled.img`
    width: 50px; 
    height: 50px; 
    border-radius: 50%;
    margin-top: 17px;

`

const Form = styled.form`
    height: 60%;
    width: 60%;
    margin-top: 17px;
    margin-left: 17px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #B8B8B9;
    border-top: 1px solid #B8B8B9;
    border-left: 1px solid #B8B8B9;
    border-right: 1px solid #B8B8B9;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-image: #FFFFFF;
    color: #000000;
    margin: 0 auto;
    margin-bottom: 2em;
    padding-top: 0.7em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1.5em;
`;

const NoteForm = props => {

    const [value, setValue] = useState({ content: props.content || '' });
    const onChange = event => {
        setValue({...value, [event.target.name]: event.target.value});
    };

    return(
        <Wrapper>
            <ImageLayout>
                <StyledImage src={foto}   />
            </ImageLayout>

            <Form onSubmit={e => {
                e.preventDefault();
                props.action({ variables: {...value}})
            }}>
                <TextArea required type="text" name="content" placeholder="Note content" value={value.content} onChange={onChange} />
                <Button type="submit">Save</Button>
            </Form>
        </Wrapper>
    );
};

export default NoteForm;