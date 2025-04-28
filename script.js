const track = document.getElementById('mockup-track');
let position = 0; // Manual position tracking
let scrollSpeed = 0.5; // Slower scrolling (adjustable)

function scrollGallery() {
  position -= scrollSpeed;
  track.style.transform = `translateX(${position}px)`;

  const firstImage = track.children[0];
  const firstImageWidth = firstImage.offsetWidth + 20; // Including margin

  // When the first image is fully out of view
  if (Math.abs(position) >= firstImageWidth) {
    track.appendChild(firstImage); // Move first image to the end
    position += firstImageWidth;   // Adjust position
  }

  requestAnimationFrame(scrollGallery);
}

// Start scrolling
scrollGallery();
