const { AuthenticationError } = require('apollo-server-express');
const { User , Location} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    locations: async (parent, args, context) => {
      if (context.user) {
        return Location.find();
      }
      throw new AuthenticationError('You need to be logged in!');
      
    },
    
    location: async (parent, {locationId},context) => {
      if (context.user) {
        return Location.findOne({ _id: locationId });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('wrong email or password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('wrong email or password');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add location
    addLocation: async (parent, { name, street, suburb, src },context) => {
      if (context.user) {
        const location = await Location.create({ name, street, suburb, src  });
        const result = {
          success:true,
          location:location
        }
      return { result };
      }
      throw new AuthenticationError('You need to be logged in!');
      
    },
    removeLocation: async (parent, {locationId},context) => {
      if (context.user) {
        return Location.findOneAndDelete({ _id: location._id });
      }
      throw new AuthenticationError('You need to be logged in!');
      
    },


    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;
