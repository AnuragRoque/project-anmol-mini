document.addEventListener('DOMContentLoaded', function () {
    // Form submission event listener
    document.querySelector('.form').addEventListener('submit', function (event) {
        // Get form inputs
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        const textAreaInput = document.getElementById('text');

        // Check if any field is empty
        if (!nameInput.value || !phoneInput.value || !emailInput.value || !textAreaInput.value) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});