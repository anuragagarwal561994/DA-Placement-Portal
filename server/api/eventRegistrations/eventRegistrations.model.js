'use strict';

import mongoose from 'mongoose';

var EventRegistrationsSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  eventID: {
    type: mongoose.Schema.ObjectId,
    ref: 'Events',
    required: true
  },
  registrationTime: {
    type: Date,
    default: Date.now
  },
  resume: {
    type: String,
    default: null
  }
});

export default mongoose.model('EventRegistrations', EventRegistrationsSchema);
