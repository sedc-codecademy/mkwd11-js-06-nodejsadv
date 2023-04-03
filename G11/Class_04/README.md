# Workshop pt.1

## ECommerce app
ECommerce is rocking both on the web and mobile and we can’t ignore the massive size of this industry. Knowing how to build and maintain e-commerce apps is going to help you a lot as an app developer.

To begin with, you can either clone an existing e-commerce app like Amazon, etc or you can build your own from scratch. Irrespective of what you choose, let’s see some key features that you must add to your app:



### Requirements: 

- Generate/Add products: Should be able to add product.
- Product listing: Should return a list of products with their names, descriptions, prices, and ratings.
- Product details: Should return product by id, should be able to see its detailed information, including product description, price, rating, and reviews.
- Product search: Should be able to search for product by keyword/name.
- Shopping cart: Should be able to add product in cart by id.
- Checkout: Should be able to purchase the products in the cart.
- Purchase/order history: Should be able to view  past purchases/order history.
- Product rating and reviews: Should be able to rate and review products.

## Sample product data structure: 
{
  "name": "Product name",
  "description": "Product description",
  "price": 9.99,
  "reviews": [
    {
      "rating": 4,
      "comment": "Great product!"
    },
    {
      "rating": 5,
      "comment": "Amazing product!"
    }
  ]
}

In order to build this use Node.js & MongoDB