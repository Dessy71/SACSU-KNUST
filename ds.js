document.addEventListener('DOMContentLoaded', function () {
    // Preloader animation
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        const mainContent = document.querySelector('.main-content');
        if (preloader) {
            preloader.style.opacity = 0;
            setTimeout(() => {
                preloader.style.display = 'none';
                if (mainContent) mainContent.style.display = 'block';
            }, 1000);
        }
    }, 4000); // Adjust preloader time as needed

    // Confetti Effect
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.top = `${Math.random() * 100}vh`;
            const colors = ['confetti-blue', 'confetti-violet', 'confetti-pink', 'confetti-gold'];
            confetti.classList.add(colors[Math.floor(Math.random() * colors.length)]);
            confettiContainer.appendChild(confetti);
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    setInterval(createConfetti, 65000); // Adjust interval time as needed

    // Show/hide residence field based on academic year
    document.getElementById('academic-year').addEventListener('change', function () {
        const value = this.value;
        const residenceRow = document.getElementById('residence-row-1');
        const residenceInputRow = document.getElementById('residence-input-row-1');
        const residenceInput = document.getElementById('residence');

        if (value === '1') {
            residenceRow.style.display = 'table-row';
            residenceInputRow.style.display = 'table-row';
            residenceInput.required = true;
        } else {
            residenceRow.style.display = 'none';
            residenceInputRow.style.display = 'none';
            residenceInput.required = false;
        }
    });

    // Handle form submission
    document.getElementById('sacsuForm25').addEventListener('submit', function (event) {
        event.preventDefault();
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000); // Adjust success message time as needed
        this.reset();
    });
});
