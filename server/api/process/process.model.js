'use strict';

import mongoose from 'mongoose';

var ProcessSchema = new mongoose.Schema({
  processId: {
    type: mongoose.Schema.ObjectId,
    ref: 'ProcessDetails',
    required: true
  },
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  },
  isPresent: {
    type: Boolean,
    default: false
  },
  timeStamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Process', ProcessSchema);
