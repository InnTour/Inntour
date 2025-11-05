/*
 * InnTour Website - Main JavaScript
 * Interactive features and animations
 */

// ========================================
// DOM Elements
// ========================================

const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('back-to-top');
const statNumbers = document.querySelectorAll('.stat-number');
const profileBtns = document.querySelectorAll('.profile-btn');
const contactForm = document.getElementById('contact-form');
const formTitle = document.getElementById('form-title');

// ========================================
// Mobile Navigation Toggle
// ========================================

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ========================================
// Smooth Scroll for Navigation
// ========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const navHeight = nav.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Section Highlighting
// ========================================

function highlightActiveSection() {
    const scrollPosition = window.scrollY + nav.offsetHeight + 100;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionBottom = sectionTop + targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
}

// ========================================
// Navbar Background on Scroll
// ========================================

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
}

// ========================================
// Back to Top Button
// ========================================

function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Counter Animation
// ========================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString('it-IT');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString('it-IT') + (element.getAttribute('data-suffix') || '');
        }
    };

    updateCounter();
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// ========================================
// Contact Form Profile Switcher
// ========================================

const formGroups = {
    pa: ['group-popolazione', 'group-ruolo'],
    azienda: ['group-azienda', 'group-tipologia'],
    residente: [],
    investitore: []
};

const formTitles = {
    pa: 'Richiesta Presentazione per PA',
    azienda: 'Info per Aziende Turistiche',
    residente: 'Scopri la Community',
    investitore: 'Opportunità di Investimento'
};

const labelNome = {
    pa: 'Nome Comune/Ente',
    azienda: 'Nome e Cognome',
    residente: 'Nome e Cognome',
    investitore: 'Nome e Cognome/Società'
};

const placeholderNome = {
    pa: 'es. Comune di Lacedonia',
    azienda: 'Mario Rossi',
    residente: 'Mario Rossi',
    investitore: 'Mario Rossi / Società XYZ'
};

const placeholderMessaggio = {
    pa: 'Descrivi brevemente le necessità del tuo comune e cosa ti interessa approfondire...',
    azienda: 'Raccontaci la tua attività e i tuoi obiettivi di crescita...',
    residente: 'Raccontaci perché sei interessato a trasferirti in un borgo...',
    investitore: 'Descrivi il tuo interesse per investimenti nelle aree interne...'
};

function switchFormProfile(profile) {
    // Update active button
    profileBtns.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.profile-btn').classList.add('active');

    // Update form title
    if (formTitle) {
        formTitle.textContent = formTitles[profile];
    }

    // Update nome label and placeholder
    const labelNomeEl = document.getElementById('label-nome');
    const inputNome = document.getElementById('nome');
    if (labelNomeEl) labelNomeEl.textContent = labelNome[profile];
    if (inputNome) inputNome.placeholder = placeholderNome[profile];

    // Update messaggio placeholder
    const inputMessaggio = document.getElementById('messaggio');
    if (inputMessaggio) inputMessaggio.placeholder = placeholderMessaggio[profile];

    // Hide all conditional groups
    Object.values(formGroups).flat().forEach(groupId => {
        const group = document.getElementById(groupId);
        if (group) {
            group.style.display = 'none';
            // Remove required from hidden inputs
            const inputs = group.querySelectorAll('input, select');
            inputs.forEach(input => input.removeAttribute('required'));
        }
    });

    // Show groups for selected profile
    if (formGroups[profile]) {
        formGroups[profile].forEach(groupId => {
            const group = document.getElementById(groupId);
            if (group) {
                group.style.display = 'block';
                // Add required to visible inputs
                const inputs = group.querySelectorAll('input, select');
                inputs.forEach(input => {
                    if (input.type !== 'tel') { // telefono is optional
                        input.setAttribute('required', '');
                    }
                });
            }
        });
    }
}

// Profile button click handlers
profileBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const profile = this.getAttribute('data-profile');
        switchFormProfile(profile);
    });
});

// ========================================
// Form Submission Handler
// ========================================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message (you can customize this)
        alert('Grazie per averci contattato! Ti risponderemo al più presto.');

        // Reset form
        contactForm.reset();

        // Here you would typically send data to your backend
        // Example with fetch:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Grazie per averci contattato!');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Si è verificato un errore. Riprova più tardi.');
        });
        */
    });
}

// ========================================
// Scroll Event Listeners
// ========================================

let scrollTimeout;
window.addEventListener('scroll', () => {
    // Use requestAnimationFrame for better performance
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            handleNavbarScroll();
            handleBackToTop();
            highlightActiveSection();
            scrollTimeout = null;
        }, 50);
    }
}, { passive: true });

// ========================================
// Page Load Animations
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.section');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Initialize first section highlight
    highlightActiveSection();
});

// ========================================
// Resize Handler
// ========================================

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ========================================
// External Links (Open in New Tab)
// ========================================

document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========================================
// Lazy Loading Images (if any added later)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Console Welcome Message
// ========================================

console.log(
    '%c🌄 InnTour - INNovationTOURism',
    'font-size: 20px; font-weight: bold; color: #F59E0B;'
);
console.log(
    '%cIl Futuro Digitale delle Aree Interne',
    'font-size: 14px; color: #10B981;'
);
console.log(
    '%cinfo@inntour.it',
    'font-size: 12px; color: #6B7280;'
);

// ========================================
// Performance Monitoring (Development)
// ========================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('📊 Performance Metrics:');
        console.log(`Page Load Time: ${pageLoadTime}ms`);
        console.log(`Server Response: ${connectTime}ms`);
        console.log(`DOM Render: ${renderTime}ms`);
    });
}

// ========================================
// Utility Functions
// ========================================

/**
 * Debounce function to limit rate of function execution
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution frequency
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 */
function scrollToElement(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Export functions if using modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        isInViewport,
        scrollToElement
    };
}
