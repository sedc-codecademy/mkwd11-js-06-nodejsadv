# Workshop 1

## Cars app

The idea for this app is to create an app that will enable any client side app to get or add data about cars.

General requirements:
- Get all cars
- Get a single car by ID
- Add a car
- Update a car (any property can be updated)
- Delete a car (both soft and hard delete are fine)

Advanced requirements (BONUS):
- Get cars by brand
- Get all cars that are made in given year
- Get all cards by color
- Update car price (do not update anything else)
- Update car availability (do not update anything else)
- Implement soft delete (same method from above, but do not delete the record from the database)

* All advanced requirements are not required, but if you have time, you can add them.

Use past examples and best judgement to create models for previously mentioned entities. You are free to use any
structure, properties, add any validation as you see fit.

In order to build this use Nest JS & PostgreSQL (with TypeORM).

Models:

- Car
    - id - UUID
    - brand - string
    - model - string
    - year - number - integer
    - price - number - integer
    - color - string
    - isAvailable - boolean

You can add any other properties you see fit, but these are the required ones.

After you are done:

- Add code to your own repo on GitHub
- Send the link to the repo to:
    - ivo.kostovski@gmail.com
    - tpelivanov@gmail.com
