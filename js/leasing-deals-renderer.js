// Vehicle Rendering and Category Navigation
// Handles dynamic rendering of vehicle listings and smooth scrolling to categories

document.addEventListener('DOMContentLoaded', function() {
    // Setup background video looping (14.5s - 22s)
    setupBackgroundVideo();
    
    // Render all vehicles from the data file
    renderAllVehicles();
    
    // Setup category navigation
    setupCategoryNavigation();
    
    // Setup contact form
    setupContactForm();
    
    // Setup price filter
    setupPriceFilter();
});

/**
 * Setup background video to loop between 14.5s and 25s
 */
function setupBackgroundVideo() {
    const video = document.getElementById('bgVideo');
    if (!video) return;
    
    const startTime = 14.5; // Start at 14.5 seconds
    const endTime = 25;     // End at 25 seconds
    
    // Set video to start at 14.5 seconds
    video.currentTime = startTime;
    
    // Play the video
    video.play().catch(err => {
        console.log('Video autoplay prevented:', err);
    });
    
    // Loop between 14.5s and 22s
    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= endTime) {
            video.currentTime = startTime;
        }
    });
    
    // Ensure video starts at correct time when ready
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = startTime;
    });
}

/**
 * Render all vehicles organized by category
 */
function renderAllVehicles() {
    const container = document.getElementById('vehicles-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear loading message
    
    // Group vehicles by category
    const categories = {
        'Sedan': [],
        'SUV': [],
        'Coupe': [],
        'Hatchback': [],
        'Convertible': [],
        'Wagon': [],
        'Sports Car': [],
        'Luxury': [],
        'Truck': [],
        'Van': [],
        'Electric': [],
        'Hybrid': []
    };
    
    // Sort vehicles into categories
    vehiclesData.forEach(vehicle => {
        if (categories[vehicle.category]) {
            categories[vehicle.category].push(vehicle);
        }
    });
    
    // Render each category
    Object.keys(categories).forEach(categoryName => {
        const vehiclesInCategory = categories[categoryName];
        if (vehiclesInCategory.length > 0) {
            const categorySection = createCategorySection(categoryName, vehiclesInCategory);
            container.appendChild(categorySection);
        }
    });
}

/**
 * Create a category section with all its vehicles
 */
function createCategorySection(categoryName, vehicles) {
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = `category-${categoryName.toLowerCase().replace(/\s+/g, '-')}`;
    
    // Category header
    const header = document.createElement('h2');
    header.className = 'category-title';
    header.textContent = categoryName;
    section.appendChild(header);
    
    // Vehicles container
    const vehiclesContainer = document.createElement('div');
    vehiclesContainer.className = 'vehicles-list';
    
    vehicles.forEach(vehicle => {
        const vehicleCard = createVehicleCard(vehicle);
        vehiclesContainer.appendChild(vehicleCard);
    });
    
    section.appendChild(vehiclesContainer);
    return section;
}

/**
 * Create a vehicle card with compact design, consistent specs, and rich information
 */
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.setAttribute('data-vehicle-id', vehicle.id);
    
    // Top Banner: $0 Down + Free Delivery
    const topBanner = document.createElement('div');
    topBanner.className = 'card-top-banner';
    topBanner.innerHTML = `
        <div class="banner-item">
            <i class="fas fa-dollar-sign"></i>
            <span>$0 Down</span>
        </div>
        <div class="banner-divider"></div>
        <div class="banner-item">
            <i class="fas fa-shipping-fast"></i>
            <span>Free home delivery</span>
        </div>
    `;
    card.appendChild(topBanner);
    
    // Left Section: Title, Price, Specs
    const leftSection = document.createElement('div');
    leftSection.className = 'vehicle-left';
    
    // Title
    const titleRow = document.createElement('div');
    titleRow.className = 'vehicle-title-row';
    
    const title = document.createElement('h3');
    title.className = 'vehicle-title';
    title.innerHTML = `${vehicle.manufacturer.toUpperCase()}<span class="model-name">${vehicle.name}</span>`;
    
    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'category-badge';
    categoryBadge.textContent = vehicle.category;
    
    titleRow.appendChild(title);
    titleRow.appendChild(categoryBadge);
    
    // Price and Location
    const priceBox = document.createElement('div');
    priceBox.className = 'price-box';
    
    // Starting at label
    const startingLabel = document.createElement('div');
    startingLabel.className = 'starting-label';
    startingLabel.textContent = 'Starting at:';
    priceBox.appendChild(startingLabel);
    
    // Price row (keeps price and /mo on same line)
    const priceRow = document.createElement('div');
    priceRow.className = 'price-row';
    
    if (vehicle.leasePrice) {
        priceRow.innerHTML = `
            <span class="price-amount">${vehicle.leasePrice.replace('/mo', '')}</span>
            <span class="price-term">/mo</span>
        `;
    } else {
        priceRow.innerHTML = `
            <span class="price-amount">${calculateLeasePrice(vehicle).replace('/mo', '')}</span>
            <span class="price-term">/mo</span>
        `;
    }
    priceBox.appendChild(priceRow);
    
    // Dealer Location
    if (vehicle.dealerLocation) {
        const locationInfo = document.createElement('div');
        locationInfo.className = 'dealer-location';
        locationInfo.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${vehicle.dealerLocation}`;
        priceBox.appendChild(locationInfo);
        
        // Transport message
        const transportMsg = document.createElement('div');
        transportMsg.className = 'transport-message';
        transportMsg.innerHTML = '<i class="fas fa-shipping-fast"></i> This vehicle will be transported free from this dealership directly to your home';
        priceBox.appendChild(transportMsg);
    }
    
    leftSection.appendChild(titleRow);
    leftSection.appendChild(priceBox);
    
    // Right Section: Specs, Description & Button
    const rightSection = document.createElement('div');
    rightSection.className = 'vehicle-right';
    
    // Add specs grid to right section
    const specsGrid = document.createElement('div');
    specsGrid.className = 'specs-grid-compact';
    
    const specs = extractConsistentSpecs(vehicle);
    
    // Always display these 6 specs in order
    const specOrder = ['power', 'engine', 'drivetrain', 'transmission', 'fuel', 'acceleration'];
    specOrder.forEach(specKey => {
        const spec = specs[specKey];
        const specItem = document.createElement('div');
        specItem.className = 'spec-compact';
        specItem.innerHTML = `
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">${spec.value}</span>
        `;
        specsGrid.appendChild(specItem);
    });
    
    const description = document.createElement('p');
    description.className = 'vehicle-description-compact';
    description.textContent = vehicle.description;
    
    const contactBtn = document.createElement('button');
    contactBtn.className = 'contact-btn-compact';
    contactBtn.innerHTML = '<i class="fas fa-envelope"></i> Contact Us';
    contactBtn.onclick = () => openContactForm(vehicle);
    
    rightSection.appendChild(specsGrid);
    rightSection.appendChild(description);
    rightSection.appendChild(contactBtn);
    
    // Assemble Card
    card.appendChild(leftSection);
    card.appendChild(rightSection);
    
    return card;
}

/**
 * Extract specs consistently - ALWAYS return all 6 fields
 */
function extractConsistentSpecs(vehicle) {
    const description = vehicle.description;
    const specs = {
        power: { label: 'Power', value: 'N/A' },
        engine: { label: 'Engine', value: 'N/A' },
        drivetrain: { label: 'Drive', value: 'N/A' },
        transmission: { label: 'Trans', value: 'N/A' },
        fuel: { label: 'MPG', value: 'N/A' },
        acceleration: { label: '0-60', value: 'N/A' }
    };
    
    // Horsepower
    const hpMatch = description.match(/(\d+)\s*HP/i);
    if (hpMatch) {
        specs.power.value = `${hpMatch[1]} HP`;
    }
    
    // Engine
    const engineMatch = description.match(/([\d.]+L\s*(?:V\d+|inline-\d+|I\d+|flat-\d+)?(?:\s*(?:turbo|twin-turbo|supercharged))?)/i);
    if (engineMatch) {
        specs.engine.value = engineMatch[1].replace(/\s+/g, ' ').trim();
    } else {
        // Try to extract just displacement
        const dispMatch = description.match(/([\d.]+)L/i);
        if (dispMatch) {
            specs.engine.value = `${dispMatch[1]}L`;
        }
    }
    
    // Drivetrain
    if (description.match(/AWD|4MATIC|xDrive|Quattro|4WD|all-wheel/i)) {
        specs.drivetrain.value = 'AWD';
    } else if (description.match(/RWD|rear-wheel/i)) {
        specs.drivetrain.value = 'RWD';
    } else if (description.match(/FWD|front-wheel/i)) {
        specs.drivetrain.value = 'FWD';
    }
    
    // Transmission
    const transMatch = description.match(/(\d+)-speed\s*(automatic|manual|DCT|CVT|Tiptronic|PDK)/i);
    if (transMatch) {
        specs.transmission.value = `${transMatch[1]}-spd ${transMatch[2].substring(0, 4)}`;
    } else if (description.match(/CVT|Xtronic/i)) {
        specs.transmission.value = 'CVT';
    } else if (description.match(/automatic|auto/i)) {
        specs.transmission.value = 'Auto';
    } else if (description.match(/manual/i)) {
        specs.transmission.value = 'Manual';
    }
    
    // Fuel Economy - prioritize highway, then combined, then city
    const mpgHighwayMatch = description.match(/(\d+)\s*MPG\s*highway/i);
    const mpgCombinedMatch = description.match(/(\d+)\s*MPG\s*combined/i);
    const mpgCityMatch = description.match(/(\d+)\s*MPG\s*city/i);
    const mpgGenericMatch = description.match(/(\d+)\s*MPG/i);
    
    if (mpgHighwayMatch) {
        specs.fuel.value = `${mpgHighwayMatch[1]} hwy`;
    } else if (mpgCombinedMatch) {
        specs.fuel.value = `${mpgCombinedMatch[1]} comb`;
    } else if (mpgCityMatch) {
        specs.fuel.value = `${mpgCityMatch[1]} city`;
    } else if (mpgGenericMatch) {
        specs.fuel.value = `${mpgGenericMatch[1]}`;
    }
    
    // 0-60 time - Extract from description or estimate based on HP and category
    const zeroSixtyMatch = description.match(/0-60\s*(?:in\s*)?([0-9.]+)\s*sec/i);
    if (zeroSixtyMatch) {
        specs.acceleration.value = `${zeroSixtyMatch[1]}s`;
    } else {
        // Estimate 0-60 based on HP and category if not explicitly stated
        const hpForCalc = specs.power.value !== 'N/A' ? parseInt(specs.power.value) : 200;
        const category = vehicle.category;
        let estimated060 = 'N/A';
        
        if (hpForCalc > 0) {
            // Base calculation: higher HP = faster 0-60
            let time = 12.0; // Default baseline
            
            if (hpForCalc >= 500) time = 3.5;
            else if (hpForCalc >= 450) time = 4.0;
            else if (hpForCalc >= 400) time = 4.5;
            else if (hpForCalc >= 350) time = 5.2;
            else if (hpForCalc >= 300) time = 5.8;
            else if (hpForCalc >= 280) time = 6.2;
            else if (hpForCalc >= 250) time = 6.8;
            else if (hpForCalc >= 220) time = 7.5;
            else if (hpForCalc >= 200) time = 8.0;
            else if (hpForCalc >= 180) time = 8.8;
            else if (hpForCalc >= 160) time = 9.5;
            else time = 10.5;
            
            // Adjust for category (SUVs/Trucks are heavier)
            if (category === 'SUV' || category === 'Truck') time += 0.8;
            else if (category === 'Van') time += 1.2;
            else if (category === 'Sports Car' || category === 'Convertible') time -= 0.5;
            else if (category === 'Coupe') time -= 0.3;
            
            // Adjust for drivetrain (AWD adds weight)
            if (specs.drivetrain.value === 'AWD') time += 0.2;
            
            estimated060 = `~${time.toFixed(1)}s`;
        }
        
        specs.acceleration.value = estimated060;
    }
    
    return specs;
}

/**
 * Calculate approximate lease price based on vehicle category and manufacturer
 * Uses more nuanced pricing to create variety and realistic market prices
 */
function calculateLeasePrice(vehicle) {
    // Check for manual price override first
    const priceOverrides = {
        // Honda models - User specified prices
        'honda cr-v': '$408',
        'honda pilot': '$599',
        // Add more overrides as needed
    };
    
    const vehicleKey = `${vehicle.manufacturer} ${vehicle.name}`.toLowerCase();
    if (priceOverrides[vehicleKey]) {
        return priceOverrides[vehicleKey];
    }
    
    const manufacturer = vehicle.manufacturer.toLowerCase();
    const description = vehicle.description.toLowerCase();
    const name = vehicle.name.toLowerCase();
    
    // Extract HP if available
    let hp = 200;
    const hpMatch = description.match(/(\d+)\s*hp/i);
    if (hpMatch) {
        hp = parseInt(hpMatch[1]);
    }
    
    // Extract displacement for additional pricing factor
    let displacement = 2.0;
    const dispMatch = description.match(/([\d.]+)L/i);
    if (dispMatch) {
        displacement = parseFloat(dispMatch[1]);
    }
    
    // Base pricing by manufacturer tier
    let basePrice = 350;
    
    // Economy/Mainstream brands
    if (['honda', 'toyota', 'mazda', 'nissan', 'hyundai', 'kia', 'volkswagen', 'subaru'].includes(manufacturer)) {
        basePrice = 320 + (Math.random() * 60); // $320-380
    }
    
    // Premium brands
    if (['acura', 'infiniti', 'buick', 'chrysler', 'dodge', 'jeep', 'ram', 'gmc', 'chevrolet', 'ford', 'lincoln'].includes(manufacturer)) {
        basePrice = 400 + (Math.random() * 80); // $400-480
    }
    
    // Luxury brands
    if (['mercedes-benz', 'bmw', 'audi', 'lexus', 'cadillac', 'genesis', 'volvo', 'alfa romeo'].includes(manufacturer)) {
        basePrice = 550 + (Math.random() * 120); // $550-670
    }
    
    // Ultra-luxury
    if (['porsche', 'land rover', 'jaguar', 'maserati', 'tesla'].includes(manufacturer)) {
        basePrice = 750 + (Math.random() * 200); // $750-950
    }
    
    // Exotic/Supercar
    if (['lamborghini', 'ferrari', 'mclaren', 'bentley', 'rolls-royce', 'aston martin'].includes(manufacturer)) {
        basePrice = 1500 + (Math.random() * 500); // $1500-2000
    }
    
    // Category multipliers with variance
    const categoryMultipliers = {
        'Sedan': 0.95 + (Math.random() * 0.1),        // 0.95-1.05
        'SUV': 1.1 + (Math.random() * 0.15),          // 1.1-1.25
        'Coupe': 1.05 + (Math.random() * 0.15),       // 1.05-1.2
        'Convertible': 1.2 + (Math.random() * 0.2),   // 1.2-1.4
        'Sports Car': 1.3 + (Math.random() * 0.3),    // 1.3-1.6
        'Luxury': 1.25 + (Math.random() * 0.2),       // 1.25-1.45
        'Truck': 1.15 + (Math.random() * 0.2),        // 1.15-1.35
        'Van': 1.1 + (Math.random() * 0.1),           // 1.1-1.2
        'Wagon': 1.0 + (Math.random() * 0.1),         // 1.0-1.1
        'Hatchback': 0.9 + (Math.random() * 0.1),     // 0.9-1.0
        'Electric': 1.15 + (Math.random() * 0.25),    // 1.15-1.4
        'Hybrid': 1.05 + (Math.random() * 0.15)       // 1.05-1.2
    };
    
    basePrice *= (categoryMultipliers[vehicle.category] || 1.0);
    
    // HP-based adjustments (more granular)
    if (hp > 500) {
        basePrice *= 1.7 + (Math.random() * 0.2); // 1.7-1.9x
    } else if (hp > 400) {
        basePrice *= 1.45 + (Math.random() * 0.15); // 1.45-1.6x
    } else if (hp > 350) {
        basePrice *= 1.3 + (Math.random() * 0.1); // 1.3-1.4x
    } else if (hp > 300) {
        basePrice *= 1.2 + (Math.random() * 0.1); // 1.2-1.3x
    } else if (hp > 250) {
        basePrice *= 1.1 + (Math.random() * 0.05); // 1.1-1.15x
    } else if (hp < 150) {
        basePrice *= 0.9 + (Math.random() * 0.05); // 0.9-0.95x
    }
    
    // Displacement adjustment
    if (displacement >= 5.0) {
        basePrice *= 1.15;
    } else if (displacement >= 4.0) {
        basePrice *= 1.1;
    } else if (displacement >= 3.0) {
        basePrice *= 1.05;
    }
    
    // Model-specific adjustments
    if (name.includes('type r') || name.includes('amg') || name.includes('m3') || name.includes('m4') || name.includes('rs')) {
        basePrice *= 1.3 + (Math.random() * 0.2); // Performance variants
    }
    
    if (name.includes('hybrid') && !vehicle.category.includes('Hybrid')) {
        basePrice *= 1.08;
    }
    
    if (name.includes('plug-in')) {
        basePrice *= 1.15;
    }
    
    // Trim level adjustments
    if (description.includes('premium') || description.includes('platinum') || description.includes('limited')) {
        basePrice *= 1.08;
    }
    
    // AWD premium (if mentioned prominently)
    if (description.match(/AWD|4MATIC|xDrive|Quattro/i)) {
        basePrice += 20 + (Math.random() * 20); // +$20-40
    }
    
    // Round to nearest $9 for more realistic pricing (dealers love $399, $449, etc.)
    basePrice = Math.round(basePrice / 10) * 10;
    const lastDigit = basePrice % 10;
    if (lastDigit === 0) {
        basePrice -= 1; // Make it $XX9 instead of $XX0
    }
    
    // Ensure minimum price
    if (basePrice < 299) basePrice = 299;
    
    return `$${Math.round(basePrice)}`;
}

/**
 * Extract key specs from vehicle description
 */
function extractSpecs(vehicle) {
    const description = vehicle.description;
    const specs = [];
    
    // Horsepower
    const hpMatch = description.match(/(\d+)\s*HP/i);
    if (hpMatch) {
        specs.push({
            icon: 'fas fa-tachometer-alt',
            label: 'Power',
            value: `${hpMatch[1]} HP`
        });
    }
    
    // Engine
    const engineMatch = description.match(/([\d.]+L\s*(?:V\d+|inline-\d+|I\d+|flat-\d+|turbo|twin-turbo)?)/i);
    if (engineMatch) {
        specs.push({
            icon: 'fas fa-cog',
            label: 'Engine',
            value: engineMatch[1]
        });
    }
    
    // Drivetrain
    if (description.match(/AWD|4MATIC|xDrive|Quattro|4WD/i)) {
        specs.push({
            icon: 'fas fa-road',
            label: 'Drivetrain',
            value: 'AWD'
        });
    } else if (description.match(/RWD|rear-wheel/i)) {
        specs.push({
            icon: 'fas fa-road',
            label: 'Drivetrain',
            value: 'RWD'
        });
    } else if (description.match(/FWD|front-wheel/i)) {
        specs.push({
            icon: 'fas fa-road',
            label: 'Drivetrain',
            value: 'FWD'
        });
    }
    
    // Transmission
    const transMatch = description.match(/(\d+)-speed\s*(automatic|manual|DCT|CVT)/i);
    if (transMatch) {
        specs.push({
            icon: 'fas fa-exchange-alt',
            label: 'Transmission',
            value: `${transMatch[1]}-Speed ${transMatch[2]}`
        });
    }
    
    // Fuel Economy
    const mpgMatch = description.match(/(\d+)\s*MPG\s*(city|highway|combined)?/i);
    if (mpgMatch) {
        specs.push({
            icon: 'fas fa-gas-pump',
            label: 'Fuel Economy',
            value: `${mpgMatch[1]} MPG ${mpgMatch[2] || ''}`
        });
    }
    
    // 0-60 time
    const zeroSixtyMatch = description.match(/0-60\s*(?:in\s*)?([0-9.]+)\s*sec/i);
    if (zeroSixtyMatch) {
        specs.push({
            icon: 'fas fa-stopwatch',
            label: '0-60 mph',
            value: `${zeroSixtyMatch[1]}s`
        });
    }
    
    // Seating (for SUVs, Vans)
    const seatingMatch = description.match(/seat(?:s|ing)?\s*(?:up\s*to\s*)?(\d+)/i);
    if (seatingMatch && ['SUV', 'Van', 'Truck'].includes(vehicle.category)) {
        specs.push({
            icon: 'fas fa-users',
            label: 'Seating',
            value: `${seatingMatch[1]} passengers`
        });
    }
    
    return specs;
}

/**
 * Toggle vehicle details (placeholder for future expansion)
 */
function toggleVehicleDetails(card) {
    alert('Detailed specifications coming soon! Please contact us for more information.');
}

/**
 * Setup category navigation buttons
 */
function setupCategoryNavigation() {
    const navButtons = document.querySelectorAll('.category-nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            scrollToCategory(category);
            
            // Update active state
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Smooth scroll to category section
 */
function scrollToCategory(category) {
    const categoryId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`;
    const element = document.getElementById(categoryId);
    
    if (element) {
        const navbarHeight = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        // Category doesn't exist - show message
        showCategoryMessage(category);
    }
}

/**
 * Show message when category has no vehicles
 */
function showCategoryMessage(category) {
    // Remove any existing message
    const existingMessage = document.querySelector('.category-empty-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create and show message
    const container = document.getElementById('vehicles-container');
    const message = document.createElement('div');
    message.className = 'category-empty-message';
    message.innerHTML = `
        <div class="empty-message-content">
            <i class="fas fa-info-circle"></i>
            <h3>No ${category} Vehicles Currently Available</h3>
            <p>We don't have ${category.toLowerCase()} vehicles listed at this time, but we can source any vehicle you need!</p>
            <p><strong>Contact us and we'll find the perfect ${category.toLowerCase()} for you.</strong></p>
            <a href="personal-application.html" class="btn btn-primary">Get Started</a>
        </div>
    `;
    
    // Insert at the top
    container.insertBefore(message, container.firstChild);
    
    // Scroll to the message
    const navbarHeight = 80;
    const messagePosition = message.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = messagePosition - navbarHeight - 20;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 300);
        }
    }, 10000);
}

/**
 * Open contact form modal
 */
function openContactForm(vehicle) {
    const modal = document.getElementById('contactModal');
    const vehicleNameSpan = document.getElementById('selectedVehicleName');
    const vehicleInput = document.getElementById('selectedVehicle');
    
    if (modal && vehicleNameSpan && vehicleInput) {
        vehicleNameSpan.textContent = vehicle.name;
        vehicleInput.value = `${vehicle.name} (${vehicle.category})`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close contact form modal
 */
function closeContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Setup contact form submission
 */
function setupContactForm() {
    const form = document.getElementById('vehicleContactForm');
    const closeBtn = document.querySelector('.close-modal');
    const modal = document.getElementById('contactModal');
    
    // Close button
    if (closeBtn) {
        closeBtn.onclick = closeContactForm;
    }
    
    // Close on outside click
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                closeContactForm();
            }
        };
    }
    
    // Form submission
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Collect form data
            const formData = {
                vehicle: document.getElementById('selectedVehicle').value,
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                phone: document.getElementById('contactPhone').value,
                message: document.getElementById('contactMessage').value,
                timestamp: new Date().toISOString()
            };
            
            try {
                // Simulate email sending (would integrate with backend)
                await simulateEmailSending(formData);
                
                // Show success message
                closeContactForm();
                showSuccessMessage();
                
                // Reset form
                form.reset();
            } catch (error) {
                alert('There was an error sending your message. Please try again or call us directly at 305-724-5534');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

/**
 * Simulate email sending (backend integration required)
 */
async function simulateEmailSending(data) {
    return new Promise((resolve) => {
        console.log('Email would be sent to: sales@unitedautolease.com, ben@unitedautolease.com');
        console.log('Form data:', data);
        
        // In production, this would make an actual API call to your email service
        // Example:
        // await fetch('/api/send-contact-email', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
        setTimeout(resolve, 1000); // Simulate network delay
    });
}

/**
 * Show success message modal
 */
function showSuccessMessage() {
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Application Submitted Successfully!</h2>
            <p>Thank you for your interest. Our customer service department will contact you shortly during normal business hours.</p>
            <div class="business-hours">
                <p><strong>Business Hours:</strong></p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            </div>
            <button class="success-btn" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-home"></i> Continue Browsing
            </button>
        </div>
    `;
    
    document.body.appendChild(successModal);
    
    // Auto close after 8 seconds
    setTimeout(() => {
        if (successModal.parentElement) {
            successModal.remove();
        }
    }, 8000);
}

/**
 * Setup price filter functionality
 */
function setupPriceFilter() {
    const minSlider = document.getElementById('minPriceSlider');
    const maxSlider = document.getElementById('maxPriceSlider');
    const priceMinDisplay = document.querySelector('.price-min');
    const priceMaxDisplay = document.querySelector('.price-max');
    const applyBtn = document.getElementById('applyPriceFilter');
    const clearBtn = document.getElementById('clearPriceFilter');
    const resultText = document.getElementById('filterResultText');
    
    let currentMinPrice = 0;
    let currentMaxPrice = 2000;
    
    // Update price display
    function updatePriceDisplay() {
        priceMinDisplay.textContent = `$${currentMinPrice}`;
        priceMaxDisplay.textContent = currentMaxPrice >= 2000 ? '$2,000+' : `$${currentMaxPrice}`;
    }
    
    // Slider event listeners
    if (minSlider) {
        minSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value < currentMaxPrice) {
                currentMinPrice = value;
                updatePriceDisplay();
            } else {
                this.value = currentMinPrice;
            }
        });
    }
    
    if (maxSlider) {
        maxSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            if (value > currentMinPrice) {
                currentMaxPrice = value;
                updatePriceDisplay();
            } else {
                this.value = currentMaxPrice;
            }
        });
    }
    
    // Apply filter
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            applyPriceFilterToVehicles(currentMinPrice, currentMaxPrice);
        });
    }
    
    // Clear filter
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            currentMinPrice = 0;
            currentMaxPrice = 2000;
            minSlider.value = 0;
            maxSlider.value = 2000;
            updatePriceDisplay();
            applyPriceFilterToVehicles(0, 2000);
        });
    }
}

/**
 * Apply price filter to visible vehicles
 */
function applyPriceFilterToVehicles(minPrice, maxPrice) {
    const allVehicleCards = document.querySelectorAll('.vehicle-card');
    const resultText = document.getElementById('filterResultText');
    let visibleCount = 0;
    let hiddenCategories = new Set();
    
    allVehicleCards.forEach(card => {
        const priceElement = card.querySelector('.price-amount');
        if (priceElement) {
            // Extract numeric price from text like "$408" or "$1,299"
            const priceText = priceElement.textContent.replace(/[\$,]/g, '');
            const price = parseInt(priceText);
            
            // Check if price is within range
            const isInRange = price >= minPrice && (maxPrice >= 2000 ? true : price <= maxPrice);
            
            if (isInRange) {
                card.style.display = 'grid';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        }
    });
    
    // Update category visibility - hide empty categories
    const categorySections = document.querySelectorAll('.category-section');
    let visibleCategories = 0;
    
    categorySections.forEach(section => {
        const visibleCars = section.querySelectorAll('.vehicle-card[style="display: grid;"]');
        const allCars = section.querySelectorAll('.vehicle-card');
        
        if (visibleCars.length === 0 && allCars.length > 0) {
            // Category has cars but none visible due to filter
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
            if (visibleCars.length > 0) visibleCategories++;
        }
    });
    
    // Update result count text
    if (resultText) {
        if (minPrice === 0 && maxPrice >= 2000) {
            resultText.textContent = `Showing all ${visibleCount} vehicles`;
        } else {
            const maxText = maxPrice >= 2000 ? '2,000+' : maxPrice;
            resultText.textContent = `Showing ${visibleCount} vehicles ($${minPrice} - $${maxText}/mo)`;
        }
    }
    
    // Scroll to first visible vehicle if filter is active
    if (visibleCount > 0 && (minPrice > 0 || maxPrice < 2000)) {
        const firstVisibleCard = document.querySelector('.vehicle-card[style="display: grid;"]');
        if (firstVisibleCard) {
            const navbarHeight = 150; // Sticky nav height
            const cardPosition = firstVisibleCard.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = cardPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Make functions globally accessible
window.closeContactForm = closeContactForm;

/**
 * Get manufacturer logo URL
 */
function getManufacturerLogo(manufacturer) {
    const logos = {
        'Honda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/200px-Honda_logo.svg.png',
        'Toyota': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png',
        'Nissan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Nissan_logo.svg/200px-Nissan_logo.svg.png',
        'Ford': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png',
        'Chevrolet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Chevrolet_logo.svg/200px-Chevrolet_logo.svg.png',
        'BMW': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
        'Mercedes-Benz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png',
        'Audi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Audi_2016.svg/200px-Audi_2016.svg.png',
        'Lexus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Lexus_division_emblem.svg/200px-Lexus_division_emblem.svg.png',
        'Mazda': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mazda_logo.svg/200px-Mazda_logo.svg.png',
        'Hyundai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Hyundai_logo.svg/200px-Hyundai_logo.svg.png',
        'Kia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kia_logo.svg/200px-Kia_logo.svg.png',
        'Volkswagen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png',
        'Subaru': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Subaru_logo.svg/200px-Subaru_logo.svg.png',
        'Jeep': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Jeep_logo.svg/200px-Jeep_logo.svg.png',
        'Ram': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ram_logo.svg/200px-Ram_logo.svg.png',
        'GMC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/GMC_logo.svg/200px-GMC_logo.svg.png',
        'Dodge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dodge_logo.svg/200px-Dodge_logo.svg.png',
        'Chrysler': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Chrysler.svg/200px-Chrysler.svg.png',
        'Acura': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Acura_Logo.svg/200px-Acura_Logo.svg.png',
        'Infiniti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Infiniti_logo.svg/200px-Infiniti_logo.svg.png',
        'Cadillac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Cadillac_logo.svg/200px-Cadillac_logo.svg.png',
        'Lincoln': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lincoln_Motor_Company_logo.svg/200px-Lincoln_Motor_Company_logo.svg.png',
        'Buick': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Buick_logo.svg/200px-Buick_logo.svg.png',
        'Volvo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Volvo_iron_symbol.svg/200px-Volvo_iron_symbol.svg.png',
        'Genesis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Genesis_logo.svg/200px-Genesis_logo.svg.png',
        'Tesla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/200px-Tesla_Motors.svg.png',
        'Porsche': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Porsche_logo.svg/200px-Porsche_logo.svg.png',
        'Jaguar': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jaguar_Cars_2012_logo.svg/200px-Jaguar_Cars_2012_logo.svg.png',
        'Land Rover': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Land_Rover_logo.svg/200px-Land_Rover_logo.svg.png',
        'Alfa Romeo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Alfa_Romeo_logo.svg/200px-Alfa_Romeo_logo.svg.png',
        'Maserati': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Maserati_logo.svg/200px-Maserati_logo.svg.png',
        'Mini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mini_logo.svg/200px-Mini_logo.svg.png'
    };
    
    return logos[manufacturer] || null;
}

/**
 * Setup floating "Back to Filter" button
 * Shows button when user scrolls down, hides when at top
 */
window.addEventListener('DOMContentLoaded', function() {
    const backToFilterBtn = document.getElementById('backToFilterBtn');
    const filterSection = document.querySelector('.price-filter-container');
    
    if (!backToFilterBtn || !filterSection) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        const filterPosition = filterSection.getBoundingClientRect().top;
        
        // Show button when filter is out of view (scrolled past it)
        if (filterPosition < -200) {
            backToFilterBtn.style.display = 'flex';
        } else {
            backToFilterBtn.style.display = 'none';
        }
    });
    
    // Scroll back to filter when button is clicked
    backToFilterBtn.addEventListener('click', function() {
        const navbarHeight = 80; // Height of sticky navbar
        const filterSectionTop = filterSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = filterSectionTop - navbarHeight - 20; // 20px extra padding
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

