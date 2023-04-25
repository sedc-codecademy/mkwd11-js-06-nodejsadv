# Building Food Order Application

# Implement database in the application 
## Requirements: NOTE: Apply the requirements ON TOP OF the previous homework.

PART 1
- Using the pgAdmin application for interacting with the local postgres database, create new databse named "food_app_db". ( At class we manually created one called "tasks" );
- Connect/Initialize the database in the App Module ( kind reminder: see the code from class as inspiration)
- Create new Entity class called ProductsEntity that implements the inteface Product.
- Decorate each property of the class with @Column and @PrimaryColumn for the id property.
- In the products module register the entity (ProductsEntity).
- NOTE: Feel free and use the code from class and guide and inspiration.

PART 2
- Once you have registered and implemented the database, implement the following CRUD operation in the products controller.
- On the route Get all products, instead to return the values of the hardcoded array, return the products from the database
- On the route Get product by id, instead of returning a product of the hardcoded array, return product by id from the database
- Create new route called create product.  when called should create and save one product entity in the database.




NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.
