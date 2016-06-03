'use strict';

import mongoose from 'mongoose';

var ProcessDetailsSchema = new mongoose.Schema({
  eventID: {
    type: mongoose.Schema.ObjectId,
    ref: 'Events',
    required: true
  },
  type: {
    type: String,
    default: "PPT"
  },
  time: {
    type: Date,
    default: Date.now
  },
  details: {
    type: String,
    default: null
  }
});

export default mongoose.model('ProcessDetails', ProcessDetailsSchema);
