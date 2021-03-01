import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import GlobalStyle from '/components/GlobalStyle';
import Pages from '/pages';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient ({
    uri,
    cache,
    connectToDevTools: true
});

const App = () => (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />  
        </ApolloProvider>
    );


//to render our application within the element with an ID of root 
ReactDOM.render(<App />, document.getElementById('root'));