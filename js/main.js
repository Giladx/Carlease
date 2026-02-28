// ============================================
// MOBILE MENU
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Mobile dropdown toggle
document.querySelectorAll('.has-dropdown > a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            const isOpen = dropdown.style.display === 'block';
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            
            // Toggle current dropdown
            if (!isOpen) {
                dropdown.style.display = 'block';
            }
        }
    });
});

// ============================================
// STICKY NAVBAR
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
const testimonialsTrack = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');

if (testimonialsTrack) {
    const testimonialCards = testimonialsTrack.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    let autoPlayInterval;

    // Create dots
    if (carouselDots) {
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToTestimonial(index));
            carouselDots.appendChild(dot);
        });
    }

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });

        // Update dots
        if (carouselDots) {
            const dots = carouselDots.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
        }
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonialCards.length - 1;
        } else if (currentTestimonial >= testimonialCards.length) {
            currentTestimonial = 0;
        }
        showTestimonial(currentTestimonial);
        resetAutoPlay();
    }

    function nextTestimonial() {
        goToTestimonial(currentTestimonial + 1);
    }

    function prevTestimonial() {
        goToTestimonial(currentTestimonial - 1);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextTestimonial, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);

    // Start auto-play
    startAutoPlay();

    // Pause on hover
    testimonialsTrack.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    testimonialsTrack.addEventListener('mouseleave', () => {
        startAutoPlay();
    });
}

// ============================================
// QUOTE FORM HANDLING
// ============================================
const quoteForm = document.getElementById('quoteFormElement');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            vehicle: document.getElementById('vehicle').value,
            message: document.getElementById('message').value
        };

        // Show success message
        showNotification('Thank you! We will contact you within 24 hours.', 'success');
        
        // Reset form
        quoteForm.reset();
        
        // In production, you would send this data to a server
        console.log('Quote Request:', formData);
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step-card, .benefit-card, .testimonial-card, .quote-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ============================================
// ANIMATED COUNTERS FOR TRUST STATS
// ============================================
function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const isDecimal = target % 1 !== 0;
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            if (isDecimal) {
                element.textContent = start.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(start).toLocaleString() + suffix;
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (isDecimal) {
                element.textContent = target.toFixed(1) + suffix;
            } else {
                element.textContent = Math.floor(target).toLocaleString() + suffix;
            }
        }
    }
    
    updateCounter();
}

// Intersection Observer for trust stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            const statItems = entry.target.querySelectorAll('.trust-stat-item strong');
            statItems.forEach(stat => {
                const text = stat.textContent;
                
                // Parse different number formats
                if (text.includes('15+')) {
                    stat.textContent = '0+';
                    animateCounter(stat, 15, 2000, '+');
                } else if (text.includes('10,000+')) {
                    stat.textContent = '0+';
                    animateCounter(stat, 10000, 2500, '+');
                } else if (text.includes('5-Star')) {
                    stat.textContent = '0-Star';
                    const tempElement = document.createElement('span');
                    let count = 0;
                    const timer = setInterval(() => {
                        count++;
                        stat.textContent = count + '-Star';
                        if (count >= 5) {
                            clearInterval(timer);
                        }
                    }, 300);
                }
            });
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px'
});

// Observe trust stats sections
document.querySelectorAll('.media-trust-stats, .hero-stats').forEach(statsSection => {
    statsObserver.observe(statsSection);
});

// ============================================
// SEQUENTIAL GREEN WAVE ANIMATION FOR BENEFIT CARDS
// ============================================
const benefitCards = document.querySelectorAll('.benefit-card:not(.highlight-card)');

if (benefitCards.length > 0) {
    let greenWaveTriggered = false;

    const greenWaveObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !greenWaveTriggered) {
                greenWaveTriggered = true;
                
                // Sequential green wave animation
                benefitCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('green-wave-active');
                        
                        // Add hover effect back after animation
                        setTimeout(() => {
                            card.addEventListener('mouseenter', function() {
                                this.style.transform = 'translateY(-5px)';
                                this.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.4)';
                            });
                            card.addEventListener('mouseleave', function() {
                                this.style.transform = 'translateY(0)';
                                this.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4)';
                            });
                        }, 1200);
                    }, index * 800); // 800ms delay between each card (slower)
                });
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    // Observe the benefits section
    const benefitsSection = document.querySelector('.benefits');
    if (benefitsSection) {
        greenWaveObserver.observe(benefitsSection);
    }
}

// ============================================
// SEQUENTIAL STEP NUMBER GLOW ANIMATION
// ============================================
const stepCards = document.querySelectorAll('.step-card');

if (stepCards.length > 0) {
    let stepAnimationTriggered = false;

    const stepGlowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !stepAnimationTriggered) {
                stepAnimationTriggered = true;
                
                // Sequential glow animation for each step number
                stepCards.forEach((card, index) => {
                    const stepNumber = card.querySelector('.step-number');
                    if (stepNumber) {
                        setTimeout(() => {
                            // Add glow class
                            stepNumber.classList.add('glow-active');
                            
                            // Remove after animation completes
                            setTimeout(() => {
                                stepNumber.classList.remove('glow-active');
                            }, 1500);
                        }, index * 600); // 600ms delay between each step
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });

    // Observe the first step card to trigger the sequence
    if (stepCards[0]) {
        stepGlowObserver.observe(stepCards[0]);
    }
}

// ============================================
// INITIALIZE ON DOM LOADED
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('United Auto Lease - Website Loaded Successfully');
});