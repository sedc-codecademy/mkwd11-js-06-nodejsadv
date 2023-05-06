# NestJS Workshop - Library API

## Basic Requirements

We should create a library API that will have the following resources: book, author, publisher.

For all of these resources, you have to add CRUD operations and the relations between them are as follows:

- One book can have only one publisher, but one publisher can have many books.
- One author can have many books and one book can have only one author.

### Models for resources

#### Author

```
{
  firstName: string
  lastName: string
  email: string
  birthDate: Date
  books: Book[]
}
```

#### Book

```
{
  title: string
  description: string
  genre: string
  author: Author
  publisher: Publisher
}
```

#### Publisher

```
{
  name: string
  address: string
  phoneNumber: string
  books: Book[]
}
```

The data (DTO) for all the above resources and endpoints needs to be validated.

To finish the basic requirements, you need to have created at least one author, one publisher, and five books, and they need to be connected properly, and the relations loaded correctly on the findById endpoints.

## Bonus Requirement (DO NOT ATTEMPT BEFORE BASIC PART)

Add another resource called Borrower, which will contain data about borrowers and the books they have borrowed. The relations for the borrower are as follows:

- One borrower can have many books, and one book can be borrowed by many borrowers.

### Models for resources

#### Borrower

```
{
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  borrowedBooks: Book[]
}
```

Don't forget to add the relations in the original models.

To finish the bonus part, you need to have created at least two borrowers and assigned them each a borrowed book.

## Super bonus

Add authentication and authorization so that only logged-in users can work with any of the resources above.
