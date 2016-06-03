/**
 * ProcessDetails model events
 */

'use strict';

import {EventEmitter} from 'events';
import ProcessDetails from './processDetails.model';
var ProcessDetailsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProcessDetailsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  ProcessDetails.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ProcessDetailsEvents.emit(event + ':' + doc._id, doc);
    ProcessDetailsEvents.emit(event, doc);
  }
}

export default ProcessDetailsEvents;
