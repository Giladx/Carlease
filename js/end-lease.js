// End Lease Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animated counters
    initAnimatedCounters();
    
    // Initialize steps timeline animation
    initStepsAnimation();
    
    const form = document.getElementById('leaseEndForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Add timestamp
            data.timestamp = new Date().toISOString();
            
            // Show loading state
            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission (in production, this would send to server)
            setTimeout(() => {
                console.log('Lease End Form Submission:', data);
                
                // Show success message
                showSuccessModal(data);
                
                // Reset form
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Success Modal
    function showSuccessModal(data) {
        const modal = document.createElement('div');
        modal.className = 'success-modal-overlay';
        modal.innerHTML = `
            <div class="success-modal">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Thank You!</h2>
                <p>Your lease-end valuation request has been received.</p>
                <div class="success-details">
                    <p><strong>Vehicle:</strong> ${data.year} ${data.make} ${data.model}</p>
                    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                </div>
                <div class="success-message">
                    <i class="fas fa-info-circle"></i>
                    <p>Our team will review your information and contact you within <strong>24 hours</strong> with a detailed valuation and next steps.</p>
                </div>
                <div class="success-contact">
                    <p><strong>Need immediate assistance?</strong></p>
                    <p>Call us at <a href="tel:3057245534">(305) 724-5534</a></p>
                    <p class="hours">Monday-Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
                <button class="btn btn-primary" onclick="this.closest('.success-modal-overlay').remove()">
                    Close
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Auto-close after 10 seconds
        setTimeout(() => {
            if (document.body.contains(modal)) {
                modal.remove();
            }
        }, 10000);
    }
    
    // Smooth scroll to form
    const formLinks = document.querySelectorAll('a[href="#leaseEndForm"]');
    formLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const formElement = document.getElementById('leaseEndForm');
            if (formElement) {
                const offset = 100;
                const elementPosition = formElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // VIN validation
    const vinInput = document.getElementById('vin');
    if (vinInput) {
        vinInput.addEventListener('input', function(e) {
            let value = e.target.value.toUpperCase();
            // Remove invalid characters
            value = value.replace(/[^A-HJ-NPR-Z0-9]/g, '');
            e.target.value = value;
            
            // Validate length
            if (value.length === 17) {
                e.target.style.borderColor = '#10b981';
            } else if (value.length > 0) {
                e.target.style.borderColor = '#ef4444';
            } else {
                e.target.style.borderColor = '#e5e7eb';
            }
        });
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) value = value.slice(0, 10);
            
            if (value.length >= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else if (value.length >= 3) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            }
            
            e.target.value = value;
        });
    }
    
    // ZIP code validation
    const zipInput = document.getElementById('zipCode');
    if (zipInput) {
        zipInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 5) value = value.slice(0, 5);
            e.target.value = value;
        });
    }
    
    // Mileage formatting
    const mileageInput = document.getElementById('mileage');
    if (mileageInput) {
        mileageInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value;
        });
    }
    
    // Set min date for lease end date (today)
    const leaseEndDateInput = document.getElementById('leaseEndDate');
    if (leaseEndDateInput) {
        const today = new Date().toISOString().split('T')[0];
        leaseEndDateInput.setAttribute('min', today);
    }
});

/**
 * Initialize animated counters for trust indicators
 * Numbers count up smoothly when the section comes into view
 */
function initAnimatedCounters() {
    const trustNumbers = document.querySelectorAll('.trust-number');
    let hasAnimated = false;
    
    // Define target values for each counter
    const counters = [
        { element: trustNumbers[0], target: 15, suffix: '+', isDecimal: false },
        { element: trustNumbers[1], target: 10, suffix: 'k+', isDecimal: false },
        { element: trustNumbers[2], target: 4.9, suffix: '★', isDecimal: true }
    ];
    
    // Animation function
    function animateCounter(counter) {
        const duration = 2000; // 2 seconds - not too fast
        const startTime = performance.now();
        const startValue = 0;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation (ease-out)
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            // Calculate current value
            const currentValue = startValue + (counter.target - startValue) * easeProgress;
            
            // Format and display
            if (counter.isDecimal) {
                counter.element.textContent = currentValue.toFixed(1) + counter.suffix;
            } else {
                counter.element.textContent = Math.floor(currentValue) + counter.suffix;
            }
            
            // Continue animation if not complete
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                
                // Start all counters with slight delay between each
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        if (counter.element) {
                            animateCounter(counter);
                        }
                    }, index * 150); // 150ms delay between each counter
                });
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });
    
    // Observe the trust indicators container
    const trustIndicators = document.querySelector('.trust-indicators');
    if (trustIndicators) {
        observer.observe(trustIndicators);
    }
}

/**
 * Initialize steps timeline animation
 * Animates the connecting line and step numbers when section comes into view
 */
function initStepsAnimation() {
    const stepsTimeline = document.querySelector('.steps-timeline');
    if (!stepsTimeline) return;
    
    let hasAnimated = false;
    
    // Intersection Observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                stepsTimeline.classList.add('animate');
            }
        });
    }, {
        threshold: 0.3 // Trigger when 30% of the section is visible
    });
    
    observer.observe(stepsTimeline);
}

// Add modal styles dynamically
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .success-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .success-modal {
        background: white;
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        width: 100%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease;
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .success-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #10b981, #059669);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
    }
    
    .success-icon i {
        font-size: 2.5rem;
        color: white;
    }
    
    .success-modal h2 {
        font-size: 2rem;
        color: #0a2540;
        margin-bottom: 15px;
    }
    
    .success-modal > p {
        font-size: 1.1rem;
        color: #6b7280;
        margin-bottom: 25px;
    }
    
    .success-details {
        background: #f9fafb;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;
        text-align: left;
    }
    
    .success-details p {
        margin-bottom: 10px;
        color: #374151;
        font-size: 0.95rem;
    }
    
    .success-details p:last-child {
        margin-bottom: 0;
    }
    
    .success-details strong {
        color: #0a2540;
        font-weight: 600;
    }
    
    .success-message {
        background: #dbeafe;
        border-left: 4px solid #3b82f6;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 25px;
        display: flex;
        gap: 12px;
        text-align: left;
    }
    
    .success-message i {
        color: #3b82f6;
        font-size: 1.2rem;
        flex-shrink: 0;
        margin-top: 2px;
    }
    
    .success-message p {
        color: #1e40af;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
    }
    
    .success-contact {
        background: #f0fdf4;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;
    }
    
    .success-contact p {
        margin-bottom: 8px;
        color: #374151;
        font-size: 0.95rem;
    }
    
    .success-contact p:last-child {
        margin-bottom: 0;
    }
    
    .success-contact strong {
        color: #0a2540;
        font-weight: 600;
    }
    
    .success-contact a {
        color: #00d4ff;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.2rem;
    }
    
    .success-contact a:hover {
        text-decoration: underline;
    }
    
    .success-contact .hours {
        color: #6b7280;
        font-size: 0.85rem;
        font-style: italic;
    }
    
    .success-modal .btn {
        margin-top: 10px;
        min-width: 150px;
    }
    
    @media (max-width: 480px) {
        .success-modal {
            padding: 30px 20px;
        }
        
        .success-modal h2 {
            font-size: 1.5rem;
        }
    }
`;
document.head.appendChild(modalStyles);
