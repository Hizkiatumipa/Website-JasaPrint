//Rating
function submitRating() {
    const rating = document.querySelector('input[name="rating"]:checked');
    const review = document.getElementById("review").value;
  
    if (rating && review) {
      alert(
        `Terima kasih atas ulasan Anda! Anda memberikan rating ${rating.value} bintang Dengan catatan: ${review}`
      );
    } else {
      alert("Silakan berikan rating dan ulasan Anda terlebih dahulu!");
    }
  } 

