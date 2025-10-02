# 🕵️ Lost & Found Web Application

A simple **Lost & Found Portal** built using:
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Java (Spring Boot, REST API)  
- **Database:** MySQL  

Users can add lost/found items, view existing posts, and search items.

---

## 📂 Project Structure
LostAndFoundApp_Final/
│── frontend/ # Static Frontend Files
│ ├── index.html
│ ├── lost.html
│ ├── found.html
│ ├── style.css
│ └── script.js
│
│── backend/ # Spring Boot Backend
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/example/lostandfound/
│ │ │ │ ├── LostAndFoundApplication.java
│ │ │ │ ├── model/Item.java
│ │ │ │ ├── repository/ItemRepository.java
│ │ │ │ └── controller/ItemController.java
│ │ │ └── resources/
│ │ │ ├── application.properties
│ │ │ └── static/ (optional for frontend serving)
│ │
│ └── pom.xml
│
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Install Prerequisites
- [Java JDK 17+](https://adoptium.net/)  
- [Maven](https://maven.apache.org/)  
- [MySQL](https://dev.mysql.com/downloads/)  

### 2. Create MySQL Database
Login to MySQL:
```sh
mysql -u root -p
Then run:

sql
Copy code
CREATE DATABASE lostfounddb;
3. Configure Database
Edit backend/src/main/resources/application.properties:

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/lostfounddb
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Replace your_mysql_username and your_mysql_password with your credentials.

4. Run the Backend
Go to the backend folder and start the Spring Boot app:

sh
Copy code
cd backend
mvn spring-boot:run
The server will start at:

arduino
Copy code
http://localhost:8080
5. Run the Frontend
Open frontend/index.html in your browser.
The frontend communicates with the backend APIs via http://localhost:8080/api/items.

📡 API Endpoints
GET /api/items → Get all items

POST /api/items → Add a new item (JSON body)

GET /api/items/{id} → Get item by ID

DELETE /api/items/{id} → Delete an item

Example POST body:

json
Copy code
{
  "name": "Laptop",
  "description": "Black Dell laptop",
  "location": "Library",
  "status": "lost"
}
🚀 Future Improvements
Add authentication (users login before posting)

Allow image uploads

Advanced search & filters

👨‍💻 Author
Developed as a Lost & Found Portal Project using Java + MySQL + Web Frontend.

yaml
Copy code

---

👉 Do you want me to also **update the frontend `script.js`** so it can directly call the backend API (`/api/items`) for adding & fetching items?







