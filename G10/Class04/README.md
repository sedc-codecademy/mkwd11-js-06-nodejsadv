# Mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
<br/><br/>

## Why do we use MongoDB? 

MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.
<br/><br/>

## Getting Started

### Mongo Installation
Before we get started, let’s setup Mongo. Download the appropriate MongoDB version for your Operating System from the MongoDB Website and follow their installation instructions.

Let’s install Mongoose and a validation library with the following command:
```
npm install mongoose validator
```

The above install command will install the latest version of the libraries. The Mongoose syntax in this article is specific to Mongoose v5 and beyond.

### Database Connection
Create a file ./src/database.js under the project root.

Next, we will add a simple class with a method that connects to the database.

Your connection string will vary based on your installation.


```
let mongoose = require('mongoose');

const server = ''; // REPLACE WITH YOUR DB SERVER
const database = ''; // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error');
      });
  }
}

module.exports = new Database();
```

The require(‘mongoose’) call above returns a Singleton object. It means that the first time you call require(‘mongoose’), it is creating an instance of the Mongoose class and returning it. On subsequent calls, it will return the same instance that was created and returned to you the first time because of how module import/export works in ES6.

Similarly, we have turned our Database class into a singleton by returning an instance of the class in the module.exports statement because we only need a single connection to the database.

ES6 makes it very easy for us to create a singleton (single instance) pattern because of how the module loader works by caching the response of a previously imported file.



## Mongoose Schema vs. Model

A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

Creating a Mongoose model comprises primarily of three parts:

### 1. Referencing Mongoose

```
let mongoose = require('mongoose');
```
This reference will be the same as the one that was returned when we connected to the database, which means the schema and model definitions will not need to explicitly connect to the database.


### 2. Defining the Schema

A schema defines document properties through an object where the key name corresponds to the property name in the collection.

```
let emailSchema = new mongoose.Schema({
  email: String
});
```
Here we define a property called email with a schema type String which maps to an internal validator that will be triggered when the model is saved to the database. It will fail if the data type of the value is not a string type.

The following Schema Types are permitted:

- Array
- Boolean
- Buffer
- Date
- Mixed (A generic / flexible data type)
- Number
- ObjectId
- String

Mixed and ObjectId are defined under require(‘mongoose’).Schema.Types.


### 3. Exporting a Model

We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.

```
module.exports = mongoose.model('Email', emailSchema);
```

Let’s combine the above code into ./src/models/email.js to define the contents of a basic email model:

```
let mongoose = require('mongoose');

let emailSchema = new mongoose.Schema({
  email: String
});

module.exports = mongoose.model('Email', emailSchema);
```

A schema definition should be simple, but its complexity is usually based on application requirements. Schemas can be reused and they can contain several child-schemas too. In the example above, the value of the email property is a simple value type. However, it can also be an object type with additional properties on it.

We can create an instance of the model we defined above and populate it using the following syntax:

```
let EmailModel = require('./email');

let msg = new EmailModel({
  email: 'ada.lovelace@gmail.com'
});
```

Let’s enhance the Email schema to make the email property a unique, required field and convert the value to lowercase before saving it. We can also add a validation function that will ensure that the value is a valid email address. We will reference and use the validator library installed earlier.

```
let mongoose = require('mongoose');
let validator = require('validator');

let emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    }
  }
});

module.exports = mongoose.model('Email', emailSchema);
```


## Basic Operations

Mongoose has a flexible API and provides many ways to accomplish a task. We will not focus on the variations because that is out of scope for this article, but remember that most of the operations can be done in more than one way either syntactically or via the application architecture.

### Create Record

Let’s create an instance of the email model and save it to the database:

```
let EmailModel = require('./email');

let msg = new EmailModel({
  email: 'ADA.LOVELACE@GMAIL.COM'
});

msg
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
  ```

The result is a document that is returned upon a successful save:

```
{ 
  _id: 5a78fe3e2f44ba8f85a2409a,
  email: 'ada.lovelace@gmail.com',
  __v: 0 
}
```

The following fields are returned (internal fields are prefixed with an underscore):

1. The _id field is auto-generated by Mongo and is a primary key of the collection. Its value is a unique identifier for the document.
2. The value of the email field is returned. Notice that it is lower-cased because we specified the lowercase: true attribute in the schema.
3. __v is the versionKey property set on each document when first created by Mongoose. Its value contains the internal revision of the document.

If you try to repeat the save operation above, you will get an error because we have specified that the email field should be unique.

### Fetch Record

Let’s try to retrieve the record we saved to the database earlier. The model class exposes several static and instance methods to perform operations on the database. We will now try to find the record that we created previously using the find method and pass the email as the search term.

```
EmailModel.find({
  email: 'ada.lovelace@gmail.com' // search query
})
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
  ```

The document returned will be similar to what was displayed when we created the record:

```
{ 
  _id: 5a78fe3e2f44ba8f85a2409a,
  email: 'ada.lovelace@gmail.com',
  __v: 0 
}
```


### Update Record

Let’s modify the record above by changing the email address and adding another field to it, all in a single operation. For performance reasons, Mongoose won’t return the updated document so we need to pass an additional parameter to ask for it:

```
EmailModel.findOneAndUpdate(
  {
    email: 'ada.lovelace@gmail.com' // search query
  },
  {
    email: 'theoutlander@live.com' // field:values to update
  },
  {
    new: true, // return updated doc
    runValidators: true // validate before update
  }
)
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });
  ```

The document returned will contain the updated email:

```
{ 
  _id: 5a78fe3e2f44ba8f85a2409a,
  email: 'theoutlander@live.com',
  __v: 0 
}
```


### Delete Record

We will use the findOneAndRemove call to delete a record. It returns the original document that was removed:

```
EmailModel.findOneAndRemove({
  email: 'theoutlander@live.com'
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Query Building

Mongoose has a very rich API that handles many complex operations supported by MongoDB. Consider a query where we can incrementally build query components.

In this example, we are going to:

1. Find all users
2. Skip the first 100 records
3. Limit the results to 10 records
4. Sort the results by the firstName field
5. Select the firstName
6. Execute that query

```
UserModel.find()               // find all users
  .skip(100)                   // skip the first 100 items
  .limit(10)                   // limit to 10 items
  .sort({ firstName: 1 })      // sort ascending by firstName
  .select({ firstName: true }) // select firstName only
  .exec()                      // execute the query
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.error(err);
  });
```
