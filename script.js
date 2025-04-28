const track = document.getElementById('mockup-track');
let scrollSpeed = 1; // Pixels per frame, adjust for speed
let animationFrameId;

function scrollGallery() {
  track.style.transform = `translateX(${track.offsetLeft - scrollSpeed}px)`;
  
  // If first image is completely out of view, move it to the end
  const firstImage = track.children[0];
  if (firstImage.getBoundingClientRect().right < track.parentElement.getBoundingClientRect().left) {
    track.appendChild(firstImage);
    track.style.transform = `translateX(${track.offsetLeft + firstImage.offsetWidth + 20}px)`;
  }

  animationFrameId = requestAnimationFrame(scrollGallery);
}

scrollGallery();
