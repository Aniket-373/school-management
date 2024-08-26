Sure! Here’s the complete `README.md` file for your Student Management API:

```markdown
# Student Management API

## Overview

The Student Management API is a RESTful API built using Node.js, Express.js, and MySQL. It allows users to manage school data, including adding new schools and retrieving a list of schools sorted by proximity to a user-specified location.

## Features

- **Add School**: Add new school information to the database.
- **List Schools**: Retrieve and sort schools by proximity to a given location.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **MySQL**: Ensure MySQL is installed and running. You can download it from [mysql.com](https://www.mysql.com/).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/school-management.git
   cd school-management
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up the Database**:

   - Create a MySQL database and import the schema. You can use a tool like MySQL Workbench or command line to execute the SQL script that creates the `schools` table.

   ```sql
   CREATE TABLE schools (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     address VARCHAR(255) NOT NULL,
     latitude FLOAT NOT NULL,
     longitude FLOAT NOT NULL
   );
   ```

4. **Configure Environment Variables**:

   Create a `.env` file in the root of your project and add your MySQL connection details:

   ```env
   DB_HOST=localhost
   DB_USER=your-username
   DB_PASSWORD=your-password
   DB_NAME=your-database-name
   ```

## Usage

1. **Start the Server**:

   ```bash
   npm start
   ```

   The server will start and listen on port `3000` by default. You can change the port by setting the `PORT` environment variable.

2. **API Endpoints**:

   - **Add School**

     - **Endpoint**: `/addSchool`
     - **Method**: POST
     - **Payload**: JSON object containing `name`, `address`, `latitude`, and `longitude`.
     - **Example Request**:

       ```bash
       curl -X POST http://localhost:3000/addSchool \
         -H "Content-Type: application/json" \
         -d '{"name": "Greenwood High", "address": "123 Elm St", "latitude": 37.7749, "longitude": -122.4194}'
       ```

   - **List Schools**

     - **Endpoint**: `/listSchools`
     - **Method**: GET
     - **Query Parameters**: `latitude` and `longitude` (user's location)
     - **Example Request**:

       ```bash
       curl "http://localhost:3000/listSchools?latitude=37.7749&longitude=-122.4194"
       ```


## Deployment

For deploying the API, you can use services like [Render](https://render.com/) or [Heroku](https://www.heroku.com/). Follow their documentation to set up your deployment pipeline and environment variables.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues, suggest improvements, or make pull requests. Please follow the contribution guidelines provided in the [CONTRIBUTING.md](CONTRIBUTING.md) file.
