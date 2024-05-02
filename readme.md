 # User Authentication API

This is a simple user authentication API built with Express.js and MongoDB, providing endpoints for user signup, signin, and password reset functionalities.

## Features

- User signup: Allows users to create an account by providing their username, password, first name, and last name.
- User signin: Allows users to authenticate by providing their username and password.
- Password reset: Allows users to reset their password by providing their current password along with a new password.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Zod for request body validation

## Installation

1. **Clone the repository:**
   ```
   git clone <repository_url>
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up configuration:**
   - Ensure you have a MongoDB instance running.
   - Create a `config.js` file in the root directory with the following content:
     ```javascript
     module.exports = {
       JWT_SECRET: "your_jwt_secret",
       MONGODB_URI: "your_mongodb_uri"
     };
     ```
     Replace `"your_jwt_secret"` with a secret key for JWT token generation, and `"your_mongodb_uri"` with the connection URI for your MongoDB database.

## Usage

1. **Start the server:**
   ```
   node index.js
   ```

2. **Use tools like Postman to test the API endpoints.**

## Endpoints

- **POST /signup**: Register a new user.
- **POST /signin**: Authenticate a user.
- **POST /forgot-password**: Reset user password.

## Authentication

- The `/signin` and `/forgot-password` endpoints require authentication using JWT. Include the JWT token in the `Authorization` header as `Bearer <token>`.

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.
