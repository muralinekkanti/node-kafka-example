# node-kafka-example

This git repo will provide a sample to connect to the Kafka cluster to produce & consume the Kafka topic. 


## Overview
This project provides a straightforward NodeJS example to connect to Kafka brokers and shows how to connect to the topic to produce or consume.  The connection properties include the configuration sasl and connecting with multiple brokers.  Two modules are part of this example, one for consumption and the other for producing messages.   There are two app-xxx.js files set up in this project to act as a producer and consumer.  To get started, follow these steps:
	
* Step 1: 
Set up a local Kafka server or set it up at a cloud provider.  I'm using the IBM Cloud to set up the Kafka instance for this example.
	*  In IBM Cloud, the SaaS service for the Kafka instance is Event Streams, the procedure defined [here](https://cloud.ibm.com/eventstreams-provisioning/6a7f4e38-f218-48ef-9dd2-df408747568e/create) will provision the Event Streams instance under plan type lite which is free if you don't have IBM Cloud account sign up for a free account to start with.   
	*  Once the Event Streams instance provision is complete, add a new service credential through the left menu item on the Event Streams instance page.
	*  The service credential will provide the username, password (API key), and broker endpoints.  You need these details to configure this NodeJS application to connect to the Event Streams instance <br>  
* Step 2: 
Once the Kafka instance is ready
	* On the Kafka local instance, create a topic, and if you use the IBM Cloud Event Streams instance, follow the left navigation menu on the instance page to create a new topic. 
* Step 3: 
Supply the Kafka instance credentials through the environment variables or create a .env file for this sample application for the below variables:
	* NODE_ENV="DEV"
	* CLIENT_ID= "Kafka-App-1"  -- use any name
	* TOPIC_NAME= "test-topic-1" --
	* BROKERS="broker-xxxxx1:port,broker-xxxxx2:port,broker-xxxx3:port"  -- Kafka instance will provide the broker endpoints depending on where the instance created there will be one or more brokers will be used in the cluster
	* SASL_MECHANISM = "Plain"
	* USER_NAME="xxxxxx"
	* PASSSWORD= "xxxxxxx" -- password or apikey
	* MESSAGES_FROM_BEGINING = true/false  -- This must be true if you wish to read all messages in the Kafka topic from the beginning.  If true, it will read the messages from the beginning while the application starts or restarts.<br>
  
* Step 4:  
  Setup the NodeJS for the below modules:
  * dotenv -- to work with environment variables
  * kafkajs -- Kafka library
  * split -- to split the comma delimited string into a list/collection <br>
  
  * To install modules to this application, </br>
   run npm install dotenv kafkajs split
  
 * Step 5:  
 To run the application, follow the below commands:
	* npm start consumer -- This is a simple app to consume messages from a topic that is configured through the environment variables
	* npm start producer -- The is a sample app that produces the message to the topic that is configured through the environment variables 


## Prerequisite
* Baic knowledge of NodeJS
* Basic knowledge of Kafka 
