document.addEventListener('DOMContentLoaded', () => {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now, we'll just log it to the console
            const formData = new FormData(contactForm);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // You can add more JavaScript functionality here as needed
});
