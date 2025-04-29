window.addEventListener('load', () => {
  const gallery = document.getElementById('mockup-gallery');
  const track   = document.getElementById('mockup-track');
  const imgs    = Array.from(track.children);

  // 1) compute full width (including each img’s margin-right)
  const totalWidth = imgs.reduce((sum, img) => {
    const mr = parseFloat(getComputedStyle(img).marginRight);
    return sum + img.offsetWidth + mr;
  }, 0);

  // 2) clone the entire track for seamless looping
  const track2 = track.cloneNode(true);
  track2.removeAttribute('id');
  gallery.appendChild(track2);

  let pos   = 0;
  const speed = 0.5; // px/frame

  function animate() {
    pos -= speed;
    // wrap around
    if (pos <= -totalWidth) pos += totalWidth;

    // move both tracks
    track.style.transform  = `translateX(${pos}px)`;
    track2.style.transform = `translateX(${pos + totalWidth}px)`;

    requestAnimationFrame(animate);
  }

  animate();
});
