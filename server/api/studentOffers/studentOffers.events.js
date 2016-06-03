/**
 * StudentOffers model events
 */

'use strict';

import {EventEmitter} from 'events';
import StudentOffers from './studentOffers.model';
var StudentOffersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
StudentOffersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  StudentOffers.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    StudentOffersEvents.emit(event + ':' + doc._id, doc);
    StudentOffersEvents.emit(event, doc);
  }
}

export default StudentOffersEvents;
