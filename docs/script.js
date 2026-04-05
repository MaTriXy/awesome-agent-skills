document.addEventListener('DOMContentLoaded', () => {
    // Reveal elements on scroll
    const sections = document.querySelectorAll('.glass-section');
    
    // Initial hidden state
    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease';
    });

    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(sec => {
            const sectionTop = sec.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    
    // Trigger once on load
    revealSection();

    // Interactive mouse movement for blobs to follow subtly
    const blob1 = document.querySelector('.shape1');
    const blob2 = document.querySelector('.shape2');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        if (blob1) {
            blob1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        }
        if (blob2) {
            blob2.style.transform = `translate(${x * -40}px, ${y * -40}px)`;
        }
    });
});
