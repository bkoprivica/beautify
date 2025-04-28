window.addEventListener('load', () => {
  const gallery      = document.getElementById('mockup-gallery');
  const originalTrack = document.getElementById('mockup-track');
  const images       = Array.from(originalTrack.children);

  // 1) Build two side-by-side tracks
  const trackA = document.createElement('div');
  const trackB = document.createElement('div');
  trackA.className = 'mockup-track';
  trackB.className = 'mockup-track';
  images.forEach(img => {
    trackA.appendChild(img.cloneNode());
    trackB.appendChild(img.cloneNode());
  });

  // 2) Clear gallery and insert tracks
  gallery.innerHTML = '';
  gallery.appendChild(trackA);
  gallery.appendChild(trackB);

  // 3) Measure one-track width
  const trackWidth = trackA.offsetWidth;
  let position     = 0;
  const speed      = 0.5; // px per frame

  // 4) Animate both tracks
  function animate() {
    position -= speed;
    if (position <= -trackWidth) {
      position += trackWidth;
    }
    trackA.style.transform = `translateX(${position}px)`;
    trackB.style.transform = `translateX(${position + trackWidth}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
