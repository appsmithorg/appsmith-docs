# Display Realtime data from kafka

This page shows how to display and stream real-time data from Kafka using WebSockets. This guide uses Kafka Cloud - [Confluent Cloud](https://www.confluent.io/confluent-cloud/); if you are using a local Kafka setup, the steps might vary based on your configuration.

## Prerequisites

* Ensure you have an active Kafka account with access to create and manage clusters and topics.
* A configured [Kafka cluster](https://docs.confluent.io/cloud/current/get-started/index.html) with at least one topic set up to stream data. See [Topics in Confluent Cloud.](https://docs.confluent.io/cloud/current/client-apps/topics/manage.html)
* Familiarity with Kafka (producers, topics, consumers) and [WebSocket protocols](https://www.npmjs.com/package/kafka-node).

## Retrieve Kafka Credentials

Follow these steps to fetch cluster and API credentials from Kafka:

1. Go to [Confluent Cloud](https://confluent.cloud/home), navigate to the dashboard, and open your cluster.

2. Click on Cluster settings and copy the server endpoint. Save it for future use. 

<dd>

Example: 

```js
pkc-11ab.us-east-2.aws.confluent.cloud:1010
```

</dd>



3. Navigate to the Connector section and open the Connector for the topic from which you want to stream data.


4. Inside the Connector settings, find the API Key, Kafka API Secret, and Topic Name. 

<dd>

Copy the endpoints and credentials for the connector associated with the Kafka topic from which you want to stream data.


<ZoomImage
  src="/img/kafka-topic.png" 
  alt=""
  caption=""
/> 

</dd>





## Set Up WebSocket Server

Follow these steps to set up a WebSocket server, either locally or on your preferred platform. This server will act as a bridge to stream real-time data from your Kafka topic to your Appsmith application.


1. Select a WebSocket library or framework based on your preferred programming language, and decide whether to set up the WebSocket server locally or on a cloud platform (e.g., AWS, Azure, Google Cloud).

2. Install required packages for kafka and WebSocket setup.


<dd>

*Example:* If you want to set up locally using Node.js, install:

```js
npm install kafkajs ws
```

</dd>

3. Write a WebSocket server script that listens for connections and handles data streaming. Ensure the server can communicate with your Kafka cluster using the credentials and broker URL you retrieved earlier.

<dd>

*Example:* If you want to create a script locally using Node.js, use the following code.

```js
const { Kafka } = require('kafkajs');
const WebSocket = require('ws');

// Kafka setup
const kafka = new Kafka({
  clientId: 'kafka-websocket-bridge',
  // highlight-next-line
  brokers: ['pkc-11ab.us-east-2.aws.confluent.cloud:1010'], // Replace with your Kafka broker URL
  ssl: true,
  sasl: {
    mechanism: 'plain',
    // highlight-next-line
    username: 'your-kafka-api-key', // Replace with your Kafka API key
    // highlight-next-line
    password: 'your-kafka-api-secret', // Replace with your Kafka API secret
  },
});

const consumer = kafka.consumer({ groupId: 'websocket-group' });

// WebSocket server setup
const wss = new WebSocket.Server({ port: 8080 });

async function run() {
  await consumer.connect();
  // highlight-next-line
  await consumer.subscribe({ topic: 'your-topic-name', fromBeginning: true }); // Replace with your Kafka topic name

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const messageValue = message.value.toString();
      console.log(`Received message: ${messageValue}`);
      
      // Send message to all connected WebSocket clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(messageValue);
        }
      });
    },
  });
}

wss.on('connection', (ws) => {
  console.log('New WebSocket client connected');
  
  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

run().catch(console.error);

console.log('Kafka to WebSocket bridge is running on port 8080');
```

This Node.js script sets up a WebSocket server that listens on port 8080 and a Kafka consumer to read messages from a specified Kafka topic. It streams incoming Kafka messages to all connected WebSocket clients in real-time.

</dd>

4. Run and test the WebSocket server script. 


## Set Up WebSocket in Appsmith

Follow these steps to integrate and use the WebSocket server you set up with your Appsmith application:

1. In Appsmith, create a new JSObject and configure your WebSocket connection. Define `socket` for the WebSocket instance, like this:

<dd>

*Example:*

```js
export default {
  // WebSocket URL (change this URL based on your WebSocket server)
  // highlight-next-line
  socketURL: 'ws://localhost:8080',

  // WebSocket instance
  socket: null,

  // Function to initialize the WebSocket connection
  initWebSocket() {
    this.socket = new WebSocket(this.socketURL);

    // Event handler for successful connection
    this.socket.onopen = () => {
      console.log('WebSocket connection established successfully');
    };

    // Event handler for incoming messages
    this.socket.onmessage = (event) => {
      const responseData = JSON.parse(event.data);
      console.log('Received data:', responseData);
      // Handle received data (e.g., update state, trigger actions)
    };

    // Event handler for connection errors
    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Event handler for connection closure
    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };
  }
};
```

This code sets up a WebSocket connection to the specified server URL and handles different events such as successful connection, incoming messages, errors, and connection closures. It logs the received data and manages the WebSocket lifecycle.


</dd>

2. Format the data and bind it to widgets based on your requirements. For more information on WebSockets, see [Websockets for real-time updates](/build-apps/how-to-guides/set-up-websockets).