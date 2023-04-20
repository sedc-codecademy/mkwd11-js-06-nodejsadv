# Building Food Order Application

# Implement routes on the food order application
## Requirements: NOTE: Apply the requirements ON TOP OF the previous homework (the first homework of nest js). 

PART 1
- Create GET route that returns order by id, throw error if order with given id is not found;
- Create POST route that creates new order ( Create DTO for the request body);
- Create PUT route that updates an existing order, create DTO for the update request body, throw error if order with given id that is supposed to be updated is not existing;
- Create DELETE route that deletes order by given id, throw error if order with given id is not found;
- Currently we are not working with databases so you have to "manipulate" with the array. 

PART 2
- Create new controller, module and service called products
- In the service, hardcode an array of products using the Product interface created from the previous homework.
- The controller should have one GET route that returns all products.


NOTE: Use postman to play and test the endpoint. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.
