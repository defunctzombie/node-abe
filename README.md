# abe #

Create read/write streams for decoding/encoding text data from ArrayBuffer arrays.

```javascript
var ArrayReadStream = require('abe').ArrayReadStream;

// lets say this is some stream which emits data as array buffers
var array_buff_stream;

// by piping the array buffer stream into our decode stream
// we will get the decoded data
var read_stream = array_buff_stream.pipe(new ArrayReadStream('utf-8'));

read_stream.on('data', function(chunk) {
    // chunk is now utf-8 data
});
```
