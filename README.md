# 📦 Lost & Found Web Application

![Java](https://img.shields.io/badge/Java-17+-blue.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)
![Tomcat](https://img.shields.io/badge/Apache_Tomcat-9+-red.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

A Java-based web platform to help users report and find **lost** and **found** items within a community (e.g., college campus). Users can register, upload item details with images, browse a gallery of unclaimed items, and connect via **Claim** and **Found** actions.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Project Structure](#-project-structure)
- [Database Schema](#%EF%B8%8F-database-schema)
- [Workflow](#-workflow)
- [UI Preview](#-ui-preview)
- [Setup & Run](#%EF%B8%8F-setup--run)
  - [DBConnection.java Template](#dbconnectionjava-template)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 Overview

The **Lost & Found Web Application** is a user-friendly platform designed to streamline the process of reporting and recovering lost or found items. Built with Java Servlets and MySQL, it allows users to:
- Register and log in securely.
- Report lost or found items with descriptions and images.
- Browse a gallery of unclaimed items.
- Connect with others to claim or return items.

This project is ideal for communities like universities, offices, or neighborhoods to manage lost and found items efficiently.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure registration and login with session management.
- 📋 **Lost Item Upload**: Report lost items with details (name, description, location, date) and images.
- 🧾 **Found Item Upload**: Report found items with similar details and images.
- 🖼 **Gallery View**: Browse all unclaimed lost and found items in a single view.
- 🔍 **Search & Filters**: Filter items by name, location, or date.
- 📩 **Claim & Found System**: Connect with item owners/finders via email.
- ✅ **Claim Status**: Mark items as claimed to remove them from the gallery.
- 📱 **Responsive Design**: Mobile-friendly UI with Bootstrap and custom CSS.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS (`style.css`), Bootstrap
- JSP (JavaServer Pages) for dynamic rendering

**Backend:**
- Java Servlets (running on Apache Tomcat)
- JDBC for MySQL database connectivity

**Database:**
- MySQL

**Other:**
- File upload support for item images
- Session management for user authentication

---

## 📂 Project Structure
LostAndFound/
│
├── src/ # Java backend
│ ├── db/DBConnection.java
│ ├── model/User.java
│ ├── servlet/RegisterServlet.java
│ ├── servlet/LoginServlet.java
│ ├── servlet/LostItemServlet.java
│ ├── servlet/FoundItemServlet.java
│ ├── servlet/ClaimServlet.java
│ └── servlet/FoundServlet.java
│
├── WebContent/ # Frontend
│ ├── index.jsp
│ ├── style.css
│ ├── images/
│ ├── forms/
│ │ ├── login.jsp
│ │ ├── register.jsp
│ │ ├── Lostitem.jsp
│ │ ├── Founditems.jsp
│ │ └── Gallery.jsp
│
└── WEB-INF/
├── web.xml # Servlet mappings
└── lib/ # Dependencies (e.g., mysql-connector-java.jar)


---

## 🗄️ Database Schema  

### Users  
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE lost_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    lost_date DATE,
    image_path VARCHAR(255),
    owner_id INT,
    claimed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);








