// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Wait for 10 seconds and then fade out the preloader
    setTimeout(function () {
        var preloader = document.querySelector('.preloader');
        var mainContent = document. querySelector('.main-content');

        // Fade out the preloader
        preloader.style.opacity = 0;

        // Set a timeout to hide the preloader after the fade out animation
        setTimeout(function () {
            preloader.style.display = 'none';
            // Show the main content
            mainContent.style.display = 'block';
        }, 1000); // 1000ms = 1s (duration of the fade out animation)
    }, 4000); // 10000ms = 10s (time before fading out)
});

function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');

    // Create multiple confetti particles (e.g., 50 particles)
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      // Randomly position confetti horizontally and vertically
      const randomPositionX = Math.random() * 100;
      const randomPositionY = Math.random() * 100;
      confetti.style.left = randomPositionX + 'vw';
      confetti.style.top = randomPositionY + 'vh';

      // Randomly apply colors to the confetti particles
      const colors = ['confetti-blue', 'confetti-violet', 'confetti-pink', 'confetti-white', 'confetti-gold'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.classList.add(randomColor);

      confettiContainer.appendChild(confetti);

      // Remove confetti after animation completes
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  }

  // Call the createConfetti function every 30 seconds (30000 milliseconds)
  setInterval(() => {
    createConfetti();
  }, 65000);
