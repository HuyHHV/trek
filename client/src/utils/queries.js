import { gql } from '@apollo/client';

export const QUERY_LOCATIONS = gql`
  query allLocation {
    locations {
      _id
      name
      street
      suburb
      src
      tags
    }
  }
`;

export const QUERY_WANT_TO_GO = gql`
  query want_to_go($locationId:[ ID!]) {
    want_to_go(locationId:$locationId) {
      _id
      name
      street
      suburb
      src
      tags
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      level
      discovered
      want_to_go
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      level
      discovered
      want_to_go
    }
  }
`;
