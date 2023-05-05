# Building Food Order Application

# Implement relation and authentication

## Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.

PART 1

- On the user entity add one more property called role that is of type enum ( the enum should have two roles: ADMIN and COSTUMER)
- Create user entity using the typeorm. (It will create user table in the database for us)
- Create one more endpoint to register user. (Should include create user dto. The role should be provided from the request body)
- Install bcrypt (it is library to hash and compare hashed password; COMMAND TO INSTALL: npm install brypt; npm install --save @types/bcrypt)
- When registering new user, hash the user password before saving into the db, and when loging in the user, compare the password provided with the one of the db
- Make sure we can register a user, and login with the creadentials.

PART 2
- Create costum roles decorator
- Create role guard
- The routes for creating, removing and updating a product can only be accessed by a user that has the role ADMIN.


BONUS: 
- Add swagger documentation on your nest application 

NOTE: Use the code from class as a guide and inpiration.

NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.


