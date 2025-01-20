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

    setInterval(() => {
        createConfetti();
    }, 65000);

    function checkLevel100() {
        const academicYear = document.getElementById("academic-year").value;
        const residenceRow = document.getElementById("residence-row");
        const residenceInputRow = document.getElementById("residence-input-row");
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

    function handleSubmit(event) {
        event.preventDefault();
        const form = document.getElementById("sacsuForm25");

        // Display success message
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);

        // After submission, clear the form
        form.reset();
    }
