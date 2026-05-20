# hotel-reservation-system

A full-stack web application for managing hotel reservations, built with Spring Boot (backend) and React (frontend).

  Project Overview

This project is a simple hotel management system that allows users to:

View available hotels
Add new hotels
Manage hotel data through a REST API
Connect a React frontend to a Spring Boot backend

It was developed as part of a practical learning project in full-stack web development.

  Tech Stack
Backend
Java 17+
Spring Boot
Spring Web
Spring Data JPA
Hibernate
MySQL (or H2 database)
Frontend
React.js
Axios
HTML/CSS
JavaScript (ES6+)
Tools
Git & GitHub
Postman (API testing)
Maven
   Project Structure
hotel-reservation-system/
│
├── backend/
│   ├── src/main/java/
│   ├── src/main/resources/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
   Installation & Setup
     Clone the repository
git clone https://github.com/houda-zenzen/hotel-reservation-system.git
cd hotel-reservation-system
     Backend Setup (Spring Boot)
cd backend
Configure database in application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/hotel_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run backend:
mvn spring-boot:run

Backend runs on:

http://localhost:8080
     Frontend Setup (React)
cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

  API Endpoints
Hotels

Method	      Endpoint	        Description
GET	          /hotels	          Get all hotels
POST	        /hotels	          Add a new hotel
GET	          /hotels/{id}	    Get hotel by ID
PUT	          /hotels/{id}	    Update hotel
DELETE	      /hotels/{id}	    Delete hotel

  Example JSON (POST request)
{
  "name": "Marriott",
  "city": "Marrakech",
  "roomsAvailable": 50
}


   Author
Name: Houda Zenzen
Project: Hotel Reservation System
