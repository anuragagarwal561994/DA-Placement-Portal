/**
 * Offers model events
 */

'use strict';

import {EventEmitter} from 'events';
import Offers from './offers.model';
var OffersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OffersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Offers.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OffersEvents.emit(event + ':' + doc._id, doc);
    OffersEvents.emit(event, doc);
  }
}

export default OffersEvents;
