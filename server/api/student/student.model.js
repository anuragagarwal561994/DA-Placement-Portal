'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';

const options = {
  discriminatorKey: 'role'
};

var StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    default: null
  },
  cpi: {
    type: Number,
    required: true
  },
  dob: {
    type: Date,
    default: null,
  },
  sex: {
    type: Boolean,
    default: true
  },
  ssc: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  hsc: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  graduation: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  currentBacklogs: {
    type: Number,
    default: 0,
    min: 0
  },
  totalBacklogs: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: function(num) {
        return num >= this.currentBacklogs;
      },
      message: 'total backlogs should be greator than or equal to current backlogs'
    }
  },
  mobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    }
  },
  alternateMobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Mobile Number!'
    }
  },
  addressLine1: {
    type: String,
    default: null
  },
  addressLine2: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  state: {
    type: String,
    default: null
  },
  postalCode: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{5}/.test(v);
      },
      message: '{VALUE} is not a valid Postal Code!'
    }
  },
  currentAddressLine1: {
    type: String,
    default: null
  },
  currentAddressLine2: {
    type: String,
    default: null
  },
  currentCity: {
    type: String,
    default: null
  },
  currentState: {
    type: String,
    default: null
  },
  currentPostalCode: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{5}/.test(v);
      },
      message: '{VALUE} is not a valid Postal Code!'
    }
  },
  fatherName: {
    type: String,
    default: null
  },
  fatherMobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Postal Code!'
    }
  },
  motherName: {
    type: String,
    default: null
  },
  motherMobileNumber: {
    type: String,
    default: null,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: '{VALUE} is not a valid Postal Code!'
    }
  },
  resumePath: {
    type: String,
    default: null
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isIntrested: {
    type: Boolean,
    default: false
  },
  programId: {
    type: Number,
    validate: {
      validator: function(value) {
        return /1|11|12|13|14/.test(value);
      }
    }
  },
  alternateEmail: {
    type: String,
    validate: {
      validator: function(value) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
      }
    },
    default: null
  },
  lastPasswordResetDate: Date
}, options);

StudentSchema.path('ssc').get(function() {
  return this.ssc.toFixed(2);
})

StudentSchema.path('ssc').set(function(num) {
  this.ssc = num.toFixed(2);
})

StudentSchema.path('hsc').get(function() {
  return this.hsc.toFixed(2);
})

StudentSchema.path('hsc').set(function(num) {
  this.hsc = num.toFixed(2);
})

StudentSchema.path('graduation').get(function() {
  return this.graduation.toFixed(2);
})

StudentSchema.path('graduation').set(function(num) {
  this.graduation = num.toFixed(2);
})

export default User.discriminator('Student', StudentSchema);
// export default mongoose.model('Student', StudentSchema);
