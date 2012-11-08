var Stream = require('stream');
var inherits = require('inherits');

var TextDecoder = require('stringencoding').TextDecoder;

/// emits `encoding` decoded values from an ArrayBuffer stream
/// the stream should emit 'data' events with ArrayBuffer
/// default encoding is `utf-8`
var ArrayReadStream = function(encoding) {
    Stream.call(this);
    var self = this;

    self.writable = true;
    self.decoder = TextDecoder(encoding || 'utf-8');
};
inherits(ArrayReadStream, Stream);

/// {ArrayBuffer} data expected
ArrayReadStream.prototype.write = function(data) {
    var self = this;

    var str = self.decoder.decode(new Uint8Array(data), {stream:true});
    self.emit('data', str);
};

ArrayReadStream.prototype.end = function(data) {
    var self = this;

    var str = self.decoder.decode();
    if (str.length > 0) {
        self.emit('data', str);
    }

    self.emit('end');
};

module.exports = ArrayReadStream;
