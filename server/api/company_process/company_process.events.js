/**
 * CompanyProcess model events
 */

'use strict';

import {EventEmitter} from 'events';
import CompanyProcess from './company_process.model';
var CompanyProcessEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CompanyProcessEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  CompanyProcess.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CompanyProcessEvents.emit(event + ':' + doc._id, doc);
    CompanyProcessEvents.emit(event, doc);
  }
}

export default CompanyProcessEvents;
