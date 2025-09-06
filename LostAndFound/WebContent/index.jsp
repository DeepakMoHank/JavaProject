// Placeholder for index.jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <!-- Bootstrap CSS -->
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="style.css" />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Lemon&family=Monoton&family=Montserrat:wght@200;400;500&display=swap" rel="stylesheet">
  <title>Lost & Found - Home</title>
</head>

<body>
  <!-- Navbar -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <a class="navbar-brand grow" href="index.jsp">LostandFound</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item grow"><a class="nav-link" href="index.jsp">Home</a></li>
        <li class="nav-item grow"><a class="nav-link" href="forms/Lostitem.jsp">Lost</a></li>
        <li class="nav-item grow"><a class="nav-link" href="forms/Founditems.jsp">Found</a></li>
        <li class="nav-item grow"><a class="nav-link" href="forms/Gallery.jsp">Gallery</a></li>
        <li class="nav-item grow"><a class="nav-link" href="forms/contactus.jsp">Contact Us</a></li>
      </ul>
      <a href="forms/login.jsp"><i class="fas fa-user signin grow"> Sign In</i></a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="section-1 text-center py-5">
    <div class="container">
      <h1 class="display-4">Welcome to Lost & Found</h1>
      <p class="lead">A safe space to report, search, and recover your belongings</p>
      <a href="forms/Gallery.jsp" class="btn btn-warning btn-lg mt-3">Browse Items</a>
    </div>
  </section>

  <!-- Optional Footer -->
  <footer class="text-center text-light py-3">
    <p>&copy; 2025 Lost & Found Portal</p>
  </footer>

  <!-- Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
</body>
</html>
