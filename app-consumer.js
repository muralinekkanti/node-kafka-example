'use strict';
const consume = require("./consumer/consume")
console.log("Starting...");
consume().catch((err) => {
	console.error("error in consumer: ", err)
})
console.log("Started...");