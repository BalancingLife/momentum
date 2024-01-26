const images = [
  "barcelona-attractions.jpg",
  "canyon-valley.jpg",
  "eiffel-tower.jpg",
  "tower-bridge-london.jpg",
  "wat-arun.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
