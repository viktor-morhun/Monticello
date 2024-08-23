document.addEventListener('DOMContentLoaded', function () {
  const map = L.map('map').setView([49.0391, 28.1086], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
});