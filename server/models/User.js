const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'username cannot contain special characters'],
        unique: true,
        trim: true,
        },

    level: {
        type: Number,
        default: 0
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
        },

    password: {
        type: String,
        required: true,
        minlength: [5,'minimum length is 5'],
        },

    discovered: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Location',
        },
        ],

    want_to_go: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Location',
        },
        ],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
