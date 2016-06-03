'use strict';

import mongoose from 'mongoose';

var StudentOffersSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  offerId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Offers',
    required: true
  },
  offerStatus: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('StudentOffers', StudentOffersSchema);
