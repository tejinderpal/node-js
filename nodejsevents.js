const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitterObj = new MyEmitter();

emitterObj.on('WaterFull',()=>{
    console.log('Please turn off the motor');
})

emitterObj.emit('WaterFull');