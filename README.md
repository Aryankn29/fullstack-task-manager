# Full-Stack Task Manager



\# Full-Stack Task Manager Tech Demo



!\[Java](https://img.shields.io/badge/Java-17-blue) !\[Spring Boot](https://img.shields.io/badge/Spring\_Boot-3.x-green) !\[React](https://img.shields.io/badge/React-18-blue) !\[TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)



A minimal but feature-complete full-stack task management application. This project was built as a technical demonstration to showcase proficiency in modern back-end and front-end development practices, from API design to a dynamic user interface.







\## Features



\* \*\*Create, Read, Update, Delete (CRUD)\*\* functionality for tasks.

\* A reactive, non-blocking back-end API.

\* A clean, responsive, and interactive front-end user interface.

\* Containerized database for easy setup and consistent development.



\## Tech Stack



This project utilizes a modern, robust tech stack to demonstrate a wide range of skills.



\#### Back-End

\* \*\*Framework\*\*: Spring Boot (Java 17)

\* \*\*Reactive Core\*\*: Spring WebFlux for non-blocking, asynchronous request handling.

\* \*\*Database\*\*: PostgreSQL (Containerized with Docker Compose)

\* \*\*Data Access\*\*: Spring Data R2DBC for reactive database communication.

\* \*\*Build Tool\*\*: Maven



\#### Front-End

\* \*\*Framework\*\*: React 18

\* \*\*Language\*\*: TypeScript

\* \*\*Build Tool\*\*: Vite

\* \*\*UI Library\*\*: Material-UI (MUI) for a professional and responsive component set.

\* \*\*API Communication\*\*: Native `fetch` API.



\## Getting Started



Follow these instructions to get the project running on your local machine.



\### Prerequisites



\* Git

\* Java Development Kit (JDK) 17 or later

\* Node.js and npm

\* Docker and Docker Compose



\### Setup \& Run



1\.  \*\*Clone the repository:\*\*

&nbsp;   ```bash

&nbsp;   git clone \[https://github.com/Aryankn29/fullstack-task-manager.git](https://github.com/Aryankn29/fullstack-task-manager.git)

&nbsp;   cd fullstack-task-manager

&nbsp;   ```



2\.  \*\*Configure the Database:\*\*

&nbsp;   \* In the project's root directory, create a `.env` file.

&nbsp;   \* Copy the contents of `.env.example` (or add the following) into it, setting a secure password:

&nbsp;       ```env

&nbsp;       POSTGRES\_DB=tasksdb

&nbsp;       POSTGRES\_USER=user

&nbsp;       POSTGRES\_PASSWORD=your\_secret\_password

&nbsp;       ```



3\.  \*\*Run the Back-End:\*\*

&nbsp;   \* Start the PostgreSQL database container:

&nbsp;       ```bash

&nbsp;       docker-compose up -d

&nbsp;       ```

&nbsp;   \* Navigate to the server directory and run the Spring Boot application:

&nbsp;       ```bash

&nbsp;       cd server

&nbsp;       ./mvnw spring-boot:run

&nbsp;       ```

&nbsp;   \* The back-end API will be running on `http://localhost:8080`.



4\.  \*\*Run the Front-End:\*\*

&nbsp;   \* Open a new terminal and navigate to the client directory:

&nbsp;       ```bash

&nbsp;       cd client

&nbsp;       ```

&nbsp;   \* Install the dependencies:

&nbsp;       ```bash

&nbsp;       npm install

&nbsp;       ```

&nbsp;   \* Start the development server:

&nbsp;       ```bash

&nbsp;       npm run dev

&nbsp;       ```

&nbsp;   \* Open your browser and navigate to `http://localhost:5173`.



\## API Endpoints



The back-end exposes the following RESTful endpoints:



| Method | Endpoint              | Description          |

| :----- | :-------------------- | :------------------- |

| `GET`  | `/api/v1/tasks`       | Get all tasks        |

| `POST` | `/api/v1/tasks`       | Create a new task    |

| `PUT`  | `/api/v1/tasks/{id}`  | Update an existing task |

| `DELETE`| `/api/v1/tasks/{id}`  | Delete a task        |

