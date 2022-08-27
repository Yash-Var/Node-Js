
const EventEmitter = require('events');

const event = new EventEmitter();
event.on('sayMyName', () => {
    console.log("MY NAME IS YASH VARSHNEY");
});

event.emit('sayMyName');

