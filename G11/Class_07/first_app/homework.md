# Building Food Order Application

## Requirements:

- Create new nest application food_order_application
- Create new module called order
- Create new service called order
- Create new controller called order
- Create interface Product with the following properties: id: string, productName: string, productPrice: number
- Create interface Order with the following properties: id: string (id of the order), orderDate: Date (the date when the order was made), productsOrdered: Product[] (list of products)
- Create hardcoded array of orders
- Whenever /orders is requested, return the hardcoded array of orders to the user.

NOTE: Use postman to play with the end point. Use the code from class as an inspiration and guide. When the homework is submitted, send the the postman collection too.
