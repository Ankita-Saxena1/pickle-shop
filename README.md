# Pickle Shop

Welcome to the Pickle Shop project! This project is a simple web application for selling pickles, built with a Spring Boot backend and an Angular frontend.

## Project Structure

The project is organized into two main directories: `backend` and `frontend`.

### Backend

The backend is developed using Spring Boot and is located in the `backend` directory. It includes:

- **PickleShopApplication.java**: The entry point of the Spring Boot application.
- **controller**: Contains `PickleController.java`, which handles HTTP requests related to pickles.
- **model**: Contains `Pickle.java`, representing the Pickle entity with properties like id, name, and description.
- **repository**: Contains `PickleRepository.java`, an interface for database operations related to the Pickle entity.
- **resources**: Contains configuration properties in `application.properties` and a directory for static files.

### Frontend

The frontend is developed using Angular and is located in the `frontend` directory. It includes:

- **app.module.ts**: The main module of the Angular application.
- **components/pickle-list**: Contains files for the `PickleListComponent`, which displays a list of pickles.
  - `pickle-list.component.ts`: Logic for fetching and displaying pickles.
  - `pickle-list.component.html`: HTML template for the pickle list.
  - `pickle-list.component.css`: Styles for the pickle list component.
- **assets**: A directory for static assets like images and stylesheets.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Node.js and npm
- Angular CLI

### Running the Backend

1. Navigate to the `backend` directory.
2. Run the following command to start the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

### Running the Frontend

1. Navigate to the `frontend` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the Angular application:
   ```
   ng serve
   ```

### Accessing the Application

- The backend will be available at `http://localhost:8080`.
- The frontend will be available at `http://localhost:4200`.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.