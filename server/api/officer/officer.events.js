/**
 * Officer model events
 */

'use strict';

import {EventEmitter} from 'events';
import Officer from './officer.model';
var OfficerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OfficerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Officer.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OfficerEvents.emit(event + ':' + doc._id, doc);
    OfficerEvents.emit(event, doc);
  }
}

export default OfficerEvents;
