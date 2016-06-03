'use strict';

import mongoose from 'mongoose';

const options = {
  discriminatorKey: 'role'
};
var CommitteeSchema = new mongoose.Schema({
  mobileNumber: String,
  alternateEmail: {
    type: String,
    validate: {
      validator: function(value) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      }
    },
    default: null
  },
  isActive: {
    type: Boolean,
    default: false
  },
}, options);

export default User.discriminator('Committee', CommitteeSchema);
