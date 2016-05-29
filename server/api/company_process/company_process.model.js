'use strict';

import mongoose from 'mongoose';

var CompanyProcessSchema = new mongoose.Schema({
  company_id: {
    type: mongoose.Schema.Objectid,
    ref: 'Company',
    required: true
  },
  process_id: {
    type: mongoose.Schema.Objectid,
    ref: 'Process',
    required: true
  }
});

CompanyProcessSchema.index({
  company_id: 1,
  process_id: 1
}, {
  unique: true
})

export default mongoose.model('CompanyProcess', CompanyProcessSchema);
