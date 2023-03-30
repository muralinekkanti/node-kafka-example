'use strict';
const produce = require("./producer/produce")

console.log("Starting...");

produce().catch((err) => {
	console.error("error in producer: ", err)
})

console.log("Started...");