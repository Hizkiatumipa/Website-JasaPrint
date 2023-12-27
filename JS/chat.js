const inputMessage = document.getElementById("input-message");
const submitButton = document.getElementById("submit-message");
const chatMessages = document.querySelector(".chat-messages");

// Mendapatkan riwayat obrolan dari localStorage saat aplikasi dimuat
const storedChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
chatMessages.innerHTML = storedChatHistory.join(""); // Menambahkan riwayat ke elemen chatMessages

submitButton.addEventListener("click", function () {
  if (inputMessage.value !== "") {
    const chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.innerHTML = inputMessage.value;
    chatMessages.appendChild(chatMessage);

    // Menyimpan pesan baru ke dalam riwayat obrolan di localStorage
    storedChatHistory.push(chatMessage.outerHTML);
    localStorage.setItem("chatHistory", JSON.stringify(storedChatHistory));

    inputMessage.value = "";
  }
});

document.getElementById('logout-btn').addEventListener('click', function() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html'; // Ganti dengan halaman login yang sesuai
});
