<?php
session_start();
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['login-name'];
    $password = $_POST['login-password'];

    // Memeriksa login
    $sql = "SELECT * FROM tbl_user WHERE username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        // Login berhasil
        $_SESSION['username'] = $username;
        header("Location: ../HTML/home.html");
        exit();
    } else {
        // Login gagal
        echo "<script>alert('username atau password salah'); window.location.href='../HTML/login.html';</script>";
    }
}

mysqli_close($conn);
?>