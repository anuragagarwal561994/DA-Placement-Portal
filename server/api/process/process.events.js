/**
 * Process model events
 */

'use strict';

import {EventEmitter} from 'events';
import Process from './process.model';
var ProcessEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProcessEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Process.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ProcessEvents.emit(event + ':' + doc._id, doc);
    ProcessEvents.emit(event, doc);
  }
}

export default ProcessEvents;
