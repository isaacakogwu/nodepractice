// const path = require('path');
// const os = require('os');
// const fs = require('fs');

const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a Listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://...'});

emitter.on('logging', (arg) => {
  console.log('Logging is also listening', arg);
});

emitter.emit('logging', {data: 'message'});

// var pathObj = path.parse(__filename);
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// var fsFS = fs.readdir('./', function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// });

// console.log(pathObj);
// console.log(totalMemory);
// console.log(freeMemory);

// console.log(fsFS);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


