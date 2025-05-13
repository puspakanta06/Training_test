# Library Management System API

This project provides a RESTful API for a Library Management System built using NestJS and MySQL. It supports role-based access for Admin and Users.

---

## Dependancies
npm install --save @nestjs/typeorm typeorm mysql2
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcryptjs class-validator class-transformer

after that in app module change
__synchronize: true__

## For start Application
npm run start:dev

## Routes for User

### Register
**POST** `http://127.0.0.1:3000/auth/register`  
Register a new user.

```json
{
  "name": "puspa",
  "email": "puspa@gmail.com",
  "password": "12345"
}
```

### Login
**POST** `http://127.0.0.1:3000/auth/login`  
Login and receive JWT token.

```json
{
  "email": "puspa@gmail.com",
  "password": "12345"
}
```

### Get Profile
**GET** `http://127.0.0.1:3000/auth/profile`  
Get user profile.

### Get Books
**GET** `http://127.0.0.1:3000/book/get_all`  
Get all available books.

**GET** `http://127.0.0.1:3000/book/get/:id`  
Get details of a specific book by its ID.

### Book Issue
**POST** `http://127.0.0.1:3000/book-issue`  
Issue a book.

```json
{
  "userId": 1,
  "bookId": 2
}
```

### Book Return
**POST** `http://127.0.0.1:3000/book-issue/return`  
Return an issued book.

```json
{
  "userId": 1,
  "bookId": 3
}
```

### Get All Book Issues
**GET** `http://127.0.0.1:3000/book-issue/all`  
Get all issued books.

---

## Routes for Admin

### Register
**POST** `http://127.0.0.1:3000/auth/register`  
Register a new admin user.

```json
{
  "name": "puspa",
  "email": "puspa@gmail.com",
  "password": "12345"
}
```

### Login
**POST** `http://127.0.0.1:3000/auth/login`  
Login and receive JWT token.

```json
{
  "email": "puspa@gmail.com",
  "password": "12345"
}
```

### Get Profile
**GET** `http://127.0.0.1:3000/auth/profile`  
Get admin profile.

### Books

**GET** `http://127.0.0.1:3000/book/get_all`  
Get all books.

**GET** `http://127.0.0.1:3000/book/get/:id`  
Get book details by ID.

**POST** `http://127.0.0.1:3000/book/create`  
Add a new book.

```json
{
  "title": "C language",
  "author": "Puspakanta Sahoo",
  "categories": [1]
}
```

**PATCH** `http://127.0.0.1:3000/book/edit/:id`  
Edit an existing book.

```json
{
  "title": "C languages",
  "author": "Puspakanta Sahoo",
  "categories": [1]
}
```

**DELETE** `http://127.0.0.1:3000/book/delete/:id`  
Delete a book.

**POST** `http://127.0.0.1:3000/book/restore/:id`  
Restore a soft-deleted book.

### Categories

**POST** `http://127.0.0.1:3000/category/create`  
Create a new category.

```json
{
  "name": "Software Engineering"
}
```

**GET** `http://127.0.0.1:3000/category/get_all`  
Get all categories.

**GET** `http://127.0.0.1:3000/category/get/:id`  
Get a specific category by ID.

**PATCH** `http://127.0.0.1:3000/category/edit/:id`  
Edit a category.

```json
{
  "name": "Software Engineering"
}
```

**DELETE** `http://127.0.0.1:3000/category/delete/:id`  
Delete a category.