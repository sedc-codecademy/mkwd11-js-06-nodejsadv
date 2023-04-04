# MONGOOSE WORKSHOP

## Guide for filters

As we didn't have time in class to go through this, below you will find a guide for all the requirements, try them out at home and we'll cover them again in class

## Important note

Using sanitze filter option with operators that start with `$` will throw an error because mongoose considers them unsafe so remove it if you plan on using these operators as defined below

1. Using `$gt` for the stock filter

Here the way to implement this filter is to send a query parameter that is named stock or something like inStock and then to read that in our service method and add a `{$gt: 0}` option for the `.find()` method

_Code Example_

```
if(filters?.stock) filters.stock = {$gt: 0}

const products = await Product.find(filters || {})

```

2. Description , title and category will work like normal queries:

```
http://localhost:3000/api/products?category=Shoes&title=Nike
```

3. The rating is going to follow the same rule as the stock one we just have to update the logic a bit

_Code Example_

```
if(filters?.rating) filters.rating = ${gte: Number(filters.rating)}

const products =  await Product.find(filters || {})
```

- Here we are using $gte which means greater than or equals
- We are converting the rating from a string ( as received from queries ) to number so that this will work with the database
- NOTE: No sanitze filter here and invalid rating values like strings will break this filter

4. Sorting in mogoose is done by using the sort method attached to the find query

_Code Example_

```
let sortFilter

if(filters?.sortByPrice === "asc") {
    sortFilter = {price: 1}
}
if(filters?.sortByprice === "desc") {
    sortFilter = {price -1}
}

//Removing the sort by price query as it will break the find cause there is no property like that in the schema
const {sortByPrice, ...updatedFilters} = filters

const products = await Product.find(updatedFilters || {}).sort(sortFilter || null)

```

This one is more complex, specifically if we want to include other filters in the query

Things that are important

1. Sort is a method that is attached after the find and it takes an object that should have a key value pair, the key should be the property from the schema that you want to sort by and the value should be a number
2. Setting the number to 1 sorts ascending 1>10, using -1 sorts descending 10>1
3. Don't ever pass sort queries in the .find() method cause it will without a doubt cause you issues , find only works with properties that exist in the schema
4. We have `sortFilter || null` because if we set sort to null it will not sort the documents and that is the behavior we want in case of no sorting
5. NOTE: Mongoose also needs sanitze filter to be false here

### In closing

Querying dababases with filters, sorting, pagination and all that will be covered in much greater detail when we get to SQL , after you learn it there you will see that the overlap is pretty big as to how things are done when simply needing specific data from a database
