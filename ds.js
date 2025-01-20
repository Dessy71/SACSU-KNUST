document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const preloader = document.querySelector('.preloader');
        const mainContent = document.querySelector('.main-content');

        preloader.style.opacity = 0;
        setTimeout(function () {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000);
    }, 4000);
});

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    // Create a FormData object for AJAX submission
    const formData = new FormData(form);

    // Send data to Google Apps Script
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Hide the form and show success message
                document.getElementById('form-content').style.display = 'none';
                document.getElementById('success-message').style.display = 'block';

                // Redirect after 2.5 seconds
                setTimeout(() => {
                    window.location.href = "https://dessy-portfolio.vercel.app/";
                }, 2500);
            } else {
                alert('Error: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
}
