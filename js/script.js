/* =============================================
   GHSS Jalsai Swabi — Shared Scripts
   ============================================= */

// -------- Hero Slider --------
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 1) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }

    // Set active nav link based on current page
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path) link.classList.add('active');
    });
});

// -------- Form Handlers --------
function handleInquiryForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('student_name');
    alert(
        '✅ JazakAllah, ' + name + '!\n\n' +
        'Your admission inquiry has been received.\n' +
        'The school office will contact you soon on the provided phone number.\n\n' +
        'For urgent matters, please call: 0314 9877414'
    );
    e.target.reset();
    return false;
}

function handleContactForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    alert(
        '✅ Shukriya, ' + data.get('name') + '!\n\n' +
        'Your message has been recorded. We will get back to you shortly.\n\n' +
        'GHSS Jalsai Swabi\n' +
        '📞 0314 9877414'
    );
    e.target.reset();
    return false;
}