import { gql } from '@apollo/client';

export const QUERY_LOCATIONS = gql`
  query allLocation {
    locations {
      _id
      name
      street
      suburb
      src
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($userId: ID!) {
    user(userId: $userId) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
