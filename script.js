document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    if (formData.get('access_key') === 'e6d360cf-bccd-4730-abc1-77bc7b5fe777') {
        alert('Add your Web3Forms access key to enable submissions.');
        return;
    }

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Submission failed');
        }

        alert('Thanks! Your message has been sent.');
        form.reset();
    } catch (error) {
        alert('Sorry, something went wrong. Please try again.');
    }
});