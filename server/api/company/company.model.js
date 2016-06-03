'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';

const options = { discriminatorKey: 'role' };
var CompanySchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    default: null,
    required: true
  },
  addressLine2: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null,
    required: true
  },
  state: {
    type: String,
    default: null,
    required: true
  },
  country: {
    type: String,
    default: 'India',
    uppercase: true,
    required: true
  },
  postalCode: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{5}/.test(v);
      },
      message: '{VALUE} is not a valid Postal Code!'
    },
    required: true
  },
  hrName: {
    type: String,
    required: true
  },
  hrContactNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    },
    required: true
  },
  alternateContactNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    },
    required: true
  },
  website: String,
  info: String,
  active: Boolean,
  editorID: {
    type: Number,
    ref: 'User'
  },
  linkedin: {}
}, options);

export default User.discriminator('Company', CompanySchema);
