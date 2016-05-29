'use strict';

import mongoose from 'mongoose';

var ProcessSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Process', ProcessSchema);
