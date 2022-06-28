import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation($name: String!, $street:String!,$suburb:String!, $src: String!) {
    addLocation(name: $name, street: $street, suburb: $suburb, src:$src) {
      success
      location {
        _id
        name
      }
    }
  }`

export const ADD_TO_LIST = gql`
  mutation addWantToGoList($userId: ID!, $locationId: ID!) {
    addWantToGoList(userId: $userId, locationId: $locationId) {
        _id
        username
        want_to_go
    }
  }
`;

export const ADD_TO_DISCOVERED = gql`
  mutation addToDiscoveredList($locationId: ID!) {
    addToDiscoveredList(locationId: $locationId) {
        _id
        username
        want_to_go
    }
  }
`;

export const REMOVE_LOCATION_FROM_LIST = gql`
  mutation removeLocationInList($locationId: ID!) {
    removeLocationInList(locationId: $locationId) {
      _id
      username
      level
      discovered
      want_to_go
    }
  }
`;