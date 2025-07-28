# 🎒 Lost & Found Portal – Java Console App

![Java](https://img.shields.io/badge/Java-17%2B-red?logo=java&logoColor=white)
![OOP](https://img.shields.io/badge/Concepts-OOP%2C%20File%20I%2FO-blue)
![Platform](https://img.shields.io/badge/Platform-Console-brightgreen)
![Status](https://img.shields.io/badge/Status-Completed-green)

A simple yet effective **console-based Java application** for logging and viewing lost or found items in your campus or community. Uses **Object-Oriented Programming** and **File Handling** to store and retrieve entries.

---

## 📌 Features

- 📝 Add lost or found items
- 📂 View all entries
- 🔍 Filter by status (Lost / Found)
- 💾 Stores data persistently in a text file (`items.txt`)
- 🧱 Built with clean OOP structure

---

## 🚀 Getting Started

### Prerequisites
- Java JDK 17 or above
- Any Java IDE (IntelliJ, Eclipse, VS Code) or command-line tools

### Run the Program

```bash
javac LostAndFoundApp.java
java LostAndFoundApp


📁 LostFoundPortal
├── Item.java             # Item model (name, desc, location, reporter, status)
├── LostAndFoundApp.java  # Main class with menu and logic
├── items.txt             # Storage file for all logged items

