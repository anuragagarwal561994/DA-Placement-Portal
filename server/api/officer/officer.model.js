'use strict';

import mongoose from 'mongoose';

var OfficerSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(value) {
        return /\d{10}/.test(value);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    }
  }
});

export default User.discriminator('Officer', OfficerSchema);
