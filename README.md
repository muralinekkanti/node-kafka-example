# node-kafka-example

This git repo will provide an example to connect to Kafka cluster to produce & consume to the Kafka topic. 


## Overview
This project provides a very simple example code to connect to Kafka brokers and shows how to connect to the topic to produce or consume.  The connection properties include the configuration sasl and connecting with multiple brokers.  Two modules are part of this example, one for consumption and the other for producing messages.   There are two app-xxx.js files set up in this project to act as a producer and consumer.  To get started, follow these steps:
	
* Step 1: 
Try to setup a local Kafka server or try setting up at cloud provider.  For this example, I'm using the iBM Cloud to setup the Kafka instance.
	*  In IBM Cloud, the SaaS service for the Kafka instance is Event Streams.  The procedure defined [here](https://cloud.ibm.com/eventstreams-provisioning/6a7f4e38-f218-48ef-9dd2-df408747568e/create) will provision the Event Streams instance under plan type lite which is free.  If you don't have IBM Cloud account sign up for a free account to start with.   
	*  Once the Event Streams instance provision is complete, then add a new service credentials through left menu item on the Event Streams instance page.
	*  The service credential will provide the username, password (apikey), and broker endpoints.  You need these details to configure this NodeJS application to connect to the Event Streams instance <br>  
* Step 2: 
Once after the Kafka instance is ready
	* On the Kafka local instace create topic.  If you are using the IBM Cloud Event Stream instance then follow the left navigation menu, "Topics" on the instance page to create a new topic. 
* Step 3: 
Supply the Kafka instance creditionals through the environemnt variables or create .env file for this sample application for the below variables:
	* NODE_ENV="DEV"
	* CLIENT_ID= "Kafka-App-1"  -- use any name
	* TOPIC_NAME= "test-topic-1" --
	* BROKERS="broker-xxxxx1:port,broker-xxxxx2:port,broker-xxxx3:port"  -- Kafka instance will provide the brokers endpoints depnding on where the instance created 1 or more brokers will be used in the cluster
	* SASL_MECHANISM = "Plain"
	* USER_NAME="xxxxxx"
	* PASSSWORD= "xxxxxxx" -- password or apikey
	* MESSAGES_FROM_BEGINING = true/false  -- This is required to set to true if you wish to read from the begining all message in the Kafka topic. If this is true, whenever the application starts or restarts it will read the messages from the begining.<br>
  
* Step 4:  
  Setup the NodeJS for the below modules:
  * dotenv -- to work with environemnt variables
  * kafkajs -- Kafka library
  * split -- to split the comma delimitted string into a list/collection <br>
  
  * To install modules to theis applicaiton run npm install dotenv kafkajs split
  
 * Step 5:  
 To run the application follow the below commands:
	* npm start consumer -- This is a simple app to conume message from a topic which is configured through the environemnt variables
	* npm start producer -- The is a sample app produces the message to the topic which is configured through the environemnt variables 


## Prerequisite
* Baic knowledge in NodeJS
* Basic knowledge in Kafka 
 

