document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html'; // Ganti dengan halaman login yang sesuai
});

document.getElementById('logout-btn').addEventListener('click', function() {
    // Buat permintaan AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'logout.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Pengalihan ke halaman login setelah logout
            window.location.href = 'login.html'; // Ganti dengan halaman login yang sesuai
        }
    };
    // Kirim data username sebagai parameter POST
    var username = '<?php echo $_SESSION["username"]; ?>';
    xhr.send('username=' + username);
});