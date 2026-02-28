// ============================================
// LEASING DEALS PAGE FUNCTIONALITY
// ============================================

// Email configuration
const VEHICLE_EMAIL_RECIPIENTS = ['sales@unitedautolease.com', 'ben@unitedautolease.com'];

// Category filtering
document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryFilters();
});

function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide categories
            if (category === 'all') {
                categorySections.forEach(section => {
                    section.classList.remove('hidden');
                });
            } else {
                categorySections.forEach(section => {
                    const sectionCategory = section.getAttribute('data-category');
                    if (sectionCategory === category) {
                        section.classList.remove('hidden');
                    } else {
                        section.classList.add('hidden');
                    }
                });
            }
            
            // Scroll to vehicles section smoothly
            const vehiclesSection = document.querySelector('.vehicles-section');
            if (vehiclesSection && category !== 'all') {
                setTimeout(() => {
                    vehiclesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
}

// ============================================
// CONTACT MODAL FUNCTIONS
// ============================================

function openContactModal(vehicleName, category) {
    const modal = document.getElementById('contactModal');
    const selectedVehicle = document.getElementById('selectedVehicle');
    const selectedCategory = document.getElementById('selectedCategory');
    const vehicleNameInput = document.getElementById('vehicleName');
    const vehicleCategoryInput = document.getElementById('vehicleCategory');
    
    // Set vehicle info
    selectedVehicle.textContent = vehicleName;
    selectedCategory.textContent = category;
    vehicleNameInput.value = vehicleName;
    vehicleCategoryInput.value = category;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form
    document.getElementById('vehicleContactForm').reset();
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// FORM SUBMISSION
// ============================================

function submitVehicleContact(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = {
        vehicleName: document.getElementById('vehicleName').value,
        vehicleCategory: document.getElementById('vehicleCategory').value,
        contactName: document.getElementById('contactName').value,
        contactEmail: document.getElementById('contactEmail').value,
        contactPhone: document.getElementById('contactPhone').value,
        contactMessage: document.getElementById('contactMessage').value,
        submittedAt: new Date().toLocaleString()
    };
    
    // Send email (simulated - needs backend integration)
    sendVehicleInquiryEmail(formData);
    
    // Close contact modal
    closeContactModal();
    
    // Show success modal
    setTimeout(() => {
        const successModal = document.getElementById('successModal');
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 300);
}

// ============================================
// EMAIL SENDING (SIMULATED)
// ============================================

function sendVehicleInquiryEmail(formData) {
    // In production, this would send data to a backend API
    // which would then send emails to the recipients
    
    const emailData = {
        to: VEHICLE_EMAIL_RECIPIENTS,
        subject: `Vehicle Inquiry: ${formData.vehicleName}`,
        body: `
            New vehicle inquiry received:
            
            Vehicle: ${formData.vehicleName}
            Category: ${formData.vehicleCategory}
            
            Customer Information:
            Name: ${formData.contactName}
            Email: ${formData.contactEmail}
            Phone: ${formData.contactPhone}
            
            Message:
            ${formData.contactMessage || 'No message provided'}
            
            Submitted: ${formData.submittedAt}
        `
    };
    
    console.log('Email would be sent to:', VEHICLE_EMAIL_RECIPIENTS);
    console.log('Email data:', emailData);
    console.log('Form data:', formData);
    
    // Simulated API call
    // fetch('/api/send-vehicle-inquiry', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(emailData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Email sent successfully:', data))
    // .catch(error => console.error('Error sending email:', error));
}

// ============================================
// CLOSE MODALS ON ESCAPE KEY
// ============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
        closeSuccessModal();
    }
});

// ============================================
// SMOOTH SCROLL FOR CATEGORY NAV
// ============================================

// Make category nav sticky behavior smoother
let lastScroll = 0;
const categoryNav = document.querySelector('.category-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (categoryNav) {
        if (currentScroll > 100) {
            categoryNav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            categoryNav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
    
    lastScroll = currentScroll;
});