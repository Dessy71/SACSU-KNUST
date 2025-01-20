

    // Preloader Handling
    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            var preloader = document.querySelector('.preloader');
            var mainContent = document.querySelector('.main-content');

            preloader.style.opacity = 0;
            setTimeout(function () {
                preloader.style.display = 'none';
                mainContent.style.display = 'block';
            }, 1000);
        }, 4000);
    });

    // Confetti Effect (If needed)
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            const randomPositionX = Math.random() * 100;
            const randomPositionY = Math.random() * 100;
            confetti.style.left = randomPositionX + 'vw';
            confetti.style.top = randomPositionY + 'vh';
            const colors = ['confetti-blue', 'confetti-violet', 'confetti-pink', 'confetti-white', 'confetti-gold'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.classList.add(randomColor);
            confettiContainer.appendChild(confetti);
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    // Trigger Confetti Effect at Intervals
    setInterval(() => {
        createConfetti();
    }, 65000);

    // Show Residence Field Based on Academic Year
    function checkLevel100() {
        const academicYear = document.getElementById("academic-year").value;
        const residenceRow = document.getElementById("residence-row-1");
        const residenceInputRow = document.getElementById("residence-input-row-1");
        if (academicYear === "1") {
            residenceRow.style.display = "";
            residenceInputRow.style.display = "";
            document.getElementById("residence").required = true;
        } else {
            residenceRow.style.display = "none";
            residenceInputRow.style.display = "none";
            document.getElementById("residence").required = false;
        }
    }

    // Handle Form Submission and Display Success Message
    function handleSubmit(event) {
        event.preventDefault(); // Prevent actual form submission
        const form = document.getElementById("sacsuForm25");

        // Show Success Message
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000); // Hide after 5 seconds

        // Optionally clear the form
        form.reset();
    }
