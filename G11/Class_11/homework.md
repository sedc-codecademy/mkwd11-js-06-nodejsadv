# Building Food Order Application

# Implement relation and authentication

## Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.

PART 1

- Create OrderEntity that implements the Order inteface
- The order entity should have the same properties as the interface
  - id should be primaryColumn
  - orderDate should be column
  - productsOrdered should be list of ProductEntities
- Create the relation between the OrderEntity and ProductEntity, using the productsOrdered property.
  NOTE: You should create a property in the ProductEntity too, that will be named order, and it will be in relation with the OrderEntity
  NOTE: Think of what the relation might be, between the ProductEntity and the OrderEntity

PART 2

- Create new module and service, users
- In the users service hardcode few users
- Create one method findOne that returns user by username (same as in class)
- Create authentication on the application
- Create new module,service called auth
- Create local and jwt strategies
- Create local and jwt guards
- Create route for login that returns access_token to the user
- Orders routes must be guarded, and to access them we should provide access_token in the requst

NOTE: Use the code from class as a guide and inpiration.

NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.

PACKAGES USED FOR AUTHENTICATION:
npm install --save @nestjs/passport passport passport-local @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-local @types/passport-jwt
