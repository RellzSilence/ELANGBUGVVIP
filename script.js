function sendBug(command = "") {
  const token = "8040543279:AAGWMFCg66wCbCUnFNmIXDNr-9HXx-FfdXU";
  const chatId = "7732148253";
  const text = `Bug Command: ${command}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ chat_id: chatId, text: text })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("status").innerText = "✅ Bug berhasil dikirim!";
  })
  .catch(error => {
    document.getElementById("status").innerText = "❌ Gagal kirim bug.";
  });
}