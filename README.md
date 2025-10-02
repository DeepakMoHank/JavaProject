# 🔎 Lost & Found Web App

> A full-stack **Lost & Found Portal** where users can **report, search, and manage** lost or found items.  
> Built with ❤️ using **Spring Boot + MySQL + HTML/CSS/JS**.

![Java](https://img.shields.io/badge/Java-17-orange?logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.0-brightgreen?logo=springboot)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-3.9.8-red?logo=apachemaven&logoColor=white)

---

## ✨ Features
- 📝 Add Lost & Found items  
- 🔍 Search items by name/location  
- 📋 View all listed items  
- 🛠 REST API with Spring Boot  
- 🗄️ MySQL Database integration  
- ⚡ Responsive UI with HTML/CSS/JS  

---

## 🛠 Tech Stack
| Layer      | Technology           | Version  |
|------------|----------------------|----------|
| Frontend   | HTML, CSS, JS        | -        |
| Backend    | Java (Spring Boot)   | 3.3.0    |
| Database   | MySQL                | 8.0+     |
| Build Tool | Maven                | 3.9.8    |
| JDK        | OpenJDK / Oracle JDK | 17+      |

---

## 📂 Project Structure
LostAndFoundApp_Final/
│── frontend/
│ ├── index.html
│ ├── lost.html
│ ├── found.html
│ ├── style.css
│ └── script.js
│
│── backend/
│ ├── src/main/java/com/example/lostandfound/
│ │ ├── LostAndFoundApplication.java
│ │ ├── model/Item.java
│ │ ├── repository/ItemRepository.java
│ │ └── controller/ItemController.java
│ ├── src/main/resources/application.properties
│ └── pom.xml
│
└── README.md

markdown
Copy code

---

## ⚙️ Setup Guide

### 1️⃣ Prerequisites
- [Java JDK 17+](https://adoptium.net/)  
- [Maven 3.9.8+](https://maven.apache.org/)  
- [MySQL 8.0+](https://dev.mysql.com/downloads/)  

### 2️⃣ Database Setup
```sql
CREATE DATABASE lostfounddb;
3️⃣ Configure application.properties
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/lostfounddb
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

server.port=8080
4️⃣ Run the Backend
sh
Copy code
cd backend
mvn clean install
mvn spring-boot:run
👉 Server will start at: http://localhost:8080

5️⃣ Run the Frontend
Open frontend/index.html in your browser.

📡 API Endpoints
Method	Endpoint	Description
GET	/api/items	Fetch all items
POST	/api/items	Add a new item
GET	/api/items/{id}	Get item by ID
DELETE	/api/items/{id}	Delete an item

📦 Example POST JSON:

json
Copy code
{
  "name": "Laptop",
  "description": "Black Dell laptop",
  "location": "Library",
  "status": "lost"
}
📌 Maven Dependencies (pom.xml Highlights)
xml
Copy code
<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>3.3.0</version>
    </dependency>

    <!-- Spring Boot Starter Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
        <version>3.3.0</version>
    </dependency>

    <!-- MySQL Driver -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>8.0.33</version>
    </dependency>

    <!-- Lombok (Optional, for reducing boilerplate) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.30</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
🚀 Future Enhancements
🔐 User Authentication (Login/Signup)

📸 Image Upload for items

🔍 Advanced Search & Filters

🌍 Deployment on Heroku / AWS / Render

👨‍💻 Author
💡 Built as a Lost & Found Web App Project for learning Java + Spring Boot + MySQL + Web Development.

⭐ If you like this project, don’t forget to star this repo on GitHub!

yaml
Copy code

---

