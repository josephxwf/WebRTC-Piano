
function mixin(obj1, obj2) {
	for(var i in obj2) {
		if(obj2.hasOwnProperty(i)) {
			obj1[i] = obj2[i];
		}
	}
};

function EventEmitter() {
	this._events = {};
};
EventEmitter.prototype.on = function(evtn, fn) {
	if(!this._events.hasOwnProperty(evtn)) this._events[evtn] = [];
	this._events[evtn].push(fn);
};
EventEmitter.prototype.off = function(evtn, fn) {
	if(!this._events.hasOwnProperty(evtn)) return;
	var idx = this._events[evtn].indexOf(fn);
	if(idx < 0) return;
	this._events.splice(idx, 1);
};
EventEmitter.prototype.emit = function(evtn) {
	if(!this._events.hasOwnProperty(evtn)) return;
	var fns = this._events[evtn].slice(0);
	if(fns.length < 1) return;
	var args = Array.prototype.slice.call(arguments, 1);
	for(var i = 0; i < fns.length; i++) fns[i].apply(this, args);
};
