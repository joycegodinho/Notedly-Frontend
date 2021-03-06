import React from 'react';
import { useQuery, gql } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Button from '../components/Button'

const GET_NOTES = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
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
    }
`;

const Home = () => {

    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p></p>
    if (error) return <p></p>
    return (
        <React.Fragment>
            <NoteFeed notes={data.noteFeed.notes} />
            {data.noteFeed.hasNextPage && (
                <Button onClick={() => 
                    fetchMore({ variables: { cursor: data.noteFeed.cursor },
                        updateQuery: (previusResult, { fetchMoreResult }) => {
                            return {
                                noteFeed: {
                                    cursor: fetchMoreResult.noteFeed.cursor,
                                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                    notes: [
                                        ...previusResult.noteFeed.notes,
                                        ...fetchMoreResult.noteFeed.notes
                                    ],
                                    __typename: 'noteFeed'
                                }
                            };
                        }
                    })
                }
                >
                    Load More
                </Button>
            )}
        </React.Fragment>
    )
    
};

export default Home;