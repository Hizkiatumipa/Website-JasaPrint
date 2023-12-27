<?php
session_start();

$host = "localhost";
$username = "root";
$password = "";
$database = "db_web";

$connection = mysqli_connect($host, $username, $password, $database);

if (!$connection) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

if (!isset($_SESSION['username'])) {

    header("Location: login.php");
    exit();
}


$username = $_SESSION['username'];

$query = "INSERT INTO riwayat_logout (username, timestamp) VALUES ('$username', NOW())";
mysqli_query($connection, $query);


session_unset();
session_destroy();


header("Location: ../HTML/login.html");
exit();
?>