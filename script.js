document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // Modal Global Functions
    window.openModal = (id) => {
        document.getElementById(id).style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = (id) => {
        document.getElementById(id).style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Close on Outside Click
    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
});