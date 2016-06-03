'use strict';

import mongoose from 'mongoose';

var EventsSchema = new mongoose.Schema({
  eventID: mongoose.Schema.Types.ObjectId
  eventName: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  BTech: {
    type: Boolean,
    default: false
  },
  MTech: {
    type: Boolean,
    default: false
  },
  MScIT: {
    type: Boolean,
    default: false
  },
  MscIctARD: {
    type: Boolean,
    default: false
  },
  MDes: {
    type: Boolean,
    default: false
  },
  eventType: {
    type: String,
    default: null
  },
  eventDetails: {
    type: String,
    default: null
  },
  eventCategory: {
    type: String,
    default: null
  },
  eventDate: {
    type: Date
  },
  isApproved: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Events', EventsSchema);
