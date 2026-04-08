# 🛒 E-commerce API

A simple and scalable REST API built with Express.js using a modular routing structure.

---

## 🚀 Base URL

```
http://localhost:PORT/api
```

---

## 📦 Features

* User Authentication (Register, Login, Profile)
* Product Listing (Protected)
* Modular & Scalable Route Structure

---

## 📁 Project Structure (Routes)

```
routes/
 ├── auth.routes.js
 ├── product.routes.js
 └── index.js
```

---

## 🔐 Authentication Endpoints

### ➤ Register User

```
POST /api/auth/register
```

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### ➤ Login User

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN"
}
```

---

### ➤ Get Current User (Protected)

```
GET /api/auth/me
```

**Headers:**

```
Authorization: Bearer YOUR_TOKEN
```

---

## 📦 Product Endpoints

### ➤ Get All Products (Protected)

```
GET /api/products
```

**Headers:**

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🔒 Authentication

All protected routes require a valid JWT token.

Add this header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧠 Architecture Notes

* Routes are separated by feature (auth, product)
* All routes are combined in a central `index.js`
* Clean and scalable structure for future expansion (orders, users, etc.)

---

## 🛠️ Future Improvements

* Product filtering & pagination
* Order management system
* Role-based authorization
* API performance optimization

---

## 📬 Example Root Endpoint

```
GET /
```

Response:

```
Welcome to the E-commerce API
```

## Packages used

npm install sequelize-cli --save-dev
npx sequelize-cli init
npx sequelize-cli seed:generate --name demo-users
npx sequelize-cli seed:generate --name demo-products
npx sequelize-cli seed:generate --name demo-orders
npm run seed