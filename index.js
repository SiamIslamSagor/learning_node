/* --------------- LOCAL MODULES -------------- */

const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(add2(2, 5, 2));

/* ------------- BUILT IN MODULES ------------- */

const path = require("path");
console.log(path.join("C:/Next_level/m2/learning_node", "local-1.js"));
