'use strict';

import mongoose from 'mongoose';

var OffersSchema = new mongoose.Schema({
  eventID: {
    type: mongoose.Schema.ObjectId,
    ref: 'Events',
    required: true
  }
  converted: {
    type: Boolean,
    default: false
  },
  PPO: {
    type: Boolean,
    default: false
  },
  offCampus: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: null
  },
  Designation: {
    type: String,
    default: "Technical"
  },
  CPI: {
    type: Number,
    min: 0,
    max: 10.00
    default: 0
  },
  CTC: {
    type: Number,
    min: 0,
    default: 0
  },
  Internship: {
    type: Number,
    min: 0,
    default: 0
  },
  Location: {
    type: String,
    default: null
  },
  BTech: {
    type: Boolean,
    default: false
  },
  MTech: {
    type: Boolean,
    default: false
  },
  MscIT: {
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
  visitDate: {
    type: Date
  },
  noOfDays: {
    type: Number,
    default: 1,
    min: 1
  },
  bond: {
    type: Number,
    default: 0,
    min: 0
  }
});

export default mongoose.model('Offers', OffersSchema);
