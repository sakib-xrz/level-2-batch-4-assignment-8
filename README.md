# Bike Servicing Management API

## Project Summary

This project is a backend API for a Bike Servicing Management System. It allows a bike servicing center to efficiently manage customers, their bikes, and the service records for those bikes. The API provides Create, Read, Update, and Delete (CRUD) operations for customers, bikes, and services. Additionally, it includes specific endpoints for marking service jobs as complete and retrieving pending or overdue service records.

## Live Backend Link

[**[YOUR LIVE BACKEND LINK HERE - e.g., https://bike-service-api.railway.app]**](https://bike-service-api.railway.app)

_Replace the placeholder link above with the actual URL of your deployed backend._

## Tech Stack

- **Backend Framework:** Node.js
- **Web Framework:** Express.js
- **Language:** TypeScript
- **ORM (Object-Relational Mapper):** Prisma
- **Database:** PostgreSQL
- **API Testing:** Postman

## Setup Guide

Follow these steps to set up the Bike Servicing Management API locally:

1.  **Clone the repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd [YOUR_REPOSITORY_NAME]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up PostgreSQL:**

    - Ensure you have PostgreSQL installed and running on your system.
    - The database connection is configured via the `.env` file. Create a `.env` file in the root of your project if it doesn't exist, and populate it with your database credentials and other environment variables:

      ```env
      NODE_ENV=development
      PORT=8000

      DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"

      BCRYPT_SALT_ROUNDS=10

      JWT_ACCESS_TOKEN_SECRET="your access token secret"
      JWT_REFRESH_TOKEN_SECRET="your refresh token secret"

      JWT_ACCESS_TOKEN_EXPIRES_IN="your access token expire"
      JWT_REFRESH_TOKEN_EXPIRES_IN="your refresh token expire"
      ```

      _Ensure the `DATABASE_URL` matches your PostgreSQL connection string._

4.  **Run Prisma migrations:**

    ```bash
    npx prisma migrate dev --name init
    ```

    This command will create the necessary tables in your PostgreSQL database based on the Prisma schema defined in `prisma/schema.prisma`.

5.  **Generate Prisma Client:**

    ```bash
    npx prisma generate
    ```

    This command generates the Prisma Client, which is used to interact with your database.

6.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the backend server, typically on `http://localhost:8000` (as defined in your `.env` file).

7.  **API Endpoints:**
    You can test the API endpoints using a tool like Postman. Import the `postman_collection.json` file provided in this assignment to easily interact with the API.

## Key Features

### 1. Customer Management

- **Create Customer:** Add new customer records to the system.
- **Get All Customers:** Retrieve a list of all registered customers.
- **Get Customer by ID:** Fetch details of a specific customer using their unique ID.
- **Update Customer:** Modify the information of an existing customer.
- **Delete Customer:** Remove a customer record from the system.

### 2. Bike Management

- **Add New Bike:** Register a new bike associated with a specific customer.
- **Get All Bikes:** Retrieve a list of all registered bikes.
- **Get Bike by ID:** Fetch details of a specific bike using its unique ID.

### 3. Service Management

- **Create Service Record:** Log a new service request for a specific bike.
- **Get All Service Records:** Retrieve a list of all service records.
- **Get Service Record by ID:** Fetch details of a specific service record using its unique ID.
- **Mark Service as Completed:** Update the status of a service record to "done" and optionally set a completion date.

### 4. Bonus Features

- **Standardized Error Handling:** The API returns consistent error responses with status codes and informative messages. In development, stack traces are also included for easier debugging.
- **Pending or Overdue Services:** An endpoint to retrieve all service records that are either "PENDING" or "IN_PROGRESS" and have a `serviceDate` older than 7 days.
