import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
    query GetTrack($trackId: ID!) {
      track(id: $trackId) {
        id
        title
        author {
          id
          name
          photo
        }
        description
        length
        modules {
          id
          length
          title
        }
        modulesCount
        numberOfViews
        thumbnail
      }
    }
`;

const Track = ({trackId}) => {

    const { data, error, loading } = useQuery(GET_TRACK, {
        variables: {trackId}
    });
    return (
        <Layout>
            <QueryResult data={data} error={error} loading={loading}>
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    );
};

export default Track;
