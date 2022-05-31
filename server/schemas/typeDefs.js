const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    discovered: [String]
    want_to_go: [String]
  }
  type Location {
    _id: ID
    name: String
    street: String
    suburb: String
    URL: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type locationResponse {
    success: Boolean,
    location: Location
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    locations: [Location]!
    location(locationID:ID!): Location
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User
    addLocation(name:String!, street:String!, suburb:String!, URL:String!): locationResponse
  }
`;

module.exports = typeDefs;
