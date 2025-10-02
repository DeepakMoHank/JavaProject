# 🔎 Lost & Found Web App

A **Lost & Found Portal** where users can **report, search, and manage** lost or found items.  
Built with **Spring Boot + MySQL + HTML/CSS/JS**.  

---

## ✨ Features
✅ Add Lost & Found items  
✅ Search items by name/location  
✅ View all listed items  
✅ REST API with Spring Boot  
✅ MySQL Database integration  

---

## 🛠️ Tech Stack
- 🎨 **Frontend:** HTML, CSS, JavaScript  
- ⚡ **Backend:** Java (Spring Boot)  
- 🗄️ **Database:** MySQL  
- 📦 **Build Tool:** Maven  

---

## 📂 Project Structure
LostAndFoundApp_Final/
│── frontend/ # UI
│ ├── index.html
│ ├── lost.html
│ ├── found.html
│ ├── style.css
│ └── script.js
│
│── backend/ # Backend API
│ ├── src/main/java/com/example/lostandfound/
│ │ ├── LostAndFoundApplication.java
│ │ ├── model/Item.java
│ │ ├── repository/ItemRepository.java
│ │ └── controller/ItemController.java
│ ├── src/main/resources/application.properties
│ └── pom.xml
│
└── README.md

yaml
Copy code

---

## ⚙️ Setup Guide

### 1️⃣ Prerequisites
- Install **Java 17+**  
- Install **Maven**  
- Install **MySQL**  

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
4️⃣ Run the Backend
sh
Copy code
cd backend
mvn spring-boot:run
👉 Server runs at http://localhost:8080

5️⃣ Run the Frontend
Open frontend/index.html in your browser.

📡 API Endpoints
Method	Endpoint	Description
GET	/api/items	Fetch all items
POST	/api/items	Add a new item
GET	/api/items/{id}	Get item by ID
DELETE	/api/items/{id}	Delete an item

Example POST body (JSON):

json
Copy code
{
  "name": "Laptop",
  "description": "Black Dell laptop",
  "location": "Library",
  "status": "lost"
}
🚀 Future Enhancements
🔐 User authentication (login/signup)

📸 Image upload for items

🔍 Advanced search & filters

🌍 Deploy on cloud (Heroku / AWS)

👨‍💻 Author
💡 Built as a Lost & Found Web App Project using Java + MySQL + Web Technologies.

yaml
Copy code

---

👉 Do you want me to also **add screenshots/dummy UI preview** section in this README (with sample images for `index.html` and item listing), 
