'use strict';

import mongoose from 'mongoose';

const options = {
  discriminatorKey: 'role'
};
var CommitteeSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(value) {
        return /\d{10}/.test(value);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    }
  },
  alternateEmail: {
    type: String,
    default: null,
    validate: {
      validator: function(value) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      }
    }
  },
  isActive: {
    type: Boolean,
    default: false
  },
}, options);

export default User.discriminator('Committee', CommitteeSchema);
