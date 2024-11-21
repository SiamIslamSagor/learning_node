const EventEmitter = require("events");

// listener
const myEmitter = new EventEmitter();

myEmitter.on("birthday", () => {
  console.log("happy birthday broh!");
});

myEmitter.on("birthday", gift => {
  console.log(`I will send a ${gift} soon!`);
});

myEmitter.emit("birthday", "rolex watch!");
