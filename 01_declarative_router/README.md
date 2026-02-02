# React Router – Declarative Routing Example

This project is a simple React application that demonstrates how to use **React Router in declarative mode** to manage navigation between pages and fetch data inside components.

It is intended as an educational example for learning the basics of client-side routing in React.

---

## 🚀 Features

- Declarative routing with `BrowserRouter`, `Routes` and `Route`
- Nested routes (`/users` and `/users/:userId`)
- Dynamic route parameters
- Data fetching using `useEffect`
- Basic loading and error handling
- 404 page for non-existing routes

---

## 🗂️ Application Routes

| Path             | Description          |
| ---------------- | -------------------- |
| `/`              | Home page            |
| `/about`         | About page           |
| `/users`         | Users list           |
| `/users/:userId` | User detail page     |
| `\*`             | 404 – Page Not Found |

---

## 🧭 Routing Mode

This project uses **React Router in declarative mode**, meaning:

- Routes are defined using JSX (`<Routes>` and `<Route>`)
- Data fetching is handled **inside components**
- Navigation and data loading are separate concerns

This approach is ideal for understanding the fundamentals before moving to **data routers**.

---

## 🔌 Backend API Requirement (IMPORTANT)

⚠️ **This application will NOT work without the backend API.**

The frontend depends on a REST API developed in the **Python / FastAPI course**.

### Required API

The API must be running locally and expose at least the following endpoints:

```http
GET http://127.0.0.1:8000/users/
GET http://127.0.0.1:8000/users/{id}
```

- You can use the [API created in FastApi from this link](https://github.com/jeatzr/python_materiales/tree/main/U3/02_fastapi_sqlalchemy)

### Example user object

```json
{
  "id": 1,
  "name": "Vicent",
  "surname": "Foo",
  "age": 30,
  "email": "vicent.foo@example.com"
}
```

Make sure the FastAPI server is running **before starting the React app**.

---

## ▶️ How to run the project

- You can download the the [API created in FastApi from this link](https://github.com/jeatzr/python_materiales/tree/main/U3/02_fastapi_sqlalchemy)

### 1️⃣ Start the FastAPI backend

From the Python project:

```bash
fastapi dev main.py
```

The API should be available at:

```
http://127.0.0.1:8000
```

---

### 2️⃣ Install frontend dependencies

```bash
npm install
```

---

### 3️⃣ Start the React application

```bash
npm run dev
```

---

## 📚 Learning Goals

By working with this project, students will learn:

- How declarative routing works in React
- How to define nested and dynamic routes
- How to read route parameters using `useParams`
- How to fetch data inside components
- How to handle navigation errors (404 pages)

---

## 🔜 Next Steps

After completing this project, the next step is to refactor it using:

- **React Router Data Routers**
- `loader` functions
- `useLoaderData`
- Centralized error handling with `errorElement`

---

## 🧑‍🏫 Notes for Students

This project is intentionally kept simple to focus on routing concepts.  
Advanced solutions (custom hooks, loaders, caching libraries) will be introduced later.

---
