# MongoDB 

MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
<br/><br/>

## Why do we use MongoDB? 

- MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time
- The document model maps to the objects in your application code, making data easy to work with
- Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data
- MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use
- MongoDB is free to use
<br/><br/>

## Create you MongoDB project
The easiest way to get started with MongoDB is by using the Atlas developer data platform. A free tier is available with basic database functionalities. This free tier is more than enough for the purposes of this article.

### Prerequisites for MongoDB Atlas
To create a database on MongoDB Atlas, you will need to register an Atlas account and create your first forever-free cluster:

- Register a free Atlas account with your email address (no credit card required)
- Deploy your first cluster in less than 10 minutes

### Creating a MongoDB Database with the Atlas UI
From your cluster page, click on “Browse Collections.”

![create-db](assets/create-db-01.png)
If there are no databases in this cluster, you will be presented with the option to create your first database by clicking on the “Add My Own Data” button.

![create-db](assets/create-db-02.png)

This will open up a modal, asking you for a database name and collection name. Once these fields are filled, click on “Create” and your database will be created for you.

![create-db](assets/create-db-03.gif)

The database is now available to you. You can manually enter new documents, or connect to the database using any of the MongoDB drivers.
<br/><br/>

## Connect to MongoDB

### Connection URI
The connection URI is the set of instructions that the driver uses to connect to a MongoDB deployment. It instructs the driver on how it should connect to MongoDB and how it should behave while connected. The following example shows each part of the connection URI:

![uri-example](assets/connection-uri.png)

The next part of the connection string contains your credentials if you are using password-based authentication. Replace the value of user with your username and pass with your password. If you are using an authentication mechanism that does not require a username and password, omit this part of the connection URI.

The next part of the connection string specifies the hostname or IP address of your MongoDB instance, followed by the port number. In the example above, we use sample.host as the hostname and 27017 as the port. Replace these values to point to your MongoDB instance.

The last part of the connection string contains connection and authentication options as parameters. In the example above, we set two connection options: maxPoolSize=20 and w=majority. For more information on connection options, skip to the Connection Options section.
<br/><br/>


### Atlas Connection Example

You must create a client to connect to a MongoDB deployment on Atlas. To create a client, construct an instance of MongoClient, passing in your URI and a MongoClientOptions object.

Use the serverApi option in your MongoClientOptions object to enable the Stable API feature, which forces the server to run operations with behavior compatible with the specified API version.

The following code shows how you can specify the connection string and the Stable API client option when connecting to a MongoDB deployment on Atlas and verify that the connection is successful:

```
const { MongoClient } = require("mongodb");

// Replace the placeholders with your credentials and hostname
const uri = "mongodb+srv://<username>:<password>@<hostname>/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```


- [MongoDB basics](https://www.mongodb.com/basics)

 
