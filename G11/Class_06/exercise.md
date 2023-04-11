# Exercise: Creating a Library Catalog

You are tasked with creating a library catalog that keeps track of books and their authors. To accomplish this, you should create the following classes and interfaces:

## Book interface

The Book interface should have the following properties:
title (a string)
author (an instance of the Author interface)

## Author interface

The Author interface should have the following properties:
firstName (a string)
lastName (a string)

## ILibrary interface

The ILibrary interface should have the following methods:

addBook(book: Book) - adds a book to the library catalog
removeBook(title: string): void - removes a book from the library catalog by its title
listBooks(): void - lists all books in the library catalog, including their titles and authors

## Library class

The Library class should implement the ILibrary interface and have the following properties:
books (an array of Book objects) - This property should be private