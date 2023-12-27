<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Memeriksa apakah semua field terisi
    if (empty($email) || empty($username) || empty($password) || empty($confirm_password)) {
        echo "<script>alert('Semua field harus diisi'); window.location.href='../HTML/signin.html';</script>";
        exit();
    }

    // Memeriksa kecocokan password
    if ($password !== $confirm_password) {
        echo "<script>alert('Password tidak cocok'); window.location.href='../HTML/signin.html';</script>";
        exit();
    }

    // Memasukkan data ke database
    $sql = "INSERT INTO tbl_user (email, username, password) VALUES ('$email', '$username', '$password')";

    if (mysqli_query($conn, $sql)) {
        header("Location: ../HTML/login.html");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>