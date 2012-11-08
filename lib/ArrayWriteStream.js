var Stream = require('stream');
var inherits = require('inherits');

var TextEncoder = require('stringencoding').TextEncoder;

/// write `encoding` strings and emit typed array data
/// default encoding is `utf-8`
var ArrayWriteStream = function(encoding) {
    Stream.call(this);
    var self = this;

    self.writable = true;
    self.encoder = TextEncoder(encoding || 'utf-8');
};
inherits(ArrayWriteStream, Stream);

ArrayWriteStream.prototype.write = function(str) {
    var self = this;

    var uint8array = self.encoder.encode(str);
    self.emit('data', uint8array.buffer);

    return self;
};

module.exports = ArrayWriteStream;

