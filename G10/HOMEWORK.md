# Advanced Node JS Homework

## ZOO

The main goal of this app is to create an API which will enable users to manage a ZOO. A ZOO management app should provide APIs where users can manage employees, animals and shelters.

### Task 1
Create an express JS server. Create a new database "zoo" and add appropriate collections as you see fit.

Create an API that will enable:
- Adding a new zookeeper
- Editing existing zookeeper
- Getting all zookeepers
- Deleting a zookeeper

Each Zookeeper should have the following details (this is an example):
```
 {
  "_id": "9876h32671g53s6897152",
  "name": "John Doe",
  "age": 23,
  "location": "Skopje",
  "isActive" true
 }
```

- id - the unique identifier for each zookeeper - string;
- name - first and last name of each employee - string;
- age - his/her age - number;
- location - city and country where the zoo s/he is working at is located  - string;
- isActive: if the employee is actively working or not - boolean

### Task 2

Create an API that will enable:
- Adding a new animal
- Editing existing animal
- Getting all animals
- Deleting an animal

```
{
  "_id": "876i5g3267g5b238d",
  "name": "Blacky",
  "type": "Bear",
  "age": 3,
  "location": "Belgrade",
  "gender": "M",
  "characteristics": {
    "food": ["honey", "apple", "watermelon", "cucumber"],
    "colour": "black",
    "isDangerous": true,
    "weight": 250,
    "enclosure": "mountain"
  }
}
```

- id - the unique identifier for each animal - string;
- name - name of each animal - string;
- age - its age - number;
- location - city and country where the animal is located at - string;
- gender - gender of the animal - string;
- characteristics - all characteristics about this animal - object
  - food - types of food the animal is fed - array of strings
  - colour - animals colour - string
  - isDangerous - self-explanatory, an answer to the question "will I die trying to fight it?" - boolean
  - weight - how much the animal weights - number
  - enclosure - in which type of enclosure within the zoo the animal is living in (ex. mountain, ice, water, etc.) - "mountain"

#### Bonus requirements:
- Validate that animals and zookeepers are in proper format and that all properties are added (each property is required)
- Enable filtering all animals by zoo location (ex. if I call the endpoint to get all animals, I should be able to filter all animals from "Kumanovo" by adding `?location=Kumanovo`

### Task 3

Add mongoose to the project. Change the project structure so that you will have both services for business logic and models for Mongo DB.

Add the following validations:

Each property type has to be set as previously mentioned in task 1 & 2 (ex. name: string, age: number, etc.)

1. Zookeeper
- name - is required, can't be less than 5 characters
- age - is required, has to be between 18 - 110 years, including these two numbers
- location - is required
- isActive - is not required, has default value of false

2. Animal
- name - is required, can't be less than 2 characters
- age - is required, negative numbers are not allowed
- location - is required
- gender - is required, has to be either 'M' or 'F'
- characteristics - is required
  - food - not required
  - colour - not required
  - isDangerous - not required, default value is false
  - weight - not required, negative numbers are not allowed
  - enclosure - required

### Task 4

Expand zookeeper and animal models with the following properties:

1. Zookeeper:
- animals - list of animals for which the zookeeper is responsible for

2. Animal
- zookeeper - responsible zookeeper assigned to this animal

Add three additional endpoints (od edit previous one if possible, up to you):
- Get zookeeper by ID - Should provide all data about the zookeeper, plus list of animals with full data about the animals to which the zookeeper is assigned to
- Get animal by ID - Should provide all data about the animal, plus info about the responsible zookeeper
- Assign animals to zookeeper - I should be able to assign multiple animals to a single zookeeper

### Task 5

Implement all previously listed requirements with Nest JS. The app should use mongoose (so we are rebuilding the version two of the app, mentioned in tasks 3 and 4).

### Task 6

1. Add proper documentation (Swagger) for the API. The documentation should be available on the `/swagger` endpoint. In addition to this:
2. Add proper validation to all endpoints. If the request is not valid, the API should return a proper error message and status code.

Bonus: Add proper error handling for all endpoints. If an error occurs, the API should return a proper error message and status code.

### Task 7

1. Remove mongoose from the project.
2. Add TypeORM to the project. Change the project structure so that you will have both services for business logic and models for TypeORM.

### Bonus requirements
1. Expand the get all animals endpoint with ability to:
- get all animals from certain location
- get all fe/male animals
- get all animals older than X

2. Expand the get all zookeepers endpoint with ability to:
- get all zookeepers from certain location
- get all zookeepers older than X
- get all in/active zookeepers
  
## Requirment description:
- Use Mongo DB (Until Task 6)
  - Use mongoose (starting from Task 3)
  - Use Nest JS (starting from Task 5)
- Use Postgres (Starting from Task 7)
- Anyone can add/edit animals and zookeepers (no need for distinction between admins vs general users)
- Each property can be edited for both animals and zookeepers
- Use proper routing for animals and zookeepers
- Proper project structure in general is appreciated
- Use your best judgement for the things that are not specified! Don't be afraid to ask questions! Don't be afraid to make mistakes! *IT'S OK, you are learning*!

## ENV Vars
Please use the following example for ENV Vars to speed up the process of reviewing the homework:
```
PORT=3000
HOST=localhost
MONGO_USERNAME=
MONGO_PASSWORD=
MONGO_CLUSTER=cluster0
MONGO_DB_NAME=zoo
MONGO_SERVER=
```

## Homeworks versions
1. Version 1 - Task 1 & Task 2
2. Version 2 - Task 3 & Task 4
3. Version 3 - Task 5 & Task 6
4. Version 4 - Task 7 & Task 8

## Before you send:
- Use .env variables. Ignore your own values, but provide .env.example so that we can connect to our own database while checking the homework
- Attach exported PostMan collection
- Please test your app before sending it. Try the APIs, if something is now working fine, please let us know what and where
- Have in mind that we all have access to Chat GPT, so autogenerated files will not be considered, do yourself a favour and use AI only when you are sure you know how to properly code
- Most importantly: HAVE FUN & TRY TO LEARN!
