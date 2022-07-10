const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    level: Int!
    password: String!
    discovered: [ID]
    want_to_go: [ID]
  }
  type Location {
    _id: ID!
    name: String!
    street: String
    suburb: String
    src: String!
    geolocation: String
    tags: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type addLocationResponse {
    success: Boolean,
    location: Location
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    locations: [Location]
    location(locationId:ID!): Location
    want_to_go(locationId:[ID!]): [Location]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    removeLocation: Location
    addLocation(name:String!, street:String!, suburb:String!, src:String!, tags:[String]): addLocationResponse
    addWantToGoList(userId: ID!, locationId: ID!): User
    addToDiscoveredList(locationId: ID!): User
    removeLocationInList(locationId:ID!): User
  }
`;

module.exports = typeDefs;
