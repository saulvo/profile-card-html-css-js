const card = document.querySelector(".card");
const angle = 20;

(() => {
  // don't tilt on mobile phone
  if (navigator.userAgentData.mobile) return;

  card.addEventListener("mousemove", (e) => {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (angle * mouseY) / (cardHeight / 2);
    const rotateY = (-angle * mouseX) / (cardWidth / 2);

    card.style.setProperty("--rotateX", rotateX + "deg");
    card.style.setProperty("--rotateY", rotateY + "deg");
  });
})();
