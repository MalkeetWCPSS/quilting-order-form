// Refactored JavaScript code for quilting-order-form

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // Gather form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // Process data (e.g., send to server)
    console.log(data);
}

// Add event listener to form
const form = document.getElementById('order-form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}