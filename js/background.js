const images = [
  "bg1.png",
  "bg2.png",
  "bg3.png",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.png",
  "bg7.jpg",
];
const chosenImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};
const paintBackground = (chosenImage) => {
  const bgImage = `url("img/${chosenImage()}")`;
  document.body.style.backgroundImage = bgImage;
};

paintBackground(chosenImage);
