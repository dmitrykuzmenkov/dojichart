(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

"use strict";

var Chart = require("./src/core/Chart");
var TimePanel = require("./src/panel/TimePanel");
var TimeValuePanel = require("./src/panel/TimeValuePanel");
var TimeLabelsPanel = require("./src/panel/TimeLabelsPanel");
var CandleLayer = require("./src/layer/CandleLayer");
var OHLCLayer = require("./src/layer/OHLCLayer");
var ValueGridLayer = require("./src/layer/ValueGridLayer");
var TimeGridLayer = require("./src/layer/TimeGridLayer");
var VolumeLayer = require("./src/layer/indicator/VolumeLayer");
var SimpleMovingAverageLayer = require("./src/layer/indicator/SimpleMovingAverageLayer");
var ExponentialMovingAverageLayer = require("./src/layer/indicator/ExponentialMovingAverageLayer");
var VolumeProfileLayer = require("./src/layer/indicator/VolumeProfileLayer");
var RSILayer = require("./src/layer/indicator/RSILayer");
var BollingerBandsLayer = require("./src/layer/indicator/BollingerBandsLayer");
var StochasticLayer = require("./src/layer/indicator/StochasticLayer");

var _exports = {
  /** @namespace core */
  core: {
    Chart: Chart
  },
  /** @namespace panel */
  panel: {
    TimePanel: TimePanel,
    TimeValuePanel: TimeValuePanel,
    TimeLabelsPanel: TimeLabelsPanel
  },
  /** @namespace layer */
  layer: {
    CandleLayer: CandleLayer,
    OHLCLayer: OHLCLayer,
    ValueGridLayer: ValueGridLayer,
    TimeGridLayer: TimeGridLayer,
    /** @namespace layer.indicator */
    indicator: {
      VolumeLayer: VolumeLayer,
      SimpleMovingAverageLayer: SimpleMovingAverageLayer,
      ExponentialMovingAverageLayer: ExponentialMovingAverageLayer,
      VolumeProfileLayer: VolumeProfileLayer,
      RSILayer: RSILayer,
      StochasticLayer: StochasticLayer,
      BollingerBandsLayer: BollingerBandsLayer
    }
  }
};

module.exports = _exports;

window.DojiChart = _exports;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXJ0IiwicmVxdWlyZSIsIlRpbWVQYW5lbCIsIlRpbWVWYWx1ZVBhbmVsIiwiVGltZUxhYmVsc1BhbmVsIiwiQ2FuZGxlTGF5ZXIiLCJPSExDTGF5ZXIiLCJWYWx1ZUdyaWRMYXllciIsIlRpbWVHcmlkTGF5ZXIiLCJWb2x1bWVMYXllciIsIlNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllciIsIkV4cG9uZW50aWFsTW92aW5nQXZlcmFnZUxheWVyIiwiVm9sdW1lUHJvZmlsZUxheWVyIiwiUlNJTGF5ZXIiLCJCb2xsaW5nZXJCYW5kc0xheWVyIiwiU3RvY2hhc3RpY0xheWVyIiwiZXhwb3J0cyIsImNvcmUiLCJwYW5lbCIsImxheWVyIiwiaW5kaWNhdG9yIiwibW9kdWxlIiwid2luZG93IiwiRG9qaUNoYXJ0Il0sIm1hcHBpbmdzIjoiO0FBQ0E7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxrQkFBUixDQUFaO0FBQ0EsSUFBSUMsWUFBWUQsUUFBUSx1QkFBUixDQUFoQjtBQUNBLElBQUlFLGlCQUFpQkYsUUFBUSw0QkFBUixDQUFyQjtBQUNBLElBQUlHLGtCQUFrQkgsUUFBUSw2QkFBUixDQUF0QjtBQUNBLElBQUlJLGNBQWNKLFFBQVEseUJBQVIsQ0FBbEI7QUFDQSxJQUFJSyxZQUFZTCxRQUFRLHVCQUFSLENBQWhCO0FBQ0EsSUFBSU0saUJBQWlCTixRQUFRLDRCQUFSLENBQXJCO0FBQ0EsSUFBSU8sZ0JBQWdCUCxRQUFRLDJCQUFSLENBQXBCO0FBQ0EsSUFBSVEsY0FBY1IsUUFBUSxtQ0FBUixDQUFsQjtBQUNBLElBQUlTLDJCQUEyQlQsUUFBUSxnREFBUixDQUEvQjtBQUNBLElBQUlVLGdDQUFnQ1YsUUFBUSxxREFBUixDQUFwQztBQUNBLElBQUlXLHFCQUFxQlgsUUFBUSwwQ0FBUixDQUF6QjtBQUNBLElBQUlZLFdBQVdaLFFBQVEsZ0NBQVIsQ0FBZjtBQUNBLElBQUlhLHNCQUFzQmIsUUFBUSwyQ0FBUixDQUExQjtBQUNBLElBQUljLGtCQUFrQmQsUUFBUSx1Q0FBUixDQUF0Qjs7QUFFQSxJQUFJZSxXQUFVO0FBQ1o7QUFDQUMsUUFBTTtBQUNKakIsV0FBT0E7QUFESCxHQUZNO0FBS1o7QUFDQWtCLFNBQU87QUFDTGhCLGVBQVdBLFNBRE47QUFFTEMsb0JBQWdCQSxjQUZYO0FBR0xDLHFCQUFpQkE7QUFIWixHQU5LO0FBV1o7QUFDQWUsU0FBTztBQUNMZCxpQkFBYUEsV0FEUjtBQUVMQyxlQUFXQSxTQUZOO0FBR0xDLG9CQUFnQkEsY0FIWDtBQUlMQyxtQkFBZUEsYUFKVjtBQUtMO0FBQ0FZLGVBQVc7QUFDVFgsbUJBQWFBLFdBREo7QUFFVEMsZ0NBQTBCQSx3QkFGakI7QUFHVEMscUNBQStCQSw2QkFIdEI7QUFJVEMsMEJBQW9CQSxrQkFKWDtBQUtUQyxnQkFBVUEsUUFMRDtBQU1URSx1QkFBaUJBLGVBTlI7QUFPVEQsMkJBQXFCQTtBQVBaO0FBTk47QUFaSyxDQUFkOztBQThCQU8sT0FBT0wsT0FBUCxHQUFpQkEsUUFBakI7O0FBRUFNLE9BQU9DLFNBQVAsR0FBbUJQLFFBQW5CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIENoYXJ0ID0gcmVxdWlyZShcIi4vc3JjL2NvcmUvQ2hhcnRcIik7XG52YXIgVGltZVBhbmVsID0gcmVxdWlyZShcIi4vc3JjL3BhbmVsL1RpbWVQYW5lbFwiKTtcbnZhciBUaW1lVmFsdWVQYW5lbCA9IHJlcXVpcmUoXCIuL3NyYy9wYW5lbC9UaW1lVmFsdWVQYW5lbFwiKTtcbnZhciBUaW1lTGFiZWxzUGFuZWwgPSByZXF1aXJlKFwiLi9zcmMvcGFuZWwvVGltZUxhYmVsc1BhbmVsXCIpO1xudmFyIENhbmRsZUxheWVyID0gcmVxdWlyZShcIi4vc3JjL2xheWVyL0NhbmRsZUxheWVyXCIpO1xudmFyIE9ITENMYXllciA9IHJlcXVpcmUoXCIuL3NyYy9sYXllci9PSExDTGF5ZXJcIik7XG52YXIgVmFsdWVHcmlkTGF5ZXIgPSByZXF1aXJlKFwiLi9zcmMvbGF5ZXIvVmFsdWVHcmlkTGF5ZXJcIik7XG52YXIgVGltZUdyaWRMYXllciA9IHJlcXVpcmUoXCIuL3NyYy9sYXllci9UaW1lR3JpZExheWVyXCIpO1xudmFyIFZvbHVtZUxheWVyID0gcmVxdWlyZShcIi4vc3JjL2xheWVyL2luZGljYXRvci9Wb2x1bWVMYXllclwiKTtcbnZhciBTaW1wbGVNb3ZpbmdBdmVyYWdlTGF5ZXIgPSByZXF1aXJlKFwiLi9zcmMvbGF5ZXIvaW5kaWNhdG9yL1NpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllclwiKTtcbnZhciBFeHBvbmVudGlhbE1vdmluZ0F2ZXJhZ2VMYXllciA9IHJlcXVpcmUoXCIuL3NyYy9sYXllci9pbmRpY2F0b3IvRXhwb25lbnRpYWxNb3ZpbmdBdmVyYWdlTGF5ZXJcIik7XG52YXIgVm9sdW1lUHJvZmlsZUxheWVyID0gcmVxdWlyZShcIi4vc3JjL2xheWVyL2luZGljYXRvci9Wb2x1bWVQcm9maWxlTGF5ZXJcIik7XG52YXIgUlNJTGF5ZXIgPSByZXF1aXJlKFwiLi9zcmMvbGF5ZXIvaW5kaWNhdG9yL1JTSUxheWVyXCIpO1xudmFyIEJvbGxpbmdlckJhbmRzTGF5ZXIgPSByZXF1aXJlKFwiLi9zcmMvbGF5ZXIvaW5kaWNhdG9yL0JvbGxpbmdlckJhbmRzTGF5ZXJcIik7XG52YXIgU3RvY2hhc3RpY0xheWVyID0gcmVxdWlyZShcIi4vc3JjL2xheWVyL2luZGljYXRvci9TdG9jaGFzdGljTGF5ZXJcIik7XG5cbnZhciBleHBvcnRzID0ge1xuICAvKiogQG5hbWVzcGFjZSBjb3JlICovXG4gIGNvcmU6IHtcbiAgICBDaGFydDogQ2hhcnRcbiAgfSxcbiAgLyoqIEBuYW1lc3BhY2UgcGFuZWwgKi9cbiAgcGFuZWw6IHtcbiAgICBUaW1lUGFuZWw6IFRpbWVQYW5lbCxcbiAgICBUaW1lVmFsdWVQYW5lbDogVGltZVZhbHVlUGFuZWwsXG4gICAgVGltZUxhYmVsc1BhbmVsOiBUaW1lTGFiZWxzUGFuZWxcbiAgfSxcbiAgLyoqIEBuYW1lc3BhY2UgbGF5ZXIgKi9cbiAgbGF5ZXI6IHtcbiAgICBDYW5kbGVMYXllcjogQ2FuZGxlTGF5ZXIsXG4gICAgT0hMQ0xheWVyOiBPSExDTGF5ZXIsXG4gICAgVmFsdWVHcmlkTGF5ZXI6IFZhbHVlR3JpZExheWVyLFxuICAgIFRpbWVHcmlkTGF5ZXI6IFRpbWVHcmlkTGF5ZXIsXG4gICAgLyoqIEBuYW1lc3BhY2UgbGF5ZXIuaW5kaWNhdG9yICovXG4gICAgaW5kaWNhdG9yOiB7XG4gICAgICBWb2x1bWVMYXllcjogVm9sdW1lTGF5ZXIsXG4gICAgICBTaW1wbGVNb3ZpbmdBdmVyYWdlTGF5ZXI6IFNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllcixcbiAgICAgIEV4cG9uZW50aWFsTW92aW5nQXZlcmFnZUxheWVyOiBFeHBvbmVudGlhbE1vdmluZ0F2ZXJhZ2VMYXllcixcbiAgICAgIFZvbHVtZVByb2ZpbGVMYXllcjogVm9sdW1lUHJvZmlsZUxheWVyLFxuICAgICAgUlNJTGF5ZXI6IFJTSUxheWVyLFxuICAgICAgU3RvY2hhc3RpY0xheWVyOiBTdG9jaGFzdGljTGF5ZXIsXG4gICAgICBCb2xsaW5nZXJCYW5kc0xheWVyOiBCb2xsaW5nZXJCYW5kc0xheWVyXG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG5cbndpbmRvdy5Eb2ppQ2hhcnQgPSBleHBvcnRzO1xuIl19
},{"./src/core/Chart":7,"./src/layer/CandleLayer":24,"./src/layer/OHLCLayer":26,"./src/layer/TimeGridLayer":27,"./src/layer/ValueGridLayer":29,"./src/layer/indicator/BollingerBandsLayer":30,"./src/layer/indicator/ExponentialMovingAverageLayer":31,"./src/layer/indicator/RSILayer":32,"./src/layer/indicator/SimpleMovingAverageLayer":33,"./src/layer/indicator/StochasticLayer":34,"./src/layer/indicator/VolumeLayer":35,"./src/layer/indicator/VolumeProfileLayer":36,"./src/panel/TimeLabelsPanel":38,"./src/panel/TimePanel":39,"./src/panel/TimeValuePanel":40}],2:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],3:[function(require,module,exports){
(function (process,__filename){
/*
Note that if your data is too large, there _will_ be overflow.
*/


function asc(a, b) { return a-b; }

var config_params = {
	bucket_precision: function(o, s) {
		if(typeof s != "number" || s <= 0) {
			throw new Error("bucket_precision must be a positive number");
		}
		o._config.bucket_precision = s;
		o.buckets = [];
	},

	buckets: function(o, b) {
		if(!Array.isArray(b) || b.length == 0) {
			throw new Error("buckets must be an array of bucket limits");
		}

		o._config.buckets = b;
		o.buckets = [];
	},

	bucket_extension_interval: function(o, s) {
		if(s === undefined)
			return;
		if(typeof s != "number" || s<=0) {
			throw new Error("bucket_extension_interval must be a positive number");
		}
		o._config.bucket_extension_interval = s;
	},

	store_data: function(o, s) {
		if(typeof s != "boolean") {
			throw new Error("store_data must be a true or false");
		}
		o._config.store_data = s;
	},

	sampling: function(o, s) {
		if(typeof s != "boolean") {
			throw new Error("sampling must be a true or false");
		}
		o._config.sampling = s;
	}
};

function Stats(c) {
	this._config = { store_data:  true };

	if(c) {
		for(var k in config_params) {
			if(c.hasOwnProperty(k)) {
				config_params[k](this, c[k]);
			}
		}
	}

	this.reset();

	return this;
}

Stats.prototype = {

	reset: function() {
		if(this._config.store_data)
			this.data = [];

		this.length = 0;
	
		this.sum = 0;
		this.sum_of_squares = 0;
		this.sum_of_logs = 0;
		this.sum_of_square_of_logs = 0;
		this.zeroes = 0;
		this.max = this.min = null;
	
		this._reset_cache();

		return this;
	},

	_reset_cache: function() {
		this._stddev = null;

		if(this._config.store_data)
			this._data_sorted = null;
	},

	_find_bucket: function(a) {
		var b=0, e, l;
		if(this._config.buckets) {
			l = this._config.buckets.length;
			if(this._config.bucket_extension_interval && a >= this._config.buckets[l-1]) {
				e=a-this._config.buckets[l-1];
				b = parseInt(e/this._config.bucket_extension_interval) + l;
				if(this._config.buckets[b] === undefined)
					this._config.buckets[b] = this._config.buckets[l-1] + (parseInt(e/this._config.bucket_extension_interval)+1)*this._config.bucket_extension_interval;
				if(this._config.buckets[b-1] === undefined)
					this._config.buckets[b-1] = this._config.buckets[l-1] + parseInt(e/this._config.bucket_extension_interval)*this._config.bucket_extension_interval;
			}
			for(; b<l; b++) {
				if(a < this._config.buckets[b]) {
					break;
				}
			}
		}
		else if(this._config.bucket_precision) {
			b = Math.floor(a/this._config.bucket_precision);
		}

		return b;
	},

	_add_cache: function(a) {
		var tuple=[1], i;
		if(a instanceof Array) {
			tuple = a;
			a = tuple.shift();
		}

		this.sum += a*tuple[0];
		this.sum_of_squares += a*a*tuple[0];
		if(a === 0) {
			this.zeroes++;
		}
		else {
			this.sum_of_logs += Math.log(a)*tuple[0];
			this.sum_of_square_of_logs += Math.pow(Math.log(a), 2)*tuple[0];
		}
		this.length += tuple[0];

		if(tuple[0] > 0) {
			if(this.max === null || this.max < a)
				this.max = a;
			if(this.min === null || this.min > a)
				this.min = a;
		}

		if(this.buckets) {
			var b = this._find_bucket(a);
			if(!this.buckets[b])
				this.buckets[b] = [0];
			this.buckets[b][0] += tuple.shift();

			for(i=0; i<tuple.length; i++)
				this.buckets[b][i+1] = (this.buckets[b][i+1]|0) + (tuple[i]|0);
		}

		this._reset_cache();
	},

	_del_cache: function(a) {
		var tuple=[1], i;
		if(a instanceof Array) {
			tuple = a;
			a = tuple.shift();
		}

		this.sum -= a*tuple[0];
		this.sum_of_squares -= a*a*tuple[0];
		if(a === 0) {
			this.zeroes--;
		}
		else {
			this.sum_of_logs -= Math.log(a)*tuple[0];
			this.sum_of_square_of_logs -= Math.pow(Math.log(a), 2)*tuple[0];
		}
		this.length -= tuple[0];

		if(this._config.store_data) {
			if(this.length === 0) {
				this.max = this.min = null;
			}
			if(this.length === 1) {
				this.max = this.min = this.data[0];
			}
			else if(tuple[0] > 0 && (this.max === a || this.min === a)) {
				var i = this.length-1;
				if(i>=0) {
					this.max = this.min = this.data[i--];
					while(i-- >= 0) {
						if(this.max < this.data[i])
							this.max = this.data[i];
						if(this.min > this.data[i])
							this.min = this.data[i];
					}
				}
			}
		}

		if(this.buckets) {
			var b=this._find_bucket(a);
			if(this.buckets[b]) {
				this.buckets[b][0] -= tuple.shift();

				if(this.buckets[b][0] === 0)
					delete this.buckets[b];
				else
					for(i=0; i<tuple.length; i++)
						this.buckets[b][i+1] = (this.buckets[b][i+1]|0) - (tuple[i]|0);
			}
		}

		this._reset_cache();
	},

	push: function() {
		var i, a, args=Array.prototype.slice.call(arguments, 0);
		if(args.length && args[0] instanceof Array)
			args = args[0];
		for(i=0; i<args.length; i++) {
			a = args[i];
			if(this._config.store_data)
				this.data.push(a);
			this._add_cache(a);
		}

		return this;
	},

	push_tuple: function(tuple) {
		if(!this.buckets) {
			throw new Error("push_tuple is only valid when using buckets");
		}
		this._add_cache(tuple);
	},

	pop: function() {
		if(this.length === 0 || this._config.store_data === false)
			return undefined;

		var a = this.data.pop();
		this._del_cache(a);

		return a;
	},

	remove_tuple: function(tuple) {
		if(!this.buckets) {
			throw new Error("remove_tuple is only valid when using buckets");
		}
		this._del_cache(tuple);
	},

	reset_tuples: function(tuple) {
		var b, l, t, ts=tuple.length;
		if(!this.buckets) {
			throw new Error("reset_tuple is only valid when using buckets");
		}

		for(b=0, l=this.buckets.length; b<l; b++) {
			if(!this.buckets[b] || this.buckets[b].length <= 1) {
				continue;
			}
			for(t=0; t<ts; t++) {
				if(typeof tuple[t] !== 'undefined') {
					this.buckets[b][t] = tuple[t];
				}
			}
		}
	},

	unshift: function() {
		var i, a, args=Array.prototype.slice.call(arguments, 0);
		if(args.length && args[0] instanceof Array)
			args = args[0];
		i=args.length;
		while(i--) {
			a = args[i];
			if(this._config.store_data)
				this.data.unshift(a);
			this._add_cache(a);
		}

		return this;
	},

	shift: function() {
		if(this.length === 0 || this._config.store_data === false)
			return undefined;

		var a = this.data.shift();
		this._del_cache(a);

		return a;
	},

	amean: function() {
		if(this.length === 0)
			return NaN;
		return this.sum/this.length;
	},

	gmean: function() {
		if(this.length === 0)
			return NaN;
		if(this.zeroes > 0)
			return NaN;
		return Math.exp(this.sum_of_logs/this.length);
	},

	stddev: function() {
		if(this.length === 0)
			return NaN;
		var n=this.length;
		if(this._config.sampling)
			n--;
		if(this._stddev === null)
			this._stddev = Math.sqrt((this.length * this.sum_of_squares - this.sum*this.sum)/(this.length*n));

		return this._stddev;
	},

	gstddev: function() {
		if(this.length === 0)
			return NaN;
		if(this.zeroes > 0)
			return NaN;
		var n=this.length;
		if(this._config.sampling)
			n--;
		return Math.exp(Math.sqrt((this.length * this.sum_of_square_of_logs - this.sum_of_logs*this.sum_of_logs)/(this.length*n)));
	},

	moe: function() {
		if(this.length === 0)
			return NaN;
		// see http://en.wikipedia.org/wiki/Standard_error_%28statistics%29
		return 1.96*this.stddev()/Math.sqrt(this.length);
	},

	range: function() {
		if(this.length === 0)
			return [NaN, NaN];
		return [this.min, this.max];
	},

	distribution: function() {
		if(this.length === 0)
			return [];
		if(!this.buckets)
			throw new Error("bucket_precision or buckets not configured.");

		var d=[], i, j, k, l;

		if(this._config.buckets) {
			j=this.min;
			l=Math.min(this.buckets.length, this._config.buckets.length);

			for(i=0; i<l; j=this._config.buckets[i++]) {	// this has to be i++ and not ++i
				if(this._config.buckets[i] === undefined && this._config.bucket_extension_interval)
					this._config.buckets[i] = this._config.buckets[i-1] + this._config.bucket_extension_interval;
				if(this.min > this._config.buckets[i])
					continue;

				d[i] = {
					bucket: (j+this._config.buckets[i])/2,
					range: [j, this._config.buckets[i]],
					count: (this.buckets[i]?this.buckets[i][0]:0),
					tuple: this.buckets[i]?this.buckets[i].slice(1):[]
				};

				if(this.max < this._config.buckets[i])
					break;
			}
			if(i == l && this.buckets[i]) {
				d[i] = {
					bucket: (j + this.max)/2,
					range: [j, this.max],
					count: this.buckets[i][0],
					tuple: this.buckets[i]?this.buckets[i].slice(1):[]
				};
			}
		}
		else if(this._config.bucket_precision) {
			i=Math.floor(this.min/this._config.bucket_precision);
			l=Math.floor(this.max/this._config.bucket_precision)+1;
			for(j=0; i<l && i<this.buckets.length; i++, j++) {
				if(!this.buckets[i]) {
					continue;
				}
				d[j] = {
					bucket: (i+0.5)*this._config.bucket_precision,
					range: [i*this._config.bucket_precision, (i+1)*this._config.bucket_precision],
					count: this.buckets[i][0],
					tuple: this.buckets[i]?this.buckets[i].slice(1):[]
				};
			}
		}

		return d;
		
	},

	percentile: function(p) {
		if(this.length === 0 || (!this._config.store_data && !this.buckets))
			return NaN;

		// If we come here, we either have sorted data or sorted buckets

		var v;

		if(p <=  0)
			v=0;
		else if(p == 25)
			v = [Math.floor((this.length-1)*0.25), Math.ceil((this.length-1)*0.25)];
		else if(p == 50)
			v = [Math.floor((this.length-1)*0.5), Math.ceil((this.length-1)*0.5)];
		else if(p == 75)
			v = [Math.floor((this.length-1)*0.75), Math.ceil((this.length-1)*0.75)];
		else if(p >= 100)
			v = this.length-1;
		else
			v = Math.floor(this.length*p/100);

		if(v === 0)
			return this.min;
		if(v === this.length-1)
			return this.max;

		if(this._config.store_data) {
			if(this._data_sorted === null)
				this._data_sorted = this.data.slice(0).sort(asc);

			if(typeof v == 'number')
				return this._data_sorted[v];
			else
				return (this._data_sorted[v[0]] + this._data_sorted[v[1]])/2;
		}
		else {
			var j;
			if(typeof v != 'number')
				v = (v[0]+v[1])/2;

			if(this._config.buckets)
				j=0;
			else if(this._config.bucket_precision)
				j = Math.floor(this.min/this._config.bucket_precision);

			for(; j<this.buckets.length; j++) {
				if(!this.buckets[j])
					continue;
				if(v<=this.buckets[j][0]) {
					break;
				}
				v-=this.buckets[j][0];
			}

			return this._get_nth_in_bucket(v, j);
		}
	},

	_get_nth_in_bucket: function(n, b) {
		var range = [];
		if(this._config.buckets) {
			range[0] = (b>0?this._config.buckets[b-1]:this.min);
			range[1] = (b<this._config.buckets.length?this._config.buckets[b]:this.max);
		}
		else if(this._config.bucket_precision) {
			range[0] = Math.max(b*this._config.bucket_precision, this.min);
			range[1] = Math.min((b+1)*this._config.bucket_precision, this.max);
		}
		return range[0] + (range[1] - range[0])*n/this.buckets[b][0];
	},

	median: function() {
		return this.percentile(50);
	},

	iqr: function() {
		var q1, q3, fw;

		q1 = this.percentile(25);
		q3 = this.percentile(75);
	
		fw = (q3-q1)*1.5;
	
		return this.band_pass(q1-fw, q3+fw, true);
	},

	band_pass: function(low, high, open, config) {
		var i, j, b, b_val, i_val;

		if(!config)
			config = this._config;

		b = new Stats(config);

		if(this.length === 0)
			return b;

		if(this._config.store_data) {
			if(this._data_sorted === null)
				this._data_sorted = this.data.slice(0).sort(asc);
	
			for(i=0; i<this.length && (this._data_sorted[i] < high || (!open && this._data_sorted[i] === high)); i++) {
				if(this._data_sorted[i] > low || (!open && this._data_sorted[i] === low)) {
					b.push(this._data_sorted[i]);
				}
			}
		}
		else if(this._config.buckets) {
			for(i=0; i<=this._config.buckets.length; i++) {
				if(this._config.buckets[i] < this.min)
					continue;

				b_val = (i==0?this.min:this._config.buckets[i-1]);
				if(b_val < this.min)
					b_val = this.min;
				if(b_val > this.max)
					b_val = this.max;

				if(high < b_val || (open && high === b_val)) {
					break;
				}
				if(low < b_val || (!open && low === b_val)) {
					for(j=0; j<(this.buckets[i]?this.buckets[i][0]:0); j++) {
						i_val = Stats.prototype._get_nth_in_bucket.call(this, j, i);
						if( (i_val > low || (!open && i_val === low))
							&& (i_val < high || (!open && i_val === high))
						) {
							b.push(i_val);
						}
					}
				}
			}

			b.min = Math.max(low, b.min);
			b.max = Math.min(high, b.max);
		}
		else if(this._config.bucket_precision) {
			var low_i = Math.floor(low/this._config.bucket_precision),
			    high_i = Math.floor(high/this._config.bucket_precision)+1;

			for(i=low_i; i<Math.min(this.buckets.length, high_i); i++) {
				for(j=0; j<(this.buckets[i]?this.buckets[i][0]:0); j++) {
					i_val = Stats.prototype._get_nth_in_bucket.call(this, j, i);
					if( (i_val > low || (!open && i_val === low))
						&& (i_val < high || (!open && i_val === high))
					) {
						b.push(i_val);
					}
				}
			}

			b.min = Math.max(low, b.min);
			b.max = Math.min(high, b.max);
		}

		return b;
	},

	copy: function(config) {
		var b = Stats.prototype.band_pass.call(this, this.min, this.max, false, config);

		b.sum = this.sum;
		b.sum_of_squares = this.sum_of_squares;
		b.sum_of_logs = this.sum_of_logs;
		b.sum_of_square_of_logs = this.sum_of_square_of_logs;
		b.zeroes = this.zeroes;

		return b;
	},

	Σ: function() {
		return this.sum;
	},

	Π: function() {
		return this.zeroes > 0 ? 0 : Math.exp(this.sum_of_logs);
	}
};

Stats.prototype.σ=Stats.prototype.stddev;
Stats.prototype.μ=Stats.prototype.amean;


exports.Stats = Stats;

if(process.argv[1] && process.argv[1].match(__filename)) {
	var s = new Stats().push(1, 2, 3);
	var l = process.argv.slice(2);
	if(!l.length) l = [10, 11, 15, 8, 13, 12, 19, 32, 17, 16];
	l.forEach(function(e, i, a) { a[i] = parseFloat(e, 10); });
	Stats.prototype.push.apply(s, l);
	console.log(s.amean().toFixed(2), s.μ().toFixed(2), s.stddev().toFixed(2), s.σ().toFixed(2), s.gmean().toFixed(2), s.median().toFixed(2), s.moe().toFixed(2));
}

}).call(this,require("g5I+bs"),"/node_modules/fast-stats/faststats.js")
},{"g5I+bs":5}],4:[function(require,module,exports){
//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
        else {
            if ((typeof console !==  'undefined') && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var locale, parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                    });
                    return null;
                }
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports

hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.21.0';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

},{}],5:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],6:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Type = require("../core/Type");
var TimeSeriesData = require("../timeseries/TimeSeriesData");
var TimeGrid = require("../core/TimeGrid");
var Crosshair = require("../crosshair/Crosshair");

var _default_config = {
  width: "auto",
  intervalWidth: 7,
  paddingRight: 40,
  offset: 0,
  relativeOffset: 0,
  offsetFromEnd: false,
  scrollToEndOnLoad: true,
  scrollToEndOnResize: true,
  verticalGridLineSpacing: 50
};

/**
 * Represents a DojiChart instance.
 * <br><br>
 * Typically a Chart will consist of Panels, which in turn consist of layers.
 * @extends core.Type
 * @memberof core
 */

var Chart = function (_Type) {
  _inherits(Chart, _Type);

  /**
   * Instantiate Chart
   * @constructor
   * @param {external:HTMLElement} el
   * @param {object} config
   */
  function Chart(el, config) {
    _classCallCheck(this, Chart);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, config));

    _this._el = el;
    _this._components = [];
    _this._data = undefined;
    if (_.isNumber(_this.width)) {
      _this._el.style.width = _this.width + "px";
    }
    _this._initCrosshair();
    _this._listenForDOMEvents();
    _this._time_grid = new TimeGrid();
    return _this;
  }

  /**
   * Initialize crosshair
   * @private
   */


  _createClass(Chart, [{
    key: "_initCrosshair",
    value: function _initCrosshair() {
      if (this.crosshair) {
        this.crosshair = _.isObject(this.crosshair) ? this.crosshair : {};
        this._crosshair = new Crosshair(this, this.crosshair);
      }
    }

    /**
     * Refresh crosshair
     * @private
     */

  }, {
    key: "_refreshCrosshair",
    value: function _refreshCrosshair() {
      if (this._crosshair === undefined) {
        this._initCrosshair();
      } else {
        this._crosshair.refresh();
      }
    }

    /**
     * Listen for DOM events, specifically window resize
     * @private
     */

  }, {
    key: "_listenForDOMEvents",
    value: function _listenForDOMEvents() {

      window.addEventListener("resize", this._handleWindowResize.bind(this));
    }

    /**
     * Handle window resize event
     * @private
     */

  }, {
    key: "_handleWindowResize",
    value: function _handleWindowResize(ev) {
      if (this.width === "auto") {
        this._refreshCrosshair();
        if (this.scrollToEndOnResize === true) {
          this._setOffset(0, true);
        }
        this._refreshCrosshair();
        this.draw();
      }
    }

    /**
     * Get underlying HTMLElement
     * @returns {external.HTMLElement}
     */

  }, {
    key: "getEl",
    value: function getEl() {
      return this._el;
    }

    /**
     * Get width
     * @returns {(number|string)} Width in pixels or "auto"
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      if (this.width === "auto") {
        return this.getEl().clientWidth;
      } else {
        return this.width;
      }
    }

    /**
     * Get right padding 
     * @returns {number} in pixels
     */

  }, {
    key: "getPaddingRight",
    value: function getPaddingRight() {
      return this.paddingRight;
    }

    /**
     * Get drawing width
     * @returns {number} This is the total width minus right padding (in pixels).
     */

  }, {
    key: "getDrawingWidth",
    value: function getDrawingWidth() {
      return this.getWidth() - this.getPaddingRight();
    }

    /**
     * Get height
     * @returns {number} Height of underlying HTMLElement in pixels.
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this._el.offsetHeight;
    }

    /**
     * Set interval width
     * @param {number} Size of interval in pixels.
     */

  }, {
    key: "setIntervalWidth",
    value: function setIntervalWidth(interval_width) {
      this.intervalWidth = interval_width;
    }

    /**
     * Get interval width 
     * @returns {number} Size of interval in pixels.
     */

  }, {
    key: "getIntervalWidth",
    value: function getIntervalWidth() {
      return this.intervalWidth;
    }

    /**
     * Get offset
     * @returns {number}
     */

  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.offset;
    }

    /**
     * Get time grid instance that is used by Chart.
     * @returns {core.TimeGrid}
     */

  }, {
    key: "getTimeGrid",
    value: function getTimeGrid() {
      return this._time_grid;
    }

    /**
     * Get all chart components.
     * @returns {core.Component[]}
     */

  }, {
    key: "getComponents",
    value: function getComponents() {
      return this._components;
    }

    /**
     * Add component to chart.
     * @param {string} region_name
     * @param {core.Component} comp
     */

  }, {
    key: "addComponent",
    value: function addComponent(region_name, comp) {
      //Component.addComponent(region_name, comp);
      comp.setParentChart(this);
      if (comp.initLayers) {
        comp.initLayers(); // invoked after setParentChart because methods of Chart required
      }
      this._components.push(comp);
      comp.render(region_name);
      this._componentsHaveChanged();
    }

    /**
     * Remove components from chart.
     * @param {core.Component[]} exclude_components. Components to not remove.
     */

  }, {
    key: "removeComponents",
    value: function removeComponents(exclude_components) {
      exclude_components = exclude_components || [];
      for (var i = 0; i < this._components.length; i++) {
        var comp = this._components[i];
        var exclude = false;
        for (var j = 0; j < exclude_components.length; j++) {
          if (comp === exclude_components[j]) {
            exclude = true;
            break;
          }
        }
        if (exclude !== true) {
          comp.destroy();
        }
      }
      this._components = exclude_components;
      this._componentsHaveChanged();
    }

    /**
     * Load data.
     * @param {timeseries.DataPoint[]} raw_data
     * @param {string} symbol
     * @param {string} granularity
     * @param {boolean} do_draw
     */

  }, {
    key: "loadData",
    value: function loadData(raw_data, symbol, granularity, do_draw) {
      this._data = new TimeSeriesData(raw_data, this.fieldMap, symbol, granularity);
      for (var i = 0; i < this._components.length; i++) {
        var comp = this._components[i];
        if (comp.precompute) {
          comp.precompute(this._data);
        }
      }
      if (do_draw === undefined || do_draw === true) {
        if (this.scrollToEndOnLoad === true) {
          this.scroll(0, true, false);
        }
        this.draw();
      }
    }

    /**
     * Draw all components.
     */

  }, {
    key: "draw",
    value: function draw() {
      if (this._data !== undefined) {
        var interval_capacity = this._calculateIntervalCapacity();
        var indexToPixel = this.getIndexToPixelMapper();

        this._time_grid.refresh(this._data, interval_capacity, this.getOffset(), this.getDrawingWidth(), this.verticalGridLineSpacing);

        for (var i = 0; i < this._components.length; i++) {
          var comp = this._components[i];
          if (comp.draw) {
            comp.draw(this._data, interval_capacity, this.getOffset(), indexToPixel);
          }
        }

        this.emit("afterdraw");
      }
    }

    /**
     * Calculate number of elements that will fit on the chart.
     * @private
     */

  }, {
    key: "_calculateIntervalCapacity",
    value: function _calculateIntervalCapacity() {
      return Math.floor(this.getDrawingWidth() / this.intervalWidth);
    }

    /**
    * indexToPixel
    * @callback indexToPixel
    * @param {number} index
    * @returns {number} x-value expressed in unit pixels
    */

    /**
     * Get index to pixel mapper function
     * @returns {indexToPixel} function
     */

  }, {
    key: "getIndexToPixelMapper",
    value: function getIndexToPixelMapper() {
      var px_interval_width = this.getIntervalWidth();
      var offset = this.getOffset();
      var mapFunc = function mapFunc(index) {
        return (index - offset) * px_interval_width;
      };
      return mapFunc;
    }

    /**
     * Invoked after components have changed.
     * @private
     */

  }, {
    key: "_componentsHaveChanged",
    value: function _componentsHaveChanged() {
      this._refreshCrosshair();
    }

    /**
     * Scroll by specified offset.
     * @param {number} given_offset
     * @param {boolean} from_end
     * @param {boolean} do_draw
     */

  }, {
    key: "scroll",
    value: function scroll(given_offset, from_end, do_draw) {
      this._setOffset(given_offset, from_end);
      if (do_draw === undefined || do_draw === true) {
        this.draw();
      }
    }

    /**
     * Set offset
     * @param {number} given_offset
     * @param {boolean} from_end
     * @private
     */

  }, {
    key: "_setOffset",
    value: function _setOffset(given_offset, from_end) {
      this.relativeOffset = given_offset;
      this.offsetFromEnd = from_end;
      if (from_end === true && this._data !== undefined) {
        var data_length = this._data.getRawData().length;
        var interval_capacity = this._calculateIntervalCapacity();
        this.offset = data_length - interval_capacity - given_offset;
      } else {
        this.offset = given_offset;
      }
    }

    /**
     * Get offset relative to either start or end of data.
     * @returns {number}
     */

  }, {
    key: "getRelativeScrollOffset",
    value: function getRelativeScrollOffset() {
      return this.relativeOffset;
    }

    /**
     * Is scroll offset from end?
     * @returns {boolean}
     */

  }, {
    key: "isScrollOffsetFromEnd",
    value: function isScrollOffsetFromEnd() {
      return this.offsetFromEnd;
    }

    /**
     * Is data scrolled before start?
     * @returns {boolean}
     */

  }, {
    key: "isBeyondStart",
    value: function isBeyondStart() {
      return this.offset < 0;
    }
  }]);

  return Chart;
}(Type);

module.exports = Chart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYXJ0LmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiVHlwZSIsIlRpbWVTZXJpZXNEYXRhIiwiVGltZUdyaWQiLCJDcm9zc2hhaXIiLCJfZGVmYXVsdF9jb25maWciLCJ3aWR0aCIsImludGVydmFsV2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJvZmZzZXQiLCJyZWxhdGl2ZU9mZnNldCIsIm9mZnNldEZyb21FbmQiLCJzY3JvbGxUb0VuZE9uTG9hZCIsInNjcm9sbFRvRW5kT25SZXNpemUiLCJ2ZXJ0aWNhbEdyaWRMaW5lU3BhY2luZyIsIkNoYXJ0IiwiZWwiLCJjb25maWciLCJleHRlbmQiLCJfZWwiLCJfY29tcG9uZW50cyIsIl9kYXRhIiwidW5kZWZpbmVkIiwiaXNOdW1iZXIiLCJzdHlsZSIsIl9pbml0Q3Jvc3NoYWlyIiwiX2xpc3RlbkZvckRPTUV2ZW50cyIsIl90aW1lX2dyaWQiLCJjcm9zc2hhaXIiLCJpc09iamVjdCIsIl9jcm9zc2hhaXIiLCJyZWZyZXNoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVXaW5kb3dSZXNpemUiLCJiaW5kIiwiZXYiLCJfcmVmcmVzaENyb3NzaGFpciIsIl9zZXRPZmZzZXQiLCJkcmF3IiwiZ2V0RWwiLCJjbGllbnRXaWR0aCIsImdldFdpZHRoIiwiZ2V0UGFkZGluZ1JpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiaW50ZXJ2YWxfd2lkdGgiLCJyZWdpb25fbmFtZSIsImNvbXAiLCJzZXRQYXJlbnRDaGFydCIsImluaXRMYXllcnMiLCJwdXNoIiwicmVuZGVyIiwiX2NvbXBvbmVudHNIYXZlQ2hhbmdlZCIsImV4Y2x1ZGVfY29tcG9uZW50cyIsImkiLCJsZW5ndGgiLCJleGNsdWRlIiwiaiIsImRlc3Ryb3kiLCJyYXdfZGF0YSIsInN5bWJvbCIsImdyYW51bGFyaXR5IiwiZG9fZHJhdyIsImZpZWxkTWFwIiwicHJlY29tcHV0ZSIsInNjcm9sbCIsImludGVydmFsX2NhcGFjaXR5IiwiX2NhbGN1bGF0ZUludGVydmFsQ2FwYWNpdHkiLCJpbmRleFRvUGl4ZWwiLCJnZXRJbmRleFRvUGl4ZWxNYXBwZXIiLCJnZXRPZmZzZXQiLCJnZXREcmF3aW5nV2lkdGgiLCJlbWl0IiwiTWF0aCIsImZsb29yIiwicHhfaW50ZXJ2YWxfd2lkdGgiLCJnZXRJbnRlcnZhbFdpZHRoIiwibWFwRnVuYyIsImluZGV4IiwiZ2l2ZW5fb2Zmc2V0IiwiZnJvbV9lbmQiLCJkYXRhX2xlbmd0aCIsImdldFJhd0RhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsT0FBT0QsUUFBUSxjQUFSLENBQVg7QUFDQSxJQUFJRSxpQkFBaUJGLFFBQVEsOEJBQVIsQ0FBckI7QUFDQSxJQUFJRyxXQUFXSCxRQUFRLGtCQUFSLENBQWY7QUFDQSxJQUFJSSxZQUFZSixRQUFRLHdCQUFSLENBQWhCOztBQUVBLElBQU1LLGtCQUFrQjtBQUN0QkMsU0FBTyxNQURlO0FBRXRCQyxpQkFBZSxDQUZPO0FBR3RCQyxnQkFBYyxFQUhRO0FBSXRCQyxVQUFRLENBSmM7QUFLdEJDLGtCQUFnQixDQUxNO0FBTXRCQyxpQkFBZSxLQU5PO0FBT3RCQyxxQkFBbUIsSUFQRztBQVF0QkMsdUJBQXFCLElBUkM7QUFTdEJDLDJCQUF5QjtBQVRILENBQXhCOztBQVlBOzs7Ozs7OztJQU9NQyxLOzs7QUFFSjs7Ozs7O0FBTUEsaUJBQVlDLEVBQVosRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3RCQSxhQUFTbEIsRUFBRW1CLE1BQUYsQ0FBUyxFQUFULEVBQWFiLGVBQWIsRUFBOEJZLE1BQTlCLENBQVQ7O0FBRHNCLDhHQUVoQkEsTUFGZ0I7O0FBR3RCLFVBQUtFLEdBQUwsR0FBV0gsRUFBWDtBQUNBLFVBQUtJLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxVQUFLQyxLQUFMLEdBQWFDLFNBQWI7QUFDQSxRQUFHdkIsRUFBRXdCLFFBQUYsQ0FBVyxN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VUFBTCxDQUFnQnlDLFlBQWhCLEVBQThCQyxRQUE5QjtBQUNBLFVBQUdsQixZQUFZeEMsU0FBWixJQUF5QndDLFlBQVksSUFBeEMsRUFDQTtBQUNFLGFBQUt2QixJQUFMO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7OytCQU1Xd0MsWSxFQUFjQyxRLEVBQVU7QUFDakMsV0FBS3RFLGNBQUwsR0FBc0JxRSxZQUF0QjtBQUNBLFdBQUtwRSxhQUFMLEdBQXFCcUUsUUFBckI7QUFDQSxVQUFHQSxhQUFhLElBQWIsSUFBcUIsS0FBSzNELEtBQUwsS0FBZUMsU0FBdkMsRUFDQTtBQUNFLFlBQUkyRCxjQUFjLEtBQUs1RCxLQUFMLENBQVc2RCxVQUFYLEdBQXdCM0IsTUFBMUM7QUFDQSxZQUFJVyxvQkFBb0IsS0FBS0MsMEJBQUwsRUFBeEI7QUFDQSxhQUFLMUQsTUFBTCxHQUFld0UsY0FBY2YsaUJBQWYsR0FBb0NhLFlBQWxEO0FBQ0QsT0FMRCxNQU9BO0FBQ0UsYUFBS3RFLE1BQUwsR0FBY3NFLFlBQWQ7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OzhDQUkwQjtBQUN4QixhQUFPLEtBQUtyRSxjQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NENBSXdCO0FBQ3RCLGFBQU8sS0FBS0MsYUFBWjtBQUNEOztBQUVEOzs7Ozs7O29DQUlnQjtBQUNkLGFBQU8sS0FBS0YsTUFBTCxHQUFjLENBQXJCO0FBQ0Q7Ozs7RUFoV2lCUixJOztBQW9XcEJrRixPQUFPQyxPQUFQLEdBQWlCckUsS0FBakIiLCJmaWxlIjoiQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBUeXBlID0gcmVxdWlyZShcIi4uL2NvcmUvVHlwZVwiKTtcbnZhciBUaW1lU2VyaWVzRGF0YSA9IHJlcXVpcmUoXCIuLi90aW1lc2VyaWVzL1RpbWVTZXJpZXNEYXRhXCIpO1xudmFyIFRpbWVHcmlkID0gcmVxdWlyZShcIi4uL2NvcmUvVGltZUdyaWRcIik7XG52YXIgQ3Jvc3NoYWlyID0gcmVxdWlyZShcIi4uL2Nyb3NzaGFpci9Dcm9zc2hhaXJcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgd2lkdGg6IFwiYXV0b1wiLFxuICBpbnRlcnZhbFdpZHRoOiA3LFxuICBwYWRkaW5nUmlnaHQ6IDQwLFxuICBvZmZzZXQ6IDAsXG4gIHJlbGF0aXZlT2Zmc2V0OiAwLFxuICBvZmZzZXRGcm9tRW5kOiBmYWxzZSxcbiAgc2Nyb2xsVG9FbmRPbkxvYWQ6IHRydWUsXG4gIHNjcm9sbFRvRW5kT25SZXNpemU6IHRydWUsXG4gIHZlcnRpY2FsR3JpZExpbmVTcGFjaW5nOiA1MFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgRG9qaUNoYXJ0IGluc3RhbmNlLlxuICogPGJyPjxicj5cbiAqIFR5cGljYWxseSBhIENoYXJ0IHdpbGwgY29uc2lzdCBvZiBQYW5lbHMsIHdoaWNoIGluIHR1cm4gY29uc2lzdCBvZiBsYXllcnMuXG4gKiBAZXh0ZW5kcyBjb3JlLlR5cGVcbiAqIEBtZW1iZXJvZiBjb3JlXG4gKi9cbmNsYXNzIENoYXJ0IGV4dGVuZHMgVHlwZSB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIENoYXJ0XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkhUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbCwgY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuX2VsID0gZWw7XG4gICAgdGhpcy5fY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSB1bmRlZmluZWQ7XG4gICAgaWYoXy5pc051bWJlcih0aGlzLndpZHRoKSlcbiAgICB7XG4gICAgICB0aGlzLl9lbC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyBcInB4XCI7XG4gICAgfVxuICAgIHRoaXMuX2luaXRDcm9zc2hhaXIoKTtcbiAgICB0aGlzLl9saXN0ZW5Gb3JET01FdmVudHMoKTtcbiAgICB0aGlzLl90aW1lX2dyaWQgPSBuZXcgVGltZUdyaWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGNyb3NzaGFpclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRDcm9zc2hhaXIoKSB7XG4gICAgaWYodGhpcy5jcm9zc2hhaXIpXG4gICAge1xuICAgICAgdGhpcy5jcm9zc2hhaXIgPSBfLmlzT2JqZWN0KHRoaXMuY3Jvc3NoYWlyKSA/IHRoaXMuY3Jvc3NoYWlyIDoge307XG4gICAgICB0aGlzLl9jcm9zc2hhaXIgPSBuZXcgQ3Jvc3NoYWlyKHRoaXMsIHRoaXMuY3Jvc3NoYWlyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjcm9zc2hhaXJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZWZyZXNoQ3Jvc3NoYWlyKCkge1xuICAgIGlmKHRoaXMuX2Nyb3NzaGFpciA9PT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgIHRoaXMuX2luaXRDcm9zc2hhaXIoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuX2Nyb3NzaGFpci5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiBmb3IgRE9NIGV2ZW50cywgc3BlY2lmaWNhbGx5IHdpbmRvdyByZXNpemVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9saXN0ZW5Gb3JET01FdmVudHMoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgd2luZG93IHJlc2l6ZSBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZVdpbmRvd1Jlc2l6ZShldikge1xuICAgIGlmKHRoaXMud2lkdGggPT09IFwiYXV0b1wiKVxuICAgIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hDcm9zc2hhaXIoKTtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsVG9FbmRPblJlc2l6ZSA9PT0gdHJ1ZSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5fc2V0T2Zmc2V0KDAsIHRydWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcmVmcmVzaENyb3NzaGFpcigpO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB1bmRlcmx5aW5nIEhUTUxFbGVtZW50XG4gICAqIEByZXR1cm5zIHtleHRlcm5hbC5IVE1MRWxlbWVudH1cbiAgICovXG4gIGdldEVsKCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2lkdGhcbiAgICogQHJldHVybnMgeyhudW1iZXJ8c3RyaW5nKX0gV2lkdGggaW4gcGl4ZWxzIG9yIFwiYXV0b1wiXG4gICAqL1xuICBnZXRXaWR0aCgpIHtcbiAgICBpZih0aGlzLndpZHRoID09PSBcImF1dG9cIilcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRFbCgpLmNsaWVudFdpZHRoO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCByaWdodCBwYWRkaW5nIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbiBwaXhlbHNcbiAgICovXG4gIGdldFBhZGRpbmdSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nUmlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRyYXdpbmcgd2lkdGhcbiAgICogQHJldHVybnMge251bWJlcn0gVGhpcyBpcyB0aGUgdG90YWwgd2lkdGggbWludXMgcmlnaHQgcGFkZGluZyAoaW4gcGl4ZWxzKS5cbiAgICovXG4gIGdldERyYXdpbmdXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRQYWRkaW5nUmlnaHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEhlaWdodCBvZiB1bmRlcmx5aW5nIEhUTUxFbGVtZW50IGluIHBpeGVscy5cbiAgICovXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpbnRlcnZhbCB3aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn0gU2l6ZSBvZiBpbnRlcnZhbCBpbiBwaXhlbHMuXG4gICAqL1xuICBzZXRJbnRlcnZhbFdpZHRoKGludGVydmFsX3dpZHRoKSB7XG4gICAgdGhpcy5pbnRlcnZhbFdpZHRoID0gaW50ZXJ2YWxfd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGludGVydmFsIHdpZHRoIFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBTaXplIG9mIGludGVydmFsIGluIHBpeGVscy5cbiAgICovXG4gIGdldEludGVydmFsV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWxXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb2Zmc2V0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aW1lIGdyaWQgaW5zdGFuY2UgdGhhdCBpcyB1c2VkIGJ5IENoYXJ0LlxuICAgKiBAcmV0dXJucyB7Y29yZS5UaW1lR3JpZH1cbiAgICovXG4gIGdldFRpbWVHcmlkKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lX2dyaWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjaGFydCBjb21wb25lbnRzLlxuICAgKiBAcmV0dXJucyB7Y29yZS5Db21wb25lbnRbXX1cbiAgICovXG4gIGdldENvbXBvbmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHM7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNvbXBvbmVudCB0byBjaGFydC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZ2lvbl9uYW1lXG4gICAqIEBwYXJhbSB7Y29yZS5Db21wb25lbnR9IGNvbXBcbiAgICovXG4gIGFkZENvbXBvbmVudChyZWdpb25fbmFtZSwgY29tcCkge1xuICAgIC8vQ29tcG9uZW50LmFkZENvbXBvbmVudChyZWdpb25fbmFtZSwgY29tcCk7XG4gICAgY29tcC5zZXRQYXJlbnRDaGFydCh0aGlzKTtcbiAgICBpZihjb21wLmluaXRMYXllcnMpXG4gICAge1xuICAgICAgY29tcC5pbml0TGF5ZXJzKCk7IC8vIGludm9rZWQgYWZ0ZXIgc2V0UGFyZW50Q2hhcnQgYmVjYXVzZSBtZXRob2RzIG9mIENoYXJ0IHJlcXVpcmVkXG4gICAgfVxuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICBjb21wLnJlbmRlcihyZWdpb25fbmFtZSk7XG4gICAgdGhpcy5fY29tcG9uZW50c0hhdmVDaGFuZ2VkKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGNvbXBvbmVudHMgZnJvbSBjaGFydC5cbiAgICogQHBhcmFtIHtjb3JlLkNvbXBvbmVudFtdfSBleGNsdWRlX2NvbXBvbmVudHMuIENvbXBvbmVudHMgdG8gbm90IHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudHMoZXhjbHVkZV9jb21wb25lbnRzKSB7XG4gICAgZXhjbHVkZV9jb21wb25lbnRzID0gZXhjbHVkZV9jb21wb25lbnRzIHx8IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9jb21wb25lbnRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBjb21wID0gdGhpcy5fY29tcG9uZW50c1tpXTtcbiAgICAgIHZhciBleGNsdWRlID0gZmFsc2U7XG4gICAgICBmb3IodmFyIGogPSAwOyBqIDwgZXhjbHVkZV9jb21wb25lbnRzLmxlbmd0aDsgaisrKVxuICAgICAge1xuICAgICAgICBpZihjb21wID09PSBleGNsdWRlX2NvbXBvbmVudHNbal0pXG4gICAgICAgIHtcbiAgICAgICAgICBleGNsdWRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZXhjbHVkZSAhPT0gdHJ1ZSlcbiAgICAgIHtcbiAgICAgICAgY29tcC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbXBvbmVudHMgPSBleGNsdWRlX2NvbXBvbmVudHM7XG4gICAgdGhpcy5fY29tcG9uZW50c0hhdmVDaGFuZ2VkKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBkYXRhLlxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuRGF0YVBvaW50W119IHJhd19kYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzeW1ib2xcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdyYW51bGFyaXR5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9fZHJhd1xuICAgKi9cbiAgbG9hZERhdGEocmF3X2RhdGEsIHN5bWJvbCwgZ3JhbnVsYXJpdHksIGRvX2RyYXcpIHtcbiAgICB0aGlzLl9kYXRhID0gbmV3IFRpbWVTZXJpZXNEYXRhKHJhd19kYXRhLCB0aGlzLmZpZWxkTWFwLCBzeW1ib2wsIGdyYW51bGFyaXR5KTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fY29tcG9uZW50cy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgY29tcCA9IHRoaXMuX2NvbXBvbmVudHNbaV07XG4gICAgICBpZihjb21wLnByZWNvbXB1dGUpXG4gICAgICB7XG4gICAgICAgIGNvbXAucHJlY29tcHV0ZSh0aGlzLl9kYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoZG9fZHJhdyA9PT0gdW5kZWZpbmVkIHx8IGRvX2RyYXcgPT09IHRydWUpXG4gICAge1xuICAgICAgaWYodGhpcy5zY3JvbGxUb0VuZE9uTG9hZCA9PT0gdHJ1ZSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5zY3JvbGwoMCwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYWxsIGNvbXBvbmVudHMuXG4gICAqL1xuICBkcmF3KCkge1xuICAgIGlmKHRoaXMuX2RhdGEgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICB2YXIgaW50ZXJ2YWxfY2FwYWNpdHkgPSB0aGlzLl9jYWxjdWxhdGVJbnRlcnZhbENhcGFjaXR5KCk7IFxuICAgICAgdmFyIGluZGV4VG9QaXhlbCA9IHRoaXMuZ2V0SW5kZXhUb1BpeGVsTWFwcGVyKCk7XG5cbiAgICAgIHRoaXMuX3RpbWVfZ3JpZC5yZWZyZXNoKHRoaXMuX2RhdGEsIGludGVydmFsX2NhcGFjaXR5LCB0aGlzLmdldE9mZnNldCgpLCB0aGlzLmdldERyYXdpbmdXaWR0aCgpLCB0aGlzLnZlcnRpY2FsR3JpZExpbmVTcGFjaW5nKTtcblxuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuX2NvbXBvbmVudHMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBjb21wID0gdGhpcy5fY29tcG9uZW50c1tpXTtcbiAgICAgICAgaWYoY29tcC5kcmF3KVxuICAgICAgICB7XG4gICAgICAgICAgY29tcC5kcmF3KHRoaXMuX2RhdGEsIGludGVydmFsX2NhcGFjaXR5LCB0aGlzLmdldE9mZnNldCgpLCBpbmRleFRvUGl4ZWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdChcImFmdGVyZHJhd1wiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIG51bWJlciBvZiBlbGVtZW50cyB0aGF0IHdpbGwgZml0IG9uIHRoZSBjaGFydC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jYWxjdWxhdGVJbnRlcnZhbENhcGFjaXR5KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0RHJhd2luZ1dpZHRoKCkgLyB0aGlzLmludGVydmFsV2lkdGgpO1xuICB9XG5cbiAgLyoqXG4gICogaW5kZXhUb1BpeGVsXG4gICogQGNhbGxiYWNrIGluZGV4VG9QaXhlbFxuICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAqIEByZXR1cm5zIHtudW1iZXJ9IHgtdmFsdWUgZXhwcmVzc2VkIGluIHVuaXQgcGl4ZWxzXG4gICovXG5cbiAgLyoqXG4gICAqIEdldCBpbmRleCB0byBwaXhlbCBtYXBwZXIgZnVuY3Rpb25cbiAgICogQHJldHVybnMge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICovXG4gIGdldEluZGV4VG9QaXhlbE1hcHBlcigpIHtcbiAgICB2YXIgcHhfaW50ZXJ2YWxfd2lkdGggPSB0aGlzLmdldEludGVydmFsV2lkdGgoKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoKTtcbiAgICB2YXIgbWFwRnVuYyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gKGluZGV4IC0gb2Zmc2V0KSAqIHB4X2ludGVydmFsX3dpZHRoO1xuICAgIH07XG4gICAgcmV0dXJuIG1hcEZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlZCBhZnRlciBjb21wb25lbnRzIGhhdmUgY2hhbmdlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb21wb25lbnRzSGF2ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5fcmVmcmVzaENyb3NzaGFpcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBieSBzcGVjaWZpZWQgb2Zmc2V0LlxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2l2ZW5fb2Zmc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbV9lbmRcbiAgICogQHBhcmFtIHtib29sZWFufSBkb19kcmF3XG4gICAqL1xuICBzY3JvbGwoZ2l2ZW5fb2Zmc2V0LCBmcm9tX2VuZCwgZG9fZHJhdykge1xuICAgIHRoaXMuX3NldE9mZnNldChnaXZlbl9vZmZzZXQsIGZyb21fZW5kKTtcbiAgICBpZihkb19kcmF3ID09PSB1bmRlZmluZWQgfHwgZG9fZHJhdyA9PT0gdHJ1ZSlcbiAgICB7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gZ2l2ZW5fb2Zmc2V0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbV9lbmRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRPZmZzZXQoZ2l2ZW5fb2Zmc2V0LCBmcm9tX2VuZCkge1xuICAgIHRoaXMucmVsYXRpdmVPZmZzZXQgPSBnaXZlbl9vZmZzZXQ7XG4gICAgdGhpcy5vZmZzZXRGcm9tRW5kID0gZnJvbV9lbmQ7XG4gICAgaWYoZnJvbV9lbmQgPT09IHRydWUgJiYgdGhpcy5fZGF0YSAhPT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgIHZhciBkYXRhX2xlbmd0aCA9IHRoaXMuX2RhdGEuZ2V0UmF3RGF0YSgpLmxlbmd0aDtcbiAgICAgIHZhciBpbnRlcnZhbF9jYXBhY2l0eSA9IHRoaXMuX2NhbGN1bGF0ZUludGVydmFsQ2FwYWNpdHkoKTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gKGRhdGFfbGVuZ3RoIC0gaW50ZXJ2YWxfY2FwYWNpdHkpIC0gZ2l2ZW5fb2Zmc2V0O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5vZmZzZXQgPSBnaXZlbl9vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvZmZzZXQgcmVsYXRpdmUgdG8gZWl0aGVyIHN0YXJ0IG9yIGVuZCBvZiBkYXRhLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmVPZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogSXMgc2Nyb2xsIG9mZnNldCBmcm9tIGVuZD9cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1Njcm9sbE9mZnNldEZyb21FbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0RnJvbUVuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyBkYXRhIHNjcm9sbGVkIGJlZm9yZSBzdGFydD9cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0JleW9uZFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCA8IDA7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJ0O1xuIl19
},{"../core/TimeGrid":10,"../core/Type":11,"../crosshair/Crosshair":13,"../timeseries/TimeSeriesData":41,"underscore":6}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = require("../core/Type");
var Region = require("../core/Region");

/**
 * Chart component base class.
 * <br><br>
 * @extends core.Type
 * @memberof core
 */

var Component = function (_Type) {
  _inherits(Component, _Type);

  /**
   * Instantiate Component
   * @constructor
   * @param {object} config
   */
  function Component(config) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, config));

    _this.layers = [];
    return _this;
  }

  /**
   * Destroy underlying HTMLElement
   */


  _createClass(Component, [{
    key: "destroy",
    value: function destroy() {
      var el = this.getEl();
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      this.el = undefined;
    }

    /**
     * Sets parent chart
     * @param {core.Chart} chart
     */

  }, {
    key: "setParentChart",
    value: function setParentChart(parent_chart) {
      this._parent_chart = parent_chart;
    }

    /**
     * Get parent chart
     * @returns {core.Chart} chart
     */

  }, {
    key: "getParentChart",
    value: function getParentChart() {
      return this._parent_chart;
    }

    /**
     * Get underlying HTMLElement
     * @returns {external:HTMLElement}
     */

  }, {
    key: "getEl",
    value: function getEl() {
      return this.el;
    }

    /**
     * Get class name of underlying HTMLElement
     * @returns {string}
     */

  }, {
    key: "getClassName",
    value: function getClassName() {
      return "component";
    }

    /**
     * Get component height
     * @returns {number} Height in pixels
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }

    /**
     * Render
     * @param {string} region_name Name of HTMLElement, specified using data-name attribute. 
     * @returns {this}
     */

  }, {
    key: "render",
    value: function render(region_name) {
      var region = Region.getRegionsByName(this.getParentChart().getEl())[region_name];
      this.el = this.createElement();
      region.getEl().innerHTML = "";
      region.getEl().appendChild(this.el);
      return this;
    }

    /**
     * Create HTMLElement
     * <br><br>
     * Can be overridden, for example if CANVAS is used.
     * @returns {external.HTMLElement}
     */

  }, {
    key: "createElement",
    value: function createElement() {
      var div = window.document.createElement("DIV");
      div.className = this.getClassName();
      div.style.height = this.height + "px";
      return div;
    }

    /**
     * Add layer
     * @param {layer.Layer} layer
     */

  }, {
    key: "addLayer",
    value: function addLayer(layer) {
      layer.setParentComponent(this);
      this.layers.push(layer);
    }

    /**
     * Add layer
     * @returns {layer.Layer[]}
     */

  }, {
    key: "getAllLayers",
    value: function getAllLayers() {
      return this.layers;
    }

    /**
     * Remove layers
     * @param {layer.Layer[]} exclude_layers Layers to not removed
     */

  }, {
    key: "removeLayers",
    value: function removeLayers(exclude_layers) {
      exclude_layers = exclude_layers || [];
      this.layers = exclude_layers;
      this._layersHaveChanged();
    }

    /**
     * To be invoked immediately after layers have changed.
     * <br><br>
     * Intended to be implemented by subclasses.
     */

  }, {
    key: "_layersHaveChanged",
    value: function _layersHaveChanged() {}
  }]);

  return Component;
}(Type);

module.exports = Component;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUeXBlIiwicmVxdWlyZSIsIlJlZ2lvbiIsIkNvbXBvbmVudCIsImNvbmZpZyIsImxheWVycyIsImVsIiwiZ2V0RWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ1bmRlZmluZWQiLCJwYXJlbnRfY2hhcnQiLCJfcGFyZW50X2NoYXJ0IiwiaGVpZ2h0IiwicmVnaW9uX25hbWUiLCJyZWdpb24iLCJnZXRSZWdpb25zQnlOYW1lIiwiZ2V0UGFyZW50Q2hhcnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsInN0eWxlIiwibGF5ZXIiLCJzZXRQYXJlbnRDb21wb25lbnQiLCJwdXNoIiwiZXhjbHVkZV9sYXllcnMiLCJfbGF5ZXJzSGF2ZUNoYW5nZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLE9BQU9DLFFBQVEsY0FBUixDQUFYO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxnQkFBUixDQUFiOztBQUVBOzs7Ozs7O0lBTU1FLFM7OztBQUVKOzs7OztBQUtBLHFCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUEsc0hBQ1pBLE1BRFk7O0FBRWxCLFVBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRmtCO0FBR25COztBQUVEOzs7Ozs7OzhCQUdVO0FBQ1IsVUFBSUMsS0FBSyxLQUFLQyxLQUFMLEVBQVQ7QUFDQSxVQUFHRCxNQUFNQSxHQUFHRSxVQUFaLEVBQ0E7QUFDRUYsV0FBR0UsVUFBSCxDQUFjQyxXQUFkLENBQTBCSCxFQUExQjtBQUNEO0FBQ0QsV0FBS0EsRUFBTCxHQUFVSSxTQUFWO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBSWVDLFksRUFBYztBQUMzQixXQUFLQyxhQUFMLEdBQXFCRCxZQUFyQjtBQUNEOztBQUVEOzs7Ozs7O3FDQUlpQjtBQUNmLGFBQU8sS0FBS0MsYUFBWjtBQUNEOztBQUVEOzs7Ozs7OzRCQUlRO0FBQ04sYUFBTyxLQUFLTixFQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7bUNBSWU7QUFDYixhQUFPLFdBQVA7QUFDRDs7QUFFRDs7Ozs7OztnQ0FJWTtBQUNWLGFBQU8sS0FBS08sTUFBWjtBQUNEOztBQUVEOzs7Ozs7OzsyQkFLT0MsVyxFQUFhO0FBQ2xCLFVBQUlDLFNBQVNiLE9BQU9jLGdCQUFQLENBQXdCLEtBQUtDLGNBQUwsR0FBc0JWLEtBQXRCLEVBQXhCLEVBQXVETyxXQUF2RCxDQUFiO0FBQ0EsV0FBS1IsRUFBTCxHQUFVLEtBQUtZLGFBQUwsRUFBVjtBQUNBSCxhQUFPUixLQUFQLEdBQWVZLFNBQWYsR0FBMkIsRUFBM0I7QUFDQUosYUFBT1IsS0FBUCxHQUFlYSxXQUFmLENBQTJCLEtBQUtkLEVBQWhDO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0I7QUFDZCxVQUFJZSxNQUFNQyxPQUFPQyxRQUFQLENBQWdCTCxhQUFoQixDQUE4QixLQUE5QixDQUFWO0FBQ0FHLFVBQUlHLFNBQUosR0FBZ0IsS0FBS0MsWUFBTCxFQUFoQjtBQUNBSixVQUFJSyxLQUFKLENBQVViLE1BQVYsR0FBbUIsS0FBS0EsTUFBTCxHQUFjLElBQWpDO0FBQ0EsYUFBT1EsR0FBUDtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTTSxLLEVBQU87QUFDZEEsWUFBTUMsa0JBQU4sQ0FBeUIsSUFBekI7QUFDQSxXQUFLdkIsTUFBTCxDQUFZd0IsSUFBWixDQUFpQkYsS0FBakI7QUFDRDs7QUFFRDs7Ozs7OzttQ0FJZTtBQUNiLGFBQU8sS0FBS3RCLE1BQVo7QUFDRDs7QUFFRDs7Ozs7OztpQ0FJYXlCLGMsRUFBZ0I7QUFDM0JBLHVCQUFpQkEsa0JBQWtCLEVBQW5DO0FBQ0EsV0FBS3pCLE1BQUwsR0FBY3lCLGNBQWQ7QUFDQSxXQUFLQyxrQkFBTDtBQUNEOztBQUVEOzs7Ozs7Ozt5Q0FLcUIsQ0FDcEI7Ozs7RUEzSHFCL0IsSTs7QUErSHhCZ0MsT0FBT0MsT0FBUCxHQUFpQjlCLFNBQWpCIiwiZmlsZSI6IkNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG52YXIgUmVnaW9uID0gcmVxdWlyZShcIi4uL2NvcmUvUmVnaW9uXCIpO1xuXG4vKipcbiAqIENoYXJ0IGNvbXBvbmVudCBiYXNlIGNsYXNzLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGNvcmUuVHlwZVxuICogQG1lbWJlcm9mIGNvcmVcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZSB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIENvbXBvbmVudFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdW5kZXJseWluZyBIVE1MRWxlbWVudFxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmdldEVsKCk7XG4gICAgaWYoZWwgJiYgZWwucGFyZW50Tm9kZSlcbiAgICB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHBhcmVudCBjaGFydFxuICAgKiBAcGFyYW0ge2NvcmUuQ2hhcnR9IGNoYXJ0XG4gICAqL1xuICBzZXRQYXJlbnRDaGFydChwYXJlbnRfY2hhcnQpIHtcbiAgICB0aGlzLl9wYXJlbnRfY2hhcnQgPSBwYXJlbnRfY2hhcnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhcmVudCBjaGFydFxuICAgKiBAcmV0dXJucyB7Y29yZS5DaGFydH0gY2hhcnRcbiAgICovXG4gIGdldFBhcmVudENoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnRfY2hhcnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVuZGVybHlpbmcgSFRNTEVsZW1lbnRcbiAgICogQHJldHVybnMge2V4dGVybmFsOkhUTUxFbGVtZW50fVxuICAgKi9cbiAgZ2V0RWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsYXNzIG5hbWUgb2YgdW5kZXJseWluZyBIVE1MRWxlbWVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0Q2xhc3NOYW1lKCkge1xuICAgIHJldHVybiBcImNvbXBvbmVudFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjb21wb25lbnQgaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEhlaWdodCBpbiBwaXhlbHNcbiAgICovXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWdpb25fbmFtZSBOYW1lIG9mIEhUTUxFbGVtZW50LCBzcGVjaWZpZWQgdXNpbmcgZGF0YS1uYW1lIGF0dHJpYnV0ZS4gXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKi9cbiAgcmVuZGVyKHJlZ2lvbl9uYW1lKSB7XG4gICAgdmFyIHJlZ2lvbiA9IFJlZ2lvbi5nZXRSZWdpb25zQnlOYW1lKHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXRFbCgpKVtyZWdpb25fbmFtZV07XG4gICAgdGhpcy5lbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICAgIHJlZ2lvbi5nZXRFbCgpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcmVnaW9uLmdldEVsKCkuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIEhUTUxFbGVtZW50XG4gICAqIDxicj48YnI+XG4gICAqIENhbiBiZSBvdmVycmlkZGVuLCBmb3IgZXhhbXBsZSBpZiBDQU5WQVMgaXMgdXNlZC5cbiAgICogQHJldHVybnMge2V4dGVybmFsLkhUTUxFbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICB2YXIgZGl2ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XG4gICAgZGl2LmNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XG4gICAgZGl2LnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGxheWVyXG4gICAqIEBwYXJhbSB7bGF5ZXIuTGF5ZXJ9IGxheWVyXG4gICAqL1xuICBhZGRMYXllcihsYXllcikge1xuICAgIGxheWVyLnNldFBhcmVudENvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbGF5ZXJcbiAgICogQHJldHVybnMge2xheWVyLkxheWVyW119XG4gICAqL1xuICBnZXRBbGxMYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBsYXllcnNcbiAgICogQHBhcmFtIHtsYXllci5MYXllcltdfSBleGNsdWRlX2xheWVycyBMYXllcnMgdG8gbm90IHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZUxheWVycyhleGNsdWRlX2xheWVycykge1xuICAgIGV4Y2x1ZGVfbGF5ZXJzID0gZXhjbHVkZV9sYXllcnMgfHwgW107XG4gICAgdGhpcy5sYXllcnMgPSBleGNsdWRlX2xheWVycztcbiAgICB0aGlzLl9sYXllcnNIYXZlQ2hhbmdlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGJlIGludm9rZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgbGF5ZXJzIGhhdmUgY2hhbmdlZC5cbiAgICogPGJyPjxicj5cbiAgICogSW50ZW5kZWQgdG8gYmUgaW1wbGVtZW50ZWQgYnkgc3ViY2xhc3Nlcy5cbiAgICovXG4gIF9sYXllcnNIYXZlQ2hhbmdlZCgpIHtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50O1xuIl19
},{"../core/Region":9,"../core/Type":11}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = require("../core/Type");

/**
 * Represents an underlyting HTMLElement that can contain a component.
 * <br><br>
 * @extends core.Type
 * @memberof core
 */

var Region = function (_Type) {
  _inherits(Region, _Type);

  /**
   * Instantiate Component
   * @constructor
   * @param {external.HTMLElement} el
   */
  function Region(el) {
    _classCallCheck(this, Region);

    var _this = _possibleConstructorReturn(this, (Region.__proto__ || Object.getPrototypeOf(Region)).call(this, {}));

    _this.el = el;
    _this.name = _this.el.getAttribute("data-name");
    return _this;
  }

  /**
   * Get underlying HTMLElement
   * @returns {external.HTMLElement}
   */


  _createClass(Region, [{
    key: "getEl",
    value: function getEl() {
      return this.el;
    }

    /**
     * Get region name
     * @returns {string}
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Get region height
     * @returns {number} Height in pixels
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.el.offsetHeight;
    }

    /**
     * @static
     * Get regions that are descendents of a specified HTMLElement.
     * @param {external.HTMLElement} el HTMLElement to search under.
     * @returns {object} Map of Regions by name
     */

  }], [{
    key: "getRegionsByName",
    value: function getRegionsByName(el) {
      var regions_by_name = {};
      var region_els = Region.getElementsByClassName(el, "region");
      for (var i = 0; i < region_els.length; i++) {
        var region_el = region_els[i];
        var region = new Region(region_el);
        regions_by_name[region.getName()] = region;
      }
      return regions_by_name;
    }

    /**
     * @static
     * Get elements that are descendents of a specified HTMLElement.
     * @param {external.HTMLElement} start_el
     * @param {string} class_name
     * @returns {HTMLElement[]}
     */

  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(start_el, class_name) {

      var matches = [];

      function traverse(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          var child_node = node.childNodes[i];

          if (child_node.childNodes.length > 0) {
            traverse(child_node);
          }

          if (child_node.getAttribute && child_node.getAttribute("class")) {
            if (child_node.getAttribute("class").split(" ").indexOf(class_name) >= 0) {
              matches.push(child_node);
            }
          }
        }
      }

      traverse(start_el);

      return matches;
    }
  }]);

  return Region;
}(Type);

module.exports = Region;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlZ2lvbi5qcyJdLCJuYW1lcyI6WyJUeXBlIiwicmVxdWlyZSIsIlJlZ2lvbiIsImVsIiwibmFtZSIsImdldEF0dHJpYnV0ZSIsIm9mZnNldEhlaWdodCIsInJlZ2lvbnNfYnlfbmFtZSIsInJlZ2lvbl9lbHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsInJlZ2lvbl9lbCIsInJlZ2lvbiIsImdldE5hbWUiLCJzdGFydF9lbCIsImNsYXNzX25hbWUiLCJtYXRjaGVzIiwidHJhdmVyc2UiLCJub2RlIiwiY2hpbGROb2RlcyIsImNoaWxkX25vZGUiLCJzcGxpdCIsImluZGV4T2YiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLGNBQVIsQ0FBWDs7QUFFQTs7Ozs7OztJQU1NQyxNOzs7QUFFSjs7Ozs7QUFLQSxrQkFBWUMsRUFBWixFQUFnQjtBQUFBOztBQUFBLGdIQUNSLEVBRFE7O0FBRWQsVUFBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLE1BQUtELEVBQUwsQ0FBUUUsWUFBUixDQUFxQixXQUFyQixDQUFaO0FBSGM7QUFJZjs7QUFFRDs7Ozs7Ozs7NEJBSVE7QUFDTixhQUFPLEtBQUtGLEVBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJVTtBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOztBQUVEOzs7Ozs7O2dDQUlZO0FBQ1YsYUFBTyxLQUFLRCxFQUFMLENBQVFHLFlBQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7O3FDQU13QkgsRSxFQUFJO0FBQzFCLFVBQUlJLGtCQUFrQixFQUF0QjtBQUNBLFVBQUlDLGFBQWFOLE9BQU9PLHNCQUFQLENBQThCTixFQUE5QixFQUFrQyxRQUFsQyxDQUFqQjtBQUNBLFdBQUksSUFBSU8sSUFBSSxDQUFaLEVBQWVBLElBQUlGLFdBQVdHLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUNBO0FBQ0UsWUFBSUUsWUFBWUosV0FBV0UsQ0FBWCxDQUFoQjtBQUNBLFlBQUlHLFNBQVMsSUFBSVgsTUFBSixDQUFXVSxTQUFYLENBQWI7QUFDQUwsd0JBQWdCTSxPQUFPQyxPQUFQLEVBQWhCLElBQW9DRCxNQUFwQztBQUNEO0FBQ0QsYUFBT04sZUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzJDQU84QlEsUSxFQUFVQyxVLEVBQVk7O0FBRWxELFVBQUlDLFVBQVUsRUFBZDs7QUFFQSxlQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUN0QixhQUFJLElBQUlULElBQUksQ0FBWixFQUFlQSxJQUFJUyxLQUFLQyxVQUFMLENBQWdCVCxNQUFuQyxFQUEyQ0QsR0FBM0MsRUFDQTtBQUNFLGNBQUlXLGFBQWFGLEtBQUtDLFVBQUwsQ0FBZ0JWLENBQWhCLENBQWpCOztBQUVBLGNBQUdXLFdBQVdELFVBQVgsQ0FBc0JULE1BQXRCLEdBQStCLENBQWxDLEVBQ0E7QUFDRU8scUJBQVNHLFVBQVQ7QUFDRDs7QUFFRCxjQUFHQSxXQUFXaEIsWUFBWCxJQUEyQmdCLFdBQVdoQixZQUFYLENBQXdCLE9BQXhCLENBQTlCLEVBQ0E7QUFDRSxnQkFBR2dCLFdBQVdoQixZQUFYLENBQXdCLE9BQXhCLEVBQWlDaUIsS0FBakMsQ0FBdUMsR0FBdkMsRUFBNENDLE9BQTVDLENBQW9EUCxVQUFwRCxLQUFtRSxDQUF0RSxFQUNBO0FBQ0VDLHNCQUFRTyxJQUFSLENBQWFILFVBQWI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFREgsZUFBU0gsUUFBVDs7QUFFQSxhQUFPRSxPQUFQO0FBRUQ7Ozs7RUExRmtCakIsSTs7QUE4RnJCeUIsT0FBT0MsT0FBUCxHQUFpQnhCLE1BQWpCIiwiZmlsZSI6IlJlZ2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiB1bmRlcmx5dGluZyBIVE1MRWxlbWVudCB0aGF0IGNhbiBjb250YWluIGEgY29tcG9uZW50LlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGNvcmUuVHlwZVxuICogQG1lbWJlcm9mIGNvcmVcbiAqL1xuY2xhc3MgUmVnaW9uIGV4dGVuZHMgVHlwZSB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIENvbXBvbmVudFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtleHRlcm5hbC5IVE1MRWxlbWVudH0gZWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdW5kZXJseWluZyBIVE1MRWxlbWVudFxuICAgKiBAcmV0dXJucyB7ZXh0ZXJuYWwuSFRNTEVsZW1lbnR9XG4gICAqL1xuICBnZXRFbCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVnaW9uIG5hbWVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcmVnaW9uIGhlaWdodFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBIZWlnaHQgaW4gcGl4ZWxzXG4gICAqL1xuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogR2V0IHJlZ2lvbnMgdGhhdCBhcmUgZGVzY2VuZGVudHMgb2YgYSBzcGVjaWZpZWQgSFRNTEVsZW1lbnQuXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWwuSFRNTEVsZW1lbnR9IGVsIEhUTUxFbGVtZW50IHRvIHNlYXJjaCB1bmRlci5cbiAgICogQHJldHVybnMge29iamVjdH0gTWFwIG9mIFJlZ2lvbnMgYnkgbmFtZVxuICAgKi9cbiAgc3RhdGljIGdldFJlZ2lvbnNCeU5hbWUoZWwpIHtcbiAgICB2YXIgcmVnaW9uc19ieV9uYW1lID0ge307XG4gICAgdmFyIHJlZ2lvbl9lbHMgPSBSZWdpb24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlbCwgXCJyZWdpb25cIik7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHJlZ2lvbl9lbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIHJlZ2lvbl9lbCA9IHJlZ2lvbl9lbHNbaV07XG4gICAgICB2YXIgcmVnaW9uID0gbmV3IFJlZ2lvbihyZWdpb25fZWwpO1xuICAgICAgcmVnaW9uc19ieV9uYW1lW3JlZ2lvbi5nZXROYW1lKCldID0gcmVnaW9uO1xuICAgIH1cbiAgICByZXR1cm4gcmVnaW9uc19ieV9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogR2V0IGVsZW1lbnRzIHRoYXQgYXJlIGRlc2NlbmRlbnRzIG9mIGEgc3BlY2lmaWVkIEhUTUxFbGVtZW50LlxuICAgKiBAcGFyYW0ge2V4dGVybmFsLkhUTUxFbGVtZW50fSBzdGFydF9lbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NfbmFtZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIHN0YXRpYyBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHN0YXJ0X2VsLCBjbGFzc19uYW1lKSB7XG5cbiAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGNoaWxkX25vZGUgPSBub2RlLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYoY2hpbGRfbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICB0cmF2ZXJzZShjaGlsZF9ub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2hpbGRfbm9kZS5nZXRBdHRyaWJ1dGUgJiYgY2hpbGRfbm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSlcbiAgICAgICAge1xuICAgICAgICAgIGlmKGNoaWxkX25vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoXCIgXCIpLmluZGV4T2YoY2xhc3NfbmFtZSkgPj0gMClcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtYXRjaGVzLnB1c2goY2hpbGRfbm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRyYXZlcnNlKHN0YXJ0X2VsKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZ2lvbjtcbiJdfQ==
},{"../core/Type":11}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Moment = require("moment");
var Type = require("../core/Type");

var GRANS = {
  "M1": { ident: "M1", hours: 1 / 60, mins: 1 },
  "M5": { ident: "M5", hours: 1 / 12, mins: 5 },
  "M10": { ident: "M10", hours: 1 / 6, mins: 10 },
  "M15": { ident: "M15", hours: 0.25, mins: 15 },
  "M30": { ident: "M30", hours: 0.5, mins: 30 },
  "H1": { ident: "H1", hours: 1, mins: 60 },
  "H4": { ident: "H4", hours: 4, mins: 60 * 4 },
  "H8": { ident: "H8", hours: 8, mins: 60 * 8 },
  "D": { ident: "D", hours: 24, mins: 60 * 24, days: 1 }, // 1 day
  "W": { ident: "W", hours: 120, mins: 60 * 24 * 5, days: 5, weeks: 1 }, // 5 days
  "M": { ident: "M", hours: 504, mins: 60 * 24 * 21, days: 21, weeks: 4, months: 1 }, // 21 days
  "Q": { ident: "Q", hours: 1512, mins: 60 * 24 * 63, days: 63, weeks: 13, months: 3 }, // 63 days
  "Y": { ident: "Y", hours: 6000, mins: 60 * 24 * 250, days: 250, weeks: 51, months: 12, years: 1 // 250 days
  } };

var _default_config = {};

/**
 * Non visual time grid, used by TimeGridLayer.
 * <br><br>
 * @extends core.Type
 * @memberof core
 */

var TimeGrid = function (_Type) {
  _inherits(TimeGrid, _Type);

  /**
   * Instantiate TimeGrid
   * @constructor
   * @param {object} config
   */
  function TimeGrid(config) {
    _classCallCheck(this, TimeGrid);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (TimeGrid.__proto__ || Object.getPrototypeOf(TimeGrid)).call(this, config));

    _this.lines = {};
    _this._pixelToTimeString = function () {
      return "";
    };
    return _this;
  }

  /**
   * Refresh calculated time grid using current data in view.
   * @param {timeseries.TimeSeriesData} data
   * @param {number} count
   * @param {number} offset
   * @param {number} width
   * @param {number} line_spacing
   */


  _createClass(TimeGrid, [{
    key: "refresh",
    value: function refresh(data, count, offset, width, line_spacing) {

      this.lines = {};
      this.line_spacing = line_spacing;

      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      var data_gran = data.getGranularity();

      var grid_gran = this.granularity;
      if (grid_gran === undefined) {
        grid_gran = TimeGrid.determineTimeGranularity(data_gran, count, width, line_spacing);
      }

      for (var i = offset >= 0 ? offset + 1 : 0 + 1; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var dat_prev = data_arr[i - 1];

        var time_str = dat[field_map.time];
        var prev_time_str = dat_prev[field_map.time];

        var grid_line = TimeGrid.isGridLine(grid_gran, time_str, prev_time_str);
        if (grid_line !== null) {
          this.lines["" + i + ""] = grid_line;
        }
      }

      this._pixelToTimeString = this.getPixelToTimeStringMapper(width, count, offset, data_arr, data_gran, field_map.time);
    }

    /**
     * Get pixel to time string map function.
     * @param {number} pixel_width
     * @param {number} interval_count
     * @param {number} offset
     * @param {timeseries.DataPoint[]} data_arr
     * @param {string} data_gran
     */

  }, {
    key: "getPixelToTimeStringMapper",
    value: function getPixelToTimeStringMapper(pixel_width, interval_count, offset, data_arr, data_gran, field_name) {
      var format = "ddd D HH:mm";
      if (data_gran === "D" || data_gran === "W") {
        format = "ddd D MMM";
      }
      var mapFunc = function mapFunc(px) {
        var index = Math.round(px / pixel_width * interval_count);
        var dat = data_arr[offset + index];
        if (dat) {
          return Moment(dat[field_name]).format(format);
        } else {
          return "";
        }
      };
      return mapFunc;
    }

    /**
     * Get line at given index
     * @param {number} i
     * @returns {object|undefined}
     */

  }, {
    key: "lineAt",
    value: function lineAt(i) {
      return this.lines["" + i + ""];
    }

    /**
     * Get spacing between lines
     * @returns {number} Interval between vertical grid lines in unit pixels
     */

  }, {
    key: "getLineSpacing",
    value: function getLineSpacing() {
      return this.line_spacing;
    }

    /**
     * Get spacing between lines
     * @param {number} px Number of pixels from left of chart.
     * @returns {number} Index
     */

  }, {
    key: "pixelToTimeString",
    value: function pixelToTimeString(px) {
      return this._pixelToTimeString(px);
    }

    /**
     * @static
     * Determine if a grid line exists at given granulrity and time. 
     * @param {string} grid_gran
     * @param {string} time_str
     * @param {string} prev_time_str
     * @returns {object|null}
     */

  }], [{
    key: "isGridLine",
    value: function isGridLine(grid_gran, time_str, prev_time_str) {

      var gran = GRANS[grid_gran];
      var d = new Date(time_str);
      var d_prev = new Date(prev_time_str);
      // M5, M10, M15 or M30
      if (gran.mins < 60 && TimeGrid.isNMinuteChange(gran.mins, d)) {
        return { format: TimeGrid.determineMinFormat(d, d_prev) };
      }
      // H8, H4, H1
      else if (gran.hours < 24 && TimeGrid.isNHourChange(gran.hours, d)) {
          return { format: TimeGrid.determineHourFormat(d, d_prev) };
        }
        // D
        else if (gran.days !== undefined && gran.days < 5 && TimeGrid.isDayChange(d, d_prev)) {
            return { format: TimeGrid.determineDayFormat(d, d_prev) };
          }
          // W
          else if (gran.weeks !== undefined && gran.weeks === 1 && TimeGrid.isWeekChange(d, d_prev)) {
              return { format: TimeGrid.determineWeekFormat(d, d_prev) };
            }
            // M
            else if (gran.months !== undefined && gran.months === 1 && TimeGrid.isMonthChange(d, d_prev)) {
                return { format: TimeGrid.determineMonthFormat(d, d_prev) };
              }
              // Q
              else if (gran.months !== undefined && gran.months < 12 && TimeGrid.isNMonthChange(gran.months, d, d_prev)) {
                  return { format: TimeGrid.determineQuarterFormat(d, d_prev) };
                }
                // Y
                else if (TimeGrid.isYearChange(d, d_prev)) {
                    return { format: TimeGrid.determineYearFormat(d, d_prev) };
                  } else {
                    return null;
                  }
    }

    /**
     * Determine if N minute interval
     * @param {number} mins
     * @param {external:Date} d
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isNMinuteChange",
    value: function isNMinuteChange(mins, d) {
      return d.getUTCMinutes() % mins === 0;
    }

    /**
     * Determine if hour interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isHourChange",
    value: function isHourChange(d, d_prev) {
      return d.getUTCHours() !== d_prev.getUTCHours();
    }

    /**
     * Determine if N hour interval
     * @param {number} hours
     * @param {external:Date} d
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isNHourChange",
    value: function isNHourChange(hours, d) {
      return d.getUTCHours() % hours === 0 && d.getUTCMinutes() === 0;
    }

    /**
     * Determine if hour interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isDayChange",
    value: function isDayChange(d, d_prev) {
      return d.getUTCDate() !== d_prev.getUTCDate();
    }

    /**
     * Determine if week interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isWeekChange",
    value: function isWeekChange(d, d_prev) {
      return Moment(d).utc().weeks() !== Moment(d_prev).utc().weeks();
    }

    /**
     * Determine if month interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isMonthChange",
    value: function isMonthChange(d, d_prev) {
      return d.getUTCMonth() !== d_prev.getUTCMonth();
    }

    /**
     * Determine if N month interval
     * @param {number} months
     * @param {external:Date} d
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isNMonthChange",
    value: function isNMonthChange(months, d, d_prev) {
      return d.getUTCMonth() % months === 0 && TimeGrid.isMonthChange(d, d_prev);
    }

    /**
     * Determine if year interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {boolean}
     * @static
     */

  }, {
    key: "isYearChange",
    value: function isYearChange(d, d_prev) {
      return d.getUTCFullYear() !== d_prev.getUTCFullYear();
    }

    /**
     * Determine time stamp label format for minute interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineMinFormat",
    value: function determineMinFormat(d, d_prev) {
      if (TimeGrid.isDayChange(d, d_prev)) {
        return "ddd D";
      } else if (TimeGrid.isHourChange(d, d_prev)) {
        return "HH:mm";
      } else {
        return "HH:mm";
      }
    }

    /**
     * Determine time stamp label format for hour interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineHourFormat",
    value: function determineHourFormat(d, d_prev) {
      if (TimeGrid.isDayChange(d, d_prev)) {
        return "ddd D";
      } else {
        return "HH:mm";
      }
    }

    /**
     * Determine time stamp label format for day interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineDayFormat",
    value: function determineDayFormat(d, d_prev) {
      if (TimeGrid.isMonthChange(d, d_prev)) {
        return "MMM";
      } else {
        return "D";
      }
    }

    /**
     * Determine time stamp label format for week interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineWeekFormat",
    value: function determineWeekFormat(d, d_prev) {
      if (TimeGrid.isMonthChange(d, d_prev)) {
        return "MMM";
      } else {
        return "D";
      }
    }

    /**
     * Determine time stamp label format for month interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineMonthFormat",
    value: function determineMonthFormat(d, d_prev) {
      if (TimeGrid.isYearChange(d, d_prev)) {
        return "YYYY";
      } else {
        return "MMM";
      }
    }

    /**
     * Determine time stamp label format for quarter interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineQuarterFormat",
    value: function determineQuarterFormat(d, d_prev) {
      if (TimeGrid.isYearChange(d, d_prev)) {
        return "YYYY";
      } else {
        return "MMM";
      }
    }

    /**
     * Determine time stamp label format for year interval
     * @param {external:Date} d
     * @param {external:Date} d_prev
     * @returns {string} Moment.js format
     * @static
     */

  }, {
    key: "determineYearFormat",
    value: function determineYearFormat(d, d_prev) {
      return "'YY";
    }

    /**
     * Determine if a grid line exists at given granularity and time. 
     * @param {string} data_gran
     * @param {number} intervals
     * @param {number} pixel_width
     * @param {number} pixel_spacing
     * @returns {string}
     * @static
     */

  }, {
    key: "determineTimeGranularity",
    value: function determineTimeGranularity(data_gran, intervals, pixel_width, pixel_spacing) {
      // e.g. 1000 px / 50 px => 20 divisions
      var div_count = pixel_width / pixel_spacing;

      // e.g. 120 * 15 mins => 1800 minutes
      var mins = intervals * GRANS[data_gran].mins;

      // e.g. 1800 mins / 20 => 90 minutes 
      var interval_t = mins / div_count;

      for (var g in GRANS) {
        if (GRANS[g].mins >= interval_t) {
          return g;
        }
      }

      return "Y";
    }
  }]);

  return TimeGrid;
}(Type);

module.exports = TimeGrid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVHcmlkLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTW9tZW50IiwiVHlwZSIsIkdSQU5TIiwiaWRlbnQiLCJob3VycyIsIm1pbnMiLCJkYXlzIiwid2Vla3MiLCJtb250aHMiLCJ5ZWFycyIsIl9kZWZhdWx0X2NvbmZpZyIsIlRpbWVHcmlkIiwiY29uZmlnIiwiZXh0ZW5kIiwibGluZXMiLCJfcGl4ZWxUb1RpbWVTdHJpbmciLCJkYXRhIiwiY291bnQiLCJvZmZzZXQiLCJ3aWR0aCIsImxpbmVfc3BhY2luZyIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwiZGF0YV9hcnIiLCJnZXRSYXdEYXRhIiwiZGF0YV9ncmFuIiwiZ2V0R3JhbnVsYXJpdHkiLCJncmlkX2dyYW4iLCJncmFudWxhcml0eSIsInVuZGVmaW5lZCIsImRldGVybWluZVRpbWVHcmFudWxhcml0eSIsImkiLCJsZW5ndGgiLCJkYXQiLCJkYXRfcHJldiIsInRpbWVfc3RyIiwidGltZSIsInByZXZfdGltZV9zdHIiLCJncmlkX2xpbmUiLCJpc0dyaWRMaW5lIiwiZ2V0UGl4ZWxUb1RpbWVTdHJpbmdNYXBwZXIiLCJwaXhlbF93aWR0aCIsImludGVydmFsX2NvdW50IiwiZmllbGRfbmFtZSIsImZvcm1hdCIsIm1hcEZ1bmMiLCJweCIsImluZGV4IiwiTWF0aCIsInJvdW5kIiwiZ3JhbiIsImQiLCJEYXRlIiwiZF9wcmV2IiwiaXNOTWludXRlQ2hhbmdlIiwiZGV0ZXJtaW5lTWluRm9ybWF0IiwiaXNOSG91ckNoYW5nZSIsImRldGVybWluZUhvdXJGb3JtYXQiLCJpc0RheUNoYW5nZSIsImRldGVybWluZURheUZvcm1hdCIsImlzV2Vla0NoYW5nZSIsImRldGVybWluZVdlZWtGb3JtYXQiLCJpc01vbnRoQ2hhbmdlIiwiZGV0ZXJtaW5lTW9udGhGb3JtYXQiLCJpc05Nb250aENoYW5nZSIsImRldGVybWluZVF1YXJ0ZXJGb3JtYXQiLCJpc1llYXJDaGFuZ2UiLCJkZXRlcm1pbmVZZWFyRm9ybWF0IiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDRGF0ZSIsInV0YyIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRnVsbFllYXIiLCJpc0hvdXJDaGFuZ2UiLCJpbnRlcnZhbHMiLCJwaXhlbF9zcGFjaW5nIiwiZGl2X2NvdW50IiwiaW50ZXJ2YWxfdCIsImciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJRSxPQUFPRixRQUFRLGNBQVIsQ0FBWDs7QUFFQSxJQUFNRyxRQUFRO0FBQ1osUUFBTSxFQUFDQyxPQUFNLElBQVAsRUFBYUMsT0FBTSxJQUFFLEVBQXJCLEVBQXlCQyxNQUFNLENBQS9CLEVBRE07QUFFWixRQUFNLEVBQUNGLE9BQU0sSUFBUCxFQUFhQyxPQUFNLElBQUUsRUFBckIsRUFBeUJDLE1BQU0sQ0FBL0IsRUFGTTtBQUdaLFNBQU8sRUFBQ0YsT0FBTSxLQUFQLEVBQWNDLE9BQU0sSUFBRSxDQUF0QixFQUF5QkMsTUFBTSxFQUEvQixFQUhLO0FBSVosU0FBTyxFQUFDRixPQUFNLEtBQVAsRUFBY0MsT0FBTSxJQUFwQixFQUEwQkMsTUFBTSxFQUFoQyxFQUpLO0FBS1osU0FBTyxFQUFDRixPQUFNLEtBQVAsRUFBY0MsT0FBTSxHQUFwQixFQUF5QkMsTUFBTSxFQUEvQixFQUxLO0FBTVosUUFBTSxFQUFDRixPQUFNLElBQVAsRUFBYUMsT0FBTSxDQUFuQixFQUFzQkMsTUFBTSxFQUE1QixFQU5NO0FBT1osUUFBTSxFQUFDRixPQUFNLElBQVAsRUFBYUMsT0FBTSxDQUFuQixFQUFzQkMsTUFBTSxLQUFLLENBQWpDLEVBUE07QUFRWixRQUFNLEVBQUNGLE9BQU0sSUFBUCxFQUFhQyxPQUFNLENBQW5CLEVBQXNCQyxNQUFNLEtBQUssQ0FBakMsRUFSTTtBQVNaLE9BQUssRUFBQ0YsT0FBTSxHQUFQ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OztBQUVBLFdBQUksSUFBSUUsQ0FBUixJQUFhN0UsS0FBYixFQUNBO0FBQ0UsWUFBR0EsTUFBTTZFLENBQU4sRUFBUzFFLElBQVQsSUFBaUJ5RSxVQUFwQixFQUNBO0FBQ0UsaUJBQU9DLENBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sR0FBUDtBQUVEOzs7O0VBdFpvQjlFLEk7O0FBMFp2QitFLE9BQU9DLE9BQVAsR0FBaUJ0RSxRQUFqQiIsImZpbGUiOiJUaW1lR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIE1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG5cbmNvbnN0IEdSQU5TID0ge1xuICBcIk0xXCI6IHtpZGVudDpcIk0xXCIsIGhvdXJzOjEvNjAsIG1pbnM6IDF9LFxuICBcIk01XCI6IHtpZGVudDpcIk01XCIsIGhvdXJzOjEvMTIsIG1pbnM6IDV9LFxuICBcIk0xMFwiOiB7aWRlbnQ6XCJNMTBcIiwgaG91cnM6MS82LCBtaW5zOiAxMH0sXG4gIFwiTTE1XCI6IHtpZGVudDpcIk0xNVwiLCBob3VyczowLjI1LCBtaW5zOiAxNX0sXG4gIFwiTTMwXCI6IHtpZGVudDpcIk0zMFwiLCBob3VyczowLjUsIG1pbnM6IDMwfSxcbiAgXCJIMVwiOiB7aWRlbnQ6XCJIMVwiLCBob3VyczoxLCBtaW5zOiA2MH0sXG4gIFwiSDRcIjoge2lkZW50OlwiSDRcIiwgaG91cnM6NCwgbWluczogNjAgKiA0fSxcbiAgXCJIOFwiOiB7aWRlbnQ6XCJIOFwiLCBob3Vyczo4LCBtaW5zOiA2MCAqIDh9LFxuICBcIkRcIjoge2lkZW50OlwiRFwiLCBob3VyczoyNCwgbWluczogNjAgKiAyNCwgZGF5czoxfSwgLy8gMSBkYXlcbiAgXCJXXCI6IHtpZGVudDpcIldcIiwgaG91cnM6MTIwLCBtaW5zOiA2MCAqIDI0ICogNSwgZGF5czo1LCB3ZWVrczoxfSwgLy8gNSBkYXlzXG4gIFwiTVwiOiB7aWRlbnQ6XCJNXCIsIGhvdXJzOjUwNCwgbWluczogNjAgKiAyNCAqIDIxLCBkYXlzOjIxLCB3ZWVrczo0LCBtb250aHM6MX0sIC8vIDIxIGRheXNcbiAgXCJRXCI6IHtpZGVudDpcIlFcIiwgaG91cnM6MTUxMiwgbWluczogNjAgKiAyNCAqIDYzLCBkYXlzOiA2Mywgd2Vla3M6MTMsIG1vbnRoczozfSwgLy8gNjMgZGF5c1xuICBcIllcIjoge2lkZW50OlwiWVwiLCBob3Vyczo2MDAwLCBtaW5zOiA2MCAqIDI0ICogMjUwLCBkYXlzOiAyNTAsIHdlZWtzOjUxLCBtb250aHM6MTIsIHllYXJzOjF9IC8vIDI1MCBkYXlzXG59O1xuXG5jb25zdCBfZGVmYXVsdF9jb25maWcgPSB7XG59O1xuXG4vKipcbiAqIE5vbiB2aXN1YWwgdGltZSBncmlkLCB1c2VkIGJ5IFRpbWVHcmlkTGF5ZXIuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgY29yZS5UeXBlXG4gKiBAbWVtYmVyb2YgY29yZVxuICovXG5jbGFzcyBUaW1lR3JpZCBleHRlbmRzIFR5cGUge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBUaW1lR3JpZFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMubGluZXMgPSB7fTtcbiAgICB0aGlzLl9waXhlbFRvVGltZVN0cmluZyA9IGZ1bmN0aW9uKCl7cmV0dXJuIFwiXCI7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGNhbGN1bGF0ZWQgdGltZSBncmlkIHVzaW5nIGN1cnJlbnQgZGF0YSBpbiB2aWV3LlxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lX3NwYWNpbmdcbiAgICovXG4gIHJlZnJlc2goZGF0YSwgY291bnQsIG9mZnNldCwgd2lkdGgsIGxpbmVfc3BhY2luZykge1xuXG4gICAgdGhpcy5saW5lcyA9IHt9O1xuICAgIHRoaXMubGluZV9zcGFjaW5nID0gbGluZV9zcGFjaW5nO1xuXG4gICAgdmFyIGZpZWxkX21hcCA9IGRhdGEuZ2V0RmllbGRNYXAoKTtcbiAgICB2YXIgZGF0YV9hcnIgPSBkYXRhLmdldFJhd0RhdGEoKTtcbiAgICB2YXIgZGF0YV9ncmFuID0gZGF0YS5nZXRHcmFudWxhcml0eSgpO1xuXG4gICAgdmFyIGdyaWRfZ3JhbiA9IHRoaXMuZ3JhbnVsYXJpdHk7XG4gICAgaWYoZ3JpZF9ncmFuID09PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgZ3JpZF9ncmFuID0gVGltZUdyaWQuZGV0ZXJtaW5lVGltZUdyYW51bGFyaXR5KGRhdGFfZ3JhbiwgY291bnQsIHdpZHRoLCBsaW5lX3NwYWNpbmcpO1xuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IG9mZnNldCA+PSAwID8gKG9mZnNldCArIDEpIDogKDAgKyAxKTsgaSA8IG9mZnNldCArIGNvdW50ICYmIGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG4gICAgICB2YXIgZGF0X3ByZXYgPSBkYXRhX2FycltpIC0gMV07XG5cbiAgICAgIHZhciB0aW1lX3N0ciA9IGRhdFtmaWVsZF9tYXAudGltZV07XG4gICAgICB2YXIgcHJldl90aW1lX3N0ciA9IGRhdF9wcmV2W2ZpZWxkX21hcC50aW1lXTtcblxuICAgICAgdmFyIGdyaWRfbGluZSA9IFRpbWVHcmlkLmlzR3JpZExpbmUoZ3JpZF9ncmFuLCB0aW1lX3N0ciwgcHJldl90aW1lX3N0cik7XG4gICAgICBpZihncmlkX2xpbmUgIT09IG51bGwpXG4gICAgICB7XG4gICAgICAgIHRoaXMubGluZXNbXCJcIitpK1wiXCJdID0gZ3JpZF9saW5lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BpeGVsVG9UaW1lU3RyaW5nID0gdGhpcy5nZXRQaXhlbFRvVGltZVN0cmluZ01hcHBlcih3aWR0aCwgY291bnQsIG9mZnNldCwgZGF0YV9hcnIsIGRhdGFfZ3JhbiwgZmllbGRfbWFwLnRpbWUpO1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IHBpeGVsIHRvIHRpbWUgc3RyaW5nIG1hcCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsX3dpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbF9jb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dGltZXNlcmllcy5EYXRhUG9pbnRbXX0gZGF0YV9hcnJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGFfZ3JhblxuICAgKi9cbiAgZ2V0UGl4ZWxUb1RpbWVTdHJpbmdNYXBwZXIocGl4ZWxfd2lkdGgsIGludGVydmFsX2NvdW50LCBvZmZzZXQsIGRhdGFfYXJyLCBkYXRhX2dyYW4sIGZpZWxkX25hbWUpIHtcbiAgICB2YXIgZm9ybWF0ID0gXCJkZGQgRCBISDptbVwiO1xuICAgIGlmKGRhdGFfZ3JhbiA9PT0gXCJEXCIgfHwgZGF0YV9ncmFuID09PSBcIldcIilcbiAgICB7XG4gICAgICBmb3JtYXQgPSBcImRkZCBEIE1NTVwiO1xuICAgIH1cbiAgICB2YXIgbWFwRnVuYyA9IGZ1bmN0aW9uKHB4KSB7XG4gICAgICB2YXIgaW5kZXggPSBNYXRoLnJvdW5kKHB4IC8gcGl4ZWxfd2lkdGggKiBpbnRlcnZhbF9jb3VudCk7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbb2Zmc2V0ICsgaW5kZXhdO1xuICAgICAgaWYoZGF0KVxuICAgICAge1xuICAgICAgICByZXR1cm4gTW9tZW50KGRhdFtmaWVsZF9uYW1lXSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG1hcEZ1bmM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpbmUgYXQgZ2l2ZW4gaW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlcbiAgICogQHJldHVybnMge29iamVjdHx1bmRlZmluZWR9XG4gICAqL1xuICBsaW5lQXQoaSkge1xuICAgIHJldHVybiB0aGlzLmxpbmVzW1wiXCIraStcIlwiXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3BhY2luZyBiZXR3ZWVuIGxpbmVzXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEludGVydmFsIGJldHdlZW4gdmVydGljYWwgZ3JpZCBsaW5lcyBpbiB1bml0IHBpeGVsc1xuICAgKi9cbiAgZ2V0TGluZVNwYWNpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZV9zcGFjaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzcGFjaW5nIGJldHdlZW4gbGluZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHB4IE51bWJlciBvZiBwaXhlbHMgZnJvbSBsZWZ0IG9mIGNoYXJ0LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBJbmRleFxuICAgKi9cbiAgcGl4ZWxUb1RpbWVTdHJpbmcocHgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGl4ZWxUb1RpbWVTdHJpbmcocHgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogRGV0ZXJtaW5lIGlmIGEgZ3JpZCBsaW5lIGV4aXN0cyBhdCBnaXZlbiBncmFudWxyaXR5IGFuZCB0aW1lLiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdyaWRfZ3JhblxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGltZV9zdHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByZXZfdGltZV9zdHJcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKi9cbiAgc3RhdGljIGlzR3JpZExpbmUoZ3JpZF9ncmFuLCB0aW1lX3N0ciwgcHJldl90aW1lX3N0cikge1xuXG4gICAgdmFyIGdyYW4gPSBHUkFOU1tncmlkX2dyYW5dO1xuICAgIHZhciBkID0gbmV3IERhdGUodGltZV9zdHIpO1xuICAgIHZhciBkX3ByZXYgPSBuZXcgRGF0ZShwcmV2X3RpbWVfc3RyKTtcbiAgICAvLyBNNSwgTTEwLCBNMTUgb3IgTTMwXG4gICAgaWYoZ3Jhbi5taW5zIDwgNjAgJiYgVGltZUdyaWQuaXNOTWludXRlQ2hhbmdlKGdyYW4ubWlucywgZCkpXG4gICAge1xuICAgICAgcmV0dXJuIHtmb3JtYXQ6VGltZUdyaWQuZGV0ZXJtaW5lTWluRm9ybWF0KGQsIGRfcHJldil9O1xuICAgIH1cbiAgICAvLyBIOCwgSDQsIEgxXG4gICAgZWxzZSBpZihncmFuLmhvdXJzIDwgMjQgJiYgVGltZUdyaWQuaXNOSG91ckNoYW5nZShncmFuLmhvdXJzLCBkKSlcbiAgICB7XG4gICAgICByZXR1cm4ge2Zvcm1hdDpUaW1lR3JpZC5kZXRlcm1pbmVIb3VyRm9ybWF0KGQsIGRfcHJldil9O1xuICAgIH1cbiAgICAvLyBEXG4gICAgZWxzZSBpZihncmFuLmRheXMgIT09IHVuZGVmaW5lZCAmJiBncmFuLmRheXMgPCA1ICYmIFRpbWVHcmlkLmlzRGF5Q2hhbmdlKGQsIGRfcHJldikpXG4gICAge1xuICAgICAgcmV0dXJuIHtmb3JtYXQ6VGltZUdyaWQuZGV0ZXJtaW5lRGF5Rm9ybWF0KGQsIGRfcHJldil9O1xuICAgIH1cbiAgICAvLyBXXG4gICAgZWxzZSBpZihncmFuLndlZWtzICE9PSB1bmRlZmluZWQgJiYgZ3Jhbi53ZWVrcyA9PT0gMSAmJiBUaW1lR3JpZC5pc1dlZWtDaGFuZ2UoZCwgZF9wcmV2KSlcbiAgICB7XG4gICAgICByZXR1cm4ge2Zvcm1hdDpUaW1lR3JpZC5kZXRlcm1pbmVXZWVrRm9ybWF0KGQsIGRfcHJldil9O1xuICAgIH1cbiAgICAvLyBNXG4gICAgZWxzZSBpZihncmFuLm1vbnRocyAhPT0gdW5kZWZpbmVkICYmIGdyYW4ubW9udGhzID09PSAxICYmIFRpbWVHcmlkLmlzTW9udGhDaGFuZ2UoZCwgZF9wcmV2KSlcbiAgICB7XG4gICAgICByZXR1cm4ge2Zvcm1hdDpUaW1lR3JpZC5kZXRlcm1pbmVNb250aEZvcm1hdChkLCBkX3ByZXYpfTtcbiAgICB9XG4gICAgLy8gUVxuICAgIGVsc2UgaWYoZ3Jhbi5tb250aHMgIT09IHVuZGVmaW5lZCAmJiBncmFuLm1vbnRocyA8IDEyICYmIFRpbWVHcmlkLmlzTk1vbnRoQ2hhbmdlKGdyYW4ubW9udGhzLCBkLCBkX3ByZXYpKVxuICAgIHtcbiAgICAgIHJldHVybiB7Zm9ybWF0OlRpbWVHcmlkLmRldGVybWluZVF1YXJ0ZXJGb3JtYXQoZCwgZF9wcmV2KX07XG4gICAgfVxuICAgIC8vIFlcbiAgICBlbHNlIGlmKFRpbWVHcmlkLmlzWWVhckNoYW5nZShkLCBkX3ByZXYpKVxuICAgIHtcbiAgICAgIHJldHVybiB7Zm9ybWF0OlRpbWVHcmlkLmRldGVybWluZVllYXJGb3JtYXQoZCwgZF9wcmV2KX07XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgTiBtaW51dGUgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbnNcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaXNOTWludXRlQ2hhbmdlKG1pbnMsIGQpIHtcbiAgICByZXR1cm4gZC5nZXRVVENNaW51dGVzKCkgJSBtaW5zID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBob3VyIGludGVydmFsXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RGF0ZX0gZFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRfcHJldlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGlzSG91ckNoYW5nZShkLCBkX3ByZXYpIHtcbiAgICByZXR1cm4gZC5nZXRVVENIb3VycygpICE9PSBkX3ByZXYuZ2V0VVRDSG91cnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgTiBob3VyIGludGVydmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBob3Vyc1xuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBpc05Ib3VyQ2hhbmdlKGhvdXJzLCBkKSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDSG91cnMoKSAlIGhvdXJzID09PSAwICYmIGQuZ2V0VVRDTWludXRlcygpID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBob3VyIGludGVydmFsXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RGF0ZX0gZFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRfcHJldlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGlzRGF5Q2hhbmdlKGQsIGRfcHJldikge1xuICAgIHJldHVybiBkLmdldFVUQ0RhdGUoKSAhPT0gZF9wcmV2LmdldFVUQ0RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgd2VlayBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBpc1dlZWtDaGFuZ2UoZCwgZF9wcmV2KSB7XG4gICAgcmV0dXJuIE1vbWVudChkKS51dGMoKS53ZWVrcygpICE9PSBNb21lbnQoZF9wcmV2KS51dGMoKS53ZWVrcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBtb250aCBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBpc01vbnRoQ2hhbmdlKGQsIGRfcHJldikge1xuICAgIHJldHVybiBkLmdldFVUQ01vbnRoKCkgIT09IGRfcHJldi5nZXRVVENNb250aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBOIG1vbnRoIGludGVydmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb250aHNcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaXNOTW9udGhDaGFuZ2UobW9udGhzLCBkLCBkX3ByZXYpIHtcbiAgICByZXR1cm4gZC5nZXRVVENNb250aCgpICUgbW9udGhzID09PSAwICYmIFRpbWVHcmlkLmlzTW9udGhDaGFuZ2UoZCwgZF9wcmV2KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgeWVhciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBpc1llYXJDaGFuZ2UoZCwgZF9wcmV2KSB7XG4gICAgcmV0dXJuIGQuZ2V0VVRDRnVsbFllYXIoKSAhPT0gZF9wcmV2LmdldFVUQ0Z1bGxZZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRpbWUgc3RhbXAgbGFiZWwgZm9ybWF0IGZvciBtaW51dGUgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RGF0ZX0gZF9wcmV2XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IE1vbWVudC5qcyBmb3JtYXRcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGRldGVybWluZU1pbkZvcm1hdChkLCBkX3ByZXYpIHtcbiAgICBpZihUaW1lR3JpZC5pc0RheUNoYW5nZShkLCBkX3ByZXYpKVxuICAgIHtcbiAgICAgIHJldHVybiBcImRkZCBEXCI7XG4gICAgfVxuICAgIGVsc2UgaWYoVGltZUdyaWQuaXNIb3VyQ2hhbmdlKGQsIGRfcHJldikpXG4gICAge1xuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aW1lIHN0YW1wIGxhYmVsIGZvcm1hdCBmb3IgaG91ciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge3N0cmluZ30gTW9tZW50LmpzIGZvcm1hdFxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZGV0ZXJtaW5lSG91ckZvcm1hdChkLCBkX3ByZXYpIHtcbiAgICBpZihUaW1lR3JpZC5pc0RheUNoYW5nZShkLCBkX3ByZXYpKVxuICAgIHtcbiAgICAgIHJldHVybiBcImRkZCBEXCI7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGltZSBzdGFtcCBsYWJlbCBmb3JtYXQgZm9yIGRheSBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge3N0cmluZ30gTW9tZW50LmpzIGZvcm1hdFxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZGV0ZXJtaW5lRGF5Rm9ybWF0KGQsIGRfcHJldikge1xuICAgIGlmKFRpbWVHcmlkLmlzTW9udGhDaGFuZ2UoZCwgZF9wcmV2KSlcbiAgICB7XG4gICAgICByZXR1cm4gXCJNTU1cIjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiBcIkRcIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRpbWUgc3RhbXAgbGFiZWwgZm9ybWF0IGZvciB3ZWVrIGludGVydmFsXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RGF0ZX0gZFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRfcHJldlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBNb21lbnQuanMgZm9ybWF0XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBkZXRlcm1pbmVXZWVrRm9ybWF0KGQsIGRfcHJldikge1xuICAgIGlmKFRpbWVHcmlkLmlzTW9udGhDaGFuZ2UoZCwgZF9wcmV2KSlcbiAgICB7XG4gICAgICByZXR1cm4gXCJNTU1cIjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHJldHVybiBcIkRcIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRpbWUgc3RhbXAgbGFiZWwgZm9ybWF0IGZvciBtb250aCBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge3N0cmluZ30gTW9tZW50LmpzIGZvcm1hdFxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZGV0ZXJtaW5lTW9udGhGb3JtYXQoZCwgZF9wcmV2KSB7XG4gICAgaWYoVGltZUdyaWQuaXNZZWFyQ2hhbmdlKGQsIGRfcHJldikpXG4gICAge1xuICAgICAgcmV0dXJuIFwiWVlZWVwiO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgcmV0dXJuIFwiTU1NXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aW1lIHN0YW1wIGxhYmVsIGZvcm1hdCBmb3IgcXVhcnRlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpEYXRlfSBkX3ByZXZcbiAgICogQHJldHVybnMge3N0cmluZ30gTW9tZW50LmpzIGZvcm1hdFxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZGV0ZXJtaW5lUXVhcnRlckZvcm1hdChkLCBkX3ByZXYpIHtcbiAgICBpZihUaW1lR3JpZC5pc1llYXJDaGFuZ2UoZCwgZF9wcmV2KSlcbiAgICB7XG4gICAgICByZXR1cm4gXCJZWVlZXCI7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICByZXR1cm4gXCJNTU1cIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRpbWUgc3RhbXAgbGFiZWwgZm9ybWF0IGZvciB5ZWFyIGludGVydmFsXG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RGF0ZX0gZFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkRhdGV9IGRfcHJldlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBNb21lbnQuanMgZm9ybWF0XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBkZXRlcm1pbmVZZWFyRm9ybWF0KGQsIGRfcHJldikge1xuICAgIHJldHVybiBcIidZWVwiO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdyaWQgbGluZSBleGlzdHMgYXQgZ2l2ZW4gZ3JhbnVsYXJpdHkgYW5kIHRpbWUuIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YV9ncmFuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVsX3dpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbF9zcGFjaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBkZXRlcm1pbmVUaW1lR3JhbnVsYXJpdHkoZGF0YV9ncmFuLCBpbnRlcnZhbHMsIHBpeGVsX3dpZHRoLCBwaXhlbF9zcGFjaW5nKSB7XG4gICAgLy8gZS5nLiAxMDAwIHB4IC8gNTAgcHggPT4gMjAgZGl2aXNpb25zXG4gICAgdmFyIGRpdl9jb3VudCA9IHBpeGVsX3dpZHRoIC8gcGl4ZWxfc3BhY2luZztcblxuICAgIC8vIGUuZy4gMTIwICogMTUgbWlucyA9PiAxODAwIG1pbnV0ZXNcbiAgICB2YXIgbWlucyA9IGludGVydmFscyAqIEdSQU5TW2RhdGFfZ3Jhbl0ubWlucztcblxuICAgIC8vIGUuZy4gMTgwMCBtaW5zIC8gMjAgPT4gOTAgbWludXRlcyBcbiAgICB2YXIgaW50ZXJ2YWxfdCA9IG1pbnMgLyBkaXZfY291bnQ7XG5cbiAgICBmb3IodmFyIGcgaW4gR1JBTlMpXG4gICAge1xuICAgICAgaWYoR1JBTlNbZ10ubWlucyA+PSBpbnRlcnZhbF90KVxuICAgICAge1xuICAgICAgICByZXR1cm4gZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gXCJZXCI7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZUdyaWQ7XG4iXX0=
},{"../core/Type":11,"moment":4,"underscore":6}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var EventEmitter = require("events").EventEmitter;

/**
 * External class
 *
 * @external Event
 * @see {@link https://developer.mozilla.org/en/docs/Web/API/Event}
 */

/**
 * External class
 *
 * @external Date
 * @see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date}
 */

/**
 * External class
 *
 * @external HTMLElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement}
 */

/**
 * External class
 *
 * @external HTMLCanvasElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement}
 */

/**
 * External class
 *
 * @external CanvasRenderingContext2D
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D}
 */

/**
 * Base class
 * @memberof core
 */

var Type = function (_EventEmitter) {
  _inherits(Type, _EventEmitter);

  /**
   * Instantiate Type
   * @constructor
   * @param {Object} config
   */
  function Type(config) {
    _classCallCheck(this, Type);

    var _this = _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this));

    _this._config = config;
    _.extend(_this, config);
    return _this;
  }

  /**
   * Get config object
   * @returns {Object} config
   */


  _createClass(Type, [{
    key: "getConfig",
    value: function getConfig() {
      return this._config;
    }
  }]);

  return Type;
}(EventEmitter);

module.exports = Type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlR5cGUuanMiXSwibmFtZXMiOlsiXyIsInJlcXVpcmUiLCJFdmVudEVtaXR0ZXIiLCJUeXBlIiwiY29uZmlnIiwiX2NvbmZpZyIsImV4dGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxlQUFlRCxRQUFRLFFBQVIsRUFBa0JDLFlBQXJDOztBQUVBOzs7Ozs7O0FBT0E7Ozs7Ozs7QUFPQTs7Ozs7OztBQU9BOzs7Ozs7O0FBT0E7Ozs7Ozs7QUFPQTs7Ozs7SUFJTUMsSTs7O0FBRUo7Ozs7O0FBS0EsZ0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFFbEIsVUFBS0MsT0FBTCxHQUFlRCxNQUFmO0FBQ0FKLE1BQUVNLE1BQUYsUUFBZUYsTUFBZjtBQUhrQjtBQUluQjs7QUFFRDs7Ozs7Ozs7Z0NBSVk7QUFDVixhQUFPLEtBQUtDLE9BQVo7QUFDRDs7OztFQW5CZ0JILFk7O0FBdUJuQkssT0FBT0MsT0FBUCxHQUFpQkwsSUFBakIiLCJmaWxlIjoiVHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIikuRXZlbnRFbWl0dGVyO1xuXG4vKipcbiAqIEV4dGVybmFsIGNsYXNzXG4gKlxuICogQGV4dGVybmFsIEV2ZW50XG4gKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9BUEkvRXZlbnR9XG4gKi9cblxuLyoqXG4gKiBFeHRlcm5hbCBjbGFzc1xuICpcbiAqIEBleHRlcm5hbCBEYXRlXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlfVxuICovXG5cbi8qKlxuICogRXh0ZXJuYWwgY2xhc3NcbiAqXG4gKiBAZXh0ZXJuYWwgSFRNTEVsZW1lbnRcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudH1cbiAqL1xuXG4vKipcbiAqIEV4dGVybmFsIGNsYXNzXG4gKlxuICogQGV4dGVybmFsIEhUTUxDYW52YXNFbGVtZW50XG4gKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnR9XG4gKi9cblxuLyoqXG4gKiBFeHRlcm5hbCBjbGFzc1xuICpcbiAqIEBleHRlcm5hbCBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9XG4gKi9cblxuLyoqXG4gKiBCYXNlIGNsYXNzXG4gKiBAbWVtYmVyb2YgY29yZVxuICovXG5jbGFzcyBUeXBlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgVHlwZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgXy5leHRlbmQodGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY29uZmlnIG9iamVjdFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICovXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUeXBlO1xuIl19
},{"events":2,"underscore":6}],12:[function(require,module,exports){
"use strict";

module.exports = function (canvas) {
  // get the canvas and context
  var context = canvas.getContext('2d'),

  // now default all the dimension info
  srcx = 0,
      srcy = 0,
      srcw = canvas.width,
      srch = canvas.height,
      desx = srcx,
      desy = srcy,
      desw = srcw,
      desh = srch,


  // finally query the various pixel ratios
  devicePixelRatio = window.devicePixelRatio || 1,
      backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1,
      ratio = devicePixelRatio / backingStoreRatio;

  // upscale the canvas if the two ratios don't match
  if (devicePixelRatio !== backingStoreRatio) {

    var oldWidth = canvas.width;
    var oldHeight = canvas.height;

    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;

    canvas.style.width = oldWidth + 'px';
    canvas.style.height = oldHeight + 'px';

    // now scale the context to counter
    // the fact that we've manually scaled
    // our canvas element
    context.scale(ratio, ratio);
  }

  return canvas;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkanVzdENhbnZhcy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzcmN4Iiwic3JjeSIsInNyY3ciLCJ3aWR0aCIsInNyY2giLCJoZWlnaHQiLCJkZXN4IiwiZGVzeSIsImRlc3ciLCJkZXNoIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImJhY2tpbmdTdG9yZVJhdGlvIiwid2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsIm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJvQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyIsImJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJyYXRpbyIsIm9sZFdpZHRoIiwib2xkSGVpZ2h0Iiwic3R5bGUiLCJzY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNoQztBQUNBLE1BQUlDLFVBQVVELE9BQU9FLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDs7QUFDRTtBQUNBQyxTQUFPLENBRlQ7QUFBQSxNQUdFQyxPQUFPLENBSFQ7QUFBQSxNQUlFQyxPQUFPTCxPQUFPTSxLQUpoQjtBQUFBLE1BS0VDLE9BQU9QLE9BQU9RLE1BTGhCO0FBQUEsTUFNRUMsT0FBT04sSUFOVDtBQUFBLE1BT0VPLE9BQU9OLElBUFQ7QUFBQSxNQVFFTyxPQUFPTixJQVJUO0FBQUEsTUFTRU8sT0FBT0wsSUFUVDs7O0FBV0U7QUFDQU0scUJBQW1CQyxPQUFPRCxnQkFBUCxJQUEyQixDQVpoRDtBQUFBLE1BYUVFLG9CQUFvQmQsUUFBUWUsNEJBQVIsSUFDQWYsUUFBUWdCLHlCQURSLElBRUFoQixRQUFRaUIsd0JBRlIsSUFHQWpCLFFBQVFrQix1QkFIUixJQUlBbEIsUUFBUW1CLHNCQUpSLElBSWtDLENBakJ4RDtBQUFBLE1BbUJFQyxRQUFRUixtQkFBbUJFLGlCQW5CN0I7O0FBcUJBO0FBQ0EsTUFBSUYscUJBQXFCRSxpQkFBekIsRUFBNEM7O0FBRTFDLFFBQUlPLFdBQVd0QixPQUFPTSxLQUF0QjtBQUNBLFFBQUlpQixZQUFZdkIsT0FBT1EsTUFBdkI7O0FBRUFSLFdBQU9NLEtBQVAsR0FBZWdCLFdBQVdELEtBQTFCO0FBQ0FyQixXQUFPUSxNQUFQLEdBQWdCZSxZQUFZRixLQUE1Qjs7QUFFQXJCLFdBQU93QixLQUFQLENBQWFsQixLQUFiLEdBQXFCZ0IsV0FBVyxJQUFoQztBQUNBdEIsV0FBT3dCLEtBQVAsQ0FBYWhCLE1BQWIsR0FBc0JlLFlBQVksSUFBbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0F0QixZQUFRd0IsS0FBUixDQUFjSixLQUFkLEVBQXFCQSxLQUFyQjtBQUNEOztBQUVELFNBQU9yQixNQUFQO0FBQ0QsQ0ExQ0QiLCJmaWxlIjoiYWRqdXN0Q2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gIC8vIGdldCB0aGUgY2FudmFzIGFuZCBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgLy8gbm93IGRlZmF1bHQgYWxsIHRoZSBkaW1lbnNpb24gaW5mb1xuICAgIHNyY3ggPSAwLFxuICAgIHNyY3kgPSAwLFxuICAgIHNyY3cgPSBjYW52YXMud2lkdGgsXG4gICAgc3JjaCA9IGNhbnZhcy5oZWlnaHQsXG4gICAgZGVzeCA9IHNyY3gsXG4gICAgZGVzeSA9IHNyY3ksXG4gICAgZGVzdyA9IHNyY3csXG4gICAgZGVzaCA9IHNyY2gsXG5cbiAgICAvLyBmaW5hbGx5IHF1ZXJ5IHRoZSB2YXJpb3VzIHBpeGVsIHJhdGlvc1xuICAgIGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgIGJhY2tpbmdTdG9yZVJhdGlvID0gY29udGV4dC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMSxcblxuICAgIHJhdGlvID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuXG4gIC8vIHVwc2NhbGUgdGhlIGNhbnZhcyBpZiB0aGUgdHdvIHJhdGlvcyBkb24ndCBtYXRjaFxuICBpZiAoZGV2aWNlUGl4ZWxSYXRpbyAhPT0gYmFja2luZ1N0b3JlUmF0aW8pIHtcblxuICAgIHZhciBvbGRXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB2YXIgb2xkSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgIGNhbnZhcy53aWR0aCA9IG9sZFdpZHRoICogcmF0aW87XG4gICAgY2FudmFzLmhlaWdodCA9IG9sZEhlaWdodCAqIHJhdGlvO1xuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoID0gb2xkV2lkdGggKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBvbGRIZWlnaHQgKyAncHgnO1xuXG4gICAgLy8gbm93IHNjYWxlIHRoZSBjb250ZXh0IHRvIGNvdW50ZXJcbiAgICAvLyB0aGUgZmFjdCB0aGF0IHdlJ3ZlIG1hbnVhbGx5IHNjYWxlZFxuICAgIC8vIG91ciBjYW52YXMgZWxlbWVudFxuICAgIGNvbnRleHQuc2NhbGUocmF0aW8sIHJhdGlvKTtcbiAgfVxuXG4gIHJldHVybiBjYW52YXM7XG59XG4iXX0=
},{}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Type = require("../core/Type");
var CrosshairZone = require("../crosshair/CrosshairZone");

var _default_config = {
  lineColor: "#000000",
  labelHeight: 16,
  showTimeLabel: false,
  labelFont: "7pt normal normal arial;",
  labelBgColor: "#000000",
  labelColor: "#FFFFFF",
  timeLabelWidth: 70,
  valuePrecision: 4
};

/**
 * Represents a crosshair (pair of crosshairs) overlaid on chart.
 * <br><br>
 * @extends core.Type
 * @memberof crosshair
 */

var Crosshair = function (_Type) {
  _inherits(Crosshair, _Type);

  /**
   * Instantiate Crosshair
   * @constructor
   * @param {core:Chart} parent_chart
   * @param {Object} config
   */
  function Crosshair(parent_chart, config) {
    _classCallCheck(this, Crosshair);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (Crosshair.__proto__ || Object.getPrototypeOf(Crosshair)).call(this, config));

    _this._crosshair_zones = {};
    _this._parent_chart = parent_chart;
    _this.width = _this.getParentChart().getWidth();
    _this.lineWidth = _this.getParentChart().getDrawingWidth();
    _this.valueLabelWidth = _this.width - _this.lineWidth;
    _this._render();
    _this._listenForDOMEvents();
    return _this;
  }

  /**
   * Destroy underlying HTMLElements
   */


  _createClass(Crosshair, [{
    key: "destroy",
    value: function destroy() {
      for (var i in this._crosshair_zones) {
        if (this._crosshair_zones.hasOwnProperty(i)) {
          var canvas = this._crosshair_zones[i].getEl();
          if (canvas && canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
        }
      }
    }

    /**
     * Get parent chart
     * @returns {core.Chart} chart
     */

  }, {
    key: "getParentChart",
    value: function getParentChart() {
      return this._parent_chart;
    }

    /**
     * Destroy and re-render.
     * @private
     */

  }, {
    key: "_render",
    value: function _render() {

      this.destroy();
      var comps = this.getParentChart().getComponents();

      for (var i = 0; i < comps.length; i++) {
        var ch_zone = new CrosshairZone(this, comps[i]);
        this._crosshair_zones["" + i + ""] = ch_zone;
        ch_zone.render(i);
      }
    }

    /**
     * Listen for mousemove and mouseout events.
     * @private
     */

  }, {
    key: "_listenForDOMEvents",
    value: function _listenForDOMEvents() {

      this.getParentChart().getEl().addEventListener("mousemove", this._handleMousemove.bind(this));
      this.getParentChart().getEl().addEventListener("mouseout", this._handleMouseout.bind(this));
    }

    /**
     * Handle mousemove event
     * @param {external:Event} ev
     * @private
     */

  }, {
    key: "_handleMousemove",
    value: function _handleMousemove(ev) {
      var zone_index = ev.target.getAttribute("ch-zone-index");
      var ch_zone = this._crosshair_zones[zone_index];
      this._draw(ev.offsetX, ev.offsetY, ch_zone, this._crosshair_zones);
    }

    /**
     * Handle mouseout event
     * @param {external:Event} ev
     * @private
     */

  }, {
    key: "_handleMouseout",
    value: function _handleMouseout(ev) {
      this.clear();
    }

    /**
     * Refresh dimensions, for example after browser window is resized.
     */

  }, {
    key: "refresh",
    value: function refresh() {

      this.width = this.getParentChart().getWidth();
      this.lineWidth = this.getParentChart().getDrawingWidth();
      this.valueLabelWidth = this.width - this.lineWidth;

      this._render();
    }

    /**
     * Handle mouseout event
     * @param {number} x
     * @param {number} y
     * @param {crosshair.CrosshairZone} ch_zone
     * @param {Object} ch_zones {crosshair.CrosshairZone} map
     * @private
     */

  }, {
    key: "_draw",
    value: function _draw(x, y, ch_zone, ch_zones) {
      if (ch_zone) {
        for (var i in ch_zones) {
          if (ch_zones.hasOwnProperty(i)) {
            var comp = ch_zones[i].getComponent();
            var canvas = ch_zones[i].getEl();
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Vertical crosshair
            context.beginPath();
            context.rect(x, 0, 1, canvas.height);
            context.fillStyle = this.lineColor;
            context.fill();

            if (comp.crosshair && comp.crosshair.time && comp.crosshair.time.label) {
              // label
              context.beginPath();
              context.rect(x, 0, this.timeLabelWidth, this.labelHeight);
              context.fillStyle = this.labelBgColor;
              context.fill();

              var time_grid = this.getParentChart().getTimeGrid();
              var time_text = time_grid.pixelToTimeString(x);

              context.font = this.labelFont;
              context.textAlign = "left";
              context.textBaseline = "middle";
              context.fillStyle = this.labelColor;
              context.fillText(time_text, x + 4, this.labelHeight * 0.5);
            }

            // Horizontal crosshair
            if (ch_zones[i] === ch_zone && (comp.crosshair === undefined || comp.crosshair.value)) {
              // line
              context.beginPath();
              context.rect(0, y, this.lineWidth, 1);
              context.fillStyle = this.lineColor;
              context.fill();

              // label
              context.beginPath();
              context.rect(this.lineWidth, y - this.labelHeight * 0.5, this.valueLabelWidth, this.labelHeight);
              context.fillStyle = this.labelBgColor;
              context.fill();

              var value_text = "" + comp.pixelToValue(y).toFixed(this.valuePrecision);

              context.font = this.labelFont;
              context.textAlign = "left";
              context.textBaseline = "middle";
              context.fillStyle = this.labelColor;
              context.fillText(value_text, this.lineWidth + 4, y);
            }
          }
        }
      }
    }

    /**
     * Clear all crosshair canvases.
     */

  }, {
    key: "clear",
    value: function clear() {
      for (var i in this._crosshair_zones) {
        if (this._crosshair_zones.hasOwnProperty(i)) {
          var canvas = this._crosshair_zones[i].getEl();
          if (canvas) {
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    }
  }]);

  return Crosshair;
}(Type);

module.exports = Crosshair;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNyb3NzaGFpci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIlR5cGUiLCJDcm9zc2hhaXJab25lIiwiX2RlZmF1bHRfY29uZmlnIiwibGluZUNvbG9yIiwibGFiZWxIZWlnaHQiLCJzaG93VGltZUxhYmVsIiwibGFiZWxGb250IiwibGFiZWxCZ0NvbG9yIiwibGFiZWxDb2xvciIsInRpbWVMYWJlbFdpZHRoIiwidmFsdWVQcmVjaXNpb24iLCJDcm9zc2hhaXIiLCJwYXJlbnRfY2hhcnQiLCJjb25maWciLCJleHRlbmQiLCJfY3Jvc3NoYWlyX3pvbmVzIiwiX3BhcmVudF9jaGFydCIsIndpZHRoIiwiZ2V0UGFyZW50Q2hhcnQiLCJnZXRXaWR0aCIsImxpbmVXaWR0aCIsImdldERyYXdpbmdXaWR0aCIsInZhbHVlTGFiZWxXaWR0aCIsIl9yZW5kZXIiLCJfbGlzdGVuRm9yRE9NRXZlbnRzIiwiaSIsImhhc093blByb3BlcnR5IiwiY2FudmFzIiwiZ2V0RWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJkZXN0cm95IiwiY29tcHMiLCJnZXRDb21wb25lbnRzIiwibGVuZ3RoIiwiY2hfem9uZSIsInJlbmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTW91c2Vtb3ZlIiwiYmluZCIsIl9oYW5kbGVNb3VzZW91dCIsImV2Iiwiem9uZV9pbmRleCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIl9kcmF3Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjbGVhciIsIngiLCJ5IiwiY2hfem9uZXMiLCJjb21wIiwiZ2V0Q29tcG9uZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNyb3NzaGFpciIsInRpbWUiLCJsYWJlbCIsInRpbWVfZ3JpZCIsImdldFRpbWVHcmlkIiwidGltZV90ZXh0IiwicGl4ZWxUb1RpbWVTdHJpbmciLCJmb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsInZhbHVlX3RleHQiLCJwaXhlbFRvVmFsdWUiLCJ0b0ZpeGVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFlBQVIsQ0FBUjtBQUNBLElBQUlDLE9BQU9ELFFBQVEsY0FBUixDQUFYO0FBQ0EsSUFBSUUsZ0JBQWdCRixRQUFRLDRCQUFSLENBQXBCOztBQUVBLElBQU1HLGtCQUFrQjtBQUN0QkMsYUFBVyxTQURXO0FBRXRCQyxlQUFhLEVBRlM7QUFHdEJDLGlCQUFlLEtBSE87QUFJdEJDLGFBQVcsMEJBSlc7QUFLdEJDLGdCQUFjLFNBTFE7QUFNdEJDLGNBQVksU0FOVTtBQU90QkMsa0JBQWdCLEVBUE07QUFRdEJDLGtCQUFnQjtBQVJNLENBQXhCOztBQVdBOzs7Ozs7O0lBTU1DLFM7OztBQUVKOzs7Ozs7QUFNQSxxQkFBWUMsWUFBWixFQUEwQkMsTUFBMUIsRUFBa0M7QUFBQTs7QUFDaENBLGFBQVNmLEVBQUVnQixNQUFGLENBQVMsRUFBVCxFQUFhWixlQUFiLEVBQThCVyxNQUE5QixDQUFUOztBQURnQyxzSEFFMUJBLE1BRjBCOztBQUdoQyxVQUFLRSxnQkFBTCxHQUF3QixFQUF4QjtBQUNBLFVBQUtDLGFBQUwsR0FBcUJKLFlBQXJCO0FBQ0EsVUFBS0ssS0FBTCxHQUFhLE1BQUtDLGNBQUwsR0FBc0JDLFFBQXRCLEVBQWI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtGLGNBQUwsR0FBc0JHLGVBQXRCLEVBQWpCO0FBQ0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLTCxLQUFMLEdBQWEsTUFBS0csU0FBekM7QUFDQSxVQUFLRyxPQUFMO0FBQ0EsVUFBS0MsbUJBQUw7QUFUZ0M7QUFVakM7O0FBRUQ7Ozs7Ozs7OEJBR1U7QUFDUixXQUFJLElBQUlDLENBQVIsSUFBYSxLQUFLVixnQkFBbEIsRUFDQTtBQUNFLFlBQUcsS0FB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ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIFR5cGUgPSByZXF1aXJlKFwiLi4vY29yZS9UeXBlXCIpO1xudmFyIENyb3NzaGFpclpvbmUgPSByZXF1aXJlKFwiLi4vY3Jvc3NoYWlyL0Nyb3NzaGFpclpvbmVcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgbGluZUNvbG9yOiBcIiMwMDAwMDBcIixcbiAgbGFiZWxIZWlnaHQ6IDE2LFxuICBzaG93VGltZUxhYmVsOiBmYWxzZSxcbiAgbGFiZWxGb250OiBcIjdwdCBub3JtYWwgbm9ybWFsIGFyaWFsO1wiLFxuICBsYWJlbEJnQ29sb3I6IFwiIzAwMDAwMFwiLFxuICBsYWJlbENvbG9yOiBcIiNGRkZGRkZcIixcbiAgdGltZUxhYmVsV2lkdGg6IDcwLFxuICB2YWx1ZVByZWNpc2lvbjogNFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY3Jvc3NoYWlyIChwYWlyIG9mIGNyb3NzaGFpcnMpIG92ZXJsYWlkIG9uIGNoYXJ0LlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGNvcmUuVHlwZVxuICogQG1lbWJlcm9mIGNyb3NzaGFpclxuICovXG5jbGFzcyBDcm9zc2hhaXIgZXh0ZW5kcyBUeXBlIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgQ3Jvc3NoYWlyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge2NvcmU6Q2hhcnR9IHBhcmVudF9jaGFydFxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJlbnRfY2hhcnQsIGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF8uZXh0ZW5kKHt9LCBfZGVmYXVsdF9jb25maWcsIGNvbmZpZyk7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLl9jcm9zc2hhaXJfem9uZXMgPSB7fTtcbiAgICB0aGlzLl9wYXJlbnRfY2hhcnQgPSBwYXJlbnRfY2hhcnQ7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXRXaWR0aCgpOyBcbiAgICB0aGlzLmxpbmVXaWR0aCA9IHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXREcmF3aW5nV2lkdGgoKTsgXG4gICAgdGhpcy52YWx1ZUxhYmVsV2lkdGggPSB0aGlzLndpZHRoIC0gdGhpcy5saW5lV2lkdGg7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgdGhpcy5fbGlzdGVuRm9yRE9NRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB1bmRlcmx5aW5nIEhUTUxFbGVtZW50c1xuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5fY3Jvc3NoYWlyX3pvbmVzKVxuICAgIHtcbiAgICAgIGlmKHRoaXMuX2Nyb3NzaGFpcl96b25lcy5oYXNPd25Qcm9wZXJ0eShpKSlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuX2Nyb3NzaGFpcl96b25lc1tpXS5nZXRFbCgpO1xuICAgICAgICBpZihjYW52YXMgJiYgY2FudmFzLnBhcmVudE5vZGUpXG4gICAgICAgIHtcbiAgICAgICAgICBjYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYW52YXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY2hhcnRcbiAgICogQHJldHVybnMge2NvcmUuQ2hhcnR9IGNoYXJ0XG4gICAqL1xuICBnZXRQYXJlbnRDaGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50X2NoYXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYW5kIHJlLXJlbmRlci5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZW5kZXIoKSB7XG5cbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB2YXIgY29tcHMgPSB0aGlzLmdldFBhcmVudENoYXJ0KCkuZ2V0Q29tcG9uZW50cygpO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbXBzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBjaF96b25lID0gbmV3IENyb3NzaGFpclpvbmUodGhpcywgY29tcHNbaV0pO1xuICAgICAgdGhpcy5fY3Jvc3NoYWlyX3pvbmVzW1wiXCIraStcIlwiXSA9IGNoX3pvbmU7XG4gICAgICBjaF96b25lLnJlbmRlcihpKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gZm9yIG1vdXNlbW92ZSBhbmQgbW91c2VvdXQgZXZlbnRzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2xpc3RlbkZvckRPTUV2ZW50cygpIHtcblxuICAgIHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXRFbCgpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5faGFuZGxlTW91c2Vtb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXRFbCgpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLl9oYW5kbGVNb3VzZW91dC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBtb3VzZW1vdmUgZXZlbnRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpFdmVudH0gZXZcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYW5kbGVNb3VzZW1vdmUoZXYpIHtcbiAgICB2YXIgem9uZV9pbmRleCA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjaC16b25lLWluZGV4XCIpOyBcbiAgICB2YXIgY2hfem9uZSA9IHRoaXMuX2Nyb3NzaGFpcl96b25lc1t6b25lX2luZGV4XTtcbiAgICB0aGlzLl9kcmF3KGV2Lm9mZnNldFgsIGV2Lm9mZnNldFksIGNoX3pvbmUsIHRoaXMuX2Nyb3NzaGFpcl96b25lcyk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIG1vdXNlb3V0IGV2ZW50XG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6RXZlbnR9IGV2XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFuZGxlTW91c2VvdXQoZXYpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBkaW1lbnNpb25zLCBmb3IgZXhhbXBsZSBhZnRlciBicm93c2VyIHdpbmRvdyBpcyByZXNpemVkLlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLmdldFBhcmVudENoYXJ0KCkuZ2V0V2lkdGgoKTsgXG4gICAgdGhpcy5saW5lV2lkdGggPSB0aGlzLmdldFBhcmVudENoYXJ0KCkuZ2V0RHJhd2luZ1dpZHRoKCk7IFxuICAgIHRoaXMudmFsdWVMYWJlbFdpZHRoID0gdGhpcy53aWR0aCAtIHRoaXMubGluZVdpZHRoO1xuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgbW91c2VvdXQgZXZlbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICogQHBhcmFtIHtjcm9zc2hhaXIuQ3Jvc3NoYWlyWm9uZX0gY2hfem9uZVxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hfem9uZXMge2Nyb3NzaGFpci5Dcm9zc2hhaXJab25lfSBtYXBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kcmF3KHgsIHksIGNoX3pvbmUsIGNoX3pvbmVzKSB7XG4gICAgaWYoY2hfem9uZSlcbiAgICB7XG4gICAgICBmb3IodmFyIGkgaW4gY2hfem9uZXMpXG4gICAgICB7XG4gICAgICAgIGlmKGNoX3pvbmVzLmhhc093blByb3BlcnR5KGkpKVxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNvbXAgPSBjaF96b25lc1tpXS5nZXRDb21wb25lbnQoKTtcbiAgICAgICAgICB2YXIgY2FudmFzID0gY2hfem9uZXNbaV0uZ2V0RWwoKTtcbiAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgIC8vIFZlcnRpY2FsIGNyb3NzaGFpclxuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgY29udGV4dC5yZWN0KHgsIDAsIDEsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5saW5lQ29sb3I7XG4gICAgICAgICAgY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgICBpZihjb21wLmNyb3NzaGFpciAmJiBjb21wLmNyb3NzaGFpci50aW1lICYmIGNvbXAuY3Jvc3NoYWlyLnRpbWUubGFiZWwpXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3QoeCwgMCwgdGhpcy50aW1lTGFiZWxXaWR0aCwgdGhpcy5sYWJlbEhlaWdodCk7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMubGFiZWxCZ0NvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG5cbiAgICAgICAgICAgIHZhciB0aW1lX2dyaWQgPSB0aGlzLmdldFBhcmVudENoYXJ0KCkuZ2V0VGltZUdyaWQoKTtcbiAgICAgICAgICAgIHZhciB0aW1lX3RleHQgPSB0aW1lX2dyaWQucGl4ZWxUb1RpbWVTdHJpbmcoeCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9IHRoaXMubGFiZWxGb250O1xuICAgICAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5sYWJlbENvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dCh0aW1lX3RleHQsIHggKyA0LCB0aGlzLmxhYmVsSGVpZ2h0ICogMC41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGNyb3NzaGFpclxuICAgICAgICAgIGlmKGNoX3pvbmVzW2ldID09PSBjaF96b25lICYmIChjb21wLmNyb3NzaGFpciA9PT0gdW5kZWZpbmVkIHx8IGNvbXAuY3Jvc3NoYWlyLnZhbHVlKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBsaW5lXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5yZWN0KDAsIHksIHRoaXMubGluZVdpZHRoLCAxKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5saW5lQ29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnJlY3QodGhpcy5saW5lV2lkdGgsIHkgLSAodGhpcy5sYWJlbEhlaWdodCAqIDAuNSksIHRoaXMudmFsdWVMYWJlbFdpZHRoLCB0aGlzLmxhYmVsSGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5sYWJlbEJnQ29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgICAgICAgICAgdmFyIHZhbHVlX3RleHQgPSBcIlwiICsgY29tcC5waXhlbFRvVmFsdWUoeSkudG9GaXhlZCh0aGlzLnZhbHVlUHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgY29udGV4dC5mb250ID0gdGhpcy5sYWJlbEZvbnQ7XG4gICAgICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmxhYmVsQ29sb3I7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHZhbHVlX3RleHQsIHRoaXMubGluZVdpZHRoICsgNCwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNyb3NzaGFpciBjYW52YXNlcy5cbiAgICovXG4gIGNsZWFyKCkge1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLl9jcm9zc2hhaXJfem9uZXMpXG4gICAge1xuICAgICAgaWYodGhpcy5fY3Jvc3NoYWlyX3pvbmVzLmhhc093blByb3BlcnR5KGkpKVxuICAgICAge1xuICAgICAgICB2YXIgY2FudmFzID0gdGhpcy5fY3Jvc3NoYWlyX3pvbmVzW2ldLmdldEVsKCk7XG4gICAgICAgIGlmKGNhbnZhcylcbiAgICAgICAge1xuICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENyb3NzaGFpcjtcbiJdfQ==
},{"../core/Type":11,"../crosshair/CrosshairZone":14,"underscore":6}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = require("../core/Type");
var adjustCanvas = require('../core/adjustCanvas');

/**
 * Represents a crosshair (pair of crosshairs) overlaid on a chart component.
 * <br><br>
 * @extends core.Type
 * @memberof crosshair
 */

var CrosshairZone = function (_Type) {
  _inherits(CrosshairZone, _Type);

  /**
   * Instantiate CrosshairZone
   * @constructor
   * @param {crosshair:Crosshair} parent_crosshair
   * @param {core.Component} component
   */
  function CrosshairZone(parent_crosshair, component) {
    _classCallCheck(this, CrosshairZone);

    var _this = _possibleConstructorReturn(this, (CrosshairZone.__proto__ || Object.getPrototypeOf(CrosshairZone)).call(this, {}));

    _this._parent_crosshair = parent_crosshair;
    _this._underlying_component = component;
    _this.name = "crosshair-" + _this._underlying_component.getClassName().replace(/ /g, "");
    return _this;
  }

  /**
   * Render crosshair over component.
   * @param {number} zone_index
   * @returns {external:HTMLCanvasElement}
   */


  _createClass(CrosshairZone, [{
    key: "render",
    value: function render(zone_index) {
      var comp = this._underlying_component;
      var comp_el = comp.getEl();
      var region_el = comp_el.parentNode;
      var canvas = window.document.createElement("CANVAS");
      canvas.className = "crosshair " + this.name;
      canvas.setAttribute("ch-zone-index", "" + zone_index + "");
      canvas.setAttribute("width", comp.getWidth());
      canvas.setAttribute("height", comp.getHeight());
      adjustCanvas(canvas);
      this._el = canvas;
      region_el.appendChild(canvas);
      return canvas;
    }

    /**
     * Get underlying HTMLCanvasElement the crosshair is drawn onto.
     * @returns {external:HTMLCanvasElement}
     */

  }, {
    key: "getEl",
    value: function getEl() {
      return this._el;
    }

    /**
     * Get underlying componnet
     * @returns {core:Component}
     */

  }, {
    key: "getComponent",
    value: function getComponent() {
      return this._underlying_component;
    }
  }]);

  return CrosshairZone;
}(Type);

module.exports = CrosshairZone;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNyb3NzaGFpclpvbmUuanMiXSwibmFtZXMiOlsiVHlwZSIsInJlcXVpcmUiLCJhZGp1c3RDYW52YXMiLCJDcm9zc2hhaXJab25lIiwicGFyZW50X2Nyb3NzaGFpciIsImNvbXBvbmVudCIsIl9wYXJlbnRfY3Jvc3NoYWlyIiwiX3VuZGVybHlpbmdfY29tcG9uZW50IiwibmFtZSIsImdldENsYXNzTmFtZSIsInJlcGxhY2UiLCJ6b25lX2luZGV4IiwiY29tcCIsImNvbXBfZWwiLCJnZXRFbCIsInJlZ2lvbl9lbCIsInBhcmVudE5vZGUiLCJjYW52YXMiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsIl9lbCIsImFwcGVuZENoaWxkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxPQUFPQyxRQUFRLGNBQVIsQ0FBWDtBQUNBLElBQUlDLGVBQWVELFFBQVEsc0JBQVIsQ0FBbkI7O0FBR0E7Ozs7Ozs7SUFNTUUsYTs7O0FBRUo7Ozs7OztBQU1BLHlCQUFZQyxnQkFBWixFQUE4QkMsU0FBOUIsRUFBeUM7QUFBQTs7QUFBQSw4SEFDakMsRUFEaUM7O0FBRXZDLFVBQUtDLGlCQUFMLEdBQXlCRixnQkFBekI7QUFDQSxVQUFLRyxxQkFBTCxHQUE2QkYsU0FBN0I7QUFDQSxVQUFLRyxJQUFMLEdBQVksZUFBZSxNQUFLRCxxQkFBTCxDQUEyQkUsWUFBM0IsR0FBMENDLE9BQTFDLENBQWtELElBQWxELEVBQXdELEVBQXhELENBQTNCO0FBSnVDO0FBS3hDOztBQUVEOzs7Ozs7Ozs7MkJBS09DLFUsRUFBWTtBQUNqQixVQUFJQyxPQUFPLEtBQUtMLHFCQUFoQjtBQUNBLFVBQUlNLFVBQVVELEtBQUtFLEtBQUwsRUFBZDtBQUNBLFVBQUlDLFlBQVlGLFFBQVFHLFVBQXhCO0FBQ0EsVUFBSUMsU0FBU0MsT0FBT0MsUUFBUCxDQUFnQkMsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FBYjtBQUNBSCxhQUFPSSxTQUFQLEdBQW1CLGVBQWUsS0FBS2IsSUFBdkM7QUFDQVMsYUFBT0ssWUFBUCxDQUFvQixlQUFwQixFQUFxQyxLQUFHWCxVQUFILEdBQWMsRUFBbkQ7QUFDQU0sYUFBT0ssWUFBUCxDQUFvQixPQUFwQixFQUE2QlYsS0FBS1csUUFBTCxFQUE3QjtBQUNBTixhQUFPSyxZQUFQLENBQW9CLFFBQXBCLEVBQThCVixLQUFLWSxTQUFMLEVBQTlCO0FBQ0F0QixtQkFBYWUsTUFBYjtBQUNBLFdBQUtRLEdBQUwsR0FBV1IsTUFBWDtBQUNBRixnQkFBVVcsV0FBVixDQUFzQlQsTUFBdEI7QUFDQSxhQUFPQSxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NEJBSVE7QUFDTixhQUFPLEtBQUtRLEdBQVo7QUFDRDs7QUFFRDs7Ozs7OzttQ0FJZTtBQUNiLGFBQU8sS0FBS2xCLHFCQUFaO0FBQ0Q7Ozs7RUFqRHlCUCxJOztBQXFENUIyQixPQUFPQyxPQUFQLEdBQWlCekIsYUFBakIiLCJmaWxlIjoiQ3Jvc3NoYWlyWm9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG52YXIgYWRqdXN0Q2FudmFzID0gcmVxdWlyZSgnLi4vY29yZS9hZGp1c3RDYW52YXMnKTtcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjcm9zc2hhaXIgKHBhaXIgb2YgY3Jvc3NoYWlycykgb3ZlcmxhaWQgb24gYSBjaGFydCBjb21wb25lbnQuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgY29yZS5UeXBlXG4gKiBAbWVtYmVyb2YgY3Jvc3NoYWlyXG4gKi9cbmNsYXNzIENyb3NzaGFpclpvbmUgZXh0ZW5kcyBUeXBlIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgQ3Jvc3NoYWlyWm9uZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtjcm9zc2hhaXI6Q3Jvc3NoYWlyfSBwYXJlbnRfY3Jvc3NoYWlyXG4gICAqIEBwYXJhbSB7Y29yZS5Db21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IocGFyZW50X2Nyb3NzaGFpciwgY29tcG9uZW50KSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMuX3BhcmVudF9jcm9zc2hhaXIgPSBwYXJlbnRfY3Jvc3NoYWlyO1xuICAgIHRoaXMuX3VuZGVybHlpbmdfY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMubmFtZSA9IFwiY3Jvc3NoYWlyLVwiICsgdGhpcy5fdW5kZXJseWluZ19jb21wb25lbnQuZ2V0Q2xhc3NOYW1lKCkucmVwbGFjZSgvIC9nLCBcIlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgY3Jvc3NoYWlyIG92ZXIgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gem9uZV9pbmRleFxuICAgKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICByZW5kZXIoem9uZV9pbmRleCkge1xuICAgIHZhciBjb21wID0gdGhpcy5fdW5kZXJseWluZ19jb21wb25lbnQ7XG4gICAgdmFyIGNvbXBfZWwgPSBjb21wLmdldEVsKCk7XG4gICAgdmFyIHJlZ2lvbl9lbCA9IGNvbXBfZWwucGFyZW50Tm9kZTtcbiAgICB2YXIgY2FudmFzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJDQU5WQVNcIik7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9IFwiY3Jvc3NoYWlyIFwiICsgdGhpcy5uYW1lO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJjaC16b25lLWluZGV4XCIsIFwiXCIrem9uZV9pbmRleCtcIlwiKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgY29tcC5nZXRXaWR0aCgpKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGNvbXAuZ2V0SGVpZ2h0KCkpO1xuICAgIGFkanVzdENhbnZhcyhjYW52YXMpO1xuICAgIHRoaXMuX2VsID0gY2FudmFzO1xuICAgIHJlZ2lvbl9lbC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVuZGVybHlpbmcgSFRNTENhbnZhc0VsZW1lbnQgdGhlIGNyb3NzaGFpciBpcyBkcmF3biBvbnRvLlxuICAgKiBAcmV0dXJucyB7ZXh0ZXJuYWw6SFRNTENhbnZhc0VsZW1lbnR9XG4gICAqL1xuICBnZXRFbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHVuZGVybHlpbmcgY29tcG9ubmV0XG4gICAqIEByZXR1cm5zIHtjb3JlOkNvbXBvbmVudH1cbiAgICovXG4gIGdldENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdW5kZXJseWluZ19jb21wb25lbnQ7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENyb3NzaGFpclpvbmU7XG4iXX0=
},{"../core/Type":11,"../core/adjustCanvas":12}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents an arc element.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var Arc = function (_Element) {
  _inherits(Arc, _Element);

  /**
   * Instantiate Arc
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {string} time
   * @param {number} value
   * @param {Arc} prev_arc
   */
  function Arc(layer, index, time, value, prev_arc) {
    _classCallCheck(this, Arc);

    var _this = _possibleConstructorReturn(this, (Arc.__proto__ || Object.getPrototypeOf(Arc)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.time = time;
    _this.value = value;
    _this.previous_arc = prev_arc;
    return _this;
  }

  /**
   * Draw arc on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(Arc, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      if (this.previous_arc) {
        var x0 = indexToPixel(this.previous_arc.getIndex());
        var y0 = valueToPixel(this.previous_arc.getValue());
        var x = indexToPixel(this.index);
        var y = valueToPixel(this.value);

        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x, y);
        context.strokeStyle = config.color;
        context.stroke();
      }
    }

    /**
     * Get index
     * @returns {number} index
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get time
     * @returns {string} timestamp string
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }

    /**
     * Get value at arc's right vertex
     * @returns {number} value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return Arc;
}(Element);

module.exports = Arc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyYy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkFyYyIsImxheWVyIiwiaW5kZXgiLCJ0aW1lIiwidmFsdWUiLCJwcmV2X2FyYyIsInByZXZpb3VzX2FyYyIsImNvbnRleHQiLCJ2YWx1ZVRvUGl4ZWwiLCJpbmRleFRvUGl4ZWwiLCJjb25maWciLCJ4MCIsImdldEluZGV4IiwieTAiLCJnZXRWYWx1ZSIsIngiLCJ5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJjb2xvciIsInN0cm9rZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxvQkFBUixDQUFkOztBQUVBOzs7Ozs7O0lBTU1DLEc7OztBQUVKOzs7Ozs7Ozs7QUFTQSxlQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQkMsSUFBMUIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUFBOztBQUFBLDBHQUN6QyxFQUR5Qzs7QUFFL0MsVUFBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQkQsUUFBcEI7QUFOK0M7QUFPaEQ7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQU9LRSxPLEVBQVNDLFksRUFBY0MsWSxFQUFjQyxNLEVBQVE7O0FBRWhELFVBQUcsS0FBS0osWUFBUixFQUNBO0FBQ0UsWUFBSUssS0FBS0YsYUFBYSxLQUFLSCxZQUFMLENBQWtCTSxRQUFsQixFQUFiLENBQVQ7QUFDQSxZQUFJQyxLQUFLTCxhQUFhLEtBQUtGLFlBQUwsQ0FBa0JRLFFBQWxCLEVBQWIsQ0FBVDtBQUNBLFlBQUlDLElBQUlOLGFBQWEsS0FBS1AsS0FBbEIsQ0FBUjtBQUNBLFlBQUljLElBQUlSLGFBQWEsS0FBS0osS0FBbEIsQ0FBUjs7QUFFQUcsZ0JBQVFVLFNBQVI7QUFDQVYsZ0JBQVFXLE1BQVIsQ0FBZVAsRUFBZixFQUFtQkUsRUFBbkI7QUFDQU4sZ0JBQVFZLE1BQVIsQ0FBZUosQ0FBZixFQUFrQkMsQ0FBbEI7QUFDQVQsZ0JBQVFhLFdBQVIsR0FBc0JWLE9BQU9XLEtBQTdCO0FBQ0FkLGdCQUFRZSxNQUFSO0FBQ0Q7QUFFRjs7QUFFRDs7Ozs7OzsrQkFJVztBQUNULGFBQU8sS0FBS3BCLEtBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJVTtBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozs7RUFuRWVOLE87O0FBdUVsQnlCLE9BQU9DLE9BQVAsR0FBaUJ4QixHQUFqQiIsImZpbGUiOiJBcmMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9FbGVtZW50XCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXJjIGVsZW1lbnQuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgZWxlbWVudC5FbGVtZW50XG4gKiBAbWVtYmVyb2YgZWxlbWVudFxuICovXG5jbGFzcyBBcmMgZXh0ZW5kcyBFbGVtZW50IHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgQXJjXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0xheWVyfSBsYXllclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7QXJjfSBwcmV2X2FyY1xuICAgKi9cbiAgY29uc3RydWN0b3IobGF5ZXIsIGluZGV4LCB0aW1lLCB2YWx1ZSwgcHJldl9hcmMpIHtcbiAgICBzdXBlcih7fSk7XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnByZXZpb3VzX2FyYyA9IHByZXZfYXJjO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgYXJjIG9uIGdpdmVuIGNvbnRleHRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7aW5kZXhUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBkcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCBjb25maWcpIHtcblxuICAgIGlmKHRoaXMucHJldmlvdXNfYXJjKVxuICAgIHtcbiAgICAgIHZhciB4MCA9IGluZGV4VG9QaXhlbCh0aGlzLnByZXZpb3VzX2FyYy5nZXRJbmRleCgpKTtcbiAgICAgIHZhciB5MCA9IHZhbHVlVG9QaXhlbCh0aGlzLnByZXZpb3VzX2FyYy5nZXRWYWx1ZSgpKTtcbiAgICAgIHZhciB4ID0gaW5kZXhUb1BpeGVsKHRoaXMuaW5kZXgpO1xuICAgICAgdmFyIHkgPSB2YWx1ZVRvUGl4ZWwodGhpcy52YWx1ZSk7XG5cbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICAgICAgY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29uZmlnLmNvbG9yO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5kZXhcbiAgICogQHJldHVybnMge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRpbWVzdGFtcCBzdHJpbmdcbiAgICovXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUgYXQgYXJjJ3MgcmlnaHQgdmVydGV4XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHZhbHVlXG4gICAqL1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXJjO1xuIl19
},{"../element/Element":17}],16:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents a candle element.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var Candle = function (_Element) {
  _inherits(Candle, _Element);

  /**
   * Instantiate Candle
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {string} time
   * @param {number} open
   * @param {number} high
   * @param {number} low
   * @param {number} close
   */
  function Candle(layer, index, time, open, high, low, close) {
    _classCallCheck(this, Candle);

    var _this = _possibleConstructorReturn(this, (Candle.__proto__ || Object.getPrototypeOf(Candle)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.time = time;
    _this.open = open;
    _this.high = high;
    _this.low = low;
    _this.close = close;
    return _this;
  }

  /**
   * Draw candle on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(Candle, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var body_low, body_high, body_color;

      if (this.close >= this.open) {
        body_low = this.open;
        body_high = this.close;
        body_color = config.bullBodyColor;
      } else {
        body_low = this.close;
        body_high = this.open;
        body_color = config.bearBodyColor;
      }

      // Both wicks
      var wick_x = indexToPixel(this.index);
      var wick_w = config.candleWickWidth;

      // Wick upper
      var wick_y = valueToPixel(this.high);
      var wick_h = valueToPixel(body_high) - wick_y;

      context.beginPath();
      context.rect(wick_x, wick_y, wick_w, wick_h);
      context.fillStyle = config.wickColor;
      context.fill();

      // Wick lower
      wick_y = valueToPixel(body_low);
      wick_h = valueToPixel(this.low) - wick_y;

      context.beginPath();
      context.rect(wick_x, wick_y, wick_w, wick_h);
      context.fillStyle = config.wickColor;
      context.fill();

      // Body
      var body_x = wick_x - Math.ceil((config.candleBodyWidth - 1) * 0.5);
      var body_y = valueToPixel(body_high);
      var body_w = config.candleBodyWidth;
      var body_h = valueToPixel(body_low) - body_y;

      context.beginPath();
      context.rect(body_x, body_y, body_w, body_h);
      context.fillStyle = body_color;
      context.fill();
    }

    /**
     * Get index
     * @returns {number} index
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get time
     * @returns {string} timestamp string
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }

    /**
     * Get open price value
     * @returns {number} open price value
     */

  }, {
    key: "getOpen",
    value: function getOpen() {
      return this.open;
    }

    /**
     * Get high price value
     * @returns {number} high price value
     */

  }, {
    key: "getHigh",
    value: function getHigh() {
      return this.high;
    }

    /**
     * Get low price value
     * @returns {number} low price value
     */

  }, {
    key: "getLow",
    value: function getLow() {
      return this.low;
    }

    /**
     * Get close price value
     * @returns {number} low price value
     */

  }, {
    key: "getClose",
    value: function getClose() {
      return this.close;
    }
  }]);

  return Candle;
}(Element);

module.exports = Candle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbmRsZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbmRsZSIsImxheWVyIiwiaW5kZXgiLCJ0aW1lIiwib3BlbiIsImhpZ2giLCJsb3ciLCJjbG9zZSIsImNvbnRleHQiLCJ2YWx1ZVRvUGl4ZWwiLCJpbmRleFRvUGl4ZWwiLCJjb25maWciLCJib2R5X2xvdyIsImJvZHlfaGlnaCIsImJvZHlfY29sb3IiLCJidWxsQm9keUNvbG9yIiwiYmVhckJvZHlDb2xvciIsIndpY2tfeCIsIndpY2tfdyIsImNhbmRsZVdpY2tXaWR0aCIsIndpY2tfeSIsIndpY2tfaCIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJ3aWNrQ29sb3IiLCJmaWxsIiwiYm9keV94IiwiTWF0aCIsImNlaWwiLCJjYW5kbGVCb2R5V2lkdGgiLCJib2R5X3kiLCJib2R5X3ciLCJib2R5X2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsb0JBQVIsQ0FBZDs7QUFFQTs7Ozs7OztJQU1NQyxNOzs7QUFFSjs7Ozs7Ozs7Ozs7QUFXQSxrQkFBWUMsS0FBWixFQUFtQkMsS0FBbkIsRUFBMEJDLElBQTFCLEVBQWdDQyxJQUFoQyxFQUFzQ0MsSUFBdEMsRUFBNENDLEdBQTVDLEVBQWlEQyxLQUFqRCxFQUF3RDtBQUFBOztBQUFBLGdIQUNoRCxFQURnRDs7QUFFdEQsVUFBS04sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBUnNEO0FBU3ZEOztBQUVEOzs7Ozs7Ozs7Ozt5QkFPS0MsTyxFQUFTQyxZLEVBQWNDLFksRUFBY0MsTSxFQUFROztBQUVoRCxVQUFJQyxRQUFKLEVBQWNDLFNBQWQsRUFBeUJDLFVBQXpCOztBQUVBLFVBQUcsS0FBS1AsS0FBTCxJQUFjLEtBQUtILElBQXRCLEVBQ0E7QUFDRVEsbUJBQVcsS0FBS1IsSUFBaEI7QUFDQVMsb0JBQVksS0FBS04sS0FBakI7QUFDQU8scUJBQWFILE9BQU9JLGFBQXBCO0FBQ0QsT0FMRCxNQU9BO0FBQ0VILG1CQUFXLEtBQUtMLEtBQWhCO0FBQ0FNLG9CQUFZLEtBQUtULElBQWpCO0FBQ0FVLHFCQUFhSCxPQUFPSyxhQUFwQjtBQUNEOztBQUVEO0FBQ0EsVUFBSUMsU0FBU1AsYUFBYSxLQUFLUixLQUFsQixDQUFiO0FBQ0EsVUFBSWdCLFNBQVNQLE9BQU9RLGVBQXBCOztBQUVBO0FBQ0EsVUFBSUMsU0FBU1gsYUFBYSxLQUFLSixJQUFsQixDQUFiO0FBQ0EsVUFBSWdCLFNBQVNaLGFBQWFJLFNBQWIsSUFBMEJPLE1BQXZDOztBQUVBWixjQUFRYyxTQUFSO0FBQ0FkLGNBQVFlLElBQVIsQ0FBYU4sTUFBYixFQUFxQkcsTUFBckIsRUFBNkJGLE1BQTdCLEVBQXFDRyxNQUFyQztBQUNBYixjQUFRZ0IsU0FBUixHQUFvQmIsT0FBT2MsU0FBM0I7QUFDQWpCLGNBQVFrQixJQUFSOztBQUVBO0FBQ0FOLGVBQVNYLGFBQWFHLFFBQWIsQ0FBVDtBQUNBUyxlQUFTWixhQUFhLEtBQUtILEdBQWxCLElBQXlCYyxNQUFsQzs7QUFFQVosY0FBUWMsU0FBUjtBQUNBZCxjQUFRZSxJQUFSLENBQWFOLE1BQWIsRUFBcUJHLE1BQXJCLEVBQTZCRixNQUE3QixFQUFxQ0csTUFBckM7QUFDQWIsY0FBUWdCLFNBQVIsR0FBb0JiLE9BQU9jLFNBQTNCO0FBQ0FqQixjQUFRa0IsSUFBUjs7QUFFQTtBQUNBLFVBQUlDLFNBQVNWLFNBQVNXLEtBQUtDLElBQUwsQ0FBVSxDQUFDbEIsT0FBT21CLGVBQVAsR0FBeUIsQ0FBMUIsSUFBK0IsR0FBekMsQ0FBdEI7QUFDQSxVQUFJQyxTQUFTdEIsYUFBYUksU0FBYixDQUFiO0FBQ0EsVUFBSW1CLFNBQVNyQixPQUFPbUIsZUFBcEI7QUFDQSxVQUFJRyxTQUFTeEIsYUFBYUcsUUFBYixJQUF5Qm1CLE1BQXRDOztBQUVBdkIsY0FBUWMsU0FBUjtBQUNBZCxjQUFRZSxJQUFSLENBQWFJLE1BQWIsRUFBcUJJLE1BQXJCLEVBQTZCQyxNQUE3QixFQUFxQ0MsTUFBckM7QUFDQXpCLGNBQVFnQixTQUFSLEdBQW9CVixVQUFwQjtBQUNBTixjQUFRa0IsSUFBUjtBQUVEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLeEIsS0FBWjtBQUNEOztBQUVEOzs7Ozs7OzhCQUlVO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OEJBSVU7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJVTtBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OztFQWpJa0JULE87O0FBcUlyQm9DLE9BQU9DLE9BQVAsR0FBaUJuQyxNQUFqQiIsImZpbGUiOiJDYW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9FbGVtZW50XCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBjYW5kbGUgZWxlbWVudC5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBlbGVtZW50LkVsZW1lbnRcbiAqIEBtZW1iZXJvZiBlbGVtZW50XG4gKi9cbmNsYXNzIENhbmRsZSBleHRlbmRzIEVsZW1lbnQge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBDYW5kbGVcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7TGF5ZXJ9IGxheWVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gb3BlblxuICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaFxuICAgKiBAcGFyYW0ge251bWJlcn0gbG93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjbG9zZVxuICAgKi9cbiAgY29uc3RydWN0b3IobGF5ZXIsIGluZGV4LCB0aW1lLCBvcGVuLCBoaWdoLCBsb3csIGNsb3NlKSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuaGlnaCA9IGhpZ2g7XG4gICAgdGhpcy5sb3cgPSBsb3c7XG4gICAgdGhpcy5jbG9zZSA9IGNsb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgY2FuZGxlIG9uIGdpdmVuIGNvbnRleHRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7aW5kZXhUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBkcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCBjb25maWcpIHtcblxuICAgIHZhciBib2R5X2xvdywgYm9keV9oaWdoLCBib2R5X2NvbG9yO1xuXG4gICAgaWYodGhpcy5jbG9zZSA+PSB0aGlzLm9wZW4pXG4gICAge1xuICAgICAgYm9keV9sb3cgPSB0aGlzLm9wZW47XG4gICAgICBib2R5X2hpZ2ggPSB0aGlzLmNsb3NlO1xuICAgICAgYm9keV9jb2xvciA9IGNvbmZpZy5idWxsQm9keUNvbG9yO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYm9keV9sb3cgPSB0aGlzLmNsb3NlO1xuICAgICAgYm9keV9oaWdoID0gdGhpcy5vcGVuO1xuICAgICAgYm9keV9jb2xvciA9IGNvbmZpZy5iZWFyQm9keUNvbG9yO1xuICAgIH1cblxuICAgIC8vIEJvdGggd2lja3NcbiAgICB2YXIgd2lja194ID0gaW5kZXhUb1BpeGVsKHRoaXMuaW5kZXgpO1xuICAgIHZhciB3aWNrX3cgPSBjb25maWcuY2FuZGxlV2lja1dpZHRoO1xuXG4gICAgLy8gV2ljayB1cHBlclxuICAgIHZhciB3aWNrX3kgPSB2YWx1ZVRvUGl4ZWwodGhpcy5oaWdoKTtcbiAgICB2YXIgd2lja19oID0gdmFsdWVUb1BpeGVsKGJvZHlfaGlnaCkgLSB3aWNrX3k7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh3aWNrX3gsIHdpY2tfeSwgd2lja193LCB3aWNrX2gpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29uZmlnLndpY2tDb2xvcjtcbiAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgIC8vIFdpY2sgbG93ZXJcbiAgICB3aWNrX3kgPSB2YWx1ZVRvUGl4ZWwoYm9keV9sb3cpO1xuICAgIHdpY2tfaCA9IHZhbHVlVG9QaXhlbCh0aGlzLmxvdykgLSB3aWNrX3k7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh3aWNrX3gsIHdpY2tfeSwgd2lja193LCB3aWNrX2gpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29uZmlnLndpY2tDb2xvcjtcbiAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgIC8vIEJvZHlcbiAgICB2YXIgYm9keV94ID0gd2lja194IC0gTWF0aC5jZWlsKChjb25maWcuY2FuZGxlQm9keVdpZHRoIC0gMSkgKiAwLjUpO1xuICAgIHZhciBib2R5X3kgPSB2YWx1ZVRvUGl4ZWwoYm9keV9oaWdoKTtcbiAgICB2YXIgYm9keV93ID0gY29uZmlnLmNhbmRsZUJvZHlXaWR0aDtcbiAgICB2YXIgYm9keV9oID0gdmFsdWVUb1BpeGVsKGJvZHlfbG93KSAtIGJvZHlfeTtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KGJvZHlfeCwgYm9keV95LCBib2R5X3csIGJvZHlfaCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBib2R5X2NvbG9yO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IGluZGV4XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGltZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aW1lc3RhbXAgc3RyaW5nXG4gICAqL1xuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9wZW4gcHJpY2UgdmFsdWVcbiAgICogQHJldHVybnMge251bWJlcn0gb3BlbiBwcmljZSB2YWx1ZVxuICAgKi9cbiAgZ2V0T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoaWdoIHByaWNlIHZhbHVlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGhpZ2ggcHJpY2UgdmFsdWVcbiAgICovXG4gIGdldEhpZ2goKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlnaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbG93IHByaWNlIHZhbHVlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGxvdyBwcmljZSB2YWx1ZVxuICAgKi9cbiAgZ2V0TG93KCkge1xuICAgIHJldHVybiB0aGlzLmxvdztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2UgcHJpY2UgdmFsdWVcbiAgICogQHJldHVybnMge251bWJlcn0gbG93IHByaWNlIHZhbHVlXG4gICAqL1xuICBnZXRDbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuZGxlO1xuIl19
},{"../element/Element":17}],17:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Type = require("../core/Type");

/**
 * Represents a visual chart element.
 * <br><br>
 * @extends core.Type
 * @memberof element
 */

var Element = function (_Type) {
  _inherits(Element, _Type);

  /**
   * Instantiate Element
   * @constructor
   * @param {object} config
   */
  function Element(config) {
    _classCallCheck(this, Element);

    return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, config));
  }

  return Element;
}(Type);

module.exports = Element;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVsZW1lbnQuanMiXSwibmFtZXMiOlsiVHlwZSIsInJlcXVpcmUiLCJFbGVtZW50IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBSUEsT0FBT0MsUUFBUSxjQUFSLENBQVg7O0FBRUE7Ozs7Ozs7SUFNTUMsTzs7O0FBRUo7Ozs7O0FBS0EsbUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2R0FDWkEsTUFEWTtBQUVuQjs7O0VBVG1CSCxJOztBQWF0QkksT0FBT0MsT0FBUCxHQUFpQkgsT0FBakIiLCJmaWxlIjoiRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHZpc3VhbCBjaGFydCBlbGVtZW50LlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGNvcmUuVHlwZVxuICogQG1lbWJlcm9mIGVsZW1lbnRcbiAqL1xuY2xhc3MgRWxlbWVudCBleHRlbmRzIFR5cGUge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBFbGVtZW50XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIl19
},{"../core/Type":11}],18:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents an histogram bar element.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var HistogramBar = function (_Element) {
  _inherits(HistogramBar, _Element);

  /**
   * Instantiate HistogramBar
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {string} time
   * @param {number} value
   */
  function HistogramBar(layer, index, time, value) {
    _classCallCheck(this, HistogramBar);

    var _this = _possibleConstructorReturn(this, (HistogramBar.__proto__ || Object.getPrototypeOf(HistogramBar)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.time = time;
    _this.value = value;
    return _this;
  }

  /**
   * Draw histogram bar on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(HistogramBar, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var x = indexToPixel(this.index) - Math.ceil((config.barWidth - 1) * 0.5);
      var y = valueToPixel(this.value);
      var w = config.barWidth;
      var h = valueToPixel(0) - y;

      context.beginPath();
      context.rect(x, y, w, h);
      context.fillStyle = config.barColor;
      context.fill();
    }

    /**
     * Get index
     * @returns {number} index
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get time
     * @returns {string} timestamp string
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }

    /**
     * Get value at arc's right vertex
     * @returns {number} value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return HistogramBar;
}(Element);

module.exports = HistogramBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhpc3RvZ3JhbUJhci5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkhpc3RvZ3JhbUJhciIsImxheWVyIiwiaW5kZXgiLCJ0aW1lIiwidmFsdWUiLCJjb250ZXh0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29uZmlnIiwieCIsIk1hdGgiLCJjZWlsIiwiYmFyV2lkdGgiLCJ5IiwidyIsImgiLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiYmFyQ29sb3IiLCJmaWxsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLG9CQUFSLENBQWQ7O0FBRUE7Ozs7Ozs7SUFNTUMsWTs7O0FBRUo7Ozs7Ozs7O0FBUUEsd0JBQVlDLEtBQVosRUFBbUJDLEtBQW5CLEVBQTBCQyxJQUExQixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFBQTs7QUFBQSw0SEFDL0IsRUFEK0I7O0FBRXJDLFVBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUxxQztBQU10Qzs7QUFFRDs7Ozs7Ozs7Ozs7eUJBT0tDLE8sRUFBU0MsWSxFQUFjQyxZLEVBQWNDLE0sRUFBUTs7QUFFaEQsVUFBSUMsSUFBSUYsYUFBYSxLQUFLTCxLQUFsQixJQUEyQlEsS0FBS0MsSUFBTCxDQUFVLENBQUNILE9BQU9JLFFBQVAsR0FBa0IsQ0FBbkIsSUFBd0IsR0FBbEMsQ0FBbkM7QUFDQSxVQUFJQyxJQUFJUCxhQUFhLEtBQUtGLEtBQWxCLENBQVI7QUFDQSxVQUFJVSxJQUFJTixPQUFPSSxRQUFmO0FBQ0EsVUFBSUcsSUFBSVQsYUFBYSxDQUFiLElBQWtCTyxDQUExQjs7QUFFQVIsY0FBUVcsU0FBUjtBQUNBWCxjQUFRWSxJQUFSLENBQWFSLENBQWIsRUFBZ0JJLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEI7QUFDQVYsY0FBUWEsU0FBUixHQUFvQlYsT0FBT1csUUFBM0I7QUFDQWQsY0FBUWUsSUFBUjtBQUVEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLbEIsS0FBWjtBQUNEOztBQUVEOzs7Ozs7OzhCQUlVO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OztFQTdEd0JOLE87O0FBaUUzQnVCLE9BQU9DLE9BQVAsR0FBaUJ0QixZQUFqQiIsImZpbGUiOiJIaXN0b2dyYW1CYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9FbGVtZW50XCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gaGlzdG9ncmFtIGJhciBlbGVtZW50LlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGVsZW1lbnQuRWxlbWVudFxuICogQG1lbWJlcm9mIGVsZW1lbnRcbiAqL1xuY2xhc3MgSGlzdG9ncmFtQmFyIGV4dGVuZHMgRWxlbWVudCB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIEhpc3RvZ3JhbUJhclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtMYXllcn0gbGF5ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgY29uc3RydWN0b3IobGF5ZXIsIGluZGV4LCB0aW1lLCB2YWx1ZSkge1xuICAgIHN1cGVyKHt9KTtcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgaGlzdG9ncmFtIGJhciBvbiBnaXZlbiBjb250ZXh0XG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgY29uZmlnKSB7XG5cbiAgICB2YXIgeCA9IGluZGV4VG9QaXhlbCh0aGlzLmluZGV4KSAtIE1hdGguY2VpbCgoY29uZmlnLmJhcldpZHRoIC0gMSkgKiAwLjUpO1xuICAgIHZhciB5ID0gdmFsdWVUb1BpeGVsKHRoaXMudmFsdWUpO1xuICAgIHZhciB3ID0gY29uZmlnLmJhcldpZHRoO1xuICAgIHZhciBoID0gdmFsdWVUb1BpeGVsKDApIC0geTtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KHgsIHksIHcsIGgpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29uZmlnLmJhckNvbG9yO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IGluZGV4XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGluZGV4XG4gICAqL1xuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGltZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aW1lc3RhbXAgc3RyaW5nXG4gICAqL1xuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZhbHVlIGF0IGFyYydzIHJpZ2h0IHZlcnRleFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3RvZ3JhbUJhcjtcbiJdfQ==
},{"../element/Element":17}],19:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents a horizontal line.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var HorizontalLine = function (_Element) {
  _inherits(HorizontalLine, _Element);

  /**
   * Instantiate HorizontalLine
   * @constructor
   * @param {Layer} layer
   * @param {number} value
   * @param {number} start
   * @param {number} end
   */
  function HorizontalLine(layer, value, start, end) {
    _classCallCheck(this, HorizontalLine);

    var _this = _possibleConstructorReturn(this, (HorizontalLine.__proto__ || Object.getPrototypeOf(HorizontalLine)).call(this, {}));

    _this.layer = layer;
    _this.value = value;
    _this.start = start;
    _this.end = end;
    return _this;
  }

  /**
   * Draw horizontal line on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(HorizontalLine, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var y = valueToPixel(this.value);

      context.beginPath();
      context.moveTo(this.start, y);
      context.lineTo(this.end, y);
      context.strokeStyle = config.lineColor;
      context.stroke();
    }

    /**
     * Get value
     * @returns {number}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }

    /**
     * Get start
     * @returns {number} Start of line in unit pixels from left edge.
     */

  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }

    /**
     * Get end
     * @returns {number} End of line in unit pixels from left edge.
     */

  }, {
    key: "getEnd",
    value: function getEnd() {
      return this.end;
    }
  }]);

  return HorizontalLine;
}(Element);

module.exports = HorizontalLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvcml6b250YWxMaW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiSG9yaXpvbnRhbExpbmUiLCJsYXllciIsInZhbHVlIiwic3RhcnQiLCJlbmQiLCJjb250ZXh0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29uZmlnIiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwibGluZUNvbG9yIiwic3Ryb2tlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxVQUFVQyxRQUFRLG9CQUFSLENBQWQ7O0FBRUE7Ozs7Ozs7SUFNTUMsYzs7O0FBRUo7Ozs7Ozs7O0FBUUEsMEJBQVlDLEtBQVosRUFBbUJDLEtBQW5CLEVBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFBQTs7QUFBQSxnSUFDOUIsRUFEOEI7O0FBRXBDLFVBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUxvQztBQU1yQzs7QUFFRDs7Ozs7Ozs7Ozs7eUJBT0tDLE8sRUFBU0MsWSxFQUFjQyxZLEVBQWNDLE0sRUFBUTs7QUFFaEQsVUFBSUMsSUFBSUgsYUFBYSxLQUFLSixLQUFsQixDQUFSOztBQUVBRyxjQUFRSyxTQUFSO0FBQ0FMLGNBQVFNLE1BQVIsQ0FBZSxLQUFLUixLQUFwQixFQUEyQk0sQ0FBM0I7QUFDQUosY0FBUU8sTUFBUixDQUFlLEtBQUtSLEdBQXBCLEVBQXlCSyxDQUF6QjtBQUNBSixjQUFRUSxXQUFSLEdBQXNCTCxPQUFPTSxTQUE3QjtBQUNBVCxjQUFRVSxNQUFSO0FBRUQ7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtiLEtBQVo7QUFDRDs7QUFFRDs7Ozs7OzsrQkFJVztBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7Ozs7RUEzRDBCTixPOztBQStEN0JrQixPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIiLCJmaWxlIjoiSG9yaXpvbnRhbExpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9FbGVtZW50XCIpO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBob3Jpem9udGFsIGxpbmUuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgZWxlbWVudC5FbGVtZW50XG4gKiBAbWVtYmVyb2YgZWxlbWVudFxuICovXG5jbGFzcyBIb3Jpem9udGFsTGluZSBleHRlbmRzIEVsZW1lbnQge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBIb3Jpem9udGFsTGluZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtMYXllcn0gbGF5ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydFxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gICAqL1xuICBjb25zdHJ1Y3RvcihsYXllciwgdmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgICBzdXBlcih7fSk7XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSBlbmQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBob3Jpem9udGFsIGxpbmUgb24gZ2l2ZW4gY29udGV4dFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3ZhbHVlVG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAgICovXG4gIGRyYXcoY29udGV4dCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIGNvbmZpZykge1xuXG4gICAgdmFyIHkgPSB2YWx1ZVRvUGl4ZWwodGhpcy52YWx1ZSk7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKHRoaXMuc3RhcnQsIHkpO1xuICAgIGNvbnRleHQubGluZVRvKHRoaXMuZW5kLCB5KTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29uZmlnLmxpbmVDb2xvcjtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IHZhbHVlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3RhcnRcbiAgICogQHJldHVybnMge251bWJlcn0gU3RhcnQgb2YgbGluZSBpbiB1bml0IHBpeGVscyBmcm9tIGxlZnQgZWRnZS5cbiAgICovXG4gIGdldFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbmRcbiAgICogQHJldHVybnMge251bWJlcn0gRW5kIG9mIGxpbmUgaW4gdW5pdCBwaXhlbHMgZnJvbSBsZWZ0IGVkZ2UuXG4gICAqL1xuICBnZXRFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsTGluZTtcbiJdfQ==
},{"../element/Element":17}],20:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents a OHLC bar element.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var OHLCBar = function (_Element) {
  _inherits(OHLCBar, _Element);

  /**
   * Instantiate OHLCBar
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {string} time
   * @param {number} open
   * @param {number} high
   * @param {number} low
   * @param {number} close
   */
  function OHLCBar(layer, index, time, open, high, low, close) {
    _classCallCheck(this, OHLCBar);

    var _this = _possibleConstructorReturn(this, (OHLCBar.__proto__ || Object.getPrototypeOf(OHLCBar)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.time = time;
    _this.open = open;
    _this.high = high;
    _this.low = low;
    _this.close = close;
    return _this;
  }

  /**
   * Draw OHLC bar on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(OHLCBar, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var body_color;

      if (this.close >= this.open) {
        body_color = config.bullBodyColor;
      } else {
        body_color = config.bearBodyColor;
      }

      // Vertical bar
      var vert_x = indexToPixel(this.index);
      var vert_w = Math.floor(config.candleBodyWidth * 0.5) || 1;
      var vert_y = valueToPixel(this.high);
      var vert_h = valueToPixel(this.low) - valueToPixel(this.high);

      context.beginPath();
      context.rect(vert_x, vert_y, vert_w, vert_h);
      context.fillStyle = body_color;
      context.fill();

      // Open horizontal
      var open_x = vert_x - config.candleBodyWidth + 1;
      var open_y = valueToPixel(this.open);
      var open_w = config.candleBodyWidth;
      var open_h = 1;

      context.beginPath();
      context.rect(open_x, open_y, open_w, open_h);
      context.fillStyle = body_color;
      context.fill();

      // Close horizontal
      var close_x = vert_x;
      var close_y = valueToPixel(this.close);
      var close_w = config.candleBodyWidth;
      var close_h = 1;

      context.beginPath();
      context.rect(close_x, close_y, close_w, close_h);
      context.fillStyle = body_color;
      context.fill();
    }

    /**
     * Get index
     * @returns {number} index
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get time
     * @returns {string} timestamp string
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }

    /**
     * Get open price value
     * @returns {number} open price value
     */

  }, {
    key: "getOpen",
    value: function getOpen() {
      return this.open;
    }

    /**
     * Get high price value
     * @returns {number} high price value
     */

  }, {
    key: "getHigh",
    value: function getHigh() {
      return this.high;
    }

    /**
     * Get low price value
     * @returns {number} low price value
     */

  }, {
    key: "getLow",
    value: function getLow() {
      return this.low;
    }

    /**
     * Get close price value
     * @returns {number} low price value
     */

  }, {
    key: "getClose",
    value: function getClose() {
      return this.close;
    }
  }]);

  return OHLCBar;
}(Element);

module.exports = OHLCBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9ITENCYXIuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJPSExDQmFyIiwibGF5ZXIiLCJpbmRleCIsInRpbWUiLCJvcGVuIiwiaGlnaCIsImxvdyIsImNsb3NlIiwiY29udGV4dCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsImNvbmZpZyIsImJvZHlfY29sb3IiLCJidWxsQm9keUNvbG9yIiwiYmVhckJvZHlDb2xvciIsInZlcnRfeCIsInZlcnRfdyIsIk1hdGgiLCJmbG9vciIsImNhbmRsZUJvZHlXaWR0aCIsInZlcnRfeSIsInZlcnRfaCIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwib3Blbl94Iiwib3Blbl95Iiwib3Blbl93Iiwib3Blbl9oIiwiY2xvc2VfeCIsImNsb3NlX3kiLCJjbG9zZV93IiwiY2xvc2VfaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxvQkFBUixDQUFkOztBQUVBOzs7Ozs7O0lBTU1DLE87OztBQUVKOzs7Ozs7Ozs7OztBQVdBLG1CQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQkMsSUFBMUIsRUFBZ0NDLElBQWhDLEVBQXNDQyxJQUF0QyxFQUE0Q0MsR0FBNUMsRUFBaURDLEtBQWpELEVBQXdEO0FBQUE7O0FBQUEsa0hBQ2hELEVBRGdEOztBQUV0RCxVQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFSc0Q7QUFTdkQ7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQU9LQyxPLEVBQVNDLFksRUFBY0MsWSxFQUFjQyxNLEVBQVE7O0FBRWhELFVBQUlDLFVBQUo7O0FBRUEsVUFBRyxLQUFLTCxLQUFMLElBQWMsS0FBS0gsSUFBdEIsRUFDQTtBQUNFUSxxQkFBYUQsT0FBT0UsYUFBcEI7QUFDRCxPQUhELE1BS0E7QUFDRUQscUJBQWFELE9BQU9HLGFBQXBCO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJQyxTQUFTTCxhQUFhLEtBQUtSLEtBQWxCLENBQWI7QUFDQSxVQUFJYyxTQUFTQyxLQUFLQyxLQUFMLENBQVdQLE9BQU9RLGVBQVAsR0FBeUIsR0FBcEMsS0FBNEMsQ0FBekQ7QUFDQSxVQUFJQyxTQUFTWCxhQUFhLEtBQUtKLElBQWxCLENBQWI7QUFDQSxVQUFJZ0IsU0FBU1osYUFBYSxLQUFLSCxHQUFsQixJQUF5QkcsYUFBYSxLQUFLSixJQUFsQixDQUF0Qzs7QUFFQUcsY0FBUWMsU0FBUjtBQUNBZCxjQUFRZSxJQUFSLENBQWFSLE1BQWIsRUFBcUJLLE1BQXJCLEVBQTZCSixNQUE3QixFQUFxQ0ssTUFBckM7QUFDQWIsY0FBUWdCLFNBQVIsR0FBb0JaLFVBQXBCO0FBQ0FKLGNBQVFpQixJQUFSOztBQUVBO0FBQ0EsVUFBSUMsU0FBVVgsU0FBU0osT0FBT1EsZUFBakIsR0FBb0MsQ0FBakQ7QUFDQSxVQUFJUSxTQUFTbEIsYUFBYSxLQUFLTCxJQUFsQixDQUFiO0FBQ0EsVUFBSXdCLFNBQVNqQixPQUFPUSxlQUFwQjtBQUNBLFVBQUlVLFNBQVMsQ0FBYjs7QUFFQXJCLGNBQVFjLFNBQVI7QUFDQWQsY0FBUWUsSUFBUixDQUFhRyxNQUFiLEVBQXFCQyxNQUFyQixFQUE2QkMsTUFBN0IsRUFBcUNDLE1BQXJDO0FBQ0FyQixjQUFRZ0IsU0FBUixHQUFvQlosVUFBcEI7QUFDQUosY0FBUWlCLElBQVI7O0FBRUE7QUFDQSxVQUFJSyxVQUFVZixNQUFkO0FBQ0EsVUFBSWdCLFVBQVV0QixhQUFhLEtBQUtGLEtBQWxCLENBQWQ7QUFDQSxVQUFJeUIsVUFBVXJCLE9BQU9RLGVBQXJCO0FBQ0EsVUFBSWMsVUFBVSxDQUFkOztBQUVBekIsY0FBUWMsU0FBUjtBQUNBZCxjQUFRZSxJQUFSLENBQWFPLE9BQWIsRUFBc0JDLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3Q0MsT0FBeEM7QUFDQXpCLGNBQVFnQixTQUFSLEdBQW9CWixVQUFwQjtBQUNBSixjQUFRaUIsSUFBUjtBQUVEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLdkIsS0FBWjtBQUNEOztBQUVEOzs7Ozs7OzhCQUlVO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OEJBSVU7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs4QkFJVTtBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtDLEtBQVo7QUFDRDs7OztFQTdIbUJULE87O0FBaUl0Qm9DLE9BQU9DLE9BQVAsR0FBaUJuQyxPQUFqQiIsImZpbGUiOiJPSExDQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvRWxlbWVudFwiKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgT0hMQyBiYXIgZWxlbWVudC5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBlbGVtZW50LkVsZW1lbnRcbiAqIEBtZW1iZXJvZiBlbGVtZW50XG4gKi9cbmNsYXNzIE9ITENCYXIgZXh0ZW5kcyBFbGVtZW50IHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgT0hMQ0JhclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtMYXllcn0gbGF5ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcGVuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb3dcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNsb3NlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihsYXllciwgaW5kZXgsIHRpbWUsIG9wZW4sIGhpZ2gsIGxvdywgY2xvc2UpIHtcbiAgICBzdXBlcih7fSk7XG4gICAgdGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5oaWdoID0gaGlnaDtcbiAgICB0aGlzLmxvdyA9IGxvdztcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBPSExDIGJhciBvbiBnaXZlbiBjb250ZXh0XG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgY29uZmlnKSB7XG5cbiAgICB2YXIgYm9keV9jb2xvcjtcblxuICAgIGlmKHRoaXMuY2xvc2UgPj0gdGhpcy5vcGVuKVxuICAgIHtcbiAgICAgIGJvZHlfY29sb3IgPSBjb25maWcuYnVsbEJvZHlDb2xvcjtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGJvZHlfY29sb3IgPSBjb25maWcuYmVhckJvZHlDb2xvcjtcbiAgICB9XG5cbiAgICAvLyBWZXJ0aWNhbCBiYXJcbiAgICB2YXIgdmVydF94ID0gaW5kZXhUb1BpeGVsKHRoaXMuaW5kZXgpO1xuICAgIHZhciB2ZXJ0X3cgPSBNYXRoLmZsb29yKGNvbmZpZy5jYW5kbGVCb2R5V2lkdGggKiAwLjUpIHx8IDE7XG4gICAgdmFyIHZlcnRfeSA9IHZhbHVlVG9QaXhlbCh0aGlzLmhpZ2gpO1xuICAgIHZhciB2ZXJ0X2ggPSB2YWx1ZVRvUGl4ZWwodGhpcy5sb3cpIC0gdmFsdWVUb1BpeGVsKHRoaXMuaGlnaCk7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdCh2ZXJ0X3gsIHZlcnRfeSwgdmVydF93LCB2ZXJ0X2gpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYm9keV9jb2xvcjtcbiAgICBjb250ZXh0LmZpbGwoKTtcblxuICAgIC8vIE9wZW4gaG9yaXpvbnRhbFxuICAgIHZhciBvcGVuX3ggPSAodmVydF94IC0gY29uZmlnLmNhbmRsZUJvZHlXaWR0aCkgKyAxO1xuICAgIHZhciBvcGVuX3kgPSB2YWx1ZVRvUGl4ZWwodGhpcy5vcGVuKTtcbiAgICB2YXIgb3Blbl93ID0gY29uZmlnLmNhbmRsZUJvZHlXaWR0aDtcbiAgICB2YXIgb3Blbl9oID0gMTtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5yZWN0KG9wZW5feCwgb3Blbl95LCBvcGVuX3csIG9wZW5faCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBib2R5X2NvbG9yO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuXG4gICAgLy8gQ2xvc2UgaG9yaXpvbnRhbFxuICAgIHZhciBjbG9zZV94ID0gdmVydF94O1xuICAgIHZhciBjbG9zZV95ID0gdmFsdWVUb1BpeGVsKHRoaXMuY2xvc2UpO1xuICAgIHZhciBjbG9zZV93ID0gY29uZmlnLmNhbmRsZUJvZHlXaWR0aDtcbiAgICB2YXIgY2xvc2VfaCA9IDE7XG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQucmVjdChjbG9zZV94LCBjbG9zZV95LCBjbG9zZV93LCBjbG9zZV9oKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJvZHlfY29sb3I7XG4gICAgY29udGV4dC5maWxsKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5kZXhcbiAgICogQHJldHVybnMge251bWJlcn0gaW5kZXhcbiAgICovXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aW1lXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRpbWVzdGFtcCBzdHJpbmdcbiAgICovXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3BlbiBwcmljZSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBvcGVuIHByaWNlIHZhbHVlXG4gICAqL1xuICBnZXRPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLm9wZW47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGhpZ2ggcHJpY2UgdmFsdWVcbiAgICogQHJldHVybnMge251bWJlcn0gaGlnaCBwcmljZSB2YWx1ZVxuICAgKi9cbiAgZ2V0SGlnaCgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWdoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb3cgcHJpY2UgdmFsdWVcbiAgICogQHJldHVybnMge251bWJlcn0gbG93IHByaWNlIHZhbHVlXG4gICAqL1xuICBnZXRMb3coKSB7XG4gICAgcmV0dXJuIHRoaXMubG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZSBwcmljZSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBsb3cgcHJpY2UgdmFsdWVcbiAgICovXG4gIGdldENsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb3NlO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPSExDQmFyO1xuIl19
},{"../element/Element":17}],21:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Moment = require("moment");
var Element = require("../element/Element");

/**
 * Represents a label associated with the time axis (x).
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var TimeLabel = function (_Element) {
  _inherits(TimeLabel, _Element);

  /**
   * Instantiate TimeLabel
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {string} time
   * @param {string} format
   */
  function TimeLabel(layer, index, time, format) {
    _classCallCheck(this, TimeLabel);

    var _this = _possibleConstructorReturn(this, (TimeLabel.__proto__ || Object.getPrototypeOf(TimeLabel)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.time = time;
    _this.format = format;
    return _this;
  }

  /**
   * Draw time label on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(TimeLabel, [{
    key: "draw",
    value: function draw(context, indexToPixel, config) {

      var x = indexToPixel(this.index);

      context.font = config.labelFont;
      context.textAlign = "left";
      context.textBaseline = "middle";
      context.fillStyle = config.labelColor;
      context.fillText(TimeLabel.formatTimestamp(this.time, this.format), x, config.labelY);
    }

    /**
     * Get index
     * @returns {number} index
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get time
     * @returns {string} timestamp string
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }

    /**
     * @static
     * Format a timestamp string using supplied Moment.js format
     * @param {string} time_str timestamp string
     * @param {string} format
     * @returns {string} timestamp string
     */

  }], [{
    key: "formatTimestamp",
    value: function formatTimestamp(time_str, format) {

      var moment = Moment(time_str);

      return moment.format(format);
    }
  }]);

  return TimeLabel;
}(Element);

module.exports = TimeLabel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVMYWJlbC5qcyJdLCJuYW1lcyI6WyJNb21lbnQiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlRpbWVMYWJlbCIsImxheWVyIiwiaW5kZXgiLCJ0aW1lIiwiZm9ybWF0IiwiY29udGV4dCIsImluZGV4VG9QaXhlbCIsImNvbmZpZyIsIngiLCJmb250IiwibGFiZWxGb250IiwidGV4dEFsaWduIiwidGV4dEJhc2VsaW5lIiwiZmlsbFN0eWxlIiwibGFiZWxDb2xvciIsImZpbGxUZXh0IiwiZm9ybWF0VGltZXN0YW1wIiwibGFiZWxZIiwidGltZV9zdHIiLCJtb21lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxvQkFBUixDQUFkOztBQUVBOzs7Ozs7O0lBTU1FLFM7OztBQUVKOzs7Ozs7OztBQVFBLHFCQUFZQyxLQUFaLEVBQW1CQyxLQUFuQixFQUEwQkMsSUFBMUIsRUFBZ0NDLE1BQWhDLEVBQXdDO0FBQUE7O0FBQUEsc0hBQ2hDLEVBRGdDOztBQUV0QyxVQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFMc0M7QUFNdkM7O0FBRUQ7Ozs7Ozs7Ozs7eUJBTUtDLE8sRUFBU0MsWSxFQUFjQyxNLEVBQVE7O0FBRWxDLFVBQUlDLElBQUlGLGFBQWEsS0FBS0osS0FBbEIsQ0FBUjs7QUFFQUcsY0FBUUksSUFBUixHQUFlRixPQUFPRyxTQUF0QjtBQUNBTCxjQUFRTSxTQUFSLEdBQW9CLE1BQXBCO0FBQ0FOLGNBQVFPLFlBQVIsR0FBdUIsUUFBdkI7QUFDQVAsY0FBUVEsU0FBUixHQUFvQk4sT0FBT08sVUFBM0I7QUFDQVQsY0FBUVUsUUFBUixDQUFpQmYsVUFBVWdCLGVBQVYsQ0FBMEIsS0FBS2IsSUFBL0IsRUFBcUMsS0FBS0MsTUFBMUMsQ0FBakIsRUFBb0VJLENBQXBFLEVBQXVFRCxPQUFPVSxNQUE5RTtBQUVEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLZixLQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OEJBSVU7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7OztvQ0FPdUJlLFEsRUFBVWQsTSxFQUFROztBQUV2QyxVQUFJZSxTQUFTdEIsT0FBT3FCLFFBQVAsQ0FBYjs7QUFFQSxhQUFPQyxPQUFPZixNQUFQLENBQWNBLE1BQWQsQ0FBUDtBQUVEOzs7O0VBakVxQkwsTzs7QUFxRXhCcUIsT0FBT0MsT0FBUCxHQUFpQnJCLFNBQWpCIiwiZmlsZSI6IlRpbWVMYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbnZhciBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvRWxlbWVudFwiKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgbGFiZWwgYXNzb2NpYXRlZCB3aXRoIHRoZSB0aW1lIGF4aXMgKHgpLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGVsZW1lbnQuRWxlbWVudFxuICogQG1lbWJlcm9mIGVsZW1lbnRcbiAqL1xuY2xhc3MgVGltZUxhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIFRpbWVMYWJlbFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtMYXllcn0gbGF5ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGxheWVyLCBpbmRleCwgdGltZSwgZm9ybWF0KSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHRpbWUgbGFiZWwgb24gZ2l2ZW4gY29udGV4dFxuICAgKiBAcGFyYW0ge2V4dGVybmFsOkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dFxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgZHJhdyhjb250ZXh0LCBpbmRleFRvUGl4ZWwsIGNvbmZpZykge1xuXG4gICAgdmFyIHggPSBpbmRleFRvUGl4ZWwodGhpcy5pbmRleCk7XG5cbiAgICBjb250ZXh0LmZvbnQgPSBjb25maWcubGFiZWxGb250O1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29uZmlnLmxhYmVsQ29sb3I7XG4gICAgY29udGV4dC5maWxsVGV4dChUaW1lTGFiZWwuZm9ybWF0VGltZXN0YW1wKHRoaXMudGltZSwgdGhpcy5mb3JtYXQpLCB4LCBjb25maWcubGFiZWxZKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbmRleFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbmRleFxuICAgKi9cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRpbWVcbiAgICogQHJldHVybnMge3N0cmluZ30gdGltZXN0YW1wIHN0cmluZ1xuICAgKi9cbiAgZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogRm9ybWF0IGEgdGltZXN0YW1wIHN0cmluZyB1c2luZyBzdXBwbGllZCBNb21lbnQuanMgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lX3N0ciB0aW1lc3RhbXAgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGltZXN0YW1wIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGZvcm1hdFRpbWVzdGFtcCh0aW1lX3N0ciwgZm9ybWF0KSB7XG5cbiAgICB2YXIgbW9tZW50ID0gTW9tZW50KHRpbWVfc3RyKTtcblxuICAgIHJldHVybiBtb21lbnQuZm9ybWF0KGZvcm1hdCk7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZUxhYmVsO1xuIl19
},{"../element/Element":17,"moment":4}],22:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents a label associated with the value axis (y).
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var ValueLabel = function (_Element) {
  _inherits(ValueLabel, _Element);

  /**
   * Instantiate ValueLabel
   * @constructor
   * @param {Layer} layer
   * @param {number} value
   * @param {number} x
   */
  function ValueLabel(layer, value, x) {
    _classCallCheck(this, ValueLabel);

    var _this = _possibleConstructorReturn(this, (ValueLabel.__proto__ || Object.getPrototypeOf(ValueLabel)).call(this, {}));

    _this.layer = layer;
    _this.value = value;
    _this.x = x;
    return _this;
  }

  /**
   * Draw value label on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(ValueLabel, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var x = this.x + config.labelPaddingLeft;
      var y = valueToPixel(this.value);

      var label_text = "" + this.value + "";

      context.font = config.labelFont;
      context.textBaseline = "middle";
      context.fillStyle = config.labelColor;
      context.fillText(label_text, x, y);
    }

    /**
     * Get value
     * @returns {number}
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return ValueLabel;
}(Element);

module.exports = ValueLabel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbHVlTGFiZWwuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJWYWx1ZUxhYmVsIiwibGF5ZXIiLCJ2YWx1ZSIsIngiLCJjb250ZXh0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29uZmlnIiwibGFiZWxQYWRkaW5nTGVmdCIsInkiLCJsYWJlbF90ZXh0IiwiZm9udCIsImxhYmVsRm9udCIsInRleHRCYXNlbGluZSIsImZpbGxTdHlsZSIsImxhYmVsQ29sb3IiLCJmaWxsVGV4dCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsUUFBUSxvQkFBUixDQUFkOztBQUVBOzs7Ozs7O0lBTU1DLFU7OztBQUVKOzs7Ozs7O0FBT0Esc0JBQVlDLEtBQVosRUFBbUJDLEtBQW5CLEVBQTBCQyxDQUExQixFQUE2QjtBQUFBOztBQUFBLHdIQUNyQixFQURxQjs7QUFFM0IsVUFBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBSjJCO0FBSzVCOztBQUVEOzs7Ozs7Ozs7Ozt5QkFPS0MsTyxFQUFTQyxZLEVBQWNDLFksRUFBY0MsTSxFQUFROztBQUVoRCxVQUFJSixJQUFJLEtBQUtBLENBQUwsR0FBU0ksT0FBT0MsZ0JBQXhCO0FBQ0EsVUFBSUMsSUFBSUosYUFBYSxLQUFLSCxLQUFsQixDQUFSOztBQUVBLFVBQUlRLGFBQWEsS0FBSyxLQUFLUixLQUFWLEdBQWtCLEVBQW5DOztBQUVBRSxjQUFRTyxJQUFSLEdBQWVKLE9BQU9LLFNBQXRCO0FBQ0FSLGNBQVFTLFlBQVIsR0FBdUIsUUFBdkI7QUFDQVQsY0FBUVUsU0FBUixHQUFvQlAsT0FBT1EsVUFBM0I7QUFDQVgsY0FBUVksUUFBUixDQUFpQk4sVUFBakIsRUFBNkJQLENBQTdCLEVBQWdDTSxDQUFoQztBQUVEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLUCxLQUFaO0FBQ0Q7Ozs7RUEzQ3NCSixPOztBQStDekJtQixPQUFPQyxPQUFQLEdBQWlCbEIsVUFBakIiLCJmaWxlIjoiVmFsdWVMYWJlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoXCIuLi9lbGVtZW50L0VsZW1lbnRcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGxhYmVsIGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUgYXhpcyAoeSkuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgZWxlbWVudC5FbGVtZW50XG4gKiBAbWVtYmVyb2YgZWxlbWVudFxuICovXG5jbGFzcyBWYWx1ZUxhYmVsIGV4dGVuZHMgRWxlbWVudCB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIFZhbHVlTGFiZWxcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7TGF5ZXJ9IGxheWVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgKi9cbiAgY29uc3RydWN0b3IobGF5ZXIsIHZhbHVlLCB4KSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IHZhbHVlIGxhYmVsIG9uIGdpdmVuIGNvbnRleHRcbiAgICogQHBhcmFtIHtleHRlcm5hbDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGNvbnRleHRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7aW5kZXhUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBkcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCBjb25maWcpIHtcblxuICAgIHZhciB4ID0gdGhpcy54ICsgY29uZmlnLmxhYmVsUGFkZGluZ0xlZnQ7XG4gICAgdmFyIHkgPSB2YWx1ZVRvUGl4ZWwodGhpcy52YWx1ZSk7XG5cbiAgICB2YXIgbGFiZWxfdGV4dCA9IFwiXCIgKyB0aGlzLnZhbHVlICsgXCJcIjtcblxuICAgIGNvbnRleHQuZm9udCA9IGNvbmZpZy5sYWJlbEZvbnQ7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29uZmlnLmxhYmVsQ29sb3I7XG4gICAgY29udGV4dC5maWxsVGV4dChsYWJlbF90ZXh0LCB4LCB5KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB2YWx1ZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbHVlTGFiZWw7XG4iXX0=
},{"../element/Element":17}],23:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require("../element/Element");

/**
 * Represents a vertical line.
 * <br><br>
 * @extends element.Element
 * @memberof element
 */

var VerticalLine = function (_Element) {
  _inherits(VerticalLine, _Element);

  /**
   * Instantiate VerticalLine
   * @constructor
   * @param {Layer} layer
   * @param {number} index
   * @param {number} start
   * @param {number} end
   */
  function VerticalLine(layer, index, start, end) {
    _classCallCheck(this, VerticalLine);

    var _this = _possibleConstructorReturn(this, (VerticalLine.__proto__ || Object.getPrototypeOf(VerticalLine)).call(this, {}));

    _this.layer = layer;
    _this.index = index;
    _this.start = start;
    _this.end = end;
    return _this;
  }

  /**
   * Draw vertical line on given context
   * @param {external:CanvasRenderingContext2D} context
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} config
   */


  _createClass(VerticalLine, [{
    key: "draw",
    value: function draw(context, valueToPixel, indexToPixel, config) {

      var x = indexToPixel(this.index);

      context.beginPath();
      context.moveTo(x, this.start);
      context.lineTo(x, this.end);
      context.strokeStyle = config.lineColor;
      context.stroke();
    }

    /**
     * Get index
     * @returns {number}
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.index;
    }

    /**
     * Get start
     * @returns {number} Start of line in unit pixels from top edge.
     */

  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }

    /**
     * Get end
     * @returns {number} End of line in unit pixels in from top edge.
     */

  }, {
    key: "getEnd",
    value: function getEnd() {
      return this.end;
    }
  }]);

  return VerticalLine;
}(Element);

module.exports = VerticalLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZlcnRpY2FsTGluZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIlZlcnRpY2FsTGluZSIsImxheWVyIiwiaW5kZXgiLCJzdGFydCIsImVuZCIsImNvbnRleHQiLCJ2YWx1ZVRvUGl4ZWwiLCJpbmRleFRvUGl4ZWwiLCJjb25maWciLCJ4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lQ29sb3IiLCJzdHJva2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFVBQVVDLFFBQVEsb0JBQVIsQ0FBZDs7QUFFQTs7Ozs7OztJQU1NQyxZOzs7QUFFSjs7Ozs7Ozs7QUFRQSx3QkFBWUMsS0FBWixFQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBOztBQUFBLDRIQUM5QixFQUQ4Qjs7QUFFcEMsVUFBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBTG9DO0FBTXJDOztBQUVEOzs7Ozs7Ozs7Ozt5QkFPS0MsTyxFQUFTQyxZLEVBQWNDLFksRUFBY0MsTSxFQUFROztBQUVoRCxVQUFJQyxJQUFJRixhQUFhLEtBQUtMLEtBQWxCLENBQVI7O0FBRUFHLGNBQVFLLFNBQVI7QUFDQUwsY0FBUU0sTUFBUixDQUFlRixDQUFmLEVBQWtCLEtBQUtOLEtBQXZCO0FBQ0FFLGNBQVFPLE1BQVIsQ0FBZUgsQ0FBZixFQUFrQixLQUFLTCxHQUF2QjtBQUNBQyxjQUFRUSxXQUFSLEdBQXNCTCxPQUFPTSxTQUE3QjtBQUNBVCxjQUFRVSxNQUFSO0FBRUQ7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtiLEtBQVo7QUFDRDs7QUFFRDs7Ozs7OzsrQkFJVztBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOztBQUVEOzs7Ozs7OzZCQUlTO0FBQ1AsYUFBTyxLQUFLQyxHQUFaO0FBQ0Q7Ozs7RUEzRHdCTixPOztBQThEM0JrQixPQUFPQyxPQUFQLEdBQWlCakIsWUFBakIiLCJmaWxlIjoiVmVydGljYWxMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvRWxlbWVudFwiKTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdmVydGljYWwgbGluZS5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBlbGVtZW50LkVsZW1lbnRcbiAqIEBtZW1iZXJvZiBlbGVtZW50XG4gKi9cbmNsYXNzIFZlcnRpY2FsTGluZSBleHRlbmRzIEVsZW1lbnQge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBWZXJ0aWNhbExpbmVcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7TGF5ZXJ9IGxheWVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICAgKi9cbiAgY29uc3RydWN0b3IobGF5ZXIsIGluZGV4LCBzdGFydCwgZW5kKSB7XG4gICAgc3VwZXIoe30pO1xuICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIERyYXcgdmVydGljYWwgbGluZSBvbiBnaXZlbiBjb250ZXh0XG4gICAqIEBwYXJhbSB7ZXh0ZXJuYWw6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjb250ZXh0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgY29uZmlnKSB7XG5cbiAgICB2YXIgeCA9IGluZGV4VG9QaXhlbCh0aGlzLmluZGV4KTtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8oeCwgdGhpcy5zdGFydCk7XG4gICAgY29udGV4dC5saW5lVG8oeCwgdGhpcy5lbmQpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb25maWcubGluZUNvbG9yO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW5kZXhcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGFydFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBTdGFydCBvZiBsaW5lIGluIHVuaXQgcGl4ZWxzIGZyb20gdG9wIGVkZ2UuXG4gICAqL1xuICBnZXRTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZW5kXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEVuZCBvZiBsaW5lIGluIHVuaXQgcGl4ZWxzIGluIGZyb20gdG9wIGVkZ2UuXG4gICAqL1xuICBnZXRFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuIl19
},{"../element/Element":17}],24:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../layer/Layer");
var Candle = require("../element/Candle");

var _default_config = {
  bearBodyColor: "red",
  bullBodyColor: "green",
  wickColor: "black",
  candleBodyWidth: 5,
  candleWickWidth: 1,
  minField: "low",
  maxField: "high"
};

/**
 * Represents a candlestick chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer
 */

var CandleLayer = function (_Layer) {
  _inherits(CandleLayer, _Layer);

  /**
   * Instantiate CandleLayer
   * @constructor
   * @param {object} config
   */
  function CandleLayer(config) {
    _classCallCheck(this, CandleLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (CandleLayer.__proto__ || Object.getPrototypeOf(CandleLayer)).call(this, config || {}));
  }

  /**
   * Set candle body width
   * @param {number} width in pixels
   */


  _createClass(CandleLayer, [{
    key: "setCandleBodyWidth",
    value: function setCandleBodyWidth(candle_body_size) {
      this.candleBodyWidth = candle_body_size;
    }

    /**
     * Get width of candle body
     * @returns {number} width in pixels
     */

  }, {
    key: "getCandleBodyWidth",
    value: function getCandleBodyWidth() {
      return this.candleBodyWidth;
    }

    /**
     * Set candle body color for candles where close price is lower than open price.
     * @param {string} a CSS compatible color value, e.g. "red", "#FF0000", "rgb(255, 0, 0)"
     */

  }, {
    key: "setBearBodyColor",
    value: function setBearBodyColor(color) {
      this.bearBodyColor = color;
    }

    /**
     * Get candle body color for candles where close price is lower than open price.
     * @returns {number} width in pixels
     */

  }, {
    key: "getBearBodyColor",
    value: function getBearBodyColor() {
      return this.bearBodyColor;
    }

    /**
     * Set candle body color for candles where close price is higher than open price.
     * @param {string} a CSS compatible color value, e.g. "red", "#FF0000", "rgb(255, 0, 0)"
     */

  }, {
    key: "setBullBodyColor",
    value: function setBullBodyColor(color) {
      this.bullBodyColor = color;
    }

    /**
     * Get candle body color for candles where close price is higher than open price.
     * @returns {number} width in pixels
     */

  }, {
    key: "getBullBodyColor",
    value: function getBullBodyColor() {
      return this.bullBodyColor;
    }

    /**
     * Render layer onto canvas
     * @param {object} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} function
     * @param {indexToPixel} function
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var candle = new Candle(this, i, dat[field_map.time], dat[field_map.open], dat[field_map.high], dat[field_map.low], dat[field_map.close]);
        candle.draw(context, valueToPixel, indexToPixel, this);
        this.elements.push(candle);
      }
    }
  }]);

  return CandleLayer;
}(Layer);

module.exports = CandleLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbmRsZUxheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTGF5ZXIiLCJDYW5kbGUiLCJfZGVmYXVsdF9jb25maWciLCJiZWFyQm9keUNvbG9yIiwiYnVsbEJvZHlDb2xvciIsIndpY2tDb2xvciIsImNhbmRsZUJvZHlXaWR0aCIsImNhbmRsZVdpY2tXaWR0aCIsIm1pbkZpZWxkIiwibWF4RmllbGQiLCJDYW5kbGVMYXllciIsImNvbmZpZyIsImV4dGVuZCIsImNhbmRsZV9ib2R5X3NpemUiLCJjb2xvciIsImRhdGEiLCJjb3VudCIsIm9mZnNldCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsImNvbnRleHQiLCJfZ2V0Q29udGV4dCIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwiZGF0YV9hcnIiLCJnZXRSYXdEYXRhIiwiZWxlbWVudHMiLCJpIiwibGVuZ3RoIiwiZGF0IiwiY2FuZGxlIiwidGltZSIsIm9wZW4iLCJoaWdoIiwibG93IiwiY2xvc2UiLCJkcmF3IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxRQUFRRCxRQUFRLGdCQUFSLENBQVo7QUFDQSxJQUFJRSxTQUFTRixRQUFRLG1CQUFSLENBQWI7O0FBRUEsSUFBTUcsa0JBQWtCO0FBQ3RCQyxpQkFBZSxLQURPO0FBRXRCQyxpQkFBZSxPQUZPO0FBR3RCQyxhQUFXLE9BSFc7QUFJdEJDLG1CQUFpQixDQUpLO0FBS3RCQyxtQkFBaUIsQ0FMSztBQU10QkMsWUFBVSxLQU5ZO0FBT3RCQyxZQUFVO0FBUFksQ0FBeEI7O0FBVUE7Ozs7Ozs7SUFNTUMsVzs7O0FBRUo7Ozs7O0FBS0EsdUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEJBLGFBQVNiLEVBQUVjLE1BQUYsQ0FBUyxFQUFULEVBQWFWLGVBQWIsRUFBOEJTLE1BQTlCLENBQVQ7QUFEa0IscUhBRVpBLFVBQVUsRUFGRTtBQUduQjs7QUFFRDs7Ozs7Ozs7dUNBSW1CRSxnQixFQUFrQjtBQUNuQyxXQUFLUCxlQUFMLEdBQXVCTyxnQkFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozt5Q0FJcUI7QUFDbkIsYUFBTyxLQUFLUCxlQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCUSxLLEVBQU87QUFDdEIsV0FBS1gsYUFBTCxHQUFxQlcsS0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozt1Q0FJbUI7QUFDakIsYUFBTyxLQUFLWCxhQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCVyxLLEVBQU87QUFDdEIsV0FBS1YsYUFBTCxHQUFxQlUsS0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozt1Q0FJbUI7QUFDakIsYUFBTyxLQUFLVixhQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQVFLVyxJLEVBQU1DLEssRUFBT0MsTSxFQUFRQyxZLEVBQWNDLFksRUFBYzs7QUFFcEQsVUFBSUMsVUFBVSxLQUFLQyxXQUFMLEVBQWQ7QUFDQSxVQUFJQyxZQUFZUCxLQUFLUSxXQUFMLEVBQWhCO0FBQ0EsVUFBSUMsV0FBV1QsS0FBS1UsVUFBTCxFQUFmO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxXQUFJLElBQUlDLElBQUlWLFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDVSxJQUFJVixTQUFTRCxLQUFiLElBQXNCVyxJQUFJSCxTQUFTSSxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUlFLE1BQU1MLFNBQVNHLENBQVQsQ0FBVjtBQUNBLFlBQUlHLFNBQVMsSUFBSTdCLE1BQUosQ0FDWCxJQURXLEVBRVgwQixDQUZXLEVBR1hFLElBQUlQLFVBQVVTLElBQWQsQ0FIVyxFQUlYRixJQUFJUCxVQUFVVSxJQUFkLENBSlcsRUFLWEgsSUFBSVAsVUFBVVcsSUFBZCxDQUxXLEVBTVhKLElBQUlQLFVBQVVZLEdBQWQsQ0FOVyxFQU9YTCxJQUFJUCxVQUFVYSxLQUFkLENBUFcsQ0FBYjtBQVFBTCxlQUFPTSxJQUFQLENBQVloQixPQUFaLEVBQXFCRixZQUFyQixFQUFtQ0MsWUFBbkMsRUFBaUQsSUFBakQ7QUFDQSxhQUFLTyxRQUFMLENBQWNXLElBQWQsQ0FBbUJQLE1BQW5CO0FBQ0Q7QUFFRjs7OztFQTFGdUI5QixLOztBQThGMUJzQyxPQUFPQyxPQUFQLEdBQWlCN0IsV0FBakIiLCJmaWxlIjoiQ2FuZGxlTGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBMYXllciA9IHJlcXVpcmUoXCIuLi9sYXllci9MYXllclwiKTtcbnZhciBDYW5kbGUgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9DYW5kbGVcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgYmVhckJvZHlDb2xvcjogXCJyZWRcIixcbiAgYnVsbEJvZHlDb2xvcjogXCJncmVlblwiLFxuICB3aWNrQ29sb3I6IFwiYmxhY2tcIixcbiAgY2FuZGxlQm9keVdpZHRoOiA1LFxuICBjYW5kbGVXaWNrV2lkdGg6IDEsXG4gIG1pbkZpZWxkOiBcImxvd1wiLFxuICBtYXhGaWVsZDogXCJoaWdoXCJcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNhbmRsZXN0aWNrIGNoYXJ0IGxheWVyLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXJcbiAqL1xuY2xhc3MgQ2FuZGxlTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIENhbmRsZUxheWVyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNhbmRsZSBib2R5IHdpZHRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIHNldENhbmRsZUJvZHlXaWR0aChjYW5kbGVfYm9keV9zaXplKSB7XG4gICAgdGhpcy5jYW5kbGVCb2R5V2lkdGggPSBjYW5kbGVfYm9keV9zaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aWR0aCBvZiBjYW5kbGUgYm9keVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIGdldENhbmRsZUJvZHlXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW5kbGVCb2R5V2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNhbmRsZSBib2R5IGNvbG9yIGZvciBjYW5kbGVzIHdoZXJlIGNsb3NlIHByaWNlIGlzIGxvd2VyIHRoYW4gb3BlbiBwcmljZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGEgQ1NTIGNvbXBhdGlibGUgY29sb3IgdmFsdWUsIGUuZy4gXCJyZWRcIiwgXCIjRkYwMDAwXCIsIFwicmdiKDI1NSwgMCwgMClcIlxuICAgKi9cbiAgc2V0QmVhckJvZHlDb2xvcihjb2xvcikge1xuICAgIHRoaXMuYmVhckJvZHlDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjYW5kbGUgYm9keSBjb2xvciBmb3IgY2FuZGxlcyB3aGVyZSBjbG9zZSBwcmljZSBpcyBsb3dlciB0aGFuIG9wZW4gcHJpY2UuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHdpZHRoIGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0QmVhckJvZHlDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5iZWFyQm9keUNvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjYW5kbGUgYm9keSBjb2xvciBmb3IgY2FuZGxlcyB3aGVyZSBjbG9zZSBwcmljZSBpcyBoaWdoZXIgdGhhbiBvcGVuIHByaWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYSBDU1MgY29tcGF0aWJsZSBjb2xvciB2YWx1ZSwgZS5nLiBcInJlZFwiLCBcIiNGRjAwMDBcIiwgXCJyZ2IoMjU1LCAwLCAwKVwiXG4gICAqL1xuICBzZXRCdWxsQm9keUNvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5idWxsQm9keUNvbG9yID0gY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNhbmRsZSBib2R5IGNvbG9yIGZvciBjYW5kbGVzIHdoZXJlIGNsb3NlIHByaWNlIGlzIGhpZ2hlciB0aGFuIG9wZW4gcHJpY2UuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHdpZHRoIGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0QnVsbEJvZHlDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWxsQm9keUNvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgKiBAcGFyYW0ge3ZhbHVlVG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGZvcih2YXIgaSA9IG9mZnNldCA+PSAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGNvdW50ICYmIGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG4gICAgICB2YXIgY2FuZGxlID0gbmV3IENhbmRsZShcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC50aW1lXSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC5vcGVuXSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC5oaWdoXSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC5sb3ddLFxuICAgICAgICBkYXRbZmllbGRfbWFwLmNsb3NlXSk7XG4gICAgICBjYW5kbGUuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdGhpcyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goY2FuZGxlKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuZGxlTGF5ZXI7XG4iXX0=
},{"../element/Candle":16,"../layer/Layer":25,"underscore":6}],25:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Type = require("../core/Type");

var _default_config = {};

/**
 * Represents a layer.
 * <br><br>
 * @extends core.Type
 * @memberof layer
 */

var Layer = function (_Type) {
  _inherits(Layer, _Type);

  /**
   * Instantiate Layer
   * @constructor
   * @param {object} config
   */
  function Layer(config) {
    _classCallCheck(this, Layer);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, config));

    _this.elements = [];
    return _this;
  }

  /**
   * Sets parent component
   * @param {core.Component} comp
   */


  _createClass(Layer, [{
    key: "setParentComponent",
    value: function setParentComponent(comp) {
      this._parent_component = comp;
    }

    /**
     * Get parent component
     * @returns {core.Component} parent component
     */

  }, {
    key: "getParentComponent",
    value: function getParentComponent() {
      return this._parent_component;
    }

    /**
     * Get canvas context
     * @returns {CanvasRenderingContext2D} canvas context
     */

  }, {
    key: "_getContext",
    value: function _getContext() {
      return this.getParentComponent().getContext();
    }

    /**
     * Get layer width
     * @returns {number} layer width expressed in pixels
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.getParentComponent().getWidth();
    }

    /**
     * Get layer drawing width, equal to width minus padding
     * @returns {number} drawing width expressed in pixels
     */

  }, {
    key: "getDrawingWidth",
    value: function getDrawingWidth() {
      return this.getParentComponent().getDrawingWidth();
    }

    /**
     * Get layer height
     * @returns {number} layer height expressed in pixels
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.getParentComponent().getHeight();
    }

    /**
     * Get minimum field
     * <br><br>
     * Returns the name of the field with the lowest value for a given data point.
     * @returns {string|undefined} field name
     */

  }, {
    key: "getMinField",
    value: function getMinField() {
      return this.minField;
    }

    /**
     * Get maximum field
     * <br><br>
     * Returns the name of the field with the highest value for a given data point.
     * @returns {string|undefined} field name
     */

  }, {
    key: "getMaxField",
    value: function getMaxField() {
      return this.maxField;
    }

    /**
     * Get minimum value
     * <br><br>
     * Returns the value corresponding to the bottom edge of the layer
     * @returns {string|undefined} field name
     */

  }, {
    key: "getMinValue",
    value: function getMinValue() {
      return this.minValue;
    }

    /**
     * Get maximum value
     * <br><br>
     * Returns the value corresponding to the top edge of the layer
     * @returns {string|undefined} field name
     */

  }, {
    key: "getMaxValue",
    value: function getMaxValue() {
      return this.maxValue;
    }
  }]);

  return Layer;
}(Type);

module.exports = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiVHlwZSIsIl9kZWZhdWx0X2NvbmZpZyIsIkxheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwiZWxlbWVudHMiLCJjb21wIiwiX3BhcmVudF9jb21wb25lbnQiLCJnZXRQYXJlbnRDb21wb25lbnQiLCJnZXRDb250ZXh0IiwiZ2V0V2lkdGgiLCJnZXREcmF3aW5nV2lkdGgiLCJnZXRIZWlnaHQiLCJtaW5GaWVsZCIsIm1heEZpZWxkIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxPQUFPRCxRQUFRLGNBQVIsQ0FBWDs7QUFFQSxJQUFNRSxrQkFBa0IsRUFBeEI7O0FBR0E7Ozs7Ozs7SUFNTUMsSzs7O0FBRUo7Ozs7O0FBS0EsaUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEJBLGFBQVNMLEVBQUVNLE1BQUYsQ0FBUyxFQUFULEVBQWFILGVBQWIsRUFBOEJFLE1BQTlCLENBQVQ7O0FBRGtCLDhHQUVaQSxNQUZZOztBQUdsQixVQUFLRSxRQUFMLEdBQWdCLEVBQWhCO0FBSGtCO0FBSW5COztBQUVEOzs7Ozs7Ozt1Q0FJbUJDLEksRUFBTTtBQUN2QixXQUFLQyxpQkFBTCxHQUF5QkQsSUFBekI7QUFDRDs7QUFFRDs7Ozs7Ozt5Q0FJcUI7QUFDbkIsYUFBTyxLQUFLQyxpQkFBWjtBQUNEOztBQUVEOzs7Ozs7O2tDQUljO0FBQ1osYUFBTyxLQUFLQyxrQkFBTCxHQUEwQkMsVUFBMUIsRUFBUDtBQUNEOztBQUVEOzs7Ozs7OytCQUlXO0FBQ1QsYUFBTyxLQUFLRCxrQkFBTCxHQUEwQkUsUUFBMUIsRUFBUDtBQUNEOztBQUVEOzs7Ozs7O3NDQUlrQjtBQUNoQixhQUFPLEtBQUtGLGtCQUFMLEdBQTBCRyxlQUExQixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Z0NBSVk7QUFDVixhQUFPLEtBQUtILGtCQUFMLEdBQTBCSSxTQUExQixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNYztBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7a0NBTWM7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNYztBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7O0VBbkdpQmhCLEk7O0FBdUdwQmlCLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIFR5cGUgPSByZXF1aXJlKFwiLi4vY29yZS9UeXBlXCIpO1xuXG5jb25zdCBfZGVmYXVsdF9jb25maWcgPSB7XG59O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBsYXllci5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBjb3JlLlR5cGVcbiAqIEBtZW1iZXJvZiBsYXllclxuICovXG5jbGFzcyBMYXllciBleHRlbmRzIFR5cGUge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBMYXllclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHBhcmVudCBjb21wb25lbnRcbiAgICogQHBhcmFtIHtjb3JlLkNvbXBvbmVudH0gY29tcFxuICAgKi9cbiAgc2V0UGFyZW50Q29tcG9uZW50KGNvbXApIHtcbiAgICB0aGlzLl9wYXJlbnRfY29tcG9uZW50ID0gY29tcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7Y29yZS5Db21wb25lbnR9IHBhcmVudCBjb21wb25lbnRcbiAgICovXG4gIGdldFBhcmVudENvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50X2NvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FudmFzIGNvbnRleHRcbiAgICogQHJldHVybnMge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY2FudmFzIGNvbnRleHRcbiAgICovXG4gIF9nZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmdldFBhcmVudENvbXBvbmVudCgpLmdldENvbnRleHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF5ZXIgd2lkdGhcbiAgICogQHJldHVybnMge251bWJlcn0gbGF5ZXIgd2lkdGggZXhwcmVzc2VkIGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50Q29tcG9uZW50KCkuZ2V0V2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF5ZXIgZHJhd2luZyB3aWR0aCwgZXF1YWwgdG8gd2lkdGggbWludXMgcGFkZGluZ1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBkcmF3aW5nIHdpZHRoIGV4cHJlc3NlZCBpbiBwaXhlbHNcbiAgICovXG4gIGdldERyYXdpbmdXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRDb21wb25lbnQoKS5nZXREcmF3aW5nV2lkdGgoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGF5ZXIgaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGxheWVyIGhlaWdodCBleHByZXNzZWQgaW4gcGl4ZWxzXG4gICAqL1xuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50Q29tcG9uZW50KCkuZ2V0SGVpZ2h0KCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG1pbmltdW0gZmllbGRcbiAgICogPGJyPjxicj5cbiAgICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZmllbGQgd2l0aCB0aGUgbG93ZXN0IHZhbHVlIGZvciBhIGdpdmVuIGRhdGEgcG9pbnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSBmaWVsZCBuYW1lXG4gICAqL1xuICBnZXRNaW5GaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5GaWVsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF4aW11bSBmaWVsZFxuICAgKiA8YnI+PGJyPlxuICAgKiBSZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCB3aXRoIHRoZSBoaWdoZXN0IHZhbHVlIGZvciBhIGdpdmVuIGRhdGEgcG9pbnQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8dW5kZWZpbmVkfSBmaWVsZCBuYW1lXG4gICAqL1xuICBnZXRNYXhGaWVsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhGaWVsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWluaW11bSB2YWx1ZVxuICAgKiA8YnI+PGJyPlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgbGF5ZXJcbiAgICogQHJldHVybnMge3N0cmluZ3x1bmRlZmluZWR9IGZpZWxkIG5hbWVcbiAgICovXG4gIGdldE1pblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLm1pblZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXhpbXVtIHZhbHVlXG4gICAqIDxicj48YnI+XG4gICAqIFJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRvcCBlZGdlIG9mIHRoZSBsYXllclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfHVuZGVmaW5lZH0gZmllbGQgbmFtZVxuICAgKi9cbiAgZ2V0TWF4VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF4VmFsdWU7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyO1xuIl19
},{"../core/Type":11,"underscore":6}],26:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../layer/Layer");
var OHLCBar = require("../element/OHLCBar");

var _default_config = {
  bearBodyColor: "red",
  bullBodyColor: "green",
  wickColor: "black",
  candleBodyWidth: 3,
  candleWickWidth: 1,
  minField: "low",
  maxField: "high"
};

/**
 * Represents an OHLC bar chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer
 */

var OHLCLayer = function (_Layer) {
  _inherits(OHLCLayer, _Layer);

  /**
   * Instantiate OHLCLayer
   * @constructor
   * @param {object} config
   */
  function OHLCLayer(config) {
    _classCallCheck(this, OHLCLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (OHLCLayer.__proto__ || Object.getPrototypeOf(OHLCLayer)).call(this, config || {}));
  }

  /**
   * Set OHLC body width
   * @param {number} size width in pixels
   */


  _createClass(OHLCLayer, [{
    key: "setCandleBodyWidth",
    value: function setCandleBodyWidth(size) {
      this.candleBodyWidth = size;
    }

    /**
     * Get width of OHLC bar body
     * @returns {number} width in pixels
     */

  }, {
    key: "getCandleBodyWidth",
    value: function getCandleBodyWidth() {
      return this.candleBodyWidth;
    }

    /**
     * Set bar color for OHLC bars where close price is lower than open price.
     * @param {number} color
     */

  }, {
    key: "setBearBodyColor",
    value: function setBearBodyColor(color) {
      this.bearBodyColor = color;
    }

    /**
     * Get bar color for OHLC bars where close price is lower than open price.
     * @returns {number} width in pixels
     */

  }, {
    key: "getBearBodyColor",
    value: function getBearBodyColor() {
      return this.bearBodyColor;
    }

    /**
     * Set bar color for OHLC bars where close price is higher than open price.
     * @param {number} color
     */

  }, {
    key: "setBullBodyColor",
    value: function setBullBodyColor(color) {
      this.bullBodyColor = color;
    }

    /**
     * Get bar color for OHLC bars where close price is higher than open price.
     * @returns {number} width in pixels
     */

  }, {
    key: "getBullBodyColor",
    value: function getBullBodyColor() {
      return this.bullBodyColor;
    }

    /**
     * Render layer onto canvas
     * @param {object} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} function
     * @param {indexToPixel} function
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var bar = new OHLCBar(this, i, dat[field_map.time], dat[field_map.open], dat[field_map.high], dat[field_map.low], dat[field_map.close]);
        bar.draw(context, valueToPixel, indexToPixel, this);
        this.elements.push(bar);
      }
    }
  }]);

  return OHLCLayer;
}(Layer);

module.exports = OHLCLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9ITENMYXllci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkxheWVyIiwiT0hMQ0JhciIsIl9kZWZhdWx0X2NvbmZpZyIsImJlYXJCb2R5Q29sb3IiLCJidWxsQm9keUNvbG9yIiwid2lja0NvbG9yIiwiY2FuZGxlQm9keVdpZHRoIiwiY2FuZGxlV2lja1dpZHRoIiwibWluRmllbGQiLCJtYXhGaWVsZCIsIk9ITENMYXllciIsImNvbmZpZyIsImV4dGVuZCIsInNpemUiLCJjb2xvciIsImRhdGEiLCJjb3VudCIsIm9mZnNldCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsImNvbnRleHQiLCJfZ2V0Q29udGV4dCIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwiZGF0YV9hcnIiLCJnZXRSYXdEYXRhIiwiZWxlbWVudHMiLCJpIiwibGVuZ3RoIiwiZGF0IiwiYmFyIiwidGltZSIsIm9wZW4iLCJoaWdoIiwibG93IiwiY2xvc2UiLCJkcmF3IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxRQUFRRCxRQUFRLGdCQUFSLENBQVo7QUFDQSxJQUFJRSxVQUFVRixRQUFRLG9CQUFSLENBQWQ7O0FBRUEsSUFBTUcsa0JBQWtCO0FBQ3RCQyxpQkFBZSxLQURPO0FBRXRCQyxpQkFBZSxPQUZPO0FBR3RCQyxhQUFXLE9BSFc7QUFJdEJDLG1CQUFpQixDQUpLO0FBS3RCQyxtQkFBaUIsQ0FMSztBQU10QkMsWUFBVSxLQU5ZO0FBT3RCQyxZQUFVO0FBUFksQ0FBeEI7O0FBVUE7Ozs7Ozs7SUFNTUMsUzs7O0FBRUo7Ozs7O0FBS0EscUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEJBLGFBQVNiLEVBQUVjLE1BQUYsQ0FBUyxFQUFULEVBQWFWLGVBQWIsRUFBOEJTLE1BQTlCLENBQVQ7QUFEa0IsaUhBRVpBLFVBQVUsRUFGRTtBQUduQjs7QUFFRDs7Ozs7Ozs7dUNBSW1CRSxJLEVBQU07QUFDdkIsV0FBS1AsZUFBTCxHQUF1Qk8sSUFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozt5Q0FJcUI7QUFDbkIsYUFBTyxLQUFLUCxlQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCUSxLLEVBQU87QUFDdEIsV0FBS1gsYUFBTCxHQUFxQlcsS0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozt1Q0FJbUI7QUFDakIsYUFBTyxLQUFLWCxhQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7cUNBSWlCVyxLLEVBQU87QUFDdEIsV0FBS1YsYUFBTCxHQUFxQlUsS0FBckI7QUFDRDs7QUFFRDs7Ozs7Ozt1Q0FJbUI7QUFDakIsYUFBTyxLQUFLVixhQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQVFLVyxJLEVBQU1DLEssRUFBT0MsTSxFQUFRQyxZLEVBQWNDLFksRUFBYzs7QUFFcEQsVUFBSUMsVUFBVSxLQUFLQyxXQUFMLEVBQWQ7QUFDQSxVQUFJQyxZQUFZUCxLQUFLUSxXQUFMLEVBQWhCO0FBQ0EsVUFBSUMsV0FBV1QsS0FBS1UsVUFBTCxFQUFmO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxXQUFJLElBQUlDLElBQUlWLFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDVSxJQUFJVixTQUFTRCxLQUFiLElBQXNCVyxJQUFJSCxTQUFTSSxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUlFLE1BQU1MLFNBQVNHLENBQVQsQ0FBVjtBQUNBLFlBQUlHLE1BQU0sSUFBSTdCLE9BQUosQ0FDUixJQURRLEVBRVIwQixDQUZRLEVBR1JFLElBQUlQLFVBQVVTLElBQWQsQ0FIUSxFQUlSRixJQUFJUCxVQUFVVSxJQUFkLENBSlEsRUFLUkgsSUFBSVAsVUFBVVcsSUFBZCxDQUxRLEVBTVJKLElBQUlQLFVBQVVZLEdBQWQsQ0FOUSxFQU9STCxJQUFJUCxVQUFVYSxLQUFkLENBUFEsQ0FBVjtBQVFBTCxZQUFJTSxJQUFKLENBQVNoQixPQUFULEVBQWtCRixZQUFsQixFQUFnQ0MsWUFBaEMsRUFBOEMsSUFBOUM7QUFDQSxhQUFLTyxRQUFMLENBQWNXLElBQWQsQ0FBbUJQLEdBQW5CO0FBQ0Q7QUFFRjs7OztFQTFGcUI5QixLOztBQThGeEJzQyxPQUFPQyxPQUFQLEdBQWlCN0IsU0FBakIiLCJmaWxlIjoiT0hMQ0xheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XG52YXIgTGF5ZXIgPSByZXF1aXJlKFwiLi4vbGF5ZXIvTGF5ZXJcIik7XG52YXIgT0hMQ0JhciA9IHJlcXVpcmUoXCIuLi9lbGVtZW50L09ITENCYXJcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgYmVhckJvZHlDb2xvcjogXCJyZWRcIixcbiAgYnVsbEJvZHlDb2xvcjogXCJncmVlblwiLFxuICB3aWNrQ29sb3I6IFwiYmxhY2tcIixcbiAgY2FuZGxlQm9keVdpZHRoOiAzLFxuICBjYW5kbGVXaWNrV2lkdGg6IDEsXG4gIG1pbkZpZWxkOiBcImxvd1wiLFxuICBtYXhGaWVsZDogXCJoaWdoXCJcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBPSExDIGJhciBjaGFydCBsYXllci5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBsYXllci5MYXllclxuICogQG1lbWJlcm9mIGxheWVyXG4gKi9cbmNsYXNzIE9ITENMYXllciBleHRlbmRzIExheWVyIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgT0hMQ0xheWVyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IE9ITEMgYm9keSB3aWR0aFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIHNldENhbmRsZUJvZHlXaWR0aChzaXplKSB7XG4gICAgdGhpcy5jYW5kbGVCb2R5V2lkdGggPSBzaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aWR0aCBvZiBPSExDIGJhciBib2R5XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHdpZHRoIGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0Q2FuZGxlQm9keVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmNhbmRsZUJvZHlXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYmFyIGNvbG9yIGZvciBPSExDIGJhcnMgd2hlcmUgY2xvc2UgcHJpY2UgaXMgbG93ZXIgdGhhbiBvcGVuIHByaWNlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29sb3JcbiAgICovXG4gIHNldEJlYXJCb2R5Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmJlYXJCb2R5Q29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmFyIGNvbG9yIGZvciBPSExDIGJhcnMgd2hlcmUgY2xvc2UgcHJpY2UgaXMgbG93ZXIgdGhhbiBvcGVuIHByaWNlLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIGdldEJlYXJCb2R5Q29sb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVhckJvZHlDb2xvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYmFyIGNvbG9yIGZvciBPSExDIGJhcnMgd2hlcmUgY2xvc2UgcHJpY2UgaXMgaGlnaGVyIHRoYW4gb3BlbiBwcmljZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbG9yXG4gICAqL1xuICBzZXRCdWxsQm9keUNvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5idWxsQm9keUNvbG9yID0gY29sb3I7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJhciBjb2xvciBmb3IgT0hMQyBiYXJzIHdoZXJlIGNsb3NlIHByaWNlIGlzIGhpZ2hlciB0aGFuIG9wZW4gcHJpY2UuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHdpZHRoIGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0QnVsbEJvZHlDb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5idWxsQm9keUNvbG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgKiBAcGFyYW0ge3ZhbHVlVG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGZvcih2YXIgaSA9IG9mZnNldCA+PSAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGNvdW50ICYmIGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG4gICAgICB2YXIgYmFyID0gbmV3IE9ITENCYXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGksXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudGltZV0sXG4gICAgICAgIGRhdFtmaWVsZF9tYXAub3Blbl0sXG4gICAgICAgIGRhdFtmaWVsZF9tYXAuaGlnaF0sXG4gICAgICAgIGRhdFtmaWVsZF9tYXAubG93XSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC5jbG9zZV0pO1xuICAgICAgYmFyLmRyYXcoY29udGV4dCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIHRoaXMpO1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGJhcik7XG4gICAgfVxuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9ITENMYXllcjtcbiJdfQ==
},{"../element/OHLCBar":20,"../layer/Layer":25,"underscore":6}],27:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../layer/Layer");
var VerticalLine = require("../element/VerticalLine");

var _default_config = {
  lineColor: "#ebebeb",
  showLabels: true,
  labelColor: "#555555",
  labelFont: "7pt normal normal arial;"
};

/**
 * Represents time grid layer, consisting of vertical lines.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer
 */

var TimeGridLayer = function (_Layer) {
  _inherits(TimeGridLayer, _Layer);

  /**
   * Instantiate TimeGridLayer
   * @constructor
   * @param {object} config
   */
  function TimeGridLayer(config) {
    _classCallCheck(this, TimeGridLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (TimeGridLayer.__proto__ || Object.getPrototypeOf(TimeGridLayer)).call(this, config));
  }

  /**
   * Get start of vertical line in unit pixels
   * @returns {number} in pixels
   */


  _createClass(TimeGridLayer, [{
    key: "getLineStart",
    value: function getLineStart() {
      return 0;
    }

    /**
     * Get end of vertical line in unit pixels
     * @returns {number} in pixels
     */

  }, {
    key: "getLineEnd",
    value: function getLineEnd() {
      return this.getHeight();
    }

    /**
     * Render layer onto canvas
     * @param {object} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} function
     * @param {indexToPixel} function
     * @param {object} valueBounds
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel, valueBounds) {

      var context = this._getContext();
      var data_arr = data.getRawData();
      this.elements = [];

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        if (this.timeGrid.lineAt(i) !== undefined) {
          var line = new VerticalLine(this, i, // index
          this.getLineStart(), this.getLineEnd());
          this.elements.push(line);
          line.draw(context, valueToPixel, indexToPixel, this);
        }
      }
    }
  }]);

  return TimeGridLayer;
}(Layer);

module.exports = TimeGridLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVHcmlkTGF5ZXIuanMiXSwibmFtZXMiOlsiXyIsInJlcXVpcmUiLCJMYXllciIsIlZlcnRpY2FsTGluZSIsIl9kZWZhdWx0X2NvbmZpZyIsImxpbmVDb2xvciIsInNob3dMYWJlbHMiLCJsYWJlbENvbG9yIiwibGFiZWxGb250IiwiVGltZUdyaWRMYXllciIsImNvbmZpZyIsImV4dGVuZCIsImdldEhlaWdodCIsImRhdGEiLCJjb3VudCIsIm9mZnNldCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsInZhbHVlQm91bmRzIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZGF0YV9hcnIiLCJnZXRSYXdEYXRhIiwiZWxlbWVudHMiLCJpIiwibGVuZ3RoIiwidGltZUdyaWQiLCJsaW5lQXQiLCJ1bmRlZmluZWQiLCJsaW5lIiwiZ2V0TGluZVN0YXJ0IiwiZ2V0TGluZUVuZCIsInB1c2giLCJkcmF3IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFlBQVIsQ0FBUjtBQUNBLElBQUlDLFFBQVFELFFBQVEsZ0JBQVIsQ0FBWjtBQUNBLElBQUlFLGVBQWVGLFFBQVEseUJBQVIsQ0FBbkI7O0FBRUEsSUFBTUcsa0JBQWtCO0FBQ3RCQyxhQUFXLFNBRFc7QUFFdEJDLGNBQVksSUFGVTtBQUd0QkMsY0FBWSxTQUhVO0FBSXRCQyxhQUFXO0FBSlcsQ0FBeEI7O0FBT0E7Ozs7Ozs7SUFNTUMsYTs7O0FBRUo7Ozs7O0FBS0EseUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEJBLGFBQVNWLEVBQUVXLE1BQUYsQ0FBUyxFQUFULEVBQWFQLGVBQWIsRUFBOEJNLE1BQTlCLENBQVQ7QUFEa0IseUhBRVpBLE1BRlk7QUFHbkI7O0FBRUQ7Ozs7Ozs7O21DQUllO0FBQ2IsYUFBTyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7aUNBSWE7QUFDWCxhQUFPLEtBQUtFLFNBQUwsRUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7eUJBU0tDLEksRUFBTUMsSyxFQUFPQyxNLEVBQVFDLFksRUFBY0MsWSxFQUFjQyxXLEVBQWE7O0FBRWpFLFVBQUlDLFVBQVUsS0FBS0MsV0FBTCxFQUFkO0FBQ0EsVUFBSUMsV0FBV1IsS0FBS1MsVUFBTCxFQUFmO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxXQUFJLElBQUlDLElBQUlULFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDUyxJQUFJVCxTQUFTRCxLQUFiLElBQXNCVSxJQUFJSCxTQUFTSSxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUcsS0FBS0UsUUFBTCxDQUFjQyxNQUFkLENBQXFCSCxDQUFyQixNQUE0QkksU0FBL0IsRUFDQTtBQUNFLGNBQUlDLE9BQU8sSUFBSTFCLFlBQUosQ0FDVCxJQURTLEVBRVRxQixDQUZTLEVBRU47QUFDSCxlQUFLTSxZQUFMLEVBSFMsRUFJVCxLQUFLQyxVQUFMLEVBSlMsQ0FBWDtBQUtBLGVBQUtSLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQkgsSUFBbkI7QUFDQUEsZUFBS0ksSUFBTCxDQUFVZCxPQUFWLEVBQW1CSCxZQUFuQixFQUFpQ0MsWUFBakMsRUFBK0MsSUFBL0M7QUFDRDtBQUVGO0FBRUY7Ozs7RUExRHlCZixLOztBQThENUJnQyxPQUFPQyxPQUFQLEdBQWlCMUIsYUFBakIiLCJmaWxlIjoiVGltZUdyaWRMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uL2xheWVyL0xheWVyXCIpO1xudmFyIFZlcnRpY2FsTGluZSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50L1ZlcnRpY2FsTGluZVwiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBsaW5lQ29sb3I6IFwiI2ViZWJlYlwiLFxuICBzaG93TGFiZWxzOiB0cnVlLFxuICBsYWJlbENvbG9yOiBcIiM1NTU1NTVcIixcbiAgbGFiZWxGb250OiBcIjdwdCBub3JtYWwgbm9ybWFsIGFyaWFsO1wiXG59O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGltZSBncmlkIGxheWVyLCBjb25zaXN0aW5nIG9mIHZlcnRpY2FsIGxpbmVzLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXJcbiAqL1xuY2xhc3MgVGltZUdyaWRMYXllciBleHRlbmRzIExheWVyIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgVGltZUdyaWRMYXllclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGFydCBvZiB2ZXJ0aWNhbCBsaW5lIGluIHVuaXQgcGl4ZWxzXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGluIHBpeGVsc1xuICAgKi9cbiAgZ2V0TGluZVN0YXJ0KCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbmQgb2YgdmVydGljYWwgbGluZSBpbiB1bml0IHBpeGVsc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbiBwaXhlbHNcbiAgICovXG4gIGdldExpbmVFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGVpZ2h0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGxheWVyIG9udG8gY2FudmFzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlQm91bmRzXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB2YWx1ZUJvdW5kcykge1xuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgdmFyIGRhdGFfYXJyID0gZGF0YS5nZXRSYXdEYXRhKCk7XG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yKHZhciBpID0gb2Zmc2V0ID49IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgY291bnQgJiYgaSA8IGRhdGFfYXJyLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGlmKHRoaXMudGltZUdyaWQubGluZUF0KGkpICE9PSB1bmRlZmluZWQpXG4gICAgICB7XG4gICAgICAgIHZhciBsaW5lID0gbmV3IFZlcnRpY2FsTGluZShcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGksIC8vIGluZGV4XG4gICAgICAgICAgdGhpcy5nZXRMaW5lU3RhcnQoKSxcbiAgICAgICAgICB0aGlzLmdldExpbmVFbmQoKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChsaW5lKTtcbiAgICAgICAgbGluZS5kcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB0aGlzKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lR3JpZExheWVyO1xuIl19
},{"../element/VerticalLine":23,"../layer/Layer":25,"underscore":6}],28:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../layer/Layer");
var TimeLabel = require("../element/TimeLabel");

var _default_config = {
  labelColor: "#444444",
  labelFont: "7pt normal normal arial;",
  labelY: 8
};

/**
 * Represents time labels layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer
 */

var TimeLabelsLayer = function (_Layer) {
  _inherits(TimeLabelsLayer, _Layer);

  /**
   * Instantiate TimeLabelsLayer
   * @constructor
   * @param {object} config
   */
  function TimeLabelsLayer(config) {
    _classCallCheck(this, TimeLabelsLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (TimeLabelsLayer.__proto__ || Object.getPrototypeOf(TimeLabelsLayer)).call(this, config));
  }

  /**
   * Render layer onto canvas
   * @param {object} data
   * @param {number} count
   * @param {number} offset
   * @param {valueToPixel} function
   * @param {indexToPixel} function
   * @param {object} valueBounds
   */


  _createClass(TimeLabelsLayer, [{
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel, valueBounds) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];
      var line_spacing = this.timeGrid.getLineSpacing();
      var label;
      var labels = [];

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var time_str = dat[field_map.time];

        var grid_line = this.timeGrid.lineAt(i);
        if (grid_line !== undefined) {
          label = new TimeLabel(this, i, // index
          time_str, grid_line.format);

          labels.push(label);
        }
      }

      // look ahead
      for (i = 0; i < labels.length - 1; i++) {
        label = labels[i];
        var next_label = labels[i + 1];
        var x = indexToPixel(label.getIndex());
        var next_x = indexToPixel(next_label.getIndex());
        if (next_x - x >= 0.6 * line_spacing) {
          label.draw(context, indexToPixel, this);
          this.elements.push(label);
        }
      }
    }
  }]);

  return TimeLabelsLayer;
}(Layer);

module.exports = TimeLabelsLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVMYWJlbHNMYXllci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkxheWVyIiwiVGltZUxhYmVsIiwiX2RlZmF1bHRfY29uZmlnIiwibGFiZWxDb2xvciIsImxhYmVsRm9udCIsImxhYmVsWSIsIlRpbWVMYWJlbHNMYXllciIsImNvbmZpZyIsImV4dGVuZCIsImRhdGEiLCJjb3VudCIsIm9mZnNldCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsInZhbHVlQm91bmRzIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZmllbGRfbWFwIiwiZ2V0RmllbGRNYXAiLCJkYXRhX2FyciIsImdldFJhd0RhdGEiLCJlbGVtZW50cyIsImxpbmVfc3BhY2luZyIsInRpbWVHcmlkIiwiZ2V0TGluZVNwYWNpbmciLCJsYWJlbCIsImxhYmVscyIsImkiLCJsZW5ndGgiLCJkYXQiLCJ0aW1lX3N0ciIsInRpbWUiLCJncmlkX2xpbmUiLCJsaW5lQXQiLCJ1bmRlZmluZWQiLCJmb3JtYXQiLCJwdXNoIiwibmV4dF9sYWJlbCIsIngiLCJnZXRJbmRleCIsIm5leHRfeCIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSxnQkFBUixDQUFaO0FBQ0EsSUFBSUUsWUFBWUYsUUFBUSxzQkFBUixDQUFoQjs7QUFFQSxJQUFNRyxrQkFBa0I7QUFDdEJDLGNBQVksU0FEVTtBQUV0QkMsYUFBVywwQkFGVztBQUd0QkMsVUFBUTtBQUhjLENBQXhCOztBQU1BOzs7Ozs7O0lBTU1DLGU7OztBQUVKOzs7OztBQUtBLDJCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCQSxhQUFTVCxFQUFFVSxNQUFGLENBQVMsRUFBVCxFQUFhTixlQUFiLEVBQThCSyxNQUE5QixDQUFUO0FBRGtCLDZIQUVaQSxNQUZZO0FBR25COztBQUVEOzs7Ozs7Ozs7Ozs7O3lCQVNLRSxJLEVBQU1DLEssRUFBT0MsTSxFQUFRQyxZLEVBQWNDLFksRUFBY0MsVyxFQUFhOztBQUVqRSxVQUFJQyxVQUFVLEtBQUtDLFdBQUwsRUFBZDtBQUNBLFVBQUlDLFlBQVlSLEtBQUtTLFdBQUwsRUFBaEI7QUFDQSxVQUFJQyxXQUFXVixLQUFLVyxVQUFMLEVBQWY7QUFDQSxXQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBSUMsZUFBZSxLQUFLQyxRQUFMLENBQWNDLGNBQWQsRUFBbkI7QUFDQSxVQUFJQyxLQUFKO0FBQ0EsVUFBSUMsU0FBUyxFQUFiOztBQUVBLFdBQUksSUFBSUMsSUFBSWhCLFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDZ0IsSUFBSWhCLFNBQVNELEtBQWIsSUFBc0JpQixJQUFJUixTQUFTUyxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUlFLE1BQU1WLFNBQVNRLENBQVQsQ0FBVjtBQUNBLFlBQUlHLFdBQVdELElBQUlaLFVBQVVjLElBQWQsQ0FBZjs7QUFFQSxZQUFJQyxZQUFZLEtBQUtULFFBQUwsQ0FBY1UsTUFBZCxDQUFxQk4sQ0FBckIsQ0FBaEI7QUFDQSxZQUFHSyxjQUFjRSxTQUFqQixFQUNBO0FBQ0VULGtCQUFRLElBQUl4QixTQUFKLENBQ04sSUFETSxFQUVOMEIsQ0FGTSxFQUVIO0FBQ0hHLGtCQUhNLEVBSU5FLFVBQVVHLE1BSkosQ0FBUjs7QUFNQVQsaUJBQU9VLElBQVAsQ0FBWVgsS0FBWjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxXQUFJRSxJQUFJLENBQVIsRUFBV0EsSUFBSUQsT0FBT0UsTUFBUCxHQUFnQixDQUEvQixFQUFrQ0QsR0FBbEMsRUFDQTtBQUNFRixnQkFBUUMsT0FBT0MsQ0FBUCxDQUFSO0FBQ0EsWUFBSVUsYUFBYVgsT0FBT0MsSUFBSSxDQUFYLENBQWpCO0FBQ0EsWUFBSVcsSUFBSXpCLGFBQWFZLE1BQU1jLFFBQU4sRUFBYixDQUFSO0FBQ0EsWUFBSUMsU0FBUzNCLGFBQWF3QixXQUFXRSxRQUFYLEVBQWIsQ0FBYjtBQUNBLFlBQUdDLFNBQVNGLENBQVQsSUFBYyxNQUFNaEIsWUFBdkIsRUFDQTtBQUNFRyxnQkFBTWdCLElBQU4sQ0FBVzFCLE9BQVgsRUFBb0JGLFlBQXBCLEVBQWtDLElBQWxDO0FBQ0EsZUFBS1EsUUFBTCxDQUFjZSxJQUFkLENBQW1CWCxLQUFuQjtBQUNEO0FBQ0Y7QUFFRjs7OztFQS9EMkJ6QixLOztBQW1FOUIwQyxPQUFPQyxPQUFQLEdBQWlCckMsZUFBakIiLCJmaWxlIjoiVGltZUxhYmVsc0xheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XG52YXIgTGF5ZXIgPSByZXF1aXJlKFwiLi4vbGF5ZXIvTGF5ZXJcIik7XG52YXIgVGltZUxhYmVsID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvVGltZUxhYmVsXCIpO1xuXG5jb25zdCBfZGVmYXVsdF9jb25maWcgPSB7XG4gIGxhYmVsQ29sb3I6IFwiIzQ0NDQ0NFwiLFxuICBsYWJlbEZvbnQ6IFwiN3B0IG5vcm1hbCBub3JtYWwgYXJpYWw7XCIsXG4gIGxhYmVsWTogOFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRpbWUgbGFiZWxzIGxheWVyLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXJcbiAqL1xuY2xhc3MgVGltZUxhYmVsc0xheWVyIGV4dGVuZHMgTGF5ZXIge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBUaW1lTGFiZWxzTGF5ZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF8uZXh0ZW5kKHt9LCBfZGVmYXVsdF9jb25maWcsIGNvbmZpZyk7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbGF5ZXIgb250byBjYW52YXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7aW5kZXhUb1BpeGVsfSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVCb3VuZHNcbiAgICovXG4gIGRyYXcoZGF0YSwgY291bnQsIG9mZnNldCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIHZhbHVlQm91bmRzKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgbGluZV9zcGFjaW5nID0gdGhpcy50aW1lR3JpZC5nZXRMaW5lU3BhY2luZygpO1xuICAgIHZhciBsYWJlbDtcbiAgICB2YXIgbGFiZWxzID0gW107XG5cbiAgICBmb3IodmFyIGkgPSBvZmZzZXQgPj0gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBjb3VudCAmJiBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuICAgICAgdmFyIHRpbWVfc3RyID0gZGF0W2ZpZWxkX21hcC50aW1lXTtcblxuICAgICAgdmFyIGdyaWRfbGluZSA9IHRoaXMudGltZUdyaWQubGluZUF0KGkpO1xuICAgICAgaWYoZ3JpZF9saW5lICE9PSB1bmRlZmluZWQpXG4gICAgICB7XG4gICAgICAgIGxhYmVsID0gbmV3IFRpbWVMYWJlbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGksIC8vIGluZGV4XG4gICAgICAgICAgdGltZV9zdHIsXG4gICAgICAgICAgZ3JpZF9saW5lLmZvcm1hdCk7XG5cbiAgICAgICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxvb2sgYWhlYWRcbiAgICBmb3IoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoIC0gMTsgaSsrKVxuICAgIHtcbiAgICAgIGxhYmVsID0gbGFiZWxzW2ldO1xuICAgICAgdmFyIG5leHRfbGFiZWwgPSBsYWJlbHNbaSArIDFdO1xuICAgICAgdmFyIHggPSBpbmRleFRvUGl4ZWwobGFiZWwuZ2V0SW5kZXgoKSk7XG4gICAgICB2YXIgbmV4dF94ID0gaW5kZXhUb1BpeGVsKG5leHRfbGFiZWwuZ2V0SW5kZXgoKSk7XG4gICAgICBpZihuZXh0X3ggLSB4ID49IDAuNiAqIGxpbmVfc3BhY2luZylcbiAgICAgIHtcbiAgICAgICAgbGFiZWwuZHJhdyhjb250ZXh0LCBpbmRleFRvUGl4ZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobGFiZWwpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lTGFiZWxzTGF5ZXI7XG4iXX0=
},{"../element/TimeLabel":21,"../layer/Layer":25,"underscore":6}],29:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../layer/Layer");
var HorizontalLine = require("../element/HorizontalLine");
var ValueLabel = require("../element/ValueLabel");

var _default_config = {
  lineSpacing: 50,
  lineColor: "#ebebeb",
  showLabels: true,
  labelColor: "#555555",
  labelFont: "7pt normal normal arial;",
  labelPaddingLeft: 4,
  value_step: 0.0001
};

/**
 * Represents value grid layer, consisting of horizontal lines.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer
 */

var ValueGridLayer = function (_Layer) {
  _inherits(ValueGridLayer, _Layer);

  /**
   * Instantiate ValueGridLayer
   * @constructor
   * @param {object} config
   */
  function ValueGridLayer(config) {
    _classCallCheck(this, ValueGridLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (ValueGridLayer.__proto__ || Object.getPrototypeOf(ValueGridLayer)).call(this, config || {}));
  }

  /**
   * Get width of labels (on right-hand side of chart)
   * @returns {number} in pixels
   */


  _createClass(ValueGridLayer, [{
    key: "getLabelWidth",
    value: function getLabelWidth() {
      return this.labelWidth;
    }

    /**
     * Get start of horizontal line in unit pixels
     * @returns {number} in pixels
     */

  }, {
    key: "getLineStart",
    value: function getLineStart() {
      return 0;
    }

    /**
     * Get end of horizontal line in unit pixels
     * @returns {number} in pixels
     */

  }, {
    key: "getLineEnd",
    value: function getLineEnd() {
      return this.getWidth() - this.getLabelWidth();
    }

    /**
     * Render layer onto canvas
     * @param {object} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} function
     * @param {indexToPixel} function
     * @param {object} valueBounds
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel, valueBounds) {

      var context = this._getContext();
      this.elements = [];
      this.label_elements = [];
      var min = valueBounds.min,
          max = valueBounds.max;
      var derived_lines;
      var dec_places;

      if (this.lines === undefined) {
        derived_lines = [];

        var denom = this.granularity;
        if (denom === undefined) {
          denom = ValueGridLayer.determineValueGranularity(min, max, this.getHeight(), this.lineSpacing);
        }

        // e.g. var p = (Math.round(price_min * 400.0) / 400.0); // where denom = 0.0025
        var value = Math.round(min * 1.0 / denom) / (1.0 / denom);
        dec_places = ValueGridLayer.decimalPlaces(denom);

        var i = 0;
        while (value <= max) {
          value = ValueGridLayer.decimalAdjust("round", value, -7);
          derived_lines.push(value);

          value += denom;
          i++;
        }
      } else {
        derived_lines = this.lines;
      }

      for (var l = 0; l < derived_lines.length; l++) {
        var val = derived_lines[l];

        var line = new HorizontalLine(this, val, this.getLineStart(), this.getLineEnd());
        this.elements.push(line);
        line.draw(context, valueToPixel, indexToPixel, this);

        if (this.showLabels === true) {
          var label = new ValueLabel(l, val.toFixed(dec_places || 2), this.getLineEnd());
          this.label_elements.push(label);
          label.draw(context, valueToPixel, indexToPixel, this);
        }
      }
    }

    /**
     * @static
     * Determine grid line interval
     * @param {number} min
     * @param {number} max
     * @param {number} pixel_height
     * @param {number} pixel_spacing
     * @returns {number} number representing interval between horizontal grid lines
     */

  }], [{
    key: "determineValueGranularity",
    value: function determineValueGranularity(min, max, pixel_height, pixel_spacing, value_step) {

      var range = max - min; // e.g. 1815-1762 or 1.4172-1.4069
      var divisions = pixel_height / pixel_spacing; // e.g. 300/20
      var seg = range / divisions;

      var gran = value_step;
      var prev_gran = value_step / 2;
      var gran_factors = [2.5, 2, 2]; // 1*2.5=2.5, 2.5*2=5, 5*2=10, 10*2.5=25, ...
      //var grans = [10000,5000,2500,1000,500,250,100,50,25,10,5,2.5,1,0.5,0.25,0.1,0.05,0.025,0.01,0.005,0.0025,0.0001,0.00005,0.000025,0.00001];
      var nextGran = function nextGran(current_value, i) {
        return current_value * gran_factors[i % 3];
      };

      for (var i = 0;; i++) {
        if (gran >= seg) {
          return prev_gran;
        }

        prev_gran = gran;
        gran = nextGran(gran, i);
      }

      return 1000;
    }

    /**
     * @static
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
     *
     * Decimal adjustment of a number.
     * @param {string} type The type of adjustment.
     * @param {number} value The number.
     * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
     * @returns {number} The adjusted value.
    */

  }, {
    key: "decimalAdjust",
    value: function decimalAdjust(type, value, exp) {
      // If the exp is undefined or zero...
      if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split("e");
      value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
      // Shift back
      value = value.toString().split("e");
      return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    }

    // http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number

  }, {
    key: "decimalPlaces",
    value: function decimalPlaces(num) {
      var match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      if (!match) {
        return 0;
      }
      return Math.max(0,
      // Number of digits right of decimal point. // Adjust for scientific notation.
      (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
    }
  }]);

  return ValueGridLayer;
}(Layer);

module.exports = ValueGridLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZhbHVlR3JpZExheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTGF5ZXIiLCJIb3Jpem9udGFsTGluZSIsIlZhbHVlTGFiZWwiLCJfZGVmYXVsdF9jb25maWciLCJsaW5lU3BhY2luZyIsImxpbmVDb2xvciIsInNob3dMYWJlbHMiLCJsYWJlbENvbG9yIiwibGFiZWxGb250IiwibGFiZWxQYWRkaW5nTGVmdCIsInZhbHVlX3N0ZXAiLCJWYWx1ZUdyaWRMYXllciIsImNvbmZpZyIsImV4dGVuZCIsImxhYmVsV2lkdGgiLCJnZXRXaWR0aCIsImdldExhYmVsV2lkdGgiLCJkYXRhIiwiY291bnQiLCJvZmZzZXQiLCJ2YWx1ZVRvUGl4ZWwiLCJpbmRleFRvUGl4ZWwiLCJ2YWx1ZUJvdW5kcyIsImNvbnRleHQiLCJfZ2V0Q29udGV4dCIsImVsZW1lbnRzIiwibGFiZWxfZWxlbWVudHMiLCJtaW4iLCJtYXgiLCJkZXJpdmVkX2xpbmVzIiwiZGVjX3BsYWNlcyIsImxpbmVzIiwidW5kZWZpbmVkIiwiZGVub20iLCJncmFudWxhcml0eSIsImRldGVybWluZVZhbHVlR3JhbnVsYXJpdHkiLCJnZXRIZWlnaHQiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsImRlY2ltYWxQbGFjZXMiLCJpIiwiZGVjaW1hbEFkanVzdCIsInB1c2giLCJsIiwibGVuZ3RoIiwidmFsIiwibGluZSIsImdldExpbmVTdGFydCIsImdldExpbmVFbmQiLCJkcmF3IiwibGFiZWwiLCJ0b0ZpeGVkIiwicGl4ZWxfaGVpZ2h0IiwicGl4ZWxfc3BhY2luZyIsInJhbmdlIiwiZGl2aXNpb25zIiwic2VnIiwiZ3JhbiIsInByZXZfZ3JhbiIsImdyYW5fZmFjdG9ycyIsIm5leHRHcmFuIiwiY3VycmVudF92YWx1ZSIsInR5cGUiLCJleHAiLCJpc05hTiIsIk5hTiIsInRvU3RyaW5nIiwic3BsaXQiLCJudW0iLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7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TSxDQUFOLENBQVosR0FBdUIsQ0FBM0QsQ0FISyxDQUFQO0FBS0Q7Ozs7RUF6TDBCdEUsSzs7QUE2TDdCdUUsT0FBT0MsT0FBUCxHQUFpQjdELGNBQWpCIiwiZmlsZSI6IlZhbHVlR3JpZExheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XG52YXIgTGF5ZXIgPSByZXF1aXJlKFwiLi4vbGF5ZXIvTGF5ZXJcIik7XG52YXIgSG9yaXpvbnRhbExpbmUgPSByZXF1aXJlKFwiLi4vZWxlbWVudC9Ib3Jpem9udGFsTGluZVwiKTtcbnZhciBWYWx1ZUxhYmVsID0gcmVxdWlyZShcIi4uL2VsZW1lbnQvVmFsdWVMYWJlbFwiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBsaW5lU3BhY2luZzogNTAsXG4gIGxpbmVDb2xvcjogXCIjZWJlYmViXCIsXG4gIHNob3dMYWJlbHM6IHRydWUsXG4gIGxhYmVsQ29sb3I6IFwiIzU1NTU1NVwiLFxuICBsYWJlbEZvbnQ6IFwiN3B0IG5vcm1hbCBub3JtYWwgYXJpYWw7XCIsXG4gIGxhYmVsUGFkZGluZ0xlZnQ6IDQsXG4gIHZhbHVlX3N0ZXA6IDAuMDAwMVxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHZhbHVlIGdyaWQgbGF5ZXIsIGNvbnNpc3Rpbmcgb2YgaG9yaXpvbnRhbCBsaW5lcy5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBsYXllci5MYXllclxuICogQG1lbWJlcm9mIGxheWVyXG4gKi9cbmNsYXNzIFZhbHVlR3JpZExheWVyIGV4dGVuZHMgTGF5ZXIge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBWYWx1ZUdyaWRMYXllclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcgfHwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aWR0aCBvZiBsYWJlbHMgKG9uIHJpZ2h0LWhhbmQgc2lkZSBvZiBjaGFydClcbiAgICogQHJldHVybnMge251bWJlcn0gaW4gcGl4ZWxzXG4gICAqL1xuICBnZXRMYWJlbFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsV2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN0YXJ0IG9mIGhvcml6b250YWwgbGluZSBpbiB1bml0IHBpeGVsc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbiBwaXhlbHNcbiAgICovXG4gIGdldExpbmVTdGFydCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZW5kIG9mIGhvcml6b250YWwgbGluZSBpbiB1bml0IHBpeGVsc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBpbiBwaXhlbHNcbiAgICovXG4gIGdldExpbmVFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGFiZWxXaWR0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgKiBAcGFyYW0ge3ZhbHVlVG9QaXhlbH0gZnVuY3Rpb25cbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZUJvdW5kc1xuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdmFsdWVCb3VuZHMpIHtcblxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5fZ2V0Q29udGV4dCgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLmxhYmVsX2VsZW1lbnRzID0gW107XG4gICAgdmFyIG1pbiA9IHZhbHVlQm91bmRzLm1pbiwgbWF4ID0gdmFsdWVCb3VuZHMubWF4OyBcbiAgICB2YXIgZGVyaXZlZF9saW5lcztcbiAgICB2YXIgZGVjX3BsYWNlcztcblxuICAgIGlmKHRoaXMubGluZXMgPT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICBkZXJpdmVkX2xpbmVzID0gW107XG5cbiAgICAgIHZhciBkZW5vbSA9IHRoaXMuZ3JhbnVsYXJpdHk7XG4gICAgICBpZihkZW5vbSA9PT0gdW5kZWZpbmVkKVxuICAgICAge1xuICAgICAgICBkZW5vbSA9IFZhbHVlR3JpZExheWVyLmRldGVybWluZVZhbHVlR3JhbnVsYXJpdHkobWluLCBtYXgsIHRoaXMuZ2V0SGVpZ2h0KCksIHRoaXMubGluZVNwYWNpbmcpO1xuICAgICAgfVxuXG4gICAgICAvLyBlLmcuIHZhciBwID0gKE1hdGgucm91bmQocHJpY2VfbWluICogNDAwLjApIC8gNDAwLjApOyAvLyB3aGVyZSBkZW5vbSA9IDAuMDAyNVxuICAgICAgdmFyIHZhbHVlID0gKE1hdGgucm91bmQobWluICogMS4wIC8gZGVub20pIC8gKDEuMCAvIGRlbm9tKSk7XG4gICAgICBkZWNfcGxhY2VzID0gVmFsdWVHcmlkTGF5ZXIuZGVjaW1hbFBsYWNlcyhkZW5vbSk7XG5cbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlKHZhbHVlIDw9IG1heClcbiAgICAgIHtcbiAgICAgICAgdmFsdWUgPSBWYWx1ZUdyaWRMYXllci5kZWNpbWFsQWRqdXN0KFwicm91bmRcIiwgdmFsdWUsIC03KTtcbiAgICAgICAgZGVyaXZlZF9saW5lcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICB2YWx1ZSArPSBkZW5vbTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgZGVyaXZlZF9saW5lcyA9IHRoaXMubGluZXM7XG4gICAgfVxuXG4gICAgZm9yKHZhciBsID0gMDsgbCA8IGRlcml2ZWRfbGluZXMubGVuZ3RoOyBsKyspXG4gICAge1xuICAgICAgdmFyIHZhbCA9IGRlcml2ZWRfbGluZXNbbF07XG5cbiAgICAgIHZhciBsaW5lID0gbmV3IEhvcml6b250YWxMaW5lKFxuICAgICAgICB0aGlzLFxuICAgICAgICB2YWwsXG4gICAgICAgIHRoaXMuZ2V0TGluZVN0YXJ0KCksXG4gICAgICAgIHRoaXMuZ2V0TGluZUVuZCgpKTtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChsaW5lKTtcbiAgICAgIGxpbmUuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdGhpcyk7XG5cbiAgICAgIGlmKHRoaXMuc2hvd0xhYmVscyA9PT0gdHJ1ZSlcbiAgICAgIHtcbiAgICAgICAgdmFyIGxhYmVsID0gbmV3IFZhbHVlTGFiZWwoXG4gICAgICAgICAgbCxcbiAgICAgICAgICB2YWwudG9GaXhlZChkZWNfcGxhY2VzIHx8IDIpLFxuICAgICAgICAgIHRoaXMuZ2V0TGluZUVuZCgpKTtcbiAgICAgICAgdGhpcy5sYWJlbF9lbGVtZW50cy5wdXNoKGxhYmVsKTtcbiAgICAgICAgbGFiZWwuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBEZXRlcm1pbmUgZ3JpZCBsaW5lIGludGVydmFsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxfaGVpZ2h0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbF9zcGFjaW5nXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IG51bWJlciByZXByZXNlbnRpbmcgaW50ZXJ2YWwgYmV0d2VlbiBob3Jpem9udGFsIGdyaWQgbGluZXNcbiAgICovXG4gIHN0YXRpYyBkZXRlcm1pbmVWYWx1ZUdyYW51bGFyaXR5KG1pbiwgbWF4LCBwaXhlbF9oZWlnaHQsIHBpeGVsX3NwYWNpbmcsIHZhbHVlX3N0ZXApIHtcblxuICAgIHZhciByYW5nZSA9IG1heCAtIG1pbjsgLy8gZS5nLiAxODE1LTE3NjIgb3IgMS40MTcyLTEuNDA2OVxuICAgIHZhciBkaXZpc2lvbnMgPSBwaXhlbF9oZWlnaHQgLyBwaXhlbF9zcGFjaW5nOyAvLyBlLmcuIDMwMC8yMFxuICAgIHZhciBzZWcgPSByYW5nZSAvIGRpdmlzaW9ucztcblxuICAgIHZhciBncmFuID0gdmFsdWVfc3RlcDtcbiAgICB2YXIgcHJldl9ncmFuID0gdmFsdWVfc3RlcCAvIDI7XG4gICAgdmFyIGdyYW5fZmFjdG9ycyA9IFsyLjUsIDIsIDJdOyAvLyAxKjIuNT0yLjUsIDIuNSoyPTUsIDUqMj0xMCwgMTAqMi41PTI1LCAuLi5cbiAgICAvL3ZhciBncmFucyA9IFsxMDAwMCw1MDAwLDI1MDAsMTAwMCw1MDAsMjUwLDEwMCw1MCwyNSwxMCw1LDIuNSwxLDAuNSwwLjI1LDAuMSwwLjA1LDAuMDI1LDAuMDEsMC4wMDUsMC4wMDI1LDAuMDAwMSwwLjAwMDA1LDAuMDAwMDI1LDAuMDAwMDFdO1xuICAgIHZhciBuZXh0R3JhbiA9IGZ1bmN0aW9uKGN1cnJlbnRfdmFsdWUsIGkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50X3ZhbHVlICogZ3Jhbl9mYWN0b3JzW2kgJSAzXTtcbiAgICB9O1xuXG4gICAgZm9yKHZhciBpID0gMDsgOyBpKyspXG4gICAge1xuICAgICAgaWYoZ3JhbiA+PSBzZWcpXG4gICAgICB7XG4gICAgICAgIHJldHVybiBwcmV2X2dyYW47XG4gICAgICB9XG5cbiAgICAgIHByZXZfZ3JhbiA9IGdyYW47XG4gICAgICBncmFuID0gbmV4dEdyYW4oZ3JhbiwgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDEwMDA7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcm91bmRcbiAgICpcbiAgICogRGVjaW1hbCBhZGp1c3RtZW50IG9mIGEgbnVtYmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBhZGp1c3RtZW50LlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG51bWJlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGV4cCBUaGUgZXhwb25lbnQgKHRoZSAxMCBsb2dhcml0aG0gb2YgdGhlIGFkanVzdG1lbnQgYmFzZSkuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBhZGp1c3RlZCB2YWx1ZS5cbiAgKi9cbiAgc3RhdGljIGRlY2ltYWxBZGp1c3QodHlwZSwgdmFsdWUsIGV4cCkge1xuICAgIC8vIElmIHRoZSBleHAgaXMgdW5kZWZpbmVkIG9yIHplcm8uLi5cbiAgICBpZiAodHlwZW9mIGV4cCA9PT0gXCJ1bmRlZmluZWRcIiB8fCArZXhwID09PSAwKSB7XG4gICAgICByZXR1cm4gTWF0aFt0eXBlXSh2YWx1ZSk7XG4gICAgfVxuICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgIGV4cCA9ICtleHA7XG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIG5vdCBhIG51bWJlciBvciB0aGUgZXhwIGlzIG5vdCBhbiBpbnRlZ2VyLi4uXG4gICAgaWYgKGlzTmFOKHZhbHVlKSB8fCAhKHR5cGVvZiBleHAgPT09IFwibnVtYmVyXCIgJiYgZXhwICUgMSA9PT0gMCkpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIC8vIFNoaWZ0XG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiZVwiKTtcbiAgICB2YWx1ZSA9IE1hdGhbdHlwZV0oKyh2YWx1ZVswXSArIFwiZVwiICsgKHZhbHVlWzFdID8gKCt2YWx1ZVsxXSAtIGV4cCkgOiAtZXhwKSkpO1xuICAgIC8vIFNoaWZ0IGJhY2tcbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJlXCIpO1xuICAgIHJldHVybiArKHZhbHVlWzBdICsgXCJlXCIgKyAodmFsdWVbMV0gPyAoK3ZhbHVlWzFdICsgZXhwKSA6IGV4cCkpO1xuICB9XG5cbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQ1NDUxOC9qYXZhc2NyaXB0LWhvdy10by1yZXRyaWV2ZS10aGUtbnVtYmVyLW9mLWRlY2ltYWxzLW9mLWEtc3RyaW5nLW51bWJlclxuICBzdGF0aWMgZGVjaW1hbFBsYWNlcyhudW0pIHtcbiAgICB2YXIgbWF0Y2ggPSAoXCJcIitudW0pLm1hdGNoKC8oPzpcXC4oXFxkKykpPyg/OltlRV0oWystXT9cXGQrKSk/JC8pO1xuICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LiAvLyBBZGp1c3QgZm9yIHNjaWVudGlmaWMgbm90YXRpb24uXG4gICAgICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApXG4gICAgKTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsdWVHcmlkTGF5ZXI7XG4iXX0=
},{"../element/HorizontalLine":19,"../element/ValueLabel":22,"../layer/Layer":25,"underscore":6}],30:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Stats = require("fast-stats").Stats;
var Layer = require("../../layer/Layer");
var Arc = require("../../element/Arc");

var _default_config = {
  input: "close",
  upperBandOutputPrefix: "_bb_upper",
  midOutputPrefix: "_bb_mid",
  lowerBandOutputPrefix: "_bb_lower",
  period: 20,
  multiplier: 2,
  bandColor: "rgba(0, 0, 0, 0.3)",
  midColor: "rgba(0, 0, 0, 0.3)"
};

/**
 * Represents a Bollinger Bands chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var BollingerBandsLayer = function (_Layer) {
  _inherits(BollingerBandsLayer, _Layer);

  /**
   * Instantiate BollingerBandsLayer
   * @constructor
   * @param {object} config
   */
  function BollingerBandsLayer(config) {
    _classCallCheck(this, BollingerBandsLayer);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (BollingerBandsLayer.__proto__ || Object.getPrototypeOf(BollingerBandsLayer)).call(this, config));

    _this.upperBandOutput = _this.upperBandOutputPrefix + "" + _this.period + "x" + _this.multiplier;
    _this.midOutput = _this.midOutputPrefix + "" + _this.period + "x" + _this.multiplier;
    _this.lowerBandOutput = _this.lowerBandOutputPrefix + "" + _this.period + "x" + _this.multiplier;
    _this.minField = _this.lowerBandOutput;
    _this.maxField = _this.upperBandOutput;
    return _this;
  }

  /**
   * Precompute indicator fields using time series OHLCV data.
   * <br><br>
   * This is invoked before draw().
   * @param {timeseries.TimeSeriesData} data
   */


  _createClass(BollingerBandsLayer, [{
    key: "precompute",
    value: function precompute(data) {
      var data_arr = data.getRawData();
      var field_map = data.getFieldMap();
      var input_field = field_map[this.input];
      var upper_band_field = this.upperBandOutput;
      var mid_field = this.midOutput;
      var lower_band_field = this.lowerBandOutput;
      var period = this.period;

      var mean = new Stats();
      var sd = new Stats();

      for (var i = 0; i < data_arr.length; i++) {
        var dat = data_arr[i];

        mean.push(dat[input_field]);
        sd.push(dat[input_field]);

        if (sd.length === period) {
          var ma = mean.amean();
          var std_dev = sd.stddev();
          dat[upper_band_field] = ma + 2 * std_dev;
          dat[mid_field] = ma;
          dat[lower_band_field] = ma - 2 * std_dev;
          if (isNaN(dat[upper_band_field])) {
            dat[upper_band_field] = 0.0;
          }
          if (isNaN(dat[lower_band_field])) {
            dat[lower_band_field] = 0.0;
          }
          sd.shift();
          mean.shift();
        }
      }
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [], this.elements_upper = [], this.elements_lower = [];
      var prev_arc_upper = null,
          prev_arc_mid = null,
          prev_arc_lower = null;

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];

        // upper
        var arc_upper = new Arc(this, i, dat[field_map.time], dat[this.upperBandOutput], prev_arc_upper);
        this.elements_upper.push(arc_upper);
        arc_upper.draw(context, valueToPixel, indexToPixel, { color: this.bandColor });

        // mid (simple moving average)
        var arc_mid = new Arc(this, i, dat[field_map.time], dat[this.midOutput], prev_arc_mid);
        this.elements.push(arc_mid);
        arc_mid.draw(context, valueToPixel, indexToPixel, { color: this.midColor });

        // lower
        var arc_lower = new Arc(this, i, dat[field_map.time], dat[this.lowerBandOutput], prev_arc_lower);
        this.elements_lower.push(arc_lower);
        arc_lower.draw(context, valueToPixel, indexToPixel, { color: this.bandColor });

        prev_arc_upper = arc_upper;
        prev_arc_mid = arc_mid;
        prev_arc_lower = arc_lower;
      }
    }
  }]);

  return BollingerBandsLayer;
}(Layer);

module.exports = BollingerBandsLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvbGxpbmdlckJhbmRzTGF5ZXIuanMiXSwibmFtZXMiOlsiXyIsInJlcXVpcmUiLCJTdGF0cyIsIkxheWVyIiwiQXJjIiwiX2RlZmF1bHRfY29uZmlnIiwiaW5wdXQiLCJ1cHBlckJhbmRPdXRwdXRQcmVmaXgiLCJtaWRPdXRwdXRQcmVmaXgiLCJsb3dlckJhbmRPdXRwdXRQcmVmaXgiLCJwZXJpb2QiLCJtdWx0aXBsaWVyIiwiYmFuZENvbG9yIiwibWlkQ29sb3IiLCJCb2xsaW5nZXJCYW5kc0xheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwidXBwZXJCYW5kT3V0cHV0IiwibWlkT3V0cHV0IiwibG93ZXJCYW5kT3V0cHV0IiwibWluRmllbGQiLCJtYXhGaWVsZCIsImRhdGEiLCJkYXRhX2FyciIsImdldFJhd0RhdGEiLCJmaWVsZF9tYXAiLCJnZXRGaWVsZE1hcCIsImlucHV0X2ZpZWxkIiwidXBwZXJfYmFuZF9maWVsZCIsIm1pZF9maWVsZCIsImxvd2VyX2JhbmRfZmllbGQiLCJtZWFuIiwic2QiLCJpIiwibGVuZ3RoIiwiZGF0IiwicHVzaCIsIm1hIiwiYW1lYW4iLCJzdGRfZGV2Iiwic3RkZGV2IiwiaXNOYU4iLCJzaGlmdCIsImNvdW50Iiwib2Zmc2V0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZWxlbWVudHMiLCJlbGVtZW50c191cHBlciIsImVsZW1lbnRzX2xvd2VyIiwicHJldl9hcmNfdXBwZXIiLCJwcmV2X2FyY19taWQiLCJwcmV2X2FyY19sb3dlciIsImFyY191cHBlciIsInRpbWUiLCJkcmF3IiwiY29sb3IiLCJhcmNfbWlkIiwiYXJjX2xvd2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFlBQVIsQ0FBUjtBQUNBLElBQUlDLFFBQVFELFFBQVEsWUFBUixFQUFzQkMsS0FBbEM7QUFDQSxJQUFJQyxR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QUl4RCxHQUFKLENBQ2QsSUFEYyxFQUVkNkIsQ0FGYyxFQUdkRSxJQUFJVixVQUFVK0IsSUFBZCxDQUhjLEVBSWRyQixJQUFJLEtBQUtoQixlQUFULENBSmMsRUFLZG1DLGNBTGMsQ0FBaEI7QUFNQSxhQUFLSCxjQUFMLENBQW9CZixJQUFwQixDQUF5QndCLFNBQXpCO0FBQ0FBLGtCQUFVSCxJQUFWLENBQWVWLE9BQWYsRUFBd0JGLFlBQXhCLEVBQXNDQyxZQUF0QyxFQUFvRCxFQUFDWSxPQUFNLEtBQUs5QyxTQUFaLEVBQXBEOztBQUVBd0MseUJBQWlCRyxTQUFqQjtBQUNBRix1QkFBZU0sT0FBZjtBQUNBTCx5QkFBaUJNLFNBQWpCO0FBQ0Q7QUFFRjs7OztFQXZIK0J6RCxLOztBQTJIbEMwRCxPQUFPQyxPQUFQLEdBQWlCaEQsbUJBQWpCIiwiZmlsZSI6IkJvbGxpbmdlckJhbmRzTGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBTdGF0cyA9IHJlcXVpcmUoXCJmYXN0LXN0YXRzXCIpLlN0YXRzO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uLy4uL2xheWVyL0xheWVyXCIpO1xudmFyIEFyYyA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtZW50L0FyY1wiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBpbnB1dDogXCJjbG9zZVwiLFxuICB1cHBlckJhbmRPdXRwdXRQcmVmaXg6IFwiX2JiX3VwcGVyXCIsXG4gIG1pZE91dHB1dFByZWZpeDogXCJfYmJfbWlkXCIsXG4gIGxvd2VyQmFuZE91dHB1dFByZWZpeDogXCJfYmJfbG93ZXJcIixcbiAgcGVyaW9kOiAyMCxcbiAgbXVsdGlwbGllcjogMixcbiAgYmFuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC4zKVwiLFxuICBtaWRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuMylcIlxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQm9sbGluZ2VyIEJhbmRzIGNoYXJ0IGxheWVyLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXIuaW5kaWNhdG9yXG4gKi9cbmNsYXNzIEJvbGxpbmdlckJhbmRzTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIEJvbGxpbmdlckJhbmRzTGF5ZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF8uZXh0ZW5kKHt9LCBfZGVmYXVsdF9jb25maWcsIGNvbmZpZyk7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgICB0aGlzLnVwcGVyQmFuZE91dHB1dCA9IHRoaXMudXBwZXJCYW5kT3V0cHV0UHJlZml4ICsgXCJcIiArIHRoaXMucGVyaW9kICsgXCJ4XCIgKyB0aGlzLm11bHRpcGxpZXI7XG4gICAgdGhpcy5taWRPdXRwdXQgPSB0aGlzLm1pZE91dHB1dFByZWZpeCArIFwiXCIgKyB0aGlzLnBlcmlvZCArIFwieFwiICsgdGhpcy5tdWx0aXBsaWVyO1xuICAgIHRoaXMubG93ZXJCYW5kT3V0cHV0ID0gdGhpcy5sb3dlckJhbmRPdXRwdXRQcmVmaXggKyBcIlwiICsgdGhpcy5wZXJpb2QgKyBcInhcIiArIHRoaXMubXVsdGlwbGllcjtcbiAgICB0aGlzLm1pbkZpZWxkID0gdGhpcy5sb3dlckJhbmRPdXRwdXQ7XG4gICAgdGhpcy5tYXhGaWVsZCA9IHRoaXMudXBwZXJCYW5kT3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFByZWNvbXB1dGUgaW5kaWNhdG9yIGZpZWxkcyB1c2luZyB0aW1lIHNlcmllcyBPSExDViBkYXRhLlxuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIGlzIGludm9rZWQgYmVmb3JlIGRyYXcoKS5cbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqL1xuICBwcmVjb21wdXRlKGRhdGEpIHtcbiAgICB2YXIgZGF0YV9hcnIgPSBkYXRhLmdldFJhd0RhdGEoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBpbnB1dF9maWVsZCA9IGZpZWxkX21hcFt0aGlzLmlucHV0XTtcbiAgICB2YXIgdXBwZXJfYmFuZF9maWVsZCA9IHRoaXMudXBwZXJCYW5kT3V0cHV0O1xuICAgIHZhciBtaWRfZmllbGQgPSB0aGlzLm1pZE91dHB1dDtcbiAgICB2YXIgbG93ZXJfYmFuZF9maWVsZCA9IHRoaXMubG93ZXJCYW5kT3V0cHV0O1xuICAgIHZhciBwZXJpb2QgPSB0aGlzLnBlcmlvZDtcblxuICAgIHZhciBtZWFuID0gbmV3IFN0YXRzKCk7XG4gICAgdmFyIHNkID0gbmV3IFN0YXRzKCk7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuXG4gICAgICBtZWFuLnB1c2goZGF0W2lucHV0X2ZpZWxkXSk7XG4gICAgICBzZC5wdXNoKGRhdFtpbnB1dF9maWVsZF0pO1xuXG4gICAgICBpZihzZC5sZW5ndGggPT09IHBlcmlvZClcbiAgICAgIHtcbiAgICAgICAgdmFyIG1hID0gbWVhbi5hbWVhbigpO1xuICAgICAgICB2YXIgc3RkX2RldiA9IHNkLnN0ZGRldigpO1xuICAgICAgICBkYXRbdXBwZXJfYmFuZF9maWVsZF0gPSBtYSArIDIgKiBzdGRfZGV2O1xuICAgICAgICBkYXRbbWlkX2ZpZWxkXSA9IG1hO1xuICAgICAgICBkYXRbbG93ZXJfYmFuZF9maWVsZF0gPSBtYSAtIDIgKiBzdGRfZGV2O1xuICAgICAgICBpZihpc05hTihkYXRbdXBwZXJfYmFuZF9maWVsZF0pKVxuICAgICAgICB7XG4gICAgICAgICAgZGF0W3VwcGVyX2JhbmRfZmllbGRdID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlzTmFOKGRhdFtsb3dlcl9iYW5kX2ZpZWxkXSkpXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRbbG93ZXJfYmFuZF9maWVsZF0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgICAgc2Quc2hpZnQoKTtcbiAgICAgICAgbWVhbi5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IHZhbHVlVG9QaXhlbFxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gaW5kZXhUb1BpeGVsXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXSwgdGhpcy5lbGVtZW50c191cHBlciA9IFtdLCB0aGlzLmVsZW1lbnRzX2xvd2VyID0gW107XG4gICAgdmFyIHByZXZfYXJjX3VwcGVyID0gbnVsbCwgcHJldl9hcmNfbWlkID0gbnVsbCwgcHJldl9hcmNfbG93ZXIgPSBudWxsO1xuXG4gICAgZm9yKHZhciBpID0gb2Zmc2V0ID49IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgY291bnQgJiYgaSA8IGRhdGFfYXJyLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBkYXQgPSBkYXRhX2FycltpXTtcblxuICAgICAgLy8gdXBwZXJcbiAgICAgIHZhciBhcmNfdXBwZXIgPSBuZXcgQXJjKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpLFxuICAgICAgICBkYXRbZmllbGRfbWFwLnRpbWVdLFxuICAgICAgICBkYXRbdGhpcy51cHBlckJhbmRPdXRwdXRdLFxuICAgICAgICBwcmV2X2FyY191cHBlcik7XG4gICAgICB0aGlzLmVsZW1lbnRzX3VwcGVyLnB1c2goYXJjX3VwcGVyKTtcbiAgICAgIGFyY191cHBlci5kcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB7Y29sb3I6dGhpcy5iYW5kQ29sb3J9KTtcblxuICAgICAgLy8gbWlkIChzaW1wbGUgbW92aW5nIGF2ZXJhZ2UpXG4gICAgICB2YXIgYXJjX21pZCA9IG5ldyBBcmMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGksXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudGltZV0sXG4gICAgICAgIGRhdFt0aGlzLm1pZE91dHB1dF0sXG4gICAgICAgIHByZXZfYXJjX21pZCk7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goYXJjX21pZCk7XG4gICAgICBhcmNfbWlkLmRyYXcoY29udGV4dCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIHtjb2xvcjp0aGlzLm1pZENvbG9yfSk7XG5cbiAgICAgIC8vIGxvd2VyXG4gICAgICB2YXIgYXJjX2xvd2VyID0gbmV3IEFyYyhcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC50aW1lXSxcbiAgICAgICAgZGF0W3RoaXMubG93ZXJCYW5kT3V0cHV0XSxcbiAgICAgICAgcHJldl9hcmNfbG93ZXIpO1xuICAgICAgdGhpcy5lbGVtZW50c19sb3dlci5wdXNoKGFyY19sb3dlcik7XG4gICAgICBhcmNfbG93ZXIuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwge2NvbG9yOnRoaXMuYmFuZENvbG9yfSk7XG5cbiAgICAgIHByZXZfYXJjX3VwcGVyID0gYXJjX3VwcGVyO1xuICAgICAgcHJldl9hcmNfbWlkID0gYXJjX21pZDtcbiAgICAgIHByZXZfYXJjX2xvd2VyID0gYXJjX2xvd2VyO1xuICAgIH1cblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2xsaW5nZXJCYW5kc0xheWVyO1xuIl19
},{"../../element/Arc":15,"../../layer/Layer":25,"fast-stats":3,"underscore":6}],31:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");
var Arc = require("../../element/Arc");

var _default_config = {
  input: "close",
  outputPrefix: "_sma",
  period: 50,
  color: "orange"
};

/**
 * Represents an EMA chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var ExponentialMovingAverageLayer = function (_Layer) {
  _inherits(ExponentialMovingAverageLayer, _Layer);

  /**
   * Instantiate ExponentialMovingAverageLayer
   * @constructor
   * @param {object} config
   */
  function ExponentialMovingAverageLayer(config) {
    _classCallCheck(this, ExponentialMovingAverageLayer);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (ExponentialMovingAverageLayer.__proto__ || Object.getPrototypeOf(ExponentialMovingAverageLayer)).call(this, config));

    _this.output = _this.outputPrefix + "" + _this.period; // e.g. _sma50, _sma200, etc
    _this.minField = _this.output;
    _this.maxField = _this.output;
    return _this;
  }

  /**
   * Precompute indicator fields using time series OHLCV data.
   * <br><br>
   * This is invoked before draw().
   * @param {timeseries.TimeSeriesData} data
   */


  _createClass(ExponentialMovingAverageLayer, [{
    key: "precompute",
    value: function precompute(data) {
      var data_arr = data.getRawData();
      var field_map = data.getFieldMap();
      var output_field = this.output;
      var input_field = field_map[this.input];
      var period = this.period;
      var multiplier = 2.0 / (period + 1.0);
      var queue = [],
          sum = 0.0;
      var prev_ema;
      for (var i = 0; i < data_arr.length; i++) {
        var dat = data_arr[i];
        if (prev_ema) {
          var ema = (dat[input_field] || 1.0) * multiplier + prev_ema * (1.0 - multiplier);
          dat[output_field] = ema;
          prev_ema = ema;
        } else if (queue.length === period) {
          var ma = sum / period;
          prev_ema = ma;
        } else {
          // Build up array to calculate initial ema values
          queue.push(dat[input_field] || 1.0);
          sum += dat[input_field] || 1.0;
        }
      }
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];
      var prev_arc = null;

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];

        var arc = new Arc(this, i, dat[field_map.time], dat[this.output], prev_arc);
        this.elements.push(arc);
        arc.draw(context, valueToPixel, indexToPixel, this);

        prev_arc = arc;
      }
    }
  }]);

  return ExponentialMovingAverageLayer;
}(Layer);

module.exports = ExponentialMovingAverageLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cG9uZW50aWFsTW92aW5nQXZlcmFnZUxheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTGF5ZXIiLCJBcmMiLCJfZGVmYXVsdF9jb25maWciLCJpbnB1dCIsIm91dHB1dFByZWZpeCIsInBlcmlvZCIsImNvbG9yIiwiRXhwb25lbnRpYWxNb3ZpbmdBdmVyYWdlTGF5ZXIiLCJjb25maWciLCJleHRlbmQiLCJvdXRwdXQiLCJtaW5GaWVsZCIsIm1heEZpZWxkIiwiZGF0YSIsImRhdGFfYXJyIiwiZ2V0UmF3RGF0YSIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwib3V0cHV0X2ZpZWxkIiwiaW5wdXRfZmllbGQiLCJtdWx0aXBsaWVyIiwicXVldWUiLCJzdW0iLCJwcmV2X2VtYSIsImkiLCJsZW5ndGgiLCJkYXQiLCJlbWEiLCJtYSIsInB1c2giLCJjb3VudCIsIm9mZnNldCIsInZhbHVlVG9QaXhlbCIsImluZGV4VG9QaXhlbCIsImNvbnRleHQiLCJfZ2V0Q29udGV4dCIsImVsZW1lbnRzIiwicHJldl9hcmMiLCJhcmMiLCJ0aW1lIiwiZHJhdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxRQUFRRCxRQUFRLG1CQUFSLENBQVo7QUFDQSxJQUFJRSxNQUFNRixRQUFRLG1CQUFSLENBQVY7O0FBRUEsSUFBTUcsa0JBQWtCO0FBQ3RCQyxTQUFPLE9BRGU7QUFFdEJDLGdCQUFjLE1BRlE7QUFHdEJDLFVBQVEsRUFIYztBQUl0QkMsU0FBTztBQUplLENBQXhCOztBQU9BOzs7Ozs7O0lBTU1DLDZCOzs7QUFFSjs7Ozs7QUFLQSx5Q0FBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQkEsYUFBU1YsRUFBRVcsTUFBRixDQUFTLEVBQVQsRUFBYVAsZUFBYixFQUE4Qk0sTUFBOUIsQ0FBVDs7QUFEa0IsOEpBRVpBLE1BRlk7O0FBR2xCLFVBQUtFLE1BQUwsR0FBYyxNQUFLTixZQUFMLEdBQW9CLEVBQXBCLEdBQXlCLE1BQUtDLE1BQTVDLENBSGtCLENBR2tDO0FBQ3BELFVBQUtNLFFBQUwsR0FBZ0IsTUFBS0QsTUFBckI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtGLE1BQXJCO0FBTGtCO0FBTW5COztBQUVEOzs7Ozs7Ozs7OytCQU1XRyxJLEVBQU07QUFDZixVQUFJQyxXQUFXRCxLQUFLRSxVQUFMLEVBQWY7QUFDQSxVQUFJQyxZQUFZSCxLQUFLSSxXQUFMLEVBQWhCO0FBQ0EsVUFBSUMsZUFBZSxLQUFLUixNQUF4QjtBQUNBLFVBQUlTLGNBQWNILFVBQVUsS0FBS2IsS0FBZixDQUFsQjtBQUNBLFVBQUlFLFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxVQUFJZSxhQUFhLE9BQU9mLFNBQVMsR0FBaEIsQ0FBakI7QUFDQSxVQUFJZ0IsUUFBUSxFQUFaO0FBQUEsVUFBZ0JDLE1BQU0sR0FBdEI7QUFDQSxVQUFJQyxRQUFKO0FBQ0EsV0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSVYsU0FBU1csTUFBNUIsRUFBb0NELEdBQXBDLEVBQ0E7QUFDRSxZQUFJRSxNQUFNWixTQUFTVSxDQUFULENBQVY7QUFDQSxZQUFHRCxRQUFILEVBQ0E7QUFDRSxjQUFJSSxNQUFNLENBQUNELElBQUlQLFdBQUosS0FBb0IsR0FBckIsSUFBNEJDLFVBQTVCLEdBQXlDRyxZQUFZLE1BQU1ILFVBQWxCLENBQW5EO0FBQ0FNLGNBQUlSLFlBQUosSUFBb0JTLEdBQXBCO0FBQ0FKLHFCQUFXSSxHQUFYO0FBQ0QsU0FMRCxNQU1LLElBQUdOLE1BQU1JLE1BQU4sS0FBaUJwQixNQUFwQixFQUNMO0FBQ0UsY0FBSXVCLEtBQUtOLE1BQU1qQixNQUFmO0FBQ0FrQixxQkFBV0ssRUFBWDtBQUNELFNBSkksTUFNTDtBQUNFO0FBQ0FQLGdCQUFNUSxJQUFOLENBQVdILElBQUlQLFdBQUosS0FBb0IsR0FBL0I7QUFDQUcsaUJBQVFJLElBQUlQLFdBQUosS0FBb0IsR0FBNUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQVFLTixJLEVBQU1pQixLLEVBQU9DLE0sRUFBUUMsWSxFQUFjQyxZLEVBQWM7O0FBRXBELFVBQUlDLFVBQVUsS0FBS0MsV0FBTCxFQUFkO0FBQ0EsVUFBSW5CLFlBQVlILEtBQUtJLFdBQUwsRUFBaEI7QUFDQSxVQUFJSCxXQUFXRCxLQUFLRSxVQUFMLEVBQWY7QUFDQSxXQUFLcUIsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUlDLFdBQVcsSUFBZjs7QUFFQSxXQUFJLElBQUliLElBQUlPLFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDUCxJQUFJTyxTQUFTRCxLQUFiLElBQXNCTixJQUFJVixTQUFTVyxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUlFLE1BQU1aLFNBQVNVLENBQVQsQ0FBVjs7QUFFQSxZQUFJYyxNQUFNLElBQUlyQyxHQUFKLENBQ1IsSUFEUSxFQUVSdUIsQ0FGUSxFQUdSRSxJQUFJVixVQUFVdUIsSUFBZCxDQUhRLEVBSVJiLElBQUksS0FBS2hCLE1BQVQsQ0FKUSxFQUtSMkIsUUFMUSxDQUFWO0FBTUEsYUFBS0QsUUFBTCxDQUFjUCxJQUFkLENBQW1CUyxHQUFuQjtBQUNBQSxZQUFJRSxJQUFKLENBQVNOLE9BQVQsRUFBa0JGLFlBQWxCLEVBQWdDQyxZQUFoQyxFQUE4QyxJQUE5Qzs7QUFFQUksbUJBQVdDLEdBQVg7QUFDRDtBQUVGOzs7O0VBckZ5Q3RDLEs7O0FBeUY1Q3lDLE9BQU9DLE9BQVAsR0FBaUJuQyw2QkFBakIiLCJmaWxlIjoiRXhwb25lbnRpYWxNb3ZpbmdBdmVyYWdlTGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBMYXllciA9IHJlcXVpcmUoXCIuLi8uLi9sYXllci9MYXllclwiKTtcbnZhciBBcmMgPSByZXF1aXJlKFwiLi4vLi4vZWxlbWVudC9BcmNcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgaW5wdXQ6IFwiY2xvc2VcIixcbiAgb3V0cHV0UHJlZml4OiBcIl9zbWFcIixcbiAgcGVyaW9kOiA1MCxcbiAgY29sb3I6IFwib3JhbmdlXCJcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBFTUEgY2hhcnQgbGF5ZXIuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgbGF5ZXIuTGF5ZXJcbiAqIEBtZW1iZXJvZiBsYXllci5pbmRpY2F0b3JcbiAqL1xuY2xhc3MgRXhwb25lbnRpYWxNb3ZpbmdBdmVyYWdlTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIEV4cG9uZW50aWFsTW92aW5nQXZlcmFnZUxheWVyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLm91dHB1dFByZWZpeCArIFwiXCIgKyB0aGlzLnBlcmlvZDsgLy8gZS5nLiBfc21hNTAsIF9zbWEyMDAsIGV0Y1xuICAgIHRoaXMubWluRmllbGQgPSB0aGlzLm91dHB1dDtcbiAgICB0aGlzLm1heEZpZWxkID0gdGhpcy5vdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogUHJlY29tcHV0ZSBpbmRpY2F0b3IgZmllbGRzIHVzaW5nIHRpbWUgc2VyaWVzIE9ITENWIGRhdGEuXG4gICAqIDxicj48YnI+XG4gICAqIFRoaXMgaXMgaW52b2tlZCBiZWZvcmUgZHJhdygpLlxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICovXG4gIHByZWNvbXB1dGUoZGF0YSkge1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHZhciBmaWVsZF9tYXAgPSBkYXRhLmdldEZpZWxkTWFwKCk7XG4gICAgdmFyIG91dHB1dF9maWVsZCA9IHRoaXMub3V0cHV0O1xuICAgIHZhciBpbnB1dF9maWVsZCA9IGZpZWxkX21hcFt0aGlzLmlucHV0XTtcbiAgICB2YXIgcGVyaW9kID0gdGhpcy5wZXJpb2Q7XG4gICAgdmFyIG11bHRpcGxpZXIgPSAyLjAgLyAocGVyaW9kICsgMS4wKTtcbiAgICB2YXIgcXVldWUgPSBbXSwgc3VtID0gMC4wO1xuICAgIHZhciBwcmV2X2VtYTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuICAgICAgaWYocHJldl9lbWEpXG4gICAgICB7XG4gICAgICAgIHZhciBlbWEgPSAoZGF0W2lucHV0X2ZpZWxkXSB8fCAxLjApICogbXVsdGlwbGllciArIHByZXZfZW1hICogKDEuMCAtIG11bHRpcGxpZXIpO1xuICAgICAgICBkYXRbb3V0cHV0X2ZpZWxkXSA9IGVtYTtcbiAgICAgICAgcHJldl9lbWEgPSBlbWE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXVlLmxlbmd0aCA9PT0gcGVyaW9kKVxuICAgICAge1xuICAgICAgICB2YXIgbWEgPSBzdW0gLyBwZXJpb2Q7XG4gICAgICAgIHByZXZfZW1hID0gbWE7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIC8vIEJ1aWxkIHVwIGFycmF5IHRvIGNhbGN1bGF0ZSBpbml0aWFsIGVtYSB2YWx1ZXNcbiAgICAgICAgcXVldWUucHVzaChkYXRbaW5wdXRfZmllbGRdIHx8IDEuMCk7XG4gICAgICAgIHN1bSArPSAoZGF0W2lucHV0X2ZpZWxkXSB8fCAxLjApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbGF5ZXIgb250byBjYW52YXNcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSB2YWx1ZVRvUGl4ZWxcbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGluZGV4VG9QaXhlbFxuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCkge1xuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgdmFyIGZpZWxkX21hcCA9IGRhdGEuZ2V0RmllbGRNYXAoKTtcbiAgICB2YXIgZGF0YV9hcnIgPSBkYXRhLmdldFJhd0RhdGEoKTtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgdmFyIHByZXZfYXJjID0gbnVsbDtcblxuICAgIGZvcih2YXIgaSA9IG9mZnNldCA+PSAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGNvdW50ICYmIGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG5cbiAgICAgIHZhciBhcmMgPSBuZXcgQXJjKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpLFxuICAgICAgICBkYXRbZmllbGRfbWFwLnRpbWVdLFxuICAgICAgICBkYXRbdGhpcy5vdXRwdXRdLFxuICAgICAgICBwcmV2X2FyYyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goYXJjKTtcbiAgICAgIGFyYy5kcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB0aGlzKTtcblxuICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgfVxuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cG9uZW50aWFsTW92aW5nQXZlcmFnZUxheWVyO1xuIl19
},{"../../element/Arc":15,"../../layer/Layer":25,"underscore":6}],32:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");
var Arc = require("../../element/Arc");

var _default_config = {
  input: "close",
  output: "_rsi",
  period: 14,
  color: "red",
  minValue: 0.0,
  maxValue: 100.0
};

/**
 * Represents a RSI chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var RSILayer = function (_Layer) {
  _inherits(RSILayer, _Layer);

  /**
   * Instantiate RSILayer
   * @constructor
   * @param {Object} config
   */
  function RSILayer(config) {
    _classCallCheck(this, RSILayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (RSILayer.__proto__ || Object.getPrototypeOf(RSILayer)).call(this, config));
  }

  /**
   * Precompute indicator fields using time series OHLCV data.
   * <br><br>
   * This is invoked before draw().
   * @param {timeseries.TimeSeriesData} data
   */


  _createClass(RSILayer, [{
    key: "precompute",
    value: function precompute(data) {

      var data_arr = data.getRawData();
      var field_map = data.getFieldMap();
      var input_field = field_map[this.input]; // i.e. close
      var output_field = this.output;
      var period = this.period;
      var queue = [],
          gain_queue = [],
          loss_queue = [];
      var prev_close, prev_avg_gain, prev_avg_loss;
      var loss_sum = 0.0,
          gain_sum = 0.0;

      for (var i = 1; i < data_arr.length; i++) {
        var dat = data_arr[i];
        var dat_prev = data_arr[i - 1];

        var change = dat[input_field] - dat_prev[input_field];
        var abs_change = Math.abs(change);
        var current_gain = 0.0;
        var current_loss = 0.0;
        var avg_gain = 0.0;
        var avg_loss = 0.0;
        var rs;

        if (change >= 0.0) {
          current_gain = abs_change;
        } else {
          current_loss = abs_change;
        }

        if (queue.length < period) {
          queue.push(change);
          if (change >= 0.0) {
            gain_queue.push(abs_change);
            gain_sum += abs_change;
          } else {
            loss_queue.push(abs_change);
            loss_sum += abs_change;
          }
        } else if (queue.length === period) {
          rs = gain_sum / loss_sum;
          dat[output_field] = 100.0 - 100.0 / (1.0 + rs);
          if (isNaN(dat[output_field])) {
            dat[output_field] = 0.0;
          }
          queue.push(change); // length=(data.periods + 1)
        } else {
          avg_gain = (prev_avg_gain * (period - 1) + current_gain) / period;
          avg_loss = (prev_avg_loss * (period - 1) + current_loss) / period;

          rs = avg_gain / avg_loss;
          dat[output_field] = 100.0 - 100.0 / (1.0 + rs);

          if (isNaN(dat[output_field])) {
            dat[output_field] = 0.0;
          }
        }

        prev_avg_gain = avg_gain;
        prev_avg_loss = avg_loss;
        prev_close = dat[output_field];
      }
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];
      var prev_arc = null;

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];

        var arc = new Arc(this, i, dat[field_map.time], dat[this.output], prev_arc);
        this.elements.push(arc);
        arc.draw(context, valueToPixel, indexToPixel, this);

        prev_arc = arc;
      }
    }
  }]);

  return RSILayer;
}(Layer);

module.exports = RSILayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJTSUxheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTGF5ZXIiLCJBcmMiLCJfZGVmYXVsdF9jb25maWciLCJpbnB1dCIsIm91dHB1dCIsInBlcmlvZCIsImNvbG9yIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIlJTSUxheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwiZGF0YSIsImRhdGFfYXJyIiwiZ2V0UmF3RGF0YSIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwiaW5wdXRfZmllbGQiLCJvdXRwdXRfZmllbGQiLCJxdWV1ZSIsImdhaW5fcXVldWUiLCJsb3NzX3F1ZXVlIiwicHJldl9jbG9zZSIsInByZXZfYXZnX2dhaW4iLCJwcmV2X2F2Z19sb3NzIiwibG9zc19zdW0iLCJnYWluX3N1bSIsImkiLCJsZW5ndGgiLCJkYXQiLCJkYXRfcHJldiIsImNoYW5nZSIsImFic19jaGFuZ2UiLCJNYXRoIiwiYWJzIiwiY3VycmVudF9nYWluIiwiY3VycmVudF9sb3NzIiwiYXZnX2dhaW4iLCJhdmdfbG9zcyIsInJzIiwicHVzaCIsImlzTmFOIiwiY291bnQiLCJvZmZzZXQiLCJ2YWx1ZVRvUGl4ZWwiLCJpbmRleFRvUGl4ZWwiLCJjb250ZXh0IiwiX2dldENvbnRleHQiLCJlbGVtZW50cyIsInByZXZfYXJjIiwiYXJjIiwidGltZSIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSxtQkFBUixDQUFaO0FBQ0EsSUFBSUUsTUFBTUYsUUFBUSxtQkFBUixDQUFWOztBQUVBLElBQU1HLGtCQUFrQjtBQUN0QkMsU0FBTyxPQURlO0FBRXRCQyxVQUFRLE1BRmM7QUFHdEJDLFVBQVEsRUFIYztBQUl0QkMsU0FBTyxLQUplO0FBS3RCQyxZQUFVLEdBTFk7QUFNdEJDLFlBQVU7QUFOWSxDQUF4Qjs7QUFTQTs7Ozs7OztJ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QixLLEVBQU9DLE0sRUFBUUMsWSxFQUFjQyxZLEVBQWM7O0FBRXBELFVBQUlDLFVBQVUsS0FBS0MsV0FBTCxFQUFkO0FBQ0EsVUFBSWhDLFlBQVlILEtBQUtJLFdBQUwsRUFBaEI7QUFDQSxVQUFJSCxXQUFXRCxLQUFLRSxVQUFMLEVBQWY7QUFDQSxXQUFLa0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUlDLFdBQVcsSUFBZjs7QUFFQSxXQUFJLElBQUl0QixJQUFJZ0IsVUFBVSxDQUFWLEdBQWNBLE1BQWQsR0FBdUIsQ0FBbkMsRUFBc0NoQixJQUFJZ0IsU0FBU0QsS0FBYixJQUFzQmYsSUFBSWQsU0FBU2UsTUFBekUsRUFBaUZELEdBQWpGLEVBQ0E7QUFDRSxZQUFJRSxNQUFNaEIsU0FBU2MsQ0FBVCxDQUFWOztBQUVBLFlBQUl1QixNQUFNLElBQUlqRCxHQUFKLENBQ1IsSUFEUSxFQUVSMEIsQ0FGUSxFQUdSRSxJQUFJZCxVQUFVb0MsSUFBZCxDQUhRLEVBSVJ0QixJQUFJLEtBQUt6QixNQUFULENBSlEsRUFLUjZDLFFBTFEsQ0FBVjtBQU1BLGFBQUtELFFBQUwsQ0FBY1IsSUFBZCxDQUFtQlUsR0FBbkI7QUFDQUEsWUFBSUUsSUFBSixDQUFTTixPQUFULEVBQWtCRixZQUFsQixFQUFnQ0MsWUFBaEMsRUFBOEMsSUFBOUM7O0FBRUFJLG1CQUFXQyxHQUFYO0FBQ0Q7QUFFRjs7OztFQS9Ib0JsRCxLOztBQW1JdkJxRCxPQUFPQyxPQUFQLEdBQWlCN0MsUUFBakIiLCJmaWxlIjoiUlNJTGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBMYXllciA9IHJlcXVpcmUoXCIuLi8uLi9sYXllci9MYXllclwiKTtcbnZhciBBcmMgPSByZXF1aXJlKFwiLi4vLi4vZWxlbWVudC9BcmNcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbiAgaW5wdXQ6IFwiY2xvc2VcIixcbiAgb3V0cHV0OiBcIl9yc2lcIixcbiAgcGVyaW9kOiAxNCxcbiAgY29sb3I6IFwicmVkXCIsXG4gIG1pblZhbHVlOiAwLjAsXG4gIG1heFZhbHVlOiAxMDAuMFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgUlNJIGNoYXJ0IGxheWVyLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXIuaW5kaWNhdG9yXG4gKi9cbmNsYXNzIFJTSUxheWVyIGV4dGVuZHMgTGF5ZXIge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBSU0lMYXllclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZWNvbXB1dGUgaW5kaWNhdG9yIGZpZWxkcyB1c2luZyB0aW1lIHNlcmllcyBPSExDViBkYXRhLlxuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIGlzIGludm9rZWQgYmVmb3JlIGRyYXcoKS5cbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqL1xuICBwcmVjb21wdXRlKGRhdGEpIHtcblxuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHZhciBmaWVsZF9tYXAgPSBkYXRhLmdldEZpZWxkTWFwKCk7XG4gICAgdmFyIGlucHV0X2ZpZWxkID0gZmllbGRfbWFwW3RoaXMuaW5wdXRdOyAvLyBpLmUuIGNsb3NlXG4gICAgdmFyIG91dHB1dF9maWVsZCA9IHRoaXMub3V0cHV0O1xuICAgIHZhciBwZXJpb2QgPSB0aGlzLnBlcmlvZDtcbiAgICB2YXIgcXVldWUgPSBbXSwgZ2Fpbl9xdWV1ZSA9IFtdLCBsb3NzX3F1ZXVlID0gW107XG4gICAgdmFyIHByZXZfY2xvc2UsIHByZXZfYXZnX2dhaW4sIHByZXZfYXZnX2xvc3M7XG4gICAgdmFyIGxvc3Nfc3VtID0gMC4wLCBnYWluX3N1bSA9IDAuMDtcblxuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG4gICAgICB2YXIgZGF0X3ByZXYgPSBkYXRhX2FycltpIC0gMV07XG5cbiAgICAgIHZhciBjaGFuZ2UgPSBkYXRbaW5wdXRfZmllbGRdIC0gZGF0X3ByZXZbaW5wdXRfZmllbGRdO1xuICAgICAgdmFyIGFic19jaGFuZ2UgPSBNYXRoLmFicyhjaGFuZ2UpO1xuICAgICAgdmFyIGN1cnJlbnRfZ2FpbiA9IDAuMDtcbiAgICAgIHZhciBjdXJyZW50X2xvc3MgPSAwLjA7XG4gICAgICB2YXIgYXZnX2dhaW4gPSAwLjA7XG4gICAgICB2YXIgYXZnX2xvc3MgPSAwLjA7XG4gICAgICB2YXIgcnM7XG5cbiAgICAgIGlmKGNoYW5nZSA+PSAwLjApXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRfZ2FpbiA9IGFic19jaGFuZ2U7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRfbG9zcyA9IGFic19jaGFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmKHF1ZXVlLmxlbmd0aCA8IHBlcmlvZClcbiAgICAgIHtcbiAgICAgICBxdWV1ZS5wdXNoKGNoYW5nZSk7XG4gICAgICAgIGlmKGNoYW5nZSA+PSAwLjApXG4gICAgICAgIHtcbiAgICAgICAgICBnYWluX3F1ZXVlLnB1c2goYWJzX2NoYW5nZSk7XG4gICAgICAgICAgZ2Fpbl9zdW0gKz0gYWJzX2NoYW5nZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICBsb3NzX3F1ZXVlLnB1c2goYWJzX2NoYW5nZSk7XG4gICAgICAgICAgbG9zc19zdW0gKz0gYWJzX2NoYW5nZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihxdWV1ZS5sZW5ndGggPT09IHBlcmlvZClcbiAgICAgIHtcbiAgICAgICAgcnMgPSBnYWluX3N1bSAvIGxvc3Nfc3VtO1xuICAgICAgICBkYXRbb3V0cHV0X2ZpZWxkXSA9IDEwMC4wIC0gKDEwMC4wIC8gKDEuMCArIHJzKSk7XG4gICAgICAgIGlmKGlzTmFOKGRhdFtvdXRwdXRfZmllbGRdKSlcbiAgICAgICAge1xuICAgICAgICAgIGRhdFtvdXRwdXRfZmllbGRdID0gMC4wO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlLnB1c2goY2hhbmdlKTsgLy8gbGVuZ3RoPShkYXRhLnBlcmlvZHMgKyAxKVxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBhdmdfZ2FpbiA9IChwcmV2X2F2Z19nYWluICogKHBlcmlvZCAtIDEpICsgY3VycmVudF9nYWluKSAvIHBlcmlvZDtcbiAgICAgICAgYXZnX2xvc3MgPSAocHJldl9hdmdfbG9zcyAqIChwZXJpb2QgLSAxKSArIGN1cnJlbnRfbG9zcykgLyBwZXJpb2Q7XG5cbiAgICAgICAgcnMgPSBhdmdfZ2FpbiAvIGF2Z19sb3NzO1xuICAgICAgICBkYXRbb3V0cHV0X2ZpZWxkXSA9IDEwMC4wIC0gKDEwMC4wIC8gKDEuMCArIHJzKSk7XG5cbiAgICAgICAgaWYoaXNOYU4oZGF0W291dHB1dF9maWVsZF0pKVxuICAgICAgICB7XG4gICAgICAgICAgZGF0W291dHB1dF9maWVsZF0gPSAwLjA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldl9hdmdfZ2FpbiA9IGF2Z19nYWluO1xuICAgICAgcHJldl9hdmdfbG9zcyA9IGF2Z19sb3NzO1xuICAgICAgcHJldl9jbG9zZSA9IGRhdFtvdXRwdXRfZmllbGRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbGF5ZXIgb250byBjYW52YXNcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSB2YWx1ZVRvUGl4ZWxcbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGluZGV4VG9QaXhlbFxuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCkge1xuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgdmFyIGZpZWxkX21hcCA9IGRhdGEuZ2V0RmllbGRNYXAoKTtcbiAgICB2YXIgZGF0YV9hcnIgPSBkYXRhLmdldFJhd0RhdGEoKTtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgdmFyIHByZXZfYXJjID0gbnVsbDtcblxuICAgIGZvcih2YXIgaSA9IG9mZnNldCA+PSAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGNvdW50ICYmIGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG5cbiAgICAgIHZhciBhcmMgPSBuZXcgQXJjKFxuICAgICAgICB0aGlzLFxuICAgICAgICBpLFxuICAgICAgICBkYXRbZmllbGRfbWFwLnRpbWVdLFxuICAgICAgICBkYXRbdGhpcy5vdXRwdXRdLFxuICAgICAgICBwcmV2X2FyYyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goYXJjKTtcbiAgICAgIGFyYy5kcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB0aGlzKTtcblxuICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgfVxuXG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJTSUxheWVyO1xuIl19
},{"../../element/Arc":15,"../../layer/Layer":25,"underscore":6}],33:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");
var Arc = require("../../element/Arc");

var _default_config = {
  input: "close",
  outputPrefix: "_sma",
  period: 50,
  color: "orange"
};

/**
 * Represents a SMA chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var SimpleMovingAverageLayer = function (_Layer) {
  _inherits(SimpleMovingAverageLayer, _Layer);

  /**
   * Instantiate SimpleMovingAverageLayer
   * @constructor
   * @param {object} config
   */
  function SimpleMovingAverageLayer(config) {
    _classCallCheck(this, SimpleMovingAverageLayer);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (SimpleMovingAverageLayer.__proto__ || Object.getPrototypeOf(SimpleMovingAverageLayer)).call(this, config));

    _this.output = _this.outputPrefix + "" + _this.period; // e.g. _sma50, _sma200, etc
    _this.minField = _this.output;
    _this.maxField = _this.output;
    return _this;
  }

  /**
   * Precompute indicator fields using time series OHLCV data.
   * <br><br>
   * This is invoked before draw().
   * @param {timeseries.TimeSeriesData} data
   */


  _createClass(SimpleMovingAverageLayer, [{
    key: "precompute",
    value: function precompute(data) {
      var data_arr = data.getRawData();
      var field_map = data.getFieldMap();
      var output_field = this.output;
      var input_field = field_map[this.input];
      var period = this.period;
      var queue = [],
          sum = 0.0;
      for (var i = 0; i < data_arr.length; i++) {
        var dat = data_arr[i];
        queue.push(dat[input_field]);
        sum += dat[input_field];
        if (queue.length === period + 1) {
          sum -= queue.shift();
          dat[output_field] = sum / period;
        }
      }
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];
      var prev_arc = null;

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];

        var arc = new Arc(this, i, dat[field_map.time], dat[this.output], prev_arc);
        this.elements.push(arc);
        arc.draw(context, valueToPixel, indexToPixel, this);

        prev_arc = arc;
      }
    }
  }]);

  return SimpleMovingAverageLayer;
}(Layer);

module.exports = SimpleMovingAverageLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkxheWVyIiwiQXJjIiwiX2RlZmF1bHRfY29uZmlnIiwiaW5wdXQiLCJvdXRwdXRQcmVmaXgiLCJwZXJpb2QiLCJjb2xvciIsIlNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllciIsImNvbmZpZyIsImV4dGVuZCIsIm91dHB1dCIsIm1pbkZpZWxkIiwibWF4RmllbGQiLCJkYXRhIiwiZGF0YV9hcnIiLCJnZXRSYXdEYXRhIiwiZmllbGRfbWFwIiwiZ2V0RmllbGRNYXAiLCJvdXRwdXRfZmllbGQiLCJpbnB1dF9maWVsZCIsInF1ZXVlIiwic3VtIiwiaSIsImxlbmd0aCIsImRhdCIsInB1c2giLCJzaGlmdCIsImNvdW50Iiwib2Zmc2V0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZWxlbWVudHMiLCJwcmV2X2FyYyIsImFyYyIsInRpbWUiLCJkcmF3IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxJQUFJQyxRQUFRLFlBQVIsQ0FBUjtBQUNBLElBQUlDLFFBQVFELFFBQVEsbUJBQVIsQ0FBWjtBQUNBLElBQUlFLE1BQU1GLFFBQVEsbUJBQVIsQ0FBVjs7QUFFQSxJQUFNRyxrQkFBa0I7QUFDdEJDLFNBQU8sT0FEZTtBQUV0QkMsZ0JBQWMsTUFGUTtBQUd0QkMsVUFBUSxFQUhjO0FBSXRCQyxTQUFPO0FBSmUsQ0FBeEI7O0FBT0E7Ozs7Ozs7SUFNTUMsd0I7OztBQUVKOzs7OztBQUtBLG9DQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCQSxhQUFTVixFQUFFVyxNQUFGLENBQVMsRUFBVCxFQUFhUCxlQUFiLEVBQThCTSxNQUE5QixDQUFUOztBQURrQixvSkFFWkEsTUFGWTs7QUFHbEIsVUFBS0UsTUFBTCxHQUFjLE1BQUtOLFlBQUwsR0FBb0IsRUFBcEIsR0FBeUIsTUFBS0MsTUFBNUMsQ0FIa0IsQ0FHa0M7QUFDcEQsVUFBS00sUUFBTCxHQUFnQixNQUFLRCxNQUFyQjtBQUNBLFVBQUtFLFFBQUwsR0FBZ0IsTUFBS0YsTUFBckI7QUFMa0I7QUFNbkI7O0FBRUQ7Ozs7Ozs7Ozs7K0JBTVdHLEksRUFBTTtBQUNmLFVBQUlDLFdBQVdELEtBQUtFLFVBQUwsRUFBZjtBQUNBLFVBQUlDLFlBQVlILEtBQUtJLFdBQUwsRUFBaEI7QUFDQSxVQUFJQyxlQUFlLEtBQUtSLE1BQXhCO0FBQ0EsVUFBSVMsY0FBY0gsVUFBVSxLQUFLYixLQUFmLENBQWxCO0FBQ0EsVUFBSUUsU0FBUyxLQUFLQSxNQUFsQjtBQUNBLFVBQUllLFFBQVEsRUFBWjtBQUFBLFVBQWdCQyxNQUFNLEdBQXRCO0FBQ0EsV0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSVIsU0FBU1MsTUFBNUIsRUFBb0NELEdBQXBDLEVBQ0E7QUFDRSxZQUFJRSxNQUFNVixTQUFTUSxDQUFULENBQVY7QUFDQUYsY0FBTUssSUFBTixDQUFXRCxJQUFJTCxXQUFKLENBQVg7QUFDQUUsZUFBT0csSUFBSUwsV0FBSixDQUFQO0FBQ0EsWUFBR0MsTUFBTUcsTUFBTixLQUFpQmxCLFNBQVMsQ0FBN0IsRUFDQTtBQUNFZ0IsaUJBQU9ELE1BQU1NLEtBQU4sRUFBUDtBQUNBRixjQUFJTixZQUFKLElBQW9CRyxNQUFNaEIsTUFBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQVFLUSxJLEVBQU1jLEssRUFBT0MsTSxFQUFRQyxZLEVBQWNDLFksRUFBYzs7QUFFcEQsVUFBSUMsVUFBVSxLQUFLQyxXQUFMLEVBQWQ7QUFDQSxVQUFJaEIsWUFBWUgsS0FBS0ksV0FBTCxFQUFoQjtBQUNBLFVBQUlILFdBQVdELEtBQUtFLFVBQUwsRUFBZjtBQUNBLFdBQUtrQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsVUFBSUMsV0FBVyxJQUFmOztBQUVBLFdBQUksSUFBSVosSUFBSU0sVUFBVSxDQUFWLEdBQWNBLE1BQWQsR0FBdUIsQ0FBbkMsRUFBc0NOLElBQUlNLFNBQVNELEtBQWIsSUFBc0JMLElBQUlSLFNBQVNTLE1BQXpFLEVBQWlGRCxHQUFqRixFQUNBO0FBQ0UsWUFBSUUsTUFBTVYsU0FBU1EsQ0FBVCxDQUFWOztBQUVBLFlBQUlhLE1BQU0sSUFBSWxDLEdBQUosQ0FDUixJQURRLEVBRVJxQixDQUZRLEVBR1JFLElBQUlSLFVBQVVvQixJQUFkLENBSFEsRUFJUlosSUFBSSxLQUFLZCxNQUFULENBSlEsRUFLUndCLFFBTFEsQ0FBVjtBQU1BLGFBQUtELFFBQUwsQ0FBY1IsSUFBZCxDQUFtQlUsR0FBbkI7QUFDQUEsWUFBSUUsSUFBSixDQUFTTixPQUFULEVBQWtCRixZQUFsQixFQUFnQ0MsWUFBaEMsRUFBOEMsSUFBOUM7O0FBRUFJLG1CQUFXQyxHQUFYO0FBQ0Q7QUFFRjs7OztFQXpFb0NuQyxLOztBQTZFdkNzQyxPQUFPQyxPQUFQLEdBQWlCaEMsd0JBQWpCIiwiZmlsZSI6IlNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uLy4uL2xheWVyL0xheWVyXCIpO1xudmFyIEFyYyA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtZW50L0FyY1wiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBpbnB1dDogXCJjbG9zZVwiLFxuICBvdXRwdXRQcmVmaXg6IFwiX3NtYVwiLFxuICBwZXJpb2Q6IDUwLFxuICBjb2xvcjogXCJvcmFuZ2VcIlxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgU01BIGNoYXJ0IGxheWVyLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGxheWVyLkxheWVyXG4gKiBAbWVtYmVyb2YgbGF5ZXIuaW5kaWNhdG9yXG4gKi9cbmNsYXNzIFNpbXBsZU1vdmluZ0F2ZXJhZ2VMYXllciBleHRlbmRzIExheWVyIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgU2ltcGxlTW92aW5nQXZlcmFnZUxheWVyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLm91dHB1dFByZWZpeCArIFwiXCIgKyB0aGlzLnBlcmlvZDsgLy8gZS5nLiBfc21hNTAsIF9zbWEyMDAsIGV0Y1xuICAgIHRoaXMubWluRmllbGQgPSB0aGlzLm91dHB1dDtcbiAgICB0aGlzLm1heEZpZWxkID0gdGhpcy5vdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogUHJlY29tcHV0ZSBpbmRpY2F0b3IgZmllbGRzIHVzaW5nIHRpbWUgc2VyaWVzIE9ITENWIGRhdGEuXG4gICAqIDxicj48YnI+XG4gICAqIFRoaXMgaXMgaW52b2tlZCBiZWZvcmUgZHJhdygpLlxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICovXG4gIHByZWNvbXB1dGUoZGF0YSkge1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHZhciBmaWVsZF9tYXAgPSBkYXRhLmdldEZpZWxkTWFwKCk7XG4gICAgdmFyIG91dHB1dF9maWVsZCA9IHRoaXMub3V0cHV0O1xuICAgIHZhciBpbnB1dF9maWVsZCA9IGZpZWxkX21hcFt0aGlzLmlucHV0XTtcbiAgICB2YXIgcGVyaW9kID0gdGhpcy5wZXJpb2Q7XG4gICAgdmFyIHF1ZXVlID0gW10sIHN1bSA9IDAuMDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuICAgICAgcXVldWUucHVzaChkYXRbaW5wdXRfZmllbGRdKTtcbiAgICAgIHN1bSArPSBkYXRbaW5wdXRfZmllbGRdO1xuICAgICAgaWYocXVldWUubGVuZ3RoID09PSBwZXJpb2QgKyAxKVxuICAgICAge1xuICAgICAgICBzdW0gLT0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgZGF0W291dHB1dF9maWVsZF0gPSBzdW0gLyBwZXJpb2Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IHZhbHVlVG9QaXhlbFxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gaW5kZXhUb1BpeGVsXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcHJldl9hcmMgPSBudWxsO1xuXG4gICAgZm9yKHZhciBpID0gb2Zmc2V0ID49IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgY291bnQgJiYgaSA8IGRhdGFfYXJyLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBkYXQgPSBkYXRhX2FycltpXTtcblxuICAgICAgdmFyIGFyYyA9IG5ldyBBcmMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGksXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudGltZV0sXG4gICAgICAgIGRhdFt0aGlzLm91dHB1dF0sXG4gICAgICAgIHByZXZfYXJjKTtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChhcmMpO1xuICAgICAgYXJjLmRyYXcoY29udGV4dCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIHRoaXMpO1xuXG4gICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICB9XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltcGxlTW92aW5nQXZlcmFnZUxheWVyO1xuIl19
},{"../../element/Arc":15,"../../layer/Layer":25,"underscore":6}],34:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");
var Arc = require("../../element/Arc");

var _default_config = {
  lowInput: "low",
  highInput: "high",
  closeInput: "close",
  kOutput: "_stoch14_k",
  dOutput: "_stoch14_d",
  period: 14,
  kMa: 3,
  dMa: 5,
  kColor: "orange",
  dColor: "lime",
  minValue: 0.0,
  maxValue: 100.0
};

/**
 * Represents a Stochastic chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var StochasticLayer = function (_Layer) {
  _inherits(StochasticLayer, _Layer);

  /**
   * Instantiate StochasticLayer
   * @constructor
   * @param {Object} config
   */
  function StochasticLayer(config) {
    _classCallCheck(this, StochasticLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (StochasticLayer.__proto__ || Object.getPrototypeOf(StochasticLayer)).call(this, config));
  }

  /**
   * Precompute indicator fields using time series OHLCV data.
   * <br><br>
   * This is invoked before draw().
   * @param {timeseries.TimeSeriesData} data
   */


  _createClass(StochasticLayer, [{
    key: "precompute",
    value: function precompute(data) {

      var data_arr = data.getRawData();
      var field_map = data.getFieldMap();
      var k_field = this.kOutput;
      var d_field = this.dOutput;
      var low_input = field_map[this.lowInput];
      var high_input = field_map[this.highInput];
      var close_input = field_map[this.closeInput];
      var period = this.period,
          k_ma = this.kMa,
          d_ma = this.dMa;
      var low_queue = [],
          high_queue = [],
          k_queue = [],
          k_sum = 0.0,
          d_queue = [],
          d_sum = 0.0;
      var low, high;
      for (var i = 0; i < data_arr.length; i++) {
        var dat = data_arr[i];
        // Low
        low_queue.push(dat[low_input]); // e.g. low
        if (low_queue.length === period) // e.g. 14
          {
            low = Math.min.apply(Math, low_queue);
            low_queue.shift(); // remove first
          }
        // High
        high_queue.push(dat[high_input]); // e.g. high
        if (high_queue.length === period) // e.g. 14
          {
            high = Math.max.apply(Math, high_queue);
            high_queue.shift(); // remove first
          }
        // k and d
        if (low !== undefined && high !== undefined) {
          var k = (dat[close_input] - low) / (high - low) * 100.0;

          if (isNaN(k)) {
            k = 0.0;
          }

          // Stochastic %K applied with SMA(3)
          k_queue.push(k);
          k_sum += k;

          if (k_queue.length === k_ma + 1) {
            k_sum -= k_queue.shift();
            dat[k_field] = k_sum / k_ma;
          }

          if (dat[k_field] !== undefined) {
            // MA3 of %K
            d_queue.push(dat[k_field]);
            d_sum += dat[k_field];

            if (d_queue.length === d_ma + 1) {
              d_sum -= d_queue.shift();
              dat[d_field] = d_sum / d_ma;
            }
          }
        }
      }
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];
      this.d_elements = [];
      var prev_k_arc = null,
          prev_d_arc = null;

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];

        // d
        var d_arc = new Arc(this, i, dat[field_map.time], dat[this.dOutput], prev_d_arc);
        this.d_elements.push(d_arc);
        d_arc.draw(context, valueToPixel, indexToPixel, { color: this.dColor });

        // k
        var k_arc = new Arc(this, i, dat[field_map.time], dat[this.kOutput], prev_k_arc);
        this.elements.push(k_arc);
        k_arc.draw(context, valueToPixel, indexToPixel, { color: this.kColor });

        prev_k_arc = k_arc;
        prev_d_arc = d_arc;
      }
    }
  }]);

  return StochasticLayer;
}(Layer);

module.exports = StochasticLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0b2NoYXN0aWNMYXllci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkxheWVyIiwiQXJjIiwiX2RlZmF1bHRfY29uZmlnIiwibG93SW5wdXQiLCJoaWdoSW5wdXQiLCJjbG9zZUlucHV0Iiwia091dHB1dCIsImRPdXRwdXQiLCJwZXJpb2QiLCJrTWEiLCJkTWEiLCJrQ29sb3IiLCJkQ29sb3IiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiU3RvY2hhc3RpY0xheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwiZGF0YSIsImRhdGFfYXJyIiwiZ2V0UmF3RGF0YSIsImZpZWxkX21hcCIsImdldEZpZWxkTWFwIiwia19maWVsZCIsImRfZmllbGQiLCJsb3dfaW5wdXQiLCJoaWdoX2lucHV0IiwiY2xvc2VfaW5wdXQiLCJrX21hIiwiZF9tYSIsImxvd19xdWV1ZSIsImhpZ2hfcXVldWUiLCJrX3F1ZXVlIiwia19zdW0iLCJkX3F1ZXVlIiwiZF9zdW0iLCJsb3ciLCJoaWdoIiwiaSIsImxlbmd0aCIsImRhdCIsInB1c2giLCJNYXRoIiwibWluIiwiYXBwbHkiLCJzaGlmdCIsIm1heCIsInVuZGVmaW5lZCIsImsiLCJpc05hTiIsImNvdW50Iiwib2Zmc2V0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZWxlbWVudHMiLCJkX2VsZW1lbnRzIiwicHJldl9rX2FyYyIsInByZXZfZF9hcmMiLCJkX2FyYyIsInRpbWUiLCJkcmF3IiwiY29sb3IiLCJrX2FyYyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxRQUFRRCxRQUFRLG1CQUFSLENBQVo7QUFDQSxJQUFJRSxNQUFNRixRQUFRLG1CQUFSLENBQVY7O0FBRUEsSUFBTUcsa0JBQWtCO0FBQ3RCQyxZQUFVLEtBRFk7QUFFdEJDLGFBQVcsTUFGVztB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LFFBQVEsSUFBSS9ELEdBQUosQ0FDVixJQURVLEVBRVZxQyxDQUZVLEVBR1ZFLElBQUluQixVQUFVd0MsSUFBZCxDQUhVLEVBSVZyQixJQUFJLEtBQUtsQyxPQUFULENBSlUsRUFLVm9ELFVBTFUsQ0FBWjtBQU1BLGFBQUtGLFFBQUwsQ0FBY2YsSUFBZCxDQUFtQnVCLEtBQW5CO0FBQ0FBLGNBQU1GLElBQU4sQ0FBV1IsT0FBWCxFQUFvQkYsWUFBcEIsRUFBa0NDLFlBQWxDLEVBQWdELEVBQUNVLE9BQU0sS0FBS3BELE1BQVosRUFBaEQ7O0FBRUErQyxxQkFBYU0sS0FBYjtBQUNBTCxxQkFBYUMsS0FBYjtBQUNEO0FBRUY7Ozs7RUFoSTJCNUQsSzs7QUFvSTlCaUUsT0FBT0MsT0FBUCxHQUFpQm5ELGVBQWpCIiwiZmlsZSI6IlN0b2NoYXN0aWNMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uLy4uL2xheWVyL0xheWVyXCIpO1xudmFyIEFyYyA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtZW50L0FyY1wiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBsb3dJbnB1dDogXCJsb3dcIixcbiAgaGlnaElucHV0OiBcImhpZ2hcIixcbiAgY2xvc2VJbnB1dDogXCJjbG9zZVwiLFxuICBrT3V0cHV0OiBcIl9zdG9jaDE0X2tcIixcbiAgZE91dHB1dDogXCJfc3RvY2gxNF9kXCIsXG4gIHBlcmlvZDogMTQsXG4gIGtNYTogMyxcbiAgZE1hOiA1LFxuICBrQ29sb3I6IFwib3JhbmdlXCIsXG4gIGRDb2xvcjogXCJsaW1lXCIsXG4gIG1pblZhbHVlOiAwLjAsXG4gIG1heFZhbHVlOiAxMDAuMFxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgU3RvY2hhc3RpYyBjaGFydCBsYXllci5cbiAqIDxicj48YnI+XG4gKiBAZXh0ZW5kcyBsYXllci5MYXllclxuICogQG1lbWJlcm9mIGxheWVyLmluZGljYXRvclxuICovXG5jbGFzcyBTdG9jaGFzdGljTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIFN0b2NoYXN0aWNMYXllclxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZWNvbXB1dGUgaW5kaWNhdG9yIGZpZWxkcyB1c2luZyB0aW1lIHNlcmllcyBPSExDViBkYXRhLlxuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIGlzIGludm9rZWQgYmVmb3JlIGRyYXcoKS5cbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqL1xuICBwcmVjb21wdXRlKGRhdGEpIHtcblxuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHZhciBmaWVsZF9tYXAgPSBkYXRhLmdldEZpZWxkTWFwKCk7XG4gICAgdmFyIGtfZmllbGQgPSB0aGlzLmtPdXRwdXQ7XG4gICAgdmFyIGRfZmllbGQgPSB0aGlzLmRPdXRwdXQ7XG4gICAgdmFyIGxvd19pbnB1dCA9IGZpZWxkX21hcFt0aGlzLmxvd0lucHV0XTtcbiAgICB2YXIgaGlnaF9pbnB1dCA9IGZpZWxkX21hcFt0aGlzLmhpZ2hJbnB1dF07XG4gICAgdmFyIGNsb3NlX2lucHV0ID0gZmllbGRfbWFwW3RoaXMuY2xvc2VJbnB1dF07XG4gICAgdmFyIHBlcmlvZCA9IHRoaXMucGVyaW9kLCBrX21hID0gdGhpcy5rTWEsIGRfbWEgPSB0aGlzLmRNYTtcbiAgICB2YXIgbG93X3F1ZXVlID0gW10sIGhpZ2hfcXVldWUgPSBbXSwga19xdWV1ZSA9IFtdLCBrX3N1bSA9IDAuMCwgZF9xdWV1ZSA9IFtdLCBkX3N1bSA9IDAuMDtcbiAgICB2YXIgbG93LCBoaWdoO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhX2Fyci5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgZGF0ID0gZGF0YV9hcnJbaV07XG4gICAgICAvLyBMb3dcbiAgICAgIGxvd19xdWV1ZS5wdXNoKGRhdFtsb3dfaW5wdXRdKTsgLy8gZS5nLiBsb3dcbiAgICAgIGlmKGxvd19xdWV1ZS5sZW5ndGggPT09IHBlcmlvZCkgLy8gZS5nLiAxNFxuICAgICAge1xuICAgICAgICBsb3cgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBsb3dfcXVldWUpO1xuICAgICAgICBsb3dfcXVldWUuc2hpZnQoKTsgLy8gcmVtb3ZlIGZpcnN0XG4gICAgICB9XG4gICAgICAvLyBIaWdoXG4gICAgICBoaWdoX3F1ZXVlLnB1c2goZGF0W2hpZ2hfaW5wdXRdKTsgLy8gZS5nLiBoaWdoXG4gICAgICBpZihoaWdoX3F1ZXVlLmxlbmd0aCA9PT0gcGVyaW9kKSAvLyBlLmcuIDE0XG4gICAgICB7XG4gICAgICAgIGhpZ2ggPSBNYXRoLm1heC5hcHBseShNYXRoLCBoaWdoX3F1ZXVlKTtcbiAgICAgICAgaGlnaF9xdWV1ZS5zaGlmdCgpOyAvLyByZW1vdmUgZmlyc3RcbiAgICAgIH1cbiAgICAgIC8vIGsgYW5kIGRcbiAgICAgIGlmKGxvdyAhPT0gdW5kZWZpbmVkICYmIGhpZ2ggIT09IHVuZGVmaW5lZClcbiAgICAgIHtcbiAgICAgICAgdmFyIGsgPSAoZGF0W2Nsb3NlX2lucHV0XSAtIGxvdykgLyAoaGlnaCAtIGxvdykgKiAxMDAuMDtcblxuICAgICAgICBpZihpc05hTihrKSlcbiAgICAgICAge1xuICAgICAgICAgIGsgPSAwLjA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9jaGFzdGljICVLIGFwcGxpZWQgd2l0aCBTTUEoMylcbiAgICAgICAga19xdWV1ZS5wdXNoKGspO1xuICAgICAgICBrX3N1bSArPSBrO1xuXG4gICAgICAgIGlmKGtfcXVldWUubGVuZ3RoID09PSBrX21hICsgMSlcbiAgICAgICAge1xuICAgICAgICAgIGtfc3VtIC09IGtfcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICBkYXRba19maWVsZF0gPSBrX3N1bSAvIGtfbWE7XG4gICAgICAgIH1cblxuICAgICAgICBpZihkYXRba19maWVsZF0gIT09IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgIC8vIE1BMyBvZiAlS1xuICAgICAgICAgIGRfcXVldWUucHVzaChkYXRba19maWVsZF0pO1xuICAgICAgICAgIGRfc3VtICs9IGRhdFtrX2ZpZWxkXTtcblxuICAgICAgICAgIGlmKGRfcXVldWUubGVuZ3RoID09PSBkX21hICsgMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkX3N1bSAtPSBkX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBkYXRbZF9maWVsZF0gPSBkX3N1bSAvIGRfbWE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBsYXllciBvbnRvIGNhbnZhc1xuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHt2YWx1ZVRvUGl4ZWx9IHZhbHVlVG9QaXhlbFxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gaW5kZXhUb1BpeGVsXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICB0aGlzLmRfZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcHJldl9rX2FyYyA9IG51bGwsIHByZXZfZF9hcmMgPSBudWxsO1xuXG4gICAgZm9yKHZhciBpID0gb2Zmc2V0ID49IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgY291bnQgJiYgaSA8IGRhdGFfYXJyLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBkYXQgPSBkYXRhX2FycltpXTtcblxuICAgICAgLy8gZFxuICAgICAgdmFyIGRfYXJjID0gbmV3IEFyYyhcbiAgICAgICAgdGhpcyxcbiAgICAgICAgaSxcbiAgICAgICAgZGF0W2ZpZWxkX21hcC50aW1lXSxcbiAgICAgICAgZGF0W3RoaXMuZE91dHB1dF0sXG4gICAgICAgIHByZXZfZF9hcmMpO1xuICAgICAgdGhpcy5kX2VsZW1lbnRzLnB1c2goZF9hcmMpO1xuICAgICAgZF9hcmMuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwge2NvbG9yOnRoaXMuZENvbG9yfSk7XG5cbiAgICAgIC8vIGtcbiAgICAgIHZhciBrX2FyYyA9IG5ldyBBcmMoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGksXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudGltZV0sXG4gICAgICAgIGRhdFt0aGlzLmtPdXRwdXRdLFxuICAgICAgICBwcmV2X2tfYXJjKTtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChrX2FyYyk7XG4gICAgICBrX2FyYy5kcmF3KGNvbnRleHQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB7Y29sb3I6dGhpcy5rQ29sb3J9KTtcblxuICAgICAgcHJldl9rX2FyYyA9IGtfYXJjO1xuICAgICAgcHJldl9kX2FyYyA9IGRfYXJjO1xuICAgIH1cblxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdG9jaGFzdGljTGF5ZXI7XG4iXX0=
},{"../../element/Arc":15,"../../layer/Layer":25,"underscore":6}],35:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");
var HistogramBar = require("../../element/HistogramBar");

var _default_config = {
  barColor: "blue",
  barWidth: 3,
  minValue: 0,
  maxField: "volume"
};

/**
 * Represents a volume histogram chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var VolumeLayer = function (_Layer) {
  _inherits(VolumeLayer, _Layer);

  /**
   * Instantiate VolumeLayer
   * @constructor
   * @param {Object} config
   */
  function VolumeLayer(config) {
    _classCallCheck(this, VolumeLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (VolumeLayer.__proto__ || Object.getPrototypeOf(VolumeLayer)).call(this, config));
  }

  /**
   * Set width of each volume bar
   * @param {number} Width in pixels.
   */


  _createClass(VolumeLayer, [{
    key: "setBarWidth",
    value: function setBarWidth(bar_width) {
      this.barWidth = bar_width;
    }

    /**
     * Get volume bar width
     * @returns {number} Width in pixels.
     */

  }, {
    key: "getBarWidth",
    value: function getBarWidth() {
      return this.barWidth;
    }

    /**
     * Render layer onto canvas
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {valueToPixel} valueToPixel
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];

      for (var i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var bar = new HistogramBar(this, i, dat[field_map.time], dat[field_map.volume]);
        bar.draw(context, valueToPixel, indexToPixel, this);
        this.elements.push(bar);
      }
    }
  }]);

  return VolumeLayer;
}(Layer);

module.exports = VolumeLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZvbHVtZUxheWVyLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiTGF5ZXIiLCJIaXN0b2dyYW1CYXIiLCJfZGVmYXVsdF9jb25maWciLCJiYXJDb2xvciIsImJhcldpZHRoIiwibWluVmFsdWUiLCJtYXhGaWVsZCIsIlZvbHVtZUxheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwiYmFyX3dpZHRoIiwiZGF0YSIsImNvdW50Iiwib2Zmc2V0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZmllbGRfbWFwIiwiZ2V0RmllbGRNYXAiLCJkYXRhX2FyciIsImdldFJhd0RhdGEiLCJlbGVtZW50cyIsImkiLCJsZW5ndGgiLCJkYXQiLCJiYXIiLCJ0aW1lIiwidm9sdW1lIiwiZHJhdyIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSxtQkFBUixDQUFaO0FBQ0EsSUFBSUUsZUFBZUYsUUFBUSw0QkFBUixDQUFuQjs7QUFFQSxJQUFNRyxrQkFBa0I7QUFDdEJDLFlBQVUsTUFEWTtBQUV0QkMsWUFBVSxDQUZZO0FBR3RCQyxZQUFVLENBSFk7QUFJdEJDLFlBQVU7QUFKWSxDQUF4Qjs7QUFPQTs7Ozs7OztJQU1NQyxXOzs7QUFFSjs7Ozs7QUFLQSx1QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQkEsYUFBU1YsRUFBRVcsTUFBRixDQUFTLEVBQVQsRUFBYVAsZUFBYixFQUE4Qk0sTUFBOUIsQ0FBVDtBQURrQixxSEFFWkEsTUFGWTtBQUduQjs7QUFFRDs7Ozs7Ozs7Z0NBSVlFLFMsRUFBVztBQUNyQixXQUFLTixRQUFMLEdBQWdCTSxTQUFoQjtBQUNEOztBQUVEOzs7Ozs7O2tDQUljO0FBQ1osYUFBTyxLQUFLTixRQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lCQVFLTyxJLEVBQU1DLEssRUFBT0MsTSxFQUFRQyxZLEVBQWNDLFksRUFBYzs7QUFFcEQsVUFBSUMsVUFBVSxLQUFLQyxXQUFMLEVBQWQ7QUFDQSxVQUFJQyxZQUFZUCxLQUFLUSxXQUFMLEVBQWhCO0FBQ0EsVUFBSUMsV0FBV1QsS0FBS1UsVUFBTCxFQUFmO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxXQUFJLElBQUlDLElBQUlWLFVBQVUsQ0FBVixHQUFjQSxNQUFkLEdBQXVCLENBQW5DLEVBQXNDVSxJQUFJVixTQUFTRCxLQUFiLElBQXNCVyxJQUFJSCxTQUFTSSxNQUF6RSxFQUFpRkQsR0FBakYsRUFDQTtBQUNFLFlBQUlFLE1BQU1MLFNBQVNHLENBQVQsQ0FBVjtBQUNBLFlBQUlHLE1BQU0sSUFBSXpCLFlBQUosQ0FDUixJQURRLEVBRVJzQixDQUZRLEVBR1JFLElBQUlQLFVBQVVTLElBQWQsQ0FIUSxFQUlSRixJQUFJUCxVQUFVVSxNQUFkLENBSlEsQ0FBVjtBQUtBRixZQUFJRyxJQUFKLENBQVNiLE9BQVQsRUFBa0JGLFlBQWxCLEVBQWdDQyxZQUFoQyxFQUE4QyxJQUE5QztBQUNBLGFBQUtPLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQkosR0FBbkI7QUFDRDtBQUVGOzs7O0VBdkR1QjFCLEs7O0FBMkQxQitCLE9BQU9DLE9BQVAsR0FBaUJ6QixXQUFqQiIsImZpbGUiOiJWb2x1bWVMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uLy4uL2xheWVyL0xheWVyXCIpO1xudmFyIEhpc3RvZ3JhbUJhciA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtZW50L0hpc3RvZ3JhbUJhclwiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBiYXJDb2xvcjogXCJibHVlXCIsXG4gIGJhcldpZHRoOiAzLFxuICBtaW5WYWx1ZTogMCxcbiAgbWF4RmllbGQ6IFwidm9sdW1lXCJcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHZvbHVtZSBoaXN0b2dyYW0gY2hhcnQgbGF5ZXIuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgbGF5ZXIuTGF5ZXJcbiAqIEBtZW1iZXJvZiBsYXllci5pbmRpY2F0b3JcbiAqL1xuY2xhc3MgVm9sdW1lTGF5ZXIgZXh0ZW5kcyBMYXllciB7XG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlIFZvbHVtZUxheWVyXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdpZHRoIG9mIGVhY2ggdm9sdW1lIGJhclxuICAgKiBAcGFyYW0ge251bWJlcn0gV2lkdGggaW4gcGl4ZWxzLlxuICAgKi9cbiAgc2V0QmFyV2lkdGgoYmFyX3dpZHRoKSB7XG4gICAgdGhpcy5iYXJXaWR0aCA9IGJhcl93aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdm9sdW1lIGJhciB3aWR0aFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBXaWR0aCBpbiBwaXhlbHMuXG4gICAqL1xuICBnZXRCYXJXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5iYXJXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbGF5ZXIgb250byBjYW52YXNcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSB2YWx1ZVRvUGl4ZWxcbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGluZGV4VG9QaXhlbFxuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCkge1xuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgdmFyIGZpZWxkX21hcCA9IGRhdGEuZ2V0RmllbGRNYXAoKTtcbiAgICB2YXIgZGF0YV9hcnIgPSBkYXRhLmdldFJhd0RhdGEoKTtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBmb3IodmFyIGkgPSBvZmZzZXQgPj0gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBjb3VudCAmJiBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuICAgICAgdmFyIGJhciA9IG5ldyBIaXN0b2dyYW1CYXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGksXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudGltZV0sXG4gICAgICAgIGRhdFtmaWVsZF9tYXAudm9sdW1lXSk7XG4gICAgICBiYXIuZHJhdyhjb250ZXh0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdGhpcyk7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goYmFyKTtcbiAgICB9XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVm9sdW1lTGF5ZXI7XG4iXX0=
},{"../../element/HistogramBar":18,"../../layer/Layer":25,"underscore":6}],36:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Layer = require("../../layer/Layer");

var _default_config = {
  highInput: "high",
  lowInput: "low",
  volumeInput: "volume",
  relativeWidth: 0.3333,
  vertexCount: 120,
  color: "rgba(153, 180, 255, 0.7)"
};

/**
 * Represents a volume profile chart layer.
 * <br><br>
 * @extends layer.Layer
 * @memberof layer.indicator
 */

var VolumeProfileLayer = function (_Layer) {
  _inherits(VolumeProfileLayer, _Layer);

  /**
   * Instantiate VolumeProfileLayer
   * @constructor
   * @param {Object} config
   */
  function VolumeProfileLayer(config) {
    _classCallCheck(this, VolumeProfileLayer);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (VolumeProfileLayer.__proto__ || Object.getPrototypeOf(VolumeProfileLayer)).call(this, config));
  }

  /**
   * Render layer onto canvas
   * @param {timeseries.TimeSeriesData} data
   * @param {number} count
   * @param {number} offset
   * @param {valueToPixel} valueToPixel
   * @param {indexToPixel} indexToPixel
   * @param {timeseries.ValueBounds} value_bounds
   */


  _createClass(VolumeProfileLayer, [{
    key: "draw",
    value: function draw(data, count, offset, valueToPixel, indexToPixel, value_bounds) {

      var context = this._getContext();
      var field_map = data.getFieldMap();
      var data_arr = data.getRawData();
      this.elements = [];

      var vertex_count = this.vertexCount;
      var min = value_bounds.min;
      var max = value_bounds.max;
      var range = max - min;
      var pixel_width = this.profileWidth || this.getDrawingWidth() * this.relativeWidth;
      var pixel_height = this.getHeight();
      var bar_width = pixel_height / vertex_count;
      var half_bar_width = bar_width * 0.5;
      var hist = [];
      var high_field = field_map[this.highInput];
      var low_field = field_map[this.lowInput];
      var volume_field = field_map[this.volumeInput];

      var max_value = 0;

      for (var i = 0; i < vertex_count; i++) {
        hist[i] = 0;
      }

      for (i = offset >= 0 ? offset : 0; i < offset + count && i < data_arr.length; i++) {
        var dat = data_arr[i];
        var high = dat[high_field],
            low = dat[low_field],
            vol = dat[volume_field];

        var hist_index_low = Math.floor((low - min) / range * vertex_count); // e.g. (4475 - 4450) / 2000 * 20 = floor(0.25) = 0
        var hist_index_high = Math.floor((high - min) / range * vertex_count);

        var vol_fract = 1 / (hist_index_high - hist_index_low + 1);

        for (var h = hist_index_low; h <= hist_index_high; h++) {
          hist[h] += Math.round(vol * vol_fract);
        }
      }

      for (var j = 0; j < vertex_count; j++) {
        if (hist[j] > max_value) {
          max_value = hist[j];
        }
      }

      context.fillStyle = this.color;
      context.beginPath();
      context.moveTo(0, pixel_height);

      for (j = 0; j < vertex_count; j++) {
        var val = hist[j];

        var x = val / max_value * pixel_width;
        var y = pixel_height - (j + 1) / vertex_count * pixel_height * 1.0; // index + 1 because we flip y

        context.lineTo(x, y + half_bar_width);
        context.lineTo(x, y - half_bar_width);
      }

      context.lineTo(0, 0);
      context.closePath();
      context.fill();
    }
  }]);

  return VolumeProfileLayer;
}(Layer);

module.exports = VolumeProfileLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlZvbHVtZVByb2ZpbGVMYXllci5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIkxheWVyIiwiX2RlZmF1bHRfY29uZmlnIiwiaGlnaElucHV0IiwibG93SW5wdXQiLCJ2b2x1bWVJbnB1dCIsInJlbGF0aXZlV2lkdGgiLCJ2ZXJ0ZXhDb3VudCIsImNvbG9yIiwiVm9sdW1lUHJvZmlsZUxheWVyIiwiY29uZmlnIiwiZXh0ZW5kIiwiZGF0YSIsImNvdW50Iiwib2Zmc2V0IiwidmFsdWVUb1BpeGVsIiwiaW5kZXhUb1BpeGVsIiwidmFsdWVfYm91bmRzIiwiY29udGV4dCIsIl9nZXRDb250ZXh0IiwiZmllbGRfbWFwIiwiZ2V0RmllbGRNYXAiLCJkYXRhX2FyciIsImdldFJhd0RhdGEiLCJlbGVtZW50cyIsInZlcnRleF9jb3VudCIsIm1pbiIsIm1heCIsInJhbmdlIiwicGl4ZWxfd2lkdGgiLCJwcm9maWxlV2lkdGgiLCJnZXREcmF3aW5nV2lkdGgiLCJwaXhlbF9oZWlnaHQiLCJnZXRIZWlnaHQiLCJiYXJfd2lkdGgiLCJoYWxmX2Jhcl93aWR0aCIsImhpc3QiLCJoaWdoX2ZpZWxkIiwibG93X2ZpZWxkIiwidm9sdW1lX2ZpZWxkIiwibWF4X3ZhbHVlIiwiaSIsImxlbmd0aCIsImRhdCIsImhpZ2giLCJsb3ciLCJ2b2wiLCJoaXN0X2luZGV4X2xvdyIsIk1hdGgiLCJmbG9vciIsImhpc3RfaW5kZXhfaGlnaCIsInZvbF9mcmFjdCIsImgiLCJyb3VuZCIsImoiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJ2YWwiLCJ4IiwieSIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsUUFBUUQsUUFBUSxtQkFBUixDQUFaOztBQUVBLElBQU1FLGtCQUFrQjtBQUN0QkMsYUFBVyxNQURX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Q0FVLGNBQVFzQyxTQUFSO0FBQ0F0QyxjQUFRdUMsTUFBUixDQUFlLENBQWYsRUFBa0J6QixZQUFsQjs7QUFFQSxXQUFJc0IsSUFBSSxDQUFSLEVBQVdBLElBQUk3QixZQUFmLEVBQTZCNkIsR0FBN0IsRUFDQTtBQUNFLFlBQUlJLE1BQU10QixLQUFLa0IsQ0FBTCxDQUFWOztBQUVBLFlBQUlLLElBQUlELE1BQU1sQixTQUFOLEdBQWtCWCxXQUExQjtBQUNBLFlBQUkrQixJQUFJNUIsZUFBZSxDQUFDc0IsSUFBSSxDQUFMLElBQVU3QixZQUFWLEdBQXlCTyxZQUF6QixHQUF3QyxHQUEvRCxDQUpGLENBSXNFOztBQUVwRWQsZ0JBQVEyQyxNQUFSLENBQWVGLENBQWYsRUFBa0JDLElBQUl6QixjQUF0QjtBQUNBakIsZ0JBQVEyQyxNQUFSLENBQWVGLENBQWYsRUFBa0JDLElBQUl6QixjQUF0QjtBQUNEOztBQUVEakIsY0FBUTJDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQ0EzQyxjQUFRNEMsU0FBUjtBQUNBNUMsY0FBUTZDLElBQVI7QUFFRDs7OztFQTNGOEI5RCxLOztBQStGakMrRCxPQUFPQyxPQUFQLEdBQWlCeEQsa0JBQWpCIiwiZmlsZSI6IlZvbHVtZVByb2ZpbGVMYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIExheWVyID0gcmVxdWlyZShcIi4uLy4uL2xheWVyL0xheWVyXCIpO1xuXG5jb25zdCBfZGVmYXVsdF9jb25maWcgPSB7XG4gIGhpZ2hJbnB1dDogXCJoaWdoXCIsXG4gIGxvd0lucHV0OiBcImxvd1wiLFxuICB2b2x1bWVJbnB1dDogXCJ2b2x1bWVcIixcbiAgcmVsYXRpdmVXaWR0aDogMC4zMzMzLFxuICB2ZXJ0ZXhDb3VudDogMTIwLFxuICBjb2xvcjogXCJyZ2JhKDE1MywgMTgwLCAyNTUsIDAuNylcIlxufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgdm9sdW1lIHByb2ZpbGUgY2hhcnQgbGF5ZXIuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgbGF5ZXIuTGF5ZXJcbiAqIEBtZW1iZXJvZiBsYXllci5pbmRpY2F0b3JcbiAqL1xuY2xhc3MgVm9sdW1lUHJvZmlsZUxheWVyIGV4dGVuZHMgTGF5ZXIge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBWb2x1bWVQcm9maWxlTGF5ZXJcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF8uZXh0ZW5kKHt9LCBfZGVmYXVsdF9jb25maWcsIGNvbmZpZyk7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgbGF5ZXIgb250byBjYW52YXNcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfSBkYXRhXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAqIEBwYXJhbSB7dmFsdWVUb1BpeGVsfSB2YWx1ZVRvUGl4ZWxcbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGluZGV4VG9QaXhlbFxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVmFsdWVCb3VuZHN9IHZhbHVlX2JvdW5kc1xuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdmFsdWVfYm91bmRzKSB7XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICB2YXIgZmllbGRfbWFwID0gZGF0YS5nZXRGaWVsZE1hcCgpO1xuICAgIHZhciBkYXRhX2FyciA9IGRhdGEuZ2V0UmF3RGF0YSgpO1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIHZhciB2ZXJ0ZXhfY291bnQgPSB0aGlzLnZlcnRleENvdW50O1xuICAgIHZhciBtaW4gPSB2YWx1ZV9ib3VuZHMubWluO1xuICAgIHZhciBtYXggPSB2YWx1ZV9ib3VuZHMubWF4O1xuICAgIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgICB2YXIgcGl4ZWxfd2lkdGggPSB0aGlzLnByb2ZpbGVXaWR0aCB8fCAodGhpcy5nZXREcmF3aW5nV2lkdGgoKSAqIHRoaXMucmVsYXRpdmVXaWR0aCk7XG4gICAgdmFyIHBpeGVsX2hlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIGJhcl93aWR0aCA9IHBpeGVsX2hlaWdodCAvIHZlcnRleF9jb3VudDtcbiAgICB2YXIgaGFsZl9iYXJfd2lkdGggPSBiYXJfd2lkdGggKiAwLjU7XG4gICAgdmFyIGhpc3QgPSBbXTtcbiAgICB2YXIgaGlnaF9maWVsZCA9IGZpZWxkX21hcFt0aGlzLmhpZ2hJbnB1dF07XG4gICAgdmFyIGxvd19maWVsZCA9IGZpZWxkX21hcFt0aGlzLmxvd0lucHV0XTtcbiAgICB2YXIgdm9sdW1lX2ZpZWxkID0gZmllbGRfbWFwW3RoaXMudm9sdW1lSW5wdXRdO1xuXG4gICAgdmFyIG1heF92YWx1ZSA9IDA7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdmVydGV4X2NvdW50OyBpKyspXG4gICAge1xuICAgICAgaGlzdFtpXSA9IDA7XG4gICAgfVxuXG4gICAgZm9yKGkgPSBvZmZzZXQgPj0gMCA/IG9mZnNldCA6IDA7IGkgPCBvZmZzZXQgKyBjb3VudCAmJiBpIDwgZGF0YV9hcnIubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IGRhdGFfYXJyW2ldO1xuICAgICAgdmFyIGhpZ2ggPSBkYXRbaGlnaF9maWVsZF0sIGxvdyA9IGRhdFtsb3dfZmllbGRdLCB2b2wgPSBkYXRbdm9sdW1lX2ZpZWxkXTtcblxuICAgICAgdmFyIGhpc3RfaW5kZXhfbG93ID0gTWF0aC5mbG9vcigobG93IC0gbWluKSAvIHJhbmdlICogdmVydGV4X2NvdW50KTsgLy8gZS5nLiAoNDQ3NSAtIDQ0NTApIC8gMjAwMCAqIDIwID0gZmxvb3IoMC4yNSkgPSAwXG4gICAgICB2YXIgaGlzdF9pbmRleF9oaWdoID0gTWF0aC5mbG9vcigoaGlnaCAtIG1pbikgLyByYW5nZSAqIHZlcnRleF9jb3VudCk7XG5cbiAgICAgIHZhciB2b2xfZnJhY3QgPSAxIC8gKChoaXN0X2luZGV4X2hpZ2ggLSBoaXN0X2luZGV4X2xvdykgKyAxKTtcblxuICAgICAgZm9yKHZhciBoID0gaGlzdF9pbmRleF9sb3c7IGggPD0gaGlzdF9pbmRleF9oaWdoOyBoKyspXG4gICAgICB7XG4gICAgICAgIGhpc3RbaF0gKz0gTWF0aC5yb3VuZCh2b2wgKiB2b2xfZnJhY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaiA9IDA7IGogPCB2ZXJ0ZXhfY291bnQ7IGorKylcbiAgICB7XG4gICAgICBpZihoaXN0W2pdID4gbWF4X3ZhbHVlKVxuICAgICAge1xuICAgICAgICBtYXhfdmFsdWUgPSBoaXN0W2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKDAsIHBpeGVsX2hlaWdodCk7XG5cbiAgICBmb3IoaiA9IDA7IGogPCB2ZXJ0ZXhfY291bnQ7IGorKylcbiAgICB7XG4gICAgICB2YXIgdmFsID0gaGlzdFtqXTtcblxuICAgICAgdmFyIHggPSB2YWwgLyBtYXhfdmFsdWUgKiBwaXhlbF93aWR0aDtcbiAgICAgIHZhciB5ID0gcGl4ZWxfaGVpZ2h0IC0gKGogKyAxKSAvIHZlcnRleF9jb3VudCAqIHBpeGVsX2hlaWdodCAqIDEuMDsgLy8gaW5kZXggKyAxIGJlY2F1c2Ugd2UgZmxpcCB5XG5cbiAgICAgIGNvbnRleHQubGluZVRvKHgsIHkgKyBoYWxmX2Jhcl93aWR0aCk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh4LCB5IC0gaGFsZl9iYXJfd2lkdGgpO1xuICAgIH1cblxuICAgIGNvbnRleHQubGluZVRvKDAsIDApO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgY29udGV4dC5maWxsKCk7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVm9sdW1lUHJvZmlsZUxheWVyO1xuIl19
},{"../../layer/Layer":25,"underscore":6}],37:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require("../core/Component");

/**
 * Represents a chart panel.
 * <br><br>
 * @extends core.Component
 * @memberof panel
 */

var Panel = function (_Component) {
  _inherits(Panel, _Component);

  /**
   * Instantiate Panel
   * @constructor
   * @param {object} config
   */
  function Panel(config) {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, config));
  }

  /**
   * Get class name of underlying HTMLElement
   * @returns {string}
   */


  _createClass(Panel, [{
    key: "getClassName",
    value: function getClassName() {
      return _get(Panel.prototype.__proto__ || Object.getPrototypeOf(Panel.prototype), "getClassName", this).call(this) + " panel";
    }

    /**
     * Get panel width
     * @returns {number} Width in pixels
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.getParentChart().getWidth();
    }

    /**
     * Get panel drawing width
     * @returns {number} Drawing width in pixels
     */

  }, {
    key: "getDrawingWidth",
    value: function getDrawingWidth() {
      return this.getParentChart().getDrawingWidth();
    }
  }]);

  return Panel;
}(Component);

module.exports = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhbmVsLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInJlcXVpcmUiLCJQYW5lbCIsImNvbmZpZyIsImdldFBhcmVudENoYXJ0IiwiZ2V0V2lkdGgiLCJnZXREcmF3aW5nV2lkdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsUUFBUSxtQkFBUixDQUFoQjs7QUFFQTs7Ozs7OztJQU1NQyxLOzs7QUFFSjs7Ozs7QUFLQSxpQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBLHlHQUNaQSxNQURZO0FBRW5COztBQUVEOzs7Ozs7OzttQ0FJZTtBQUNiLGFBQU8sNkdBQXVCLFFBQTlCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxhQUFPLEtBQUtDLGNBQUwsR0FBc0JDLFFBQXRCLEVBQVA7QUFDRDs7QUFFRDs7Ozs7OztzQ0FJa0I7QUFDaEIsYUFBTyxLQUFLRCxjQUFMLEdBQXNCRSxlQUF0QixFQUFQO0FBQ0Q7Ozs7RUFqQ2lCTixTOztBQXFDcEJPLE9BQU9DLE9BQVAsR0FBaUJOLEtBQWpCIiwiZmlsZSI6IlBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiLi4vY29yZS9Db21wb25lbnRcIik7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGNoYXJ0IHBhbmVsLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIGNvcmUuQ29tcG9uZW50XG4gKiBAbWVtYmVyb2YgcGFuZWxcbiAqL1xuY2xhc3MgUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBQYW5lbFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xhc3MgbmFtZSBvZiB1bmRlcmx5aW5nIEhUTUxFbGVtZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldENsYXNzTmFtZSgpICsgXCIgcGFuZWxcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFuZWwgd2lkdGhcbiAgICogQHJldHVybnMge251bWJlcn0gV2lkdGggaW4gcGl4ZWxzXG4gICAqL1xuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRDaGFydCgpLmdldFdpZHRoKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhbmVsIGRyYXdpbmcgd2lkdGhcbiAgICogQHJldHVybnMge251bWJlcn0gRHJhd2luZyB3aWR0aCBpbiBwaXhlbHNcbiAgICovXG4gIGdldERyYXdpbmdXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRDaGFydCgpLmdldERyYXdpbmdXaWR0aCgpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYW5lbDtcbiJdfQ==
},{"../core/Component":8}],38:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var TimePanel = require("../panel/TimePanel");
var TimeLabelsLayer = require("../layer/TimeLabelsLayer");

var _default_config = {
  height: 16,
  crosshair: {
    value: false,
    time: {
      label: true
    }
  }
};

/**
 * Represents a panel, for displaying for the display of time labels.
 * <br><br>
 * @extends panel.TimePanel
 * @memberof panel
 */

var TimeLabelsPanel = function (_TimePanel) {
  _inherits(TimeLabelsPanel, _TimePanel);

  /**
   * Instantiate TimeLabelsPanel
   * @constructor
   * @param {Object} config
   */
  function TimeLabelsPanel(config) {
    _classCallCheck(this, TimeLabelsPanel);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (TimeLabelsPanel.__proto__ || Object.getPrototypeOf(TimeLabelsPanel)).call(this, config));
  }

  /**
   * Initialize layers
   * <br><br>
   * This must be invoked.
   */


  _createClass(TimeLabelsPanel, [{
    key: "initLayers",
    value: function initLayers() {

      this.primaryLayer = this.primaryLayer || new TimeLabelsLayer({
        timeGrid: this.getParentChart().getTimeGrid()
      });
      this.primaryLayer.setParentComponent(this);
    }

    /**
     * Get class name of underlying HTMLElement
     * @returns {string}
     */

  }, {
    key: "getClassName",
    value: function getClassName() {
      return _get(TimeLabelsPanel.prototype.__proto__ || Object.getPrototypeOf(TimeLabelsPanel.prototype), "getClassName", this).call(this) + " timelabelspanel";
    }
  }]);

  return TimeLabelsPanel;
}(TimePanel);

module.exports = TimeLabelsPanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVMYWJlbHNQYW5lbC5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIlRpbWVQYW5lbCIsIlRpbWVMYWJlbHNMYXllciIsIl9kZWZhdWx0X2NvbmZpZyIsImhlaWdodCIsImNyb3NzaGFpciIsInZhbHVlIiwidGltZSIsImxhYmVsIiwiVGltZUxhYmVsc1BhbmVsIiwiY29uZmlnIiwiZXh0ZW5kIiwicHJpbWFyeUxheWVyIiwidGltZUdyaWQiLCJnZXRQYXJlbnRDaGFydCIsImdldFRpbWVHcmlkIiwic2V0UGFyZW50Q29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsWUFBWUQsUUFBUSxvQkFBUixDQUFoQjtBQUNBLElBQUlFLGtCQUFrQkYsUUFBUSwwQkFBUixDQUF0Qjs7QUFFQSxJQUFNRyxrQkFBa0I7QUFDdEJDLFVBQVEsRUFEYztBQUV0QkMsYUFBVztBQUNUQyxXQUFPLEtBREU7QUFFVEMsVUFBTTtBQUNKQyxhQUFPO0FBREg7QUFGRztBQUZXLENBQXhCOztBQVVBOzs7Ozs7O0lBTU1DLGU7OztBQUVKOzs7OztBQUtBLDJCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCQSxhQUFTWCxFQUFFWSxNQUFGLENBQVMsRUFBVCxFQUFhUixlQUFiLEVBQThCTyxNQUE5QixDQUFUO0FBRGtCLDZIQUVaQSxNQUZZO0FBR25COztBQUVEOzs7Ozs7Ozs7aUNBS2E7O0FBRVgsV0FBS0UsWUFBTCxHQUFvQixLQUFLQSxZQUFMLElBQXFCLElBQUlWLGVBQUosQ0FBb0I7QUFDM0RXLGtCQUFVLEtBQUtDLGNBQUwsR0FBc0JDLFdBQXRCO0FBRGlELE9BQXBCLENBQXpDO0FBR0EsV0FBS0gsWUFBTCxDQUFrQkksa0JBQWxCLENBQXFDLElBQXJDO0FBRUQ7O0FBRUQ7Ozs7Ozs7bUNBSWU7QUFDYixhQUFPLGlJQUF1QixrQkFBOUI7QUFDRDs7OztFQWhDMkJmLFM7O0FBb0M5QmdCLE9BQU9DLE9BQVAsR0FBaUJULGVBQWpCIiwiZmlsZSI6IlRpbWVMYWJlbHNQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgXyA9IHJlcXVpcmUoXCJ1bmRlcnNjb3JlXCIpO1xudmFyIFRpbWVQYW5lbCA9IHJlcXVpcmUoXCIuLi9wYW5lbC9UaW1lUGFuZWxcIik7XG52YXIgVGltZUxhYmVsc0xheWVyID0gcmVxdWlyZShcIi4uL2xheWVyL1RpbWVMYWJlbHNMYXllclwiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBoZWlnaHQ6IDE2LFxuICBjcm9zc2hhaXI6IHtcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgdGltZToge1xuICAgICAgbGFiZWw6IHRydWVcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhbmVsLCBmb3IgZGlzcGxheWluZyBmb3IgdGhlIGRpc3BsYXkgb2YgdGltZSBsYWJlbHMuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgcGFuZWwuVGltZVBhbmVsXG4gKiBAbWVtYmVyb2YgcGFuZWxcbiAqL1xuY2xhc3MgVGltZUxhYmVsc1BhbmVsIGV4dGVuZHMgVGltZVBhbmVsIHtcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUgVGltZUxhYmVsc1BhbmVsXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBfLmV4dGVuZCh7fSwgX2RlZmF1bHRfY29uZmlnLCBjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBsYXllcnNcbiAgICogPGJyPjxicj5cbiAgICogVGhpcyBtdXN0IGJlIGludm9rZWQuXG4gICAqL1xuICBpbml0TGF5ZXJzKCkge1xuXG4gICAgdGhpcy5wcmltYXJ5TGF5ZXIgPSB0aGlzLnByaW1hcnlMYXllciB8fCBuZXcgVGltZUxhYmVsc0xheWVyKHtcbiAgICAgIHRpbWVHcmlkOiB0aGlzLmdldFBhcmVudENoYXJ0KCkuZ2V0VGltZUdyaWQoKVxuICAgIH0pO1xuICAgIHRoaXMucHJpbWFyeUxheWVyLnNldFBhcmVudENvbXBvbmVudCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzcyBuYW1lIG9mIHVuZGVybHlpbmcgSFRNTEVsZW1lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2xhc3NOYW1lKCkgKyBcIiB0aW1lbGFiZWxzcGFuZWxcIjtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZUxhYmVsc1BhbmVsO1xuIl19
},{"../layer/TimeLabelsLayer":28,"../panel/TimePanel":39,"underscore":6}],39:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Panel = require("../panel/Panel");
var TimeGridLayer = require("../layer/TimeGridLayer");
var adjustCanvas = require('../core/adjustCanvas');

var _default_config = {};

/**
 * Represents a panel with time axis.
 * <br><br>
 * @extends panel.Panel
 * @memberof panel
 */

var TimePanel = function (_Panel) {
  _inherits(TimePanel, _Panel);

  /**
   * Instantiate TimePanel
   * @constructor
   * @param {Object} config
   */
  function TimePanel(config) {
    _classCallCheck(this, TimePanel);

    config = _.extend({}, _default_config, config);
    return _possibleConstructorReturn(this, (TimePanel.__proto__ || Object.getPrototypeOf(TimePanel)).call(this, config));
  }

  /**
   * Set primary layer
   * <br><br>
   * This must be invoked before initLayers.
   * @param {layer.Layer} layer
   */


  _createClass(TimePanel, [{
    key: "setPrimaryLayer",
    value: function setPrimaryLayer(layer) {
      this.primaryLayer = layer;
      this.primaryLayer.setParentComponent(this);
    }

    /**
     * Initialize layers
     * <br><br>
     * This must be invoked.
     */

  }, {
    key: "initLayers",
    value: function initLayers() {

      if (this.grid) {
        // time grid
        this.time_grid_layer = this.time_grid_layer || new TimeGridLayer({
          timeGrid: this.getParentChart().getTimeGrid()
        });
        this.time_grid_layer.setParentComponent(this);
      }

      this.primaryLayer.setParentComponent(this);
    }

    /**
     * Get class name of underlying HTMLElement
     * @returns {string}
     */

  }, {
    key: "getClassName",
    value: function getClassName() {
      return _get(TimePanel.prototype.__proto__ || Object.getPrototypeOf(TimePanel.prototype), "getClassName", this).call(this) + " timepanel";
    }

    /**
     * Create HTMLElement
     * <br><br>
     * Overrides method of super.
     * @returns {external.HTMLCanvasElement}
     */

  }, {
    key: "createElement",
    value: function createElement() {
      var canvas = window.document.createElement("CANVAS");
      canvas.className = this.getClassName();
      canvas.setAttribute("width", this.getWidth());
      canvas.setAttribute("height", this.getHeight());
      return canvas;
    }

    /**
     * Refresh canvas width and height
     * @private
     */

  }, {
    key: "_refresh",
    value: function _refresh() {
      var canvas = this.getEl();
      canvas.setAttribute("width", this.getWidth());
      canvas.setAttribute("height", this.getHeight());
      adjustCanvas(canvas);
    }

    /**
     * Get canvas context
     * @returns {CanvasRenderingContext2D}
     */

  }, {
    key: "getContext",
    value: function getContext() {
      return this.getEl().getContext("2d");
    }

    /**
     * Precompute all layers.
     * <br><br>
     * This is invoked before draw().
     * @param {timeseries.TimeSeriesData}
     */

  }, {
    key: "precompute",
    value: function precompute(data) {

      if (this.primaryLayer.precompute) {
        this.primaryLayer.precompute(data);
      }

      var layers = this.getAllLayers();
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.precompute) {
          layer.precompute(data);
        }
      }
    }

    /**
     * Draw all layers.
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, indexToPixel) {
      var layers = this.getAllLayers();
      this._refresh();

      // Draw grid
      if (this.grid) {
        // time grid
        this.time_grid_layer = this.time_grid_layer || new TimeGridLayer({});

        this.time_grid_layer.draw(data, count, offset, null, indexToPixel, null);
      }

      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.draw) {
          layer.draw(data, count, offset, null, indexToPixel, null);
        }
      }

      // Draw primary layer
      this.primaryLayer.draw(data, count, offset, null, indexToPixel, null);
    }
  }]);

  return TimePanel;
}(Panel);

module.exports = TimePanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVQYW5lbC5qcyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsIlBhbmVsIiwiVGltZUdyaWRMYXllciIsImFkanVzdENhbnZhcyIsIl9kZWZhdWx0X2NvbmZpZyIsIlRpbWVQYW5lbCIsImNvbmZpZyIsImV4dGVuZCIsImxheWVyIiwicHJpbWFyeUxheWVyIiwic2V0UGFyZW50Q29tcG9uZW50IiwiZ3JpZCIsInRpbWVfZ3JpZF9sYXllciIsInRpbWVHcmlkIiwiZ2V0UGFyZW50Q2hhcnQiLCJnZXRUaW1lR3JpZCIsImNhbnZhcyIsIndpbmRvdyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiZ2V0RWwiLCJnZXRDb250ZXh0IiwiZGF0YSIsInByZWNvbXB1dGUiLCJsYXllcnMiLCJnZXRBbGxMYXllcnMiLCJpIiwibGVuZ3RoIiwiY291bnQiLCJvZmZzZXQiLCJpbmRleFRvUGl4ZWwiLCJfcmVmcmVzaCIsImRyYXciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsSUFBSUMsUUFBUSxZQUFSLENBQVI7QUFDQSxJQUFJQyxRQUFRRCxRQUFRLGdCQUFSLENBQVo7QUFDQSxJQUFJRSxnQkFBZ0JGLFFBQVEsd0JBQVIsQ0FBcEI7QUFDQSxJQUFJRyxlQUFlSCxRQUFRLHNCQUFSLENBQW5COztBQUVBLElBQU1JLGtCQUFrQixFQUF4Qjs7QUFHQTs7Ozs7OztJQU1NQyxTOzs7QUFFSjs7Ozs7QUFLQSxxQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQkEsYUFBU1AsRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYUgsZUFBYixFQUE4QkUsTUFBOUIsQ0FBVDtBQURrQixpSEFFWkEsTUFGWTtBQUduQjs7QUFFRDs7Ozs7Ozs7OztvQ0FNZ0JFLEssRUFBTztBQUNyQixXQUFLQyxZQUFM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NkJNLEtBQTdCLEVBQW9DQyxNQUFwQyxFQUE0QyxJQUE1QyxFQUFrREMsWUFBbEQsRUFBZ0UsSUFBaEU7QUFFRDs7OztFQTdJcUJsQyxLOztBQWlKeEJxQyxPQUFPQyxPQUFQLEdBQWlCbEMsU0FBakIiLCJmaWxlIjoiVGltZVBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XG52YXIgUGFuZWwgPSByZXF1aXJlKFwiLi4vcGFuZWwvUGFuZWxcIik7XG52YXIgVGltZUdyaWRMYXllciA9IHJlcXVpcmUoXCIuLi9sYXllci9UaW1lR3JpZExheWVyXCIpO1xudmFyIGFkanVzdENhbnZhcyA9IHJlcXVpcmUoJy4uL2NvcmUvYWRqdXN0Q2FudmFzJyk7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBhbmVsIHdpdGggdGltZSBheGlzLlxuICogPGJyPjxicj5cbiAqIEBleHRlbmRzIHBhbmVsLlBhbmVsXG4gKiBAbWVtYmVyb2YgcGFuZWxcbiAqL1xuY2xhc3MgVGltZVBhbmVsIGV4dGVuZHMgUGFuZWwge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBUaW1lUGFuZWxcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IF8uZXh0ZW5kKHt9LCBfZGVmYXVsdF9jb25maWcsIGNvbmZpZyk7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJpbWFyeSBsYXllclxuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIG11c3QgYmUgaW52b2tlZCBiZWZvcmUgaW5pdExheWVycy5cbiAgICogQHBhcmFtIHtsYXllci5MYXllcn0gbGF5ZXJcbiAgICovXG4gIHNldFByaW1hcnlMYXllcihsYXllcikge1xuICAgIHRoaXMucHJpbWFyeUxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5wcmltYXJ5TGF5ZXIuc2V0UGFyZW50Q29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgbGF5ZXJzXG4gICAqIDxicj48YnI+XG4gICAqIFRoaXMgbXVzdCBiZSBpbnZva2VkLlxuICAgKi9cbiAgaW5pdExheWVycygpIHtcblxuICAgIGlmKHRoaXMuZ3JpZClcbiAgICB7XG4gICAgICAvLyB0aW1lIGdyaWRcbiAgICAgIHRoaXMudGltZV9ncmlkX2xheWVyID0gdGhpcy50aW1lX2dyaWRfbGF5ZXIgfHwgbmV3IFRpbWVHcmlkTGF5ZXIoe1xuICAgICAgICB0aW1lR3JpZDogdGhpcy5nZXRQYXJlbnRDaGFydCgpLmdldFRpbWVHcmlkKClcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lX2dyaWRfbGF5ZXIuc2V0UGFyZW50Q29tcG9uZW50KHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucHJpbWFyeUxheWVyLnNldFBhcmVudENvbXBvbmVudCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbGFzcyBuYW1lIG9mIHVuZGVybHlpbmcgSFRNTEVsZW1lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0Q2xhc3NOYW1lKCkgKyBcIiB0aW1lcGFuZWxcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgSFRNTEVsZW1lbnRcbiAgICogPGJyPjxicj5cbiAgICogT3ZlcnJpZGVzIG1ldGhvZCBvZiBzdXBlci5cbiAgICogQHJldHVybnMge2V4dGVybmFsLkhUTUxDYW52YXNFbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICB2YXIgY2FudmFzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJDQU5WQVNcIik7XG4gICAgY2FudmFzLmNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lKCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHRoaXMuZ2V0V2lkdGgoKSk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB0aGlzLmdldEhlaWdodCgpKTtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY2FudmFzIHdpZHRoIGFuZCBoZWlnaHRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9yZWZyZXNoKCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmdldEVsKCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHRoaXMuZ2V0V2lkdGgoKSk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBhZGp1c3RDYW52YXMoY2FudmFzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FudmFzIGNvbnRleHRcbiAgICogQHJldHVybnMge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICovXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RWwoKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH1cblxuICAvKipcbiAgICogUHJlY29tcHV0ZSBhbGwgbGF5ZXJzLlxuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIGlzIGludm9rZWQgYmVmb3JlIGRyYXcoKS5cbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlRpbWVTZXJpZXNEYXRhfVxuICAgKi9cbiAgcHJlY29tcHV0ZShkYXRhKSB7XG5cbiAgICBpZih0aGlzLnByaW1hcnlMYXllci5wcmVjb21wdXRlKVxuICAgIHtcbiAgICAgIHRoaXMucHJpbWFyeUxheWVyLnByZWNvbXB1dGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIGxheWVycyA9IHRoaXMuZ2V0QWxsTGF5ZXJzKCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxheWVycy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbaV07XG4gICAgICBpZihsYXllci5wcmVjb21wdXRlKVxuICAgICAge1xuICAgICAgICBsYXllci5wcmVjb21wdXRlKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEcmF3IGFsbCBsYXllcnMuXG4gICAqIEBwYXJhbSB7dGltZXNlcmllcy5UaW1lU2VyaWVzRGF0YX0gZGF0YVxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICAgKiBAcGFyYW0ge2luZGV4VG9QaXhlbH0gaW5kZXhUb1BpeGVsXG4gICAqL1xuICBkcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIGluZGV4VG9QaXhlbCkge1xuICAgIHZhciBsYXllcnMgPSB0aGlzLmdldEFsbExheWVycygpO1xuICAgIHRoaXMuX3JlZnJlc2goKTtcblxuICAgIC8vIERyYXcgZ3JpZFxuICAgIGlmKHRoaXMuZ3JpZClcbiAgICB7XG4gICAgICAvLyB0aW1lIGdyaWRcbiAgICAgIHRoaXMudGltZV9ncmlkX2xheWVyID0gdGhpcy50aW1lX2dyaWRfbGF5ZXIgfHwgbmV3IFRpbWVHcmlkTGF5ZXIoe1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGltZV9ncmlkX2xheWVyLmRyYXcoZGF0YSwgY291bnQsIG9mZnNldCwgbnVsbCwgaW5kZXhUb1BpeGVsLCBudWxsKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGF5ZXJzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1tpXTtcbiAgICAgIGlmKGxheWVyLmRyYXcpXG4gICAgICB7XG4gICAgICAgIGxheWVyLmRyYXcoZGF0YSwgY291bnQsIG9mZnNldCwgbnVsbCwgaW5kZXhUb1BpeGVsLCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEcmF3IHByaW1hcnkgbGF5ZXJcbiAgICB0aGlzLnByaW1hcnlMYXllci5kcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIG51bGwsIGluZGV4VG9QaXhlbCwgbnVsbCk7XG5cbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZVBhbmVsO1xuIl19
},{"../core/adjustCanvas":12,"../layer/TimeGridLayer":27,"../panel/Panel":37,"underscore":6}],40:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var TimePanel = require("../panel/TimePanel");
var TimeGridLayer = require("../layer/TimeGridLayer");
var ValueGridLayer = require("../layer/ValueGridLayer");

var _default_config = {
  paddingTop: 10,
  paddingBottom: 10,
  primaryAtBack: false,
  valueGridLayerConfig: {},
  timeGridLayerConfig: {}
};

/**
 * Represents a panel with time and value axis.
 * <br><br>
 * @extends panel.TimePanel
 * @memberof panel
 */

var TimeValuePanel = function (_TimePanel) {
  _inherits(TimeValuePanel, _TimePanel);

  /**
   * Instantiate TimeValuePanel
   * @constructor
   * @param {Object} config
   */
  function TimeValuePanel(config) {
    _classCallCheck(this, TimeValuePanel);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (TimeValuePanel.__proto__ || Object.getPrototypeOf(TimeValuePanel)).call(this, config));

    _this._pixelToValue = function () {
      return 0.0;
    };
    _this.drawingHeight = Math.round(_this.getHeight() - (_this.paddingTop + _this.paddingBottom));
    return _this;
  }

  /**
   * Initialize layers
   * <br><br>
   * This must be invoked.
   */


  _createClass(TimeValuePanel, [{
    key: "initLayers",
    value: function initLayers() {

      if (this.grid) {
        var value_lines;
        if (_typeof(this.grid) === "object" && this.grid.value) {
          value_lines = this.grid.value.lines;
        }

        // value grid
        this.value_grid_layer = this.value_grid_layer || new ValueGridLayer(_.extend(this.valueGridLayerConfig, {
          labelWidth: this.getParentChart().getPaddingRight(),
          lines: value_lines
        }));
        this.value_grid_layer.setParentComponent(this);

        // time grid
        this.time_grid_layer = this.time_grid_layer || new TimeGridLayer(_.extend(this.timeGridLayerConfig, {
          timeGrid: this.getParentChart().getTimeGrid()
        }));
        this.time_grid_layer.setParentComponent(this);
      }

      this.primaryLayer.setParentComponent(this);
    }

    /**
     * Get class name of underlying HTMLElement
     * @returns {string}
     */

  }, {
    key: "getClassName",
    value: function getClassName() {
      return _get(TimeValuePanel.prototype.__proto__ || Object.getPrototypeOf(TimeValuePanel.prototype), "getClassName", this).call(this) + " timevaluepanel";
    }

    /**
     * Get drawing height
     * @returns {number}
     */

  }, {
    key: "getDrawingHeight",
    value: function getDrawingHeight() {
      return this.drawingHeight;
    }

    /**
     * Draw all layers.
     * @param {timeseries.TimeSeriesData} data
     * @param {number} count
     * @param {number} offset
     * @param {indexToPixel} indexToPixel
     */

  }, {
    key: "draw",
    value: function draw(data, count, offset, indexToPixel) {
      var value_bounds = data.findValueBounds(count, offset, this.getMinAndMaxFields(), this.getMinAndMaxValues());
      var valueToPixel = this.getValueToPixelMapper(value_bounds, true);
      this._pixelToValue = this.getPixelToValueMapper(value_bounds, true);
      var layers = this.getAllLayers();
      this._refresh();

      // Draw grid
      if (this.grid) {
        if (this.value_grid_layer) {
          this.value_grid_layer.draw(data, count, offset, valueToPixel, indexToPixel, value_bounds);
        }
        if (this.time_grid_layer) {
          this.time_grid_layer.draw(data, count, offset, valueToPixel, indexToPixel, value_bounds);
        }
      }

      if (this.primaryAtBack === true) {
        // Draw primary layer
        this.primaryLayer.draw(data, count, offset, valueToPixel, indexToPixel, value_bounds);
      }

      // Draw overlays
      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.draw) {
          layer.draw(data, count, offset, valueToPixel, indexToPixel, value_bounds);
        }
      }

      if (this.primaryAtBack === undefined || this.primaryAtBack !== true) {
        // Draw primary layer
        this.primaryLayer.draw(data, count, offset, valueToPixel, indexToPixel, value_bounds);
      }
    }

    /**
     * Get minimum and maximum fields for this panel.
     * @returns {timeseries.MinAndMaxFields}
     */

  }, {
    key: "getMinAndMaxFields",
    value: function getMinAndMaxFields() {
      return {
        min: this.primaryLayer.getMinField(),
        max: this.primaryLayer.getMaxField()
      };
    }

    /**
     * Get minimum and maximum values for this panel.
     * @returns {timeseries.MinAndMaxValues}
     */

  }, {
    key: "getMinAndMaxValues",
    value: function getMinAndMaxValues() {
      return {
        min: this.primaryLayer.getMinValue(),
        max: this.primaryLayer.getMaxValue()
      };
    }

    /**
    * valueToPixel
    * @callback valueToPixel
    * @param {number} value
    * @returns {number} y-value expressed in unit pixels
    */

    /**
     * Get value to pixel mapper function
     * @param {timeseries.ValueBounds} value_bounds
     * @param {boolean} flip
     * @returns {valueToPixel} function
     */

  }, {
    key: "getValueToPixelMapper",
    value: function getValueToPixelMapper(value_bounds, flip) {
      var val_min = value_bounds.min;
      var val_max = value_bounds.max;
      var val_range = val_max - val_min;
      var px_height = this.getDrawingHeight();
      var px_padding_offset = this.paddingTop;
      var mapFunc;
      if (flip === true) {
        mapFunc = function mapFunc(val) {
          return px_height - (val - val_min) / val_range * px_height + px_padding_offset;
        };
      } else {
        mapFunc = function mapFunc(val) {
          return (val - val_min) / val_range * px_height - px_padding_offset;
        };
      }
      return mapFunc;
    }

    /**
    * pixelToValue
    * @callback pixelToValue
    * @param {number} y-value expressed in unit pixels
    * @returns {number} value corresponding to time series data
    */

    /**
     * Get pixel to vallue mapper function
     * @param {timeseries.ValueBounds} value_bounds
     * @param {boolean} flip
     * @returns {pixelToValue}
     */

  }, {
    key: "getPixelToValueMapper",
    value: function getPixelToValueMapper(value_bounds, flip) {
      var val_min = value_bounds.min;
      var val_max = value_bounds.max;
      var val_range = val_max - val_min;
      var px_height = this.getDrawingHeight();
      var px_padding_offset = this.paddingTop;
      var mapFunc;
      if (flip === true) {
        mapFunc = function mapFunc(px) {
          return (px_height - (px - px_padding_offset)) / px_height * val_range + val_min;
        };
      } else {
        mapFunc = function mapFunc(px) {
          return (px + px_padding_offset) / px_height * val_range + val_min;
        };
      }
      return mapFunc;
    }
  }, {
    key: "pixelToValue",
    value: function pixelToValue(px) {
      return this._pixelToValue(px);
    }
  }]);

  return TimeValuePanel;
}(TimePanel);

module.exports = TimeValuePanel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVWYWx1ZVBhbmVsLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiVGltZVBhbmVsIiwiVGltZUdyaWRMYXllciIsIlZhbHVlR3JpZExheWVyIiwiX2RlZmF1bHRfY29uZmlnIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwcmltYXJ5QXRCYWNrIiwidmFsdWVHcmlkTGF5ZXJDb25maWciLCJ0aW1lR3JpZExheWVyQ29uZmlnIiwiVGltZVZhbHVlUGFuZWwiLCJjb25maWciLCJleHRlbmQiLCJfcGl4ZWxUb1ZhbHVlIiwiZHJhd2luZ0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsImdldEhlaWdodCIsImdyaWQiLCJ2YWx1ZV9saW5lcyIsInZhbHVlIiwibGluZXMiLCJ2YWx1ZV9ncmlkX2xheWVyIiwibGFiZWxXaWR0aCIsImdldFBhcmVudENoYXJ0IiwiZ2V0UGFkZGluZ1JpZ2h0Iiwic2V0UGFyZW50Q29tcG9uZW50IiwidGltZV9ncmlkX2xheWVyIiwidGltZUdyaWQiLCJnZXRUaW1lR3JpZCIsInByaW1hcnlMYXllciIsImRhdGEiLCJjb3VudCIsIm9mZnNldCIsImluZGV4VG9QaXhlbCIsInZhbHVlX2JvdW5kcyIsImZpbmRWYWx1ZUJvdW5kcyIsImdldE1pbkFuZE1heEZpZWxkcyIsImdldE1pbkFuZE1heFZhbHVlcyIsInZhbHVlVG9QaXhlbCIsImdldFZhbHVlVG9QaXhlbE1hcHBlciIsImdldFBpeGVsVG9WYWx1ZU1hcHBlciIsImxheWVycyIsImdldEFsbExheWVycyIsIl9yZWZyZXNoIiwiZHJhdyIsImkiLCJsZW5ndGgiLCJsYXllciIsInVuZGVmaW5lZCIsIm1pbiIsImdldE1pbkZpZWxkIiwibWF4IiwiZ2V0TWF4RmllbGQiLCJnZXRNaW5WYWx1ZSIsImdldE1heFZhbHVlIiwiZmxpcCIsInZhbF9taW4iLCJ2YWxfbWF4IiwidmFsX3JhbmdlIiwicHhfaGVpZ2h0IiwiZ2V0RHJhd2luZ0hlaWdodCIsInB4X3BhZGRpbmdf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ekQsVUFBN0I7QUFDQSxVQUFJMEQsT0FBSjtBQUNBLFVBQUdQLFNBQVMsSUFBWixFQUNBO0FBQ0VPLGtCQUFVLGlCQUFTRSxFQUFULEVBQWE7QUFDckIsaUJBQU8sQ0FBQ0wsYUFBYUssS0FBS0gsaUJBQWxCLENBQUQsSUFBeUNGLFNBQXpDLEdBQXFERCxTQUFyRCxHQUFpRUYsT0FBeEU7QUFDRCxTQUZEO0FBR0QsT0FMRCxNQU9BO0FBQ0VNLGtCQUFVLGlCQUFTRSxFQUFULEVBQWE7QUFDckIsaUJBQU8sQ0FBQ0EsS0FBS0gsaUJBQU4sSUFBMkJGLFNBQTNCLEdBQXVDRCxTQUF2QyxHQUFtREYsT0FBMUQ7QUFDRCxTQUZEO0FBR0Q7QUFDRCxhQUFPTSxPQUFQO0FBQ0Q7OztpQ0FFWUUsRSxFQUFJO0FBQ2YsYUFBTyxLQUFLcEQsYUFBTCxDQUFtQm9ELEVBQW5CLENBQVA7QUFDRDs7OztFQWhOMEJoRSxTOztBQW9ON0JpRSxPQUFPQyxPQUFQLEdBQWlCekQsY0FBakIiLCJmaWxlIjoiVGltZVZhbHVlUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF8gPSByZXF1aXJlKFwidW5kZXJzY29yZVwiKTtcbnZhciBUaW1lUGFuZWwgPSByZXF1aXJlKFwiLi4vcGFuZWwvVGltZVBhbmVsXCIpO1xudmFyIFRpbWVHcmlkTGF5ZXIgPSByZXF1aXJlKFwiLi4vbGF5ZXIvVGltZUdyaWRMYXllclwiKTtcbnZhciBWYWx1ZUdyaWRMYXllciA9IHJlcXVpcmUoXCIuLi9sYXllci9WYWx1ZUdyaWRMYXllclwiKTtcblxuY29uc3QgX2RlZmF1bHRfY29uZmlnID0ge1xuICBwYWRkaW5nVG9wOiAxMCxcbiAgcGFkZGluZ0JvdHRvbTogMTAsXG4gIHByaW1hcnlBdEJhY2s6IGZhbHNlLFxuICB2YWx1ZUdyaWRMYXllckNvbmZpZzoge30sXG4gIHRpbWVHcmlkTGF5ZXJDb25maWc6IHt9XG59O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwYW5lbCB3aXRoIHRpbWUgYW5kIHZhbHVlIGF4aXMuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgcGFuZWwuVGltZVBhbmVsXG4gKiBAbWVtYmVyb2YgcGFuZWxcbiAqL1xuY2xhc3MgVGltZVZhbHVlUGFuZWwgZXh0ZW5kcyBUaW1lUGFuZWwge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBUaW1lVmFsdWVQYW5lbFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuX3BpeGVsVG9WYWx1ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIDAuMDt9O1xuICAgIHRoaXMuZHJhd2luZ0hlaWdodCA9IE1hdGgucm91bmQodGhpcy5nZXRIZWlnaHQoKSAtICh0aGlzLnBhZGRpbmdUb3AgKyB0aGlzLnBhZGRpbmdCb3R0b20pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGxheWVyc1xuICAgKiA8YnI+PGJyPlxuICAgKiBUaGlzIG11c3QgYmUgaW52b2tlZC5cbiAgICovXG4gIGluaXRMYXllcnMoKSB7XG5cbiAgICBpZih0aGlzLmdyaWQpXG4gICAge1xuICAgICAgdmFyIHZhbHVlX2xpbmVzO1xuICAgICAgaWYodHlwZW9mIHRoaXMuZ3JpZCA9PT0gXCJvYmplY3RcIiAmJiB0aGlzLmdyaWQudmFsdWUpXG4gICAgICB7XG4gICAgICAgIHZhbHVlX2xpbmVzID0gdGhpcy5ncmlkLnZhbHVlLmxpbmVzO1xuICAgICAgfVxuXG4gICAgICAvLyB2YWx1ZSBncmlkXG4gICAgICB0aGlzLnZhbHVlX2dyaWRfbGF5ZXIgPSB0aGlzLnZhbHVlX2dyaWRfbGF5ZXIgfHwgbmV3IFZhbHVlR3JpZExheWVyKF8uZXh0ZW5kKHRoaXMudmFsdWVHcmlkTGF5ZXJDb25maWcsIHtcbiAgICAgICAgbGFiZWxXaWR0aDogdGhpcy5nZXRQYXJlbnRDaGFydCgpLmdldFBhZGRpbmdSaWdodCgpLFxuICAgICAgICBsaW5lczogdmFsdWVfbGluZXNcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMudmFsdWVfZ3JpZF9sYXllci5zZXRQYXJlbnRDb21wb25lbnQodGhpcyk7XG5cbiAgICAgIC8vIHRpbWUgZ3JpZFxuICAgICAgdGhpcy50aW1lX2dyaWRfbGF5ZXIgPSB0aGlzLnRpbWVfZ3JpZF9sYXllciB8fCBuZXcgVGltZUdyaWRMYXllcihfLmV4dGVuZCh0aGlzLnRpbWVHcmlkTGF5ZXJDb25maWcsIHtcbiAgICAgICAgdGltZUdyaWQ6IHRoaXMuZ2V0UGFyZW50Q2hhcnQoKS5nZXRUaW1lR3JpZCgpXG4gICAgICB9KSk7XG4gICAgICB0aGlzLnRpbWVfZ3JpZF9sYXllci5zZXRQYXJlbnRDb21wb25lbnQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmltYXJ5TGF5ZXIuc2V0UGFyZW50Q29tcG9uZW50KHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsYXNzIG5hbWUgb2YgdW5kZXJseWluZyBIVE1MRWxlbWVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0Q2xhc3NOYW1lKCkge1xuICAgIHJldHVybiBzdXBlci5nZXRDbGFzc05hbWUoKSArIFwiIHRpbWV2YWx1ZXBhbmVsXCI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRyYXdpbmcgaGVpZ2h0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXREcmF3aW5nSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdpbmdIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogRHJhdyBhbGwgbGF5ZXJzLlxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVGltZVNlcmllc0RhdGF9IGRhdGFcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHtpbmRleFRvUGl4ZWx9IGluZGV4VG9QaXhlbFxuICAgKi9cbiAgZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCBpbmRleFRvUGl4ZWwpIHtcbiAgICB2YXIgdmFsdWVfYm91bmRzID0gZGF0YS5maW5kVmFsdWVCb3VuZHMoY291bnQsIG9mZnNldCwgdGhpcy5nZXRNaW5BbmRNYXhGaWVsZHMoKSwgdGhpcy5nZXRNaW5BbmRNYXhWYWx1ZXMoKSk7XG4gICAgdmFyIHZhbHVlVG9QaXhlbCA9IHRoaXMuZ2V0VmFsdWVUb1BpeGVsTWFwcGVyKHZhbHVlX2JvdW5kcywgdHJ1ZSk7XG4gICAgdGhpcy5fcGl4ZWxUb1ZhbHVlID0gdGhpcy5nZXRQaXhlbFRvVmFsdWVNYXBwZXIodmFsdWVfYm91bmRzLCB0cnVlKTtcbiAgICB2YXIgbGF5ZXJzID0gdGhpcy5nZXRBbGxMYXllcnMoKTtcbiAgICB0aGlzLl9yZWZyZXNoKCk7XG5cbiAgICAvLyBEcmF3IGdyaWRcbiAgICBpZih0aGlzLmdyaWQpXG4gICAge1xuICAgICAgaWYodGhpcy52YWx1ZV9ncmlkX2xheWVyKVxuICAgICAge1xuICAgICAgICB0aGlzLnZhbHVlX2dyaWRfbGF5ZXIuZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdmFsdWVfYm91bmRzKTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMudGltZV9ncmlkX2xheWVyKVxuICAgICAge1xuICAgICAgICB0aGlzLnRpbWVfZ3JpZF9sYXllci5kcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB2YWx1ZV9ib3VuZHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKHRoaXMucHJpbWFyeUF0QmFjayA9PT0gdHJ1ZSlcbiAgICB7XG4gICAgICAvLyBEcmF3IHByaW1hcnkgbGF5ZXJcbiAgICAgIHRoaXMucHJpbWFyeUxheWVyLmRyYXcoZGF0YSwgY291bnQsIG9mZnNldCwgdmFsdWVUb1BpeGVsLCBpbmRleFRvUGl4ZWwsIHZhbHVlX2JvdW5kcyk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyBvdmVybGF5c1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXllcnMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2ldO1xuICAgICAgaWYobGF5ZXIuZHJhdylcbiAgICAgIHtcbiAgICAgICAgbGF5ZXIuZHJhdyhkYXRhLCBjb3VudCwgb2Zmc2V0LCB2YWx1ZVRvUGl4ZWwsIGluZGV4VG9QaXhlbCwgdmFsdWVfYm91bmRzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLnByaW1hcnlBdEJhY2sgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnByaW1hcnlBdEJhY2sgIT09IHRydWUpXG4gICAge1xuICAgICAgLy8gRHJhdyBwcmltYXJ5IGxheWVyXG4gICAgICB0aGlzLnByaW1hcnlMYXllci5kcmF3KGRhdGEsIGNvdW50LCBvZmZzZXQsIHZhbHVlVG9QaXhlbCwgaW5kZXhUb1BpeGVsLCB2YWx1ZV9ib3VuZHMpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtaW5pbXVtIGFuZCBtYXhpbXVtIGZpZWxkcyBmb3IgdGhpcyBwYW5lbC5cbiAgICogQHJldHVybnMge3RpbWVzZXJpZXMuTWluQW5kTWF4RmllbGRzfVxuICAgKi9cbiAgZ2V0TWluQW5kTWF4RmllbGRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHRoaXMucHJpbWFyeUxheWVyLmdldE1pbkZpZWxkKCksXG4gICAgICBtYXg6IHRoaXMucHJpbWFyeUxheWVyLmdldE1heEZpZWxkKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlcyBmb3IgdGhpcyBwYW5lbC5cbiAgICogQHJldHVybnMge3RpbWVzZXJpZXMuTWluQW5kTWF4VmFsdWVzfVxuICAgKi9cbiAgZ2V0TWluQW5kTWF4VmFsdWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtaW46IHRoaXMucHJpbWFyeUxheWVyLmdldE1pblZhbHVlKCksXG4gICAgICBtYXg6IHRoaXMucHJpbWFyeUxheWVyLmdldE1heFZhbHVlKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICogdmFsdWVUb1BpeGVsXG4gICogQGNhbGxiYWNrIHZhbHVlVG9QaXhlbFxuICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAqIEByZXR1cm5zIHtudW1iZXJ9IHktdmFsdWUgZXhwcmVzc2VkIGluIHVuaXQgcGl4ZWxzXG4gICovXG5cbiAgLyoqXG4gICAqIEdldCB2YWx1ZSB0byBwaXhlbCBtYXBwZXIgZnVuY3Rpb25cbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLlZhbHVlQm91bmRzfSB2YWx1ZV9ib3VuZHNcbiAgICogQHBhcmFtIHtib29sZWFufSBmbGlwXG4gICAqIEByZXR1cm5zIHt2YWx1ZVRvUGl4ZWx9IGZ1bmN0aW9uXG4gICAqL1xuICBnZXRWYWx1ZVRvUGl4ZWxNYXBwZXIodmFsdWVfYm91bmRzLCBmbGlwKSB7XG4gICAgdmFyIHZhbF9taW4gPSB2YWx1ZV9ib3VuZHMubWluO1xuICAgIHZhciB2YWxfbWF4ID0gdmFsdWVfYm91bmRzLm1heDtcbiAgICB2YXIgdmFsX3JhbmdlID0gdmFsX21heCAtIHZhbF9taW47XG4gICAgdmFyIHB4X2hlaWdodCA9IHRoaXMuZ2V0RHJhd2luZ0hlaWdodCgpO1xuICAgIHZhciBweF9wYWRkaW5nX29mZnNldCA9IHRoaXMucGFkZGluZ1RvcDtcbiAgICB2YXIgbWFwRnVuYztcbiAgICBpZihmbGlwID09PSB0cnVlKVxuICAgIHtcbiAgICAgIG1hcEZ1bmMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIChweF9oZWlnaHQgLSAodmFsIC0gdmFsX21pbikgLyB2YWxfcmFuZ2UgKiBweF9oZWlnaHQpICsgcHhfcGFkZGluZ19vZmZzZXQ7XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbWFwRnVuYyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gKCh2YWwgLSB2YWxfbWluKSAvIHZhbF9yYW5nZSAqIHB4X2hlaWdodCkgLSBweF9wYWRkaW5nX29mZnNldDtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBtYXBGdW5jO1xuICB9XG5cbiAgLyoqXG4gICogcGl4ZWxUb1ZhbHVlXG4gICogQGNhbGxiYWNrIHBpeGVsVG9WYWx1ZVxuICAqIEBwYXJhbSB7bnVtYmVyfSB5LXZhbHVlIGV4cHJlc3NlZCBpbiB1bml0IHBpeGVsc1xuICAqIEByZXR1cm5zIHtudW1iZXJ9IHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGltZSBzZXJpZXMgZGF0YVxuICAqL1xuXG4gIC8qKlxuICAgKiBHZXQgcGl4ZWwgdG8gdmFsbHVlIG1hcHBlciBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuVmFsdWVCb3VuZHN9IHZhbHVlX2JvdW5kc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZsaXBcbiAgICogQHJldHVybnMge3BpeGVsVG9WYWx1ZX1cbiAgICovXG4gIGdldFBpeGVsVG9WYWx1ZU1hcHBlcih2YWx1ZV9ib3VuZHMsIGZsaXApIHtcbiAgICB2YXIgdmFsX21pbiA9IHZhbHVlX2JvdW5kcy5taW47XG4gICAgdmFyIHZhbF9tYXggPSB2YWx1ZV9ib3VuZHMubWF4O1xuICAgIHZhciB2YWxfcmFuZ2UgPSB2YWxfbWF4IC0gdmFsX21pbjtcbiAgICB2YXIgcHhfaGVpZ2h0ID0gdGhpcy5nZXREcmF3aW5nSGVpZ2h0KCk7XG4gICAgdmFyIHB4X3BhZGRpbmdfb2Zmc2V0ID0gdGhpcy5wYWRkaW5nVG9wO1xuICAgIHZhciBtYXBGdW5jO1xuICAgIGlmKGZsaXAgPT09IHRydWUpXG4gICAge1xuICAgICAgbWFwRnVuYyA9IGZ1bmN0aW9uKHB4KSB7XG4gICAgICAgIHJldHVybiAocHhfaGVpZ2h0IC0gKHB4IC0gcHhfcGFkZGluZ19vZmZzZXQpKSAvIHB4X2hlaWdodCAqIHZhbF9yYW5nZSArIHZhbF9taW47XG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbWFwRnVuYyA9IGZ1bmN0aW9uKHB4KSB7XG4gICAgICAgIHJldHVybiAocHggKyBweF9wYWRkaW5nX29mZnNldCkgLyBweF9oZWlnaHQgKiB2YWxfcmFuZ2UgKyB2YWxfbWluO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcEZ1bmM7XG4gIH1cblxuICBwaXhlbFRvVmFsdWUocHgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGl4ZWxUb1ZhbHVlKHB4KTtcbiAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZVZhbHVlUGFuZWw7XG5cbiJdfQ==
},{"../layer/TimeGridLayer":27,"../layer/ValueGridLayer":29,"../panel/TimePanel":39,"underscore":6}],41:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require("underscore");
var Type = require("../core/Type");

var _default_config = {};

/**
 * Represents a time series data point, where properties will be for price and volume.
 * @typedef {Object} DataPoint
 * @memberof timeseries
 */

/**
 * Used to map OHLCV data point properties.
 * @typedef {Object} FieldMap
 * @property {string} time Name of time field.
 * @property {string} open Name of open field.
 * @property {string} high Name of high field.
 * @property {string} low Name of low field.
 * @property {string} close Name of close field.
 * @property {string} volume Name of volume field.
 * @memberof timeseries
 */

/**
 * @typedef {Object} ValueBounds
 * @property {number} min
 * @property {number} max
 * @memberof timeseries
 */

/**
 * @typedef {Object} MinAndMaxFields
 * @property {(string|undefined)} min
 * @property {(string|undefined)} max
 * @memberof timeseries
 */

/**
 * @typedef {Object} MinAndMaxValues
 * @property {number|undefined} min
 * @property {number|undefined} max
 * @memberof timeseries
 */

/**
 * The time series data that is represented graphically in the chart panels.
 * <br><br>
 * @extends core.Type
 * @memberof timeseries
 */

var TimeSeriesData = function (_Type) {
  _inherits(TimeSeriesData, _Type);

  /**
   * Instantiate TimeSeriesData
   * @constructor
   * @param {timeseries.DataPoint[]} raw_data
   * @param {timeseries.FieldMap} field_map
   * @param {string} symbol
   * @param {string} gran
   * @param {Object} config
   */
  function TimeSeriesData(raw_data, field_map, symbol, gran, config) {
    _classCallCheck(this, TimeSeriesData);

    config = _.extend({}, _default_config, config);

    var _this = _possibleConstructorReturn(this, (TimeSeriesData.__proto__ || Object.getPrototypeOf(TimeSeriesData)).call(this, config));

    _this._raw_data = raw_data;
    _this._field_map = field_map;
    _this._symbol = symbol;
    _this._granularity = gran;
    _this._initTimeToIndexMap();
    return _this;
  }

  /**
   * Initialize time-to-index map.
   * @private
   */


  _createClass(TimeSeriesData, [{
    key: "_initTimeToIndexMap",
    value: function _initTimeToIndexMap() {
      this._time_to_index_map = {};
      for (var i = 0; i < this._raw_data.length; i++) {
        var dat = this._raw_data[i];
        var time = dat[this._field_map.time];
        this._time_to_index_map[time] = i;
      }
    }

    /**
     * Get data array, that was originally provided in the constructor.
     * @returns {timeseries.DataPoint[]}
     */

  }, {
    key: "getRawData",
    value: function getRawData() {
      return this._raw_data;
    }

    /**
     * Get field map, that was originally provided in the constructor.
     * @returns {timeseries.FieldMap}
     */

  }, {
    key: "getFieldMap",
    value: function getFieldMap() {
      return this._field_map;
    }

    /**
     * Get symbol
     * @returns {string}
     */

  }, {
    key: "getSymbol",
    value: function getSymbol() {
      return this._symbol;
    }

    /**
     * Get granularity
     * @returns {string}
     */

  }, {
    key: "getGranularity",
    value: function getGranularity() {
      return this._granularity;
    }

    /**
     * Deduce minimum and maximum values of in range data.
     * <br><br>
     * Minimum and maximum values can be explicity given, otherwise field names.
     * Where no minimum is provided, zero will be assumed.
     * @param {number} count
     * @param {number} offset
     * @param {timeseries.MinAndMaxFields} min_and_max_fields
     * @param {timeseries.MinAndMaxValues} min_and_max_values
     * @returns {timeseries.ValueBounds}
     */

  }, {
    key: "findValueBounds",
    value: function findValueBounds(count, offset, min_and_max_fields, min_and_max_values) {

      var data_arr = this._raw_data;
      var index_start = offset;
      var index_end = count + offset - 1;

      if (index_start < 0) {
        index_start = 0;
      }
      if (index_end >= data_arr.length) {
        index_end = data_arr.length - 1;
      }

      var min_field = min_and_max_fields.min;
      var max_field = min_and_max_fields.max;
      var min_value = min_and_max_values.min;
      var max_value = min_and_max_values.max;
      var minimum = 99999999,
          maximum = -99999999;
      var i, dat;

      // Deduce minimum value
      if (min_value !== undefined) {
        minimum = min_value;
      } else if (min_field !== undefined) {
        var min_field_name = this._field_map[min_field];
        for (i = index_start; i <= index_end; i++) {
          dat = data_arr[i];
          var min = dat[min_field_name]; // e.g. low
          if (min < minimum) {
            minimum = min;
          }
        }
      } else {
        minimum = 0;
      }

      // Deduce maximum value
      if (max_value !== undefined) {
        maximum = max_value;
      } else if (max_field !== undefined) {
        var max_field_name = this._field_map[max_field];
        for (i = index_start; i <= index_end; i++) {
          dat = data_arr[i];
          var max = dat[max_field_name]; // e.g. low
          if (max > maximum) {
            maximum = max;
          }
        }
      }

      return {
        min: minimum,
        max: maximum
      };
    }
  }]);

  return TimeSeriesData;
}(Type);

module.exports = TimeSeriesData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpbWVTZXJpZXNEYXRhLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiVHlwZSIsIl9kZWZhdWx0X2NvbmZpZyIsIlRpbWVTZXJpZXNEYXRhIiwicmF3X2RhdGEiLCJmaWVsZF9tYXAiLCJzeW1ib2wiLCJncmFuIiwiY29uZmlnIiwiZXh0ZW5kIiwiX3Jhd19kYXRhIiwiX2ZpZWxkX21hcCIsIl9zeW1ib2wiLCJfZ3JhbnVsYXJpdHkiLCJfaW5pdFRpbWVUb0luZGV4TWFwIiwiX3RpbWVfdG9faW5kZXhfbWFwIiwiaSIsImxlbmd0aCIsImRhdCIsInRpbWUiLCJjb3VudCIsIm9mZnNldCIsIm1pbl9hbmRfbWF4X2ZpZWxkcyIsIm1pbl9hbmRfbWF4X3ZhbHVlcyIsImRhdGFfYXJyIiwiaW5kZXhfc3RhcnQiLCJpbmRleF9lbmQiLCJtaW5fZmllbGQiLCJtaW4iLCJtYXhfZmllbGQiLCJtYXgiLCJtaW5fdmFsdWUiLCJtYXhfdmFsdWUiLCJtaW5pbXVtIiwibWF4aW11bSIsInVuZGVmaW5lZCIsIm1pbl9maWVsZF9uYW1lIiwibWF4X2ZpZWxkX25hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLElBQUlDLFFBQVEsWUFBUixDQUFSO0FBQ0EsSUFBSUMsT0FBT0QsUUFBUSxjQUFSLENBQVg7O0FBRUEsSUFBTUUsa0JBQWtCLEVBQXhCOztBQUdBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7QUFPQTs7Ozs7OztBQU9BOzs7Ozs7O0FBT0E7Ozs7Ozs7SUFNTUMsYzs7O0FBRUo7Ozs7Ozs7OztBQVNBLDBCQUFZQyxRQUFaLEVBQXNCQyxTQUF0QixFQUFpQ0MsTUFBakMsRUFBeUNDLElBQXpDLEVBQStDQyxNQUEvQyxFQUF1RDtBQUFBOztBQUNyREEsYUFBU1QsRUFBRVUsTUFBRixDQUFTLEVBQVQsRUFBYVAsZUFBYixFQUE4Qk0sTUFBOUIsQ0FBVDs7QUFEcUQsZ0lBRS9DQSxNQUYr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QUtLLE9BREE7QUFFTEgsYUFBS0k7QUFGQSxPQUFQO0FBSUQ7Ozs7RUFsSjBCakMsSTs7QUFzSjdCcUMsT0FBT0MsT0FBUCxHQUFpQnBDLGNBQWpCIiwiZmlsZSI6IlRpbWVTZXJpZXNEYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfID0gcmVxdWlyZShcInVuZGVyc2NvcmVcIik7XG52YXIgVHlwZSA9IHJlcXVpcmUoXCIuLi9jb3JlL1R5cGVcIik7XG5cbmNvbnN0IF9kZWZhdWx0X2NvbmZpZyA9IHtcbn07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHRpbWUgc2VyaWVzIGRhdGEgcG9pbnQsIHdoZXJlIHByb3BlcnRpZXMgd2lsbCBiZSBmb3IgcHJpY2UgYW5kIHZvbHVtZS5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IERhdGFQb2ludFxuICogQG1lbWJlcm9mIHRpbWVzZXJpZXNcbiAqL1xuXG4vKipcbiAqIFVzZWQgdG8gbWFwIE9ITENWIGRhdGEgcG9pbnQgcHJvcGVydGllcy5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZpZWxkTWFwXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdGltZSBOYW1lIG9mIHRpbWUgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gb3BlbiBOYW1lIG9mIG9wZW4gZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaGlnaCBOYW1lIG9mIGhpZ2ggZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbG93IE5hbWUgb2YgbG93IGZpZWxkLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsb3NlIE5hbWUgb2YgY2xvc2UgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdm9sdW1lIE5hbWUgb2Ygdm9sdW1lIGZpZWxkLlxuICogQG1lbWJlcm9mIHRpbWVzZXJpZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFZhbHVlQm91bmRzXG4gKiBAcHJvcGVydHkge251bWJlcn0gbWluXG4gKiBAcHJvcGVydHkge251bWJlcn0gbWF4XG4gKiBAbWVtYmVyb2YgdGltZXNlcmllc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTWluQW5kTWF4RmllbGRzXG4gKiBAcHJvcGVydHkgeyhzdHJpbmd8dW5kZWZpbmVkKX0gbWluXG4gKiBAcHJvcGVydHkgeyhzdHJpbmd8dW5kZWZpbmVkKX0gbWF4XG4gKiBAbWVtYmVyb2YgdGltZXNlcmllc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTWluQW5kTWF4VmFsdWVzXG4gKiBAcHJvcGVydHkge251bWJlcnx1bmRlZmluZWR9IG1pblxuICogQHByb3BlcnR5IHtudW1iZXJ8dW5kZWZpbmVkfSBtYXhcbiAqIEBtZW1iZXJvZiB0aW1lc2VyaWVzXG4gKi9cblxuLyoqXG4gKiBUaGUgdGltZSBzZXJpZXMgZGF0YSB0aGF0IGlzIHJlcHJlc2VudGVkIGdyYXBoaWNhbGx5IGluIHRoZSBjaGFydCBwYW5lbHMuXG4gKiA8YnI+PGJyPlxuICogQGV4dGVuZHMgY29yZS5UeXBlXG4gKiBAbWVtYmVyb2YgdGltZXNlcmllc1xuICovXG5jbGFzcyBUaW1lU2VyaWVzRGF0YSBleHRlbmRzIFR5cGUge1xuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZSBUaW1lU2VyaWVzRGF0YVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLkRhdGFQb2ludFtdfSByYXdfZGF0YVxuICAgKiBAcGFyYW0ge3RpbWVzZXJpZXMuRmllbGRNYXB9IGZpZWxkX21hcFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3ltYm9sXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBncmFuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKHJhd19kYXRhLCBmaWVsZF9tYXAsIHN5bWJvbCwgZ3JhbiwgY29uZmlnKSB7XG4gICAgY29uZmlnID0gXy5leHRlbmQoe30sIF9kZWZhdWx0X2NvbmZpZywgY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcpO1xuICAgIHRoaXMuX3Jhd19kYXRhID0gcmF3X2RhdGE7XG4gICAgdGhpcy5fZmllbGRfbWFwID0gZmllbGRfbWFwO1xuICAgIHRoaXMuX3N5bWJvbCA9IHN5bWJvbDtcbiAgICB0aGlzLl9ncmFudWxhcml0eSA9IGdyYW47XG4gICAgdGhpcy5faW5pdFRpbWVUb0luZGV4TWFwKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aW1lLXRvLWluZGV4IG1hcC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0VGltZVRvSW5kZXhNYXAoKSB7XG4gICAgdGhpcy5fdGltZV90b19pbmRleF9tYXAgPSB7fTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fcmF3X2RhdGEubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGRhdCA9IHRoaXMuX3Jhd19kYXRhW2ldO1xuICAgICAgdmFyIHRpbWUgPSBkYXRbdGhpcy5fZmllbGRfbWFwLnRpbWVdO1xuICAgICAgdGhpcy5fdGltZV90b19pbmRleF9tYXBbdGltZV0gPSBpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBhcnJheSwgdGhhdCB3YXMgb3JpZ2luYWxseSBwcm92aWRlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAqIEByZXR1cm5zIHt0aW1lc2VyaWVzLkRhdGFQb2ludFtdfVxuICAgKi9cbiAgZ2V0UmF3RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmF3X2RhdGE7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpZWxkIG1hcCwgdGhhdCB3YXMgb3JpZ2luYWxseSBwcm92aWRlZCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAqIEByZXR1cm5zIHt0aW1lc2VyaWVzLkZpZWxkTWFwfVxuICAgKi9cbiAgZ2V0RmllbGRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpZWxkX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3ltYm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRTeW1ib2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N5bWJvbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZ3JhbnVsYXJpdHlcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEdyYW51bGFyaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9ncmFudWxhcml0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWR1Y2UgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMgb2YgaW4gcmFuZ2UgZGF0YS5cbiAgICogPGJyPjxicj5cbiAgICogTWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZXMgY2FuIGJlIGV4cGxpY2l0eSBnaXZlbiwgb3RoZXJ3aXNlIGZpZWxkIG5hbWVzLlxuICAgKiBXaGVyZSBubyBtaW5pbXVtIGlzIHByb3ZpZGVkLCB6ZXJvIHdpbGwgYmUgYXNzdW1lZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcbiAgICogQHBhcmFtIHt0aW1lc2VyaWVzLk1pbkFuZE1heEZpZWxkc30gbWluX2FuZF9tYXhfZmllbGRzXG4gICAqIEBwYXJhbSB7dGltZXNlcmllcy5NaW5BbmRNYXhWYWx1ZXN9IG1pbl9hbmRfbWF4X3ZhbHVlc1xuICAgKiBAcmV0dXJucyB7dGltZXNlcmllcy5WYWx1ZUJvdW5kc31cbiAgICovXG4gIGZpbmRWYWx1ZUJvdW5kcyhjb3VudCwgb2Zmc2V0LCBtaW5fYW5kX21heF9maWVsZHMsIG1pbl9hbmRfbWF4X3ZhbHVlcykge1xuXG4gICAgdmFyIGRhdGFfYXJyID0gdGhpcy5fcmF3X2RhdGE7XG4gICAgdmFyIGluZGV4X3N0YXJ0ID0gb2Zmc2V0O1xuICAgIHZhciBpbmRleF9lbmQgPSAoY291bnQgKyBvZmZzZXQpIC0gMTtcblxuICAgIGlmKGluZGV4X3N0YXJ0IDwgMClcbiAgICB7XG4gICAgICBpbmRleF9zdGFydCA9IDA7XG4gICAgfVxuICAgIGlmKGluZGV4X2VuZCA+PSBkYXRhX2Fyci5sZW5ndGgpXG4gICAge1xuICAgICAgaW5kZXhfZW5kID0gZGF0YV9hcnIubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICB2YXIgbWluX2ZpZWxkID0gbWluX2FuZF9tYXhfZmllbGRzLm1pbjtcbiAgICB2YXIgbWF4X2ZpZWxkID0gbWluX2FuZF9tYXhfZmllbGRzLm1heDtcbiAgICB2YXIgbWluX3ZhbHVlID0gbWluX2FuZF9tYXhfdmFsdWVzLm1pbjtcbiAgICB2YXIgbWF4X3ZhbHVlID0gbWluX2FuZF9tYXhfdmFsdWVzLm1heDtcbiAgICB2YXIgbWluaW11bSA9IDk5OTk5OTk5LCBtYXhpbXVtID0gLTk5OTk5OTk5O1xuICAgIHZhciBpLCBkYXQ7XG5cbiAgICAvLyBEZWR1Y2UgbWluaW11bSB2YWx1ZVxuICAgIGlmKG1pbl92YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgIG1pbmltdW0gPSBtaW5fdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYobWluX2ZpZWxkICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgdmFyIG1pbl9maWVsZF9uYW1lID0gdGhpcy5fZmllbGRfbWFwW21pbl9maWVsZF07XG4gICAgICBmb3IoaSA9IGluZGV4X3N0YXJ0OyBpIDw9IGluZGV4X2VuZDsgaSsrKVxuICAgICAge1xuICAgICAgICBkYXQgPSBkYXRhX2FycltpXTtcbiAgICAgICAgdmFyIG1pbiA9IGRhdFttaW5fZmllbGRfbmFtZV07IC8vIGUuZy4gbG93XG4gICAgICAgIGlmKG1pbiA8IG1pbmltdW0pXG4gICAgICAgIHtcbiAgICAgICAgICBtaW5pbXVtID0gbWluO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBtaW5pbXVtID0gMDtcbiAgICB9XG5cbiAgICAvLyBEZWR1Y2UgbWF4aW11bSB2YWx1ZVxuICAgIGlmKG1heF92YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgIG1heGltdW0gPSBtYXhfdmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYobWF4X2ZpZWxkICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgdmFyIG1heF9maWVsZF9uYW1lID0gdGhpcy5fZmllbGRfbWFwW21heF9maWVsZF07XG4gICAgICBmb3IoaSA9IGluZGV4X3N0YXJ0OyBpIDw9IGluZGV4X2VuZDsgaSsrKVxuICAgICAge1xuICAgICAgICBkYXQgPSBkYXRhX2FycltpXTtcbiAgICAgICAgdmFyIG1heCA9IGRhdFttYXhfZmllbGRfbmFtZV07IC8vIGUuZy4gbG93XG4gICAgICAgIGlmKG1heCA+IG1heGltdW0pXG4gICAgICAgIHtcbiAgICAgICAgICBtYXhpbXVtID0gbWF4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbjogbWluaW11bSxcbiAgICAgIG1heDogbWF4aW11bVxuICAgIH07XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVTZXJpZXNEYXRhO1xuIl19
},{"../core/Type":11,"underscore":6}]},{},[1])