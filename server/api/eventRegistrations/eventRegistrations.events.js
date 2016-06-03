/**
 * EventRegistrations model events
 */

'use strict';

import {EventEmitter} from 'events';
import EventRegistrations from './eventRegistrations.model';
var EventRegistrationsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EventRegistrationsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  EventRegistrations.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EventRegistrationsEvents.emit(event + ':' + doc._id, doc);
    EventRegistrationsEvents.emit(event, doc);
  }
}

export default EventRegistrationsEvents;
