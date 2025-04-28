const track       = document.getElementById('mockup-track');
const scrollSpeed = 0.5;      // adjust as desired
let position      = 0;

// 1. Grab the originals
const originals = Array.from(track.children);

// 2. Measure total width of originals (including right margin)
let totalWidth = 0;
originals.forEach(img => {
  const style       = window.getComputedStyle(img);
  const marginRight = parseFloat(style.marginRight);
  totalWidth += img.offsetWidth + marginRight;
});

// 3. Duplicate them in-place
originals.forEach(img => {
  track.appendChild(img.cloneNode(true));
});

// 4. Animate
function scrollGallery() {
  position -= scrollSpeed;

  // once we've scrolled a full cycle, reset to 0
  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(scrollGallery);
}

scrollGallery();
