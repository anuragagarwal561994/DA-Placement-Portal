'use strict';

import mongoose from 'mongoose';

var ProcessStudentSchema = new mongoose.Schema({
  process_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Process',
    required: true
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

ProcessStudentSchema.index({
  process_id: 1,
  user_id: 1
}, {
  unique: true
})

export default mongoose.model('ProcessStudent', ProcessStudentSchema);
