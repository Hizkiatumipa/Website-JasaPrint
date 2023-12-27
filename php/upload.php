<?php
$koneksi = mysqli_connect("localhost", "root", "", "db_print");

$file_name = $_FILES['file']['name'];
$tmp_name = $_FILES['file']['tmp_name'];
$file_up_name = time() . $file_name;
move_uploaded_file($tmp_name, "files/" . $file_up_name);

mysqli_query($koneksi, "insert into dokumen set file='$file_name'");

?>