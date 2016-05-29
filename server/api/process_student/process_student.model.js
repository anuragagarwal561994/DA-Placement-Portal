'use strict';

import mongoose from 'mongoose';

var ProcessStudentSchema = new mongoose.Schema({
  process_id: {
    type: mongoose.Schema.Objectid,
    ref: 'Process',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Objectid,
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
