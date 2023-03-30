
'use strict';

const { Kafka, logLevel } = require("kafkajs");
const dotenv = require('dotenv');
dotenv.config();

// client ID of who is producing the messages
const clientId = process.env.CLIENT_ID; 
const topicName = process.env.TOPIC_NAME; // topic to publish
const environment = process.env.NODE_ENV || "dev"; 
const brokersList = process.env.BROKERS;
const brokers = process.env.BROKERS.split(",");
const sasl_mechanism = process.env.SASL_MECHANISM || "plain";
const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;

const kafka = new Kafka({ 
	logLevel: logLevel.ERROR, 
	clientId: clientId,
    brokers: brokers,
    ssl: true,
	sasl: {
      mechanism: sasl_mechanism, 
	  username: userName,
	  password: password
	},
})
const producer = kafka.producer({})


const produce = async () => {
	await producer.connect()
	let i = 0

	//anonymous function on a 1000 milliseconds set interval
	setInterval(async () => {
		try {
			await producer.send({
				topic: topicName,
				acks: 1,
				messages: [
					{
						key: String(i),
						value: "This is just a test message " + i,
					},
				],
			})			
			console.log("writes: ", i)
			i++
		} catch (err) {
			console.error("The message could not write " + err)
		}
	}, 1000)
}

module.exports = produce
