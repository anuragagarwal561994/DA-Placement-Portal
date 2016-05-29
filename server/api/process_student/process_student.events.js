/**
 * ProcessStudent model events
 */

'use strict';

import {EventEmitter} from 'events';
import ProcessStudent from './process_student.model';
var ProcessStudentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProcessStudentEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  ProcessStudent.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ProcessStudentEvents.emit(event + ':' + doc._id, doc);
    ProcessStudentEvents.emit(event, doc);
  }
}

export default ProcessStudentEvents;
