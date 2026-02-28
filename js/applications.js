// ============================================
// APPLICATION FORM HANDLING
// ============================================

// Email configuration
const EMAIL_RECIPIENTS = ['sales@unitedautolease.com', 'ben@unitedautolease.com'];

// Initialize form handlers
document.addEventListener('DOMContentLoaded', function() {
    // Personal Application
    const personalForm = document.getElementById('personalApplicationForm');
    if (personalForm) {
        personalForm.addEventListener('submit', handlePersonalApplication);
    }

    // Business Application
    const businessForm = document.getElementById('businessApplicationForm');
    if (businessForm) {
        businessForm.addEventListener('submit', handleBusinessApplication);
    }

    // Joint Application
    const jointForm = document.getElementById('jointApplicationForm');
    if (jointForm) {
        jointForm.addEventListener('submit', handleJointApplication);
    }
});

// ============================================
// PERSONAL APPLICATION HANDLER
// ============================================
function handlePersonalApplication(e) {
    e.preventDefault();
    
    const formData = {
        type: 'Personal Credit Application',
        personalInfo: {
            firstName: document.getElementById('firstName').value,
            middleName: document.getElementById('middleName').value,
            lastName: document.getElementById('lastName').value,
            suffix: document.getElementById('suffix').value,
            dateOfBirth: document.getElementById('dateOfBirth').value,
            ssn: document.getElementById('ssn').value,
            driversLicense: document.getElementById('driversLicense').value,
            licenseState: document.getElementById('licenseState').value
        },
        contactInfo: {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            alternatePhone: document.getElementById('alternatePhone').value
        },
        address: {
            street: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zipCode').value,
            residenceType: document.getElementById('residenceType').value,
            monthlyPayment: document.getElementById('monthlyPayment').value,
            timeAtAddress: document.getElementById('timeAtAddress').value
        },
        employment: {
            status: document.getElementById('employmentStatus').value,
            employer: document.getElementById('employer').value,
            occupation: document.getElementById('occupation').value,
            employerPhone: document.getElementById('employerPhone').value,
            timeEmployed: document.getElementById('timeEmployed').value,
            grossIncome: document.getElementById('grossIncome').value,
            employerAddress: document.getElementById('employerAddress').value
        },
        vehicle: {
            make: document.getElementById('vehicleMake').value,
            model: document.getElementById('vehicleModel').value,
            year: document.getElementById('vehicleYear').value,
            desiredTerm: document.getElementById('desiredTerm').value
        },
        comments: document.getElementById('comments').value,
        submittedAt: new Date().toLocaleString()
    };

    processApplication(formData);
}

// ============================================
// BUSINESS APPLICATION HANDLER
// ============================================
function handleBusinessApplication(e) {
    e.preventDefault();
    
    const formData = {
        type: 'Business Credit Application',
        businessInfo: {
            legalName: document.getElementById('businessName').value,
            dba: document.getElementById('dba').value,
            ein: document.getElementById('ein').value,
            businessType: document.getElementById('businessType').value,
            yearEstablished: document.getElementById('yearEstablished').value,
            industry: document.getElementById('industry').value,
            annualRevenue: document.getElementById('annualRevenue').value
        },
        businessContact: {
            email: document.getElementById('businessEmail').value,
            phone: document.getElementById('businessPhone').value,
            fax: document.getElementById('businessFax').value,
            website: document.getElementById('website').value
        },
        businessAddress: {
            street: document.getElementById('businessAddress').value,
            city: document.getElementById('businessCity').value,
            state: document.getElementById('businessState').value,
            zipCode: document.getElementById('businessZip').value
        },
        guarantor: {
            firstName: document.getElementById('contactFirstName').value,
            lastName: document.getElementById('contactLastName').value,
            title: document.getElementById('contactTitle').value,
            dateOfBirth: document.getElementById('contactDOB').value,
            ssn: document.getElementById('contactSSN').value,
            email: document.getElementById('contactEmail').value,
            phone: document.getElementById('contactPhone').value,
            ownershipPercent: document.getElementById('ownershipPercent').value
        },
        guarantorAddress: {
            street: document.getElementById('guarantorAddress').value,
            city: document.getElementById('guarantorCity').value,
            state: document.getElementById('guarantorState').value,
            zipCode: document.getElementById('guarantorZip').value
        },
        vehicle: {
            make: document.getElementById('vehicleMake').value,
            model: document.getElementById('vehicleModel').value,
            year: document.getElementById('vehicleYear').value,
            numberOfVehicles: document.getElementById('numberOfVehicles').value,
            desiredTerm: document.getElementById('desiredTerm').value
        },
        businessPurpose: document.getElementById('businessPurpose').value,
        comments: document.getElementById('comments').value,
        submittedAt: new Date().toLocaleString()
    };

    processApplication(formData);
}

// ============================================
// JOINT APPLICATION HANDLER
// ============================================
function handleJointApplication(e) {
    e.preventDefault();
    
    const formData = {
        type: 'Joint Credit Application',
        primaryApplicant: {
            personalInfo: {
                firstName: document.getElementById('firstName1').value,
                middleName: document.getElementById('middleName1').value,
                lastName: document.getElementById('lastName1').value,
                dateOfBirth: document.getElementById('dob1').value,
                ssn: document.getElementById('ssn1').value,
                driversLicense: document.getElementById('dl1').value,
                email: document.getElementById('email1').value,
                phone: document.getElementById('phone1').value
            },
            address: {
                street: document.getElementById('address1').value,
                city: document.getElementById('city1').value,
                state: document.getElementById('state1').value,
                zipCode: document.getElementById('zip1').value,
                residenceType: document.getElementById('residenceType1').value,
                monthlyPayment: document.getElementById('monthlyPayment1').value,
                timeAtAddress: document.getElementById('timeAtAddress1').value
            },
            employment: {
                status: document.getElementById('employmentStatus1').value,
                employer: document.getElementById('employer1').value,
                occupation: document.getElementById('occupation1').value,
                employerPhone: document.getElementById('employerPhone1').value,
                timeEmployed: document.getElementById('timeEmployed1').value,
                grossIncome: document.getElementById('grossIncome1').value
            }
        },
        coApplicant: {
            personalInfo: {
                firstName: document.getElementById('firstName2').value,
                middleName: document.getElementById('middleName2').value,
                lastName: document.getElementById('lastName2').value,
                dateOfBirth: document.getElementById('dob2').value,
                ssn: document.getElementById('ssn2').value,
                driversLicense: document.getElementById('dl2').value,
                email: document.getElementById('email2').value,
                phone: document.getElementById('phone2').value
            },
            address: {
                street: document.getElementById('address2').value,
                city: document.getElementById('city2').value,
                state: document.getElementById('state2').value,
                zipCode: document.getElementById('zip2').value,
                residenceType: document.getElementById('residenceType2').value,
                monthlyPayment: document.getElementById('monthlyPayment2').value,
                timeAtAddress: document.getElementById('timeAtAddress2').value
            },
            employment: {
                status: document.getElementById('employmentStatus2').value,
                employer: document.getElementById('employer2').value,
                occupation: document.getElementById('occupation2').value,
                employerPhone: document.getElementById('employerPhone2').value,
                timeEmployed: document.getElementById('timeEmployed2').value,
                grossIncome: document.getElementById('grossIncome2').value
            }
        },
        vehicle: {
            make: document.getElementById('vehicleMake').value,
            model: document.getElementById('vehicleModel').value,
            year: document.getElementById('vehicleYear').value,
            desiredTerm: document.getElementById('desiredTerm').value
        },
        comments: document.getElementById('comments').value,
        submittedAt: new Date().toLocaleString()
    };

    processApplication(formData);
}

// ============================================
// PROCESS APPLICATION
// ============================================
function processApplication(formData) {
    // Generate PDF
    generatePDF(formData);
    
    // Send email (simulated)
    sendEmail(formData);
    
    // Show success modal
    showSuccessModal();
}

// ============================================
// GENERATE PDF
// ============================================
function generatePDF(formData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let yPosition = 20;
    const lineHeight = 7;
    const pageHeight = doc.internal.pageSize.height;
    const marginBottom = 20;
    
    // Helper function to add text with page break handling
    function addText(text, x, y, options = {}) {
        if (y > pageHeight - marginBottom) {
            doc.addPage();
            return 20;
        }
        doc.text(text, x, y, options);
        return y + lineHeight;
    }
    
    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    yPosition = addText(formData.type, 105, yPosition, { align: 'center' });
    yPosition += 5;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    yPosition = addText(`Submitted: ${formData.submittedAt}`, 105, yPosition, { align: 'center' });
    yPosition += 10;
    
    doc.setFontSize(12);
    
    // Format the data based on application type
    if (formData.type === 'Personal Credit Application') {
        yPosition = addSection(doc, 'PERSONAL INFORMATION', yPosition);
        yPosition = addKeyValue(doc, 'Name', `${formData.personalInfo.firstName} ${formData.personalInfo.middleName || ''} ${formData.personalInfo.lastName} ${formData.personalInfo.suffix || ''}`.trim(), yPosition);
        yPosition = addKeyValue(doc, 'Date of Birth', formData.personalInfo.dateOfBirth, yPosition);
        yPosition = addKeyValue(doc, 'SSN', formData.personalInfo.ssn, yPosition);
        yPosition = addKeyValue(doc, 'Driver\'s License', `${formData.personalInfo.driversLicense} (${formData.personalInfo.licenseState})`, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'CONTACT INFORMATION', yPosition);
        yPosition = addKeyValue(doc, 'Email', formData.contactInfo.email, yPosition);
        yPosition = addKeyValue(doc, 'Phone', formData.contactInfo.phone, yPosition);
        if (formData.contactInfo.alternatePhone) {
            yPosition = addKeyValue(doc, 'Alternate Phone', formData.contactInfo.alternatePhone, yPosition);
        }
        yPosition += 5;
        
        yPosition = addSection(doc, 'ADDRESS', yPosition);
        yPosition = addKeyValue(doc, 'Street', formData.address.street, yPosition);
        yPosition = addKeyValue(doc, 'City, State ZIP', `${formData.address.city}, ${formData.address.state} ${formData.address.zipCode}`, yPosition);
        yPosition = addKeyValue(doc, 'Residence Type', formData.address.residenceType, yPosition);
        yPosition = addKeyValue(doc, 'Monthly Payment', `$${formData.address.monthlyPayment}`, yPosition);
        yPosition = addKeyValue(doc, 'Time at Address', `${formData.address.timeAtAddress} years`, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'EMPLOYMENT', yPosition);
        yPosition = addKeyValue(doc, 'Status', formData.employment.status, yPosition);
        yPosition = addKeyValue(doc, 'Employer', formData.employment.employer, yPosition);
        yPosition = addKeyValue(doc, 'Occupation', formData.employment.occupation, yPosition);
        yPosition = addKeyValue(doc, 'Employer Phone', formData.employment.employerPhone, yPosition);
        yPosition = addKeyValue(doc, 'Time Employed', `${formData.employment.timeEmployed} years`, yPosition);
        yPosition = addKeyValue(doc, 'Gross Monthly Income', `$${formData.employment.grossIncome}`, yPosition);
        if (formData.employment.employerAddress) {
            yPosition = addKeyValue(doc, 'Employer Address', formData.employment.employerAddress, yPosition);
        }
        yPosition += 5;
        
        if (formData.vehicle.make || formData.vehicle.model) {
            yPosition = addSection(doc, 'VEHICLE OF INTEREST', yPosition);
            if (formData.vehicle.make) yPosition = addKeyValue(doc, 'Make', formData.vehicle.make, yPosition);
            if (formData.vehicle.model) yPosition = addKeyValue(doc, 'Model', formData.vehicle.model, yPosition);
            if (formData.vehicle.year) yPosition = addKeyValue(doc, 'Year', formData.vehicle.year, yPosition);
            if (formData.vehicle.desiredTerm) yPosition = addKeyValue(doc, 'Desired Term', `${formData.vehicle.desiredTerm} months`, yPosition);
            yPosition += 5;
        }
        
        if (formData.comments) {
            yPosition = addSection(doc, 'COMMENTS', yPosition);
            yPosition = addWrappedText(doc, formData.comments, 20, yPosition, 170);
        }
    }
    
    // Business Application Format
    else if (formData.type === 'Business Credit Application') {
        yPosition = addSection(doc, 'BUSINESS INFORMATION', yPosition);
        yPosition = addKeyValue(doc, 'Legal Name', formData.businessInfo.legalName, yPosition);
        if (formData.businessInfo.dba) yPosition = addKeyValue(doc, 'DBA', formData.businessInfo.dba, yPosition);
        yPosition = addKeyValue(doc, 'EIN', formData.businessInfo.ein, yPosition);
        yPosition = addKeyValue(doc, 'Business Type', formData.businessInfo.businessType, yPosition);
        yPosition = addKeyValue(doc, 'Year Established', formData.businessInfo.yearEstablished, yPosition);
        yPosition = addKeyValue(doc, 'Industry', formData.businessInfo.industry, yPosition);
        yPosition = addKeyValue(doc, 'Annual Revenue', formData.businessInfo.annualRevenue, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'BUSINESS CONTACT', yPosition);
        yPosition = addKeyValue(doc, 'Email', formData.businessContact.email, yPosition);
        yPosition = addKeyValue(doc, 'Phone', formData.businessContact.phone, yPosition);
        if (formData.businessContact.fax) yPosition = addKeyValue(doc, 'Fax', formData.businessContact.fax, yPosition);
        if (formData.businessContact.website) yPosition = addKeyValue(doc, 'Website', formData.businessContact.website, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'BUSINESS ADDRESS', yPosition);
        yPosition = addKeyValue(doc, 'Street', formData.businessAddress.street, yPosition);
        yPosition = addKeyValue(doc, 'City, State ZIP', `${formData.businessAddress.city}, ${formData.businessAddress.state} ${formData.businessAddress.zipCode}`, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'PERSONAL GUARANTOR', yPosition);
        yPosition = addKeyValue(doc, 'Name', `${formData.guarantor.firstName} ${formData.guarantor.lastName}`, yPosition);
        yPosition = addKeyValue(doc, 'Title', formData.guarantor.title, yPosition);
        yPosition = addKeyValue(doc, 'Date of Birth', formData.guarantor.dateOfBirth, yPosition);
        yPosition = addKeyValue(doc, 'SSN', formData.guarantor.ssn, yPosition);
        yPosition = addKeyValue(doc, 'Email', formData.guarantor.email, yPosition);
        yPosition = addKeyValue(doc, 'Phone', formData.guarantor.phone, yPosition);
        yPosition = addKeyValue(doc, 'Ownership %', `${formData.guarantor.ownershipPercent}%`, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'GUARANTOR ADDRESS', yPosition);
        yPosition = addKeyValue(doc, 'Street', formData.guarantorAddress.street, yPosition);
        yPosition = addKeyValue(doc, 'City, State ZIP', `${formData.guarantorAddress.city}, ${formData.guarantorAddress.state} ${formData.guarantorAddress.zipCode}`, yPosition);
        yPosition += 5;
        
        if (formData.vehicle.make || formData.vehicle.model) {
            yPosition = addSection(doc, 'VEHICLE INFORMATION', yPosition);
            if (formData.vehicle.make) yPosition = addKeyValue(doc, 'Make', formData.vehicle.make, yPosition);
            if (formData.vehicle.model) yPosition = addKeyValue(doc, 'Model', formData.vehicle.model, yPosition);
            if (formData.vehicle.year) yPosition = addKeyValue(doc, 'Year', formData.vehicle.year, yPosition);
            if (formData.vehicle.numberOfVehicles) yPosition = addKeyValue(doc, 'Number of Vehicles', formData.vehicle.numberOfVehicles, yPosition);
            if (formData.vehicle.desiredTerm) yPosition = addKeyValue(doc, 'Desired Term', `${formData.vehicle.desiredTerm} months`, yPosition);
        }
    }
    
    // Joint Application Format
    else if (formData.type === 'Joint Credit Application') {
        yPosition = addSection(doc, 'PRIMARY APPLICANT', yPosition);
        yPosition = addKeyValue(doc, 'Name', `${formData.primaryApplicant.personalInfo.firstName} ${formData.primaryApplicant.personalInfo.middleName || ''} ${formData.primaryApplicant.personalInfo.lastName}`.trim(), yPosition);
        yPosition = addKeyValue(doc, 'DOB', formData.primaryApplicant.personalInfo.dateOfBirth, yPosition);
        yPosition = addKeyValue(doc, 'SSN', formData.primaryApplicant.personalInfo.ssn, yPosition);
        yPosition = addKeyValue(doc, 'License', formData.primaryApplicant.personalInfo.driversLicense, yPosition);
        yPosition = addKeyValue(doc, 'Email', formData.primaryApplicant.personalInfo.email, yPosition);
        yPosition = addKeyValue(doc, 'Phone', formData.primaryApplicant.personalInfo.phone, yPosition);
        yPosition = addKeyValue(doc, 'Address', `${formData.primaryApplicant.address.street}, ${formData.primaryApplicant.address.city}, ${formData.primaryApplicant.address.state} ${formData.primaryApplicant.address.zipCode}`, yPosition);
        yPosition = addKeyValue(doc, 'Employer', formData.primaryApplicant.employment.employer, yPosition);
        yPosition = addKeyValue(doc, 'Income', `$${formData.primaryApplicant.employment.grossIncome}/mo`, yPosition);
        yPosition += 5;
        
        yPosition = addSection(doc, 'CO-APPLICANT', yPosition);
        yPosition = addKeyValue(doc, 'Name', `${formData.coApplicant.personalInfo.firstName} ${formData.coApplicant.personalInfo.middleName || ''} ${formData.coApplicant.personalInfo.lastName}`.trim(), yPosition);
        yPosition = addKeyValue(doc, 'DOB', formData.coApplicant.personalInfo.dateOfBirth, yPosition);
        yPosition = addKeyValue(doc, 'SSN', formData.coApplicant.personalInfo.ssn, yPosition);
        yPosition = addKeyValue(doc, 'License', formData.coApplicant.personalInfo.driversLicense, yPosition);
        yPosition = addKeyValue(doc, 'Email', formData.coApplicant.personalInfo.email, yPosition);
        yPosition = addKeyValue(doc, 'Phone', formData.coApplicant.personalInfo.phone, yPosition);
        yPosition = addKeyValue(doc, 'Address', `${formData.coApplicant.address.street}, ${formData.coApplicant.address.city}, ${formData.coApplicant.address.state} ${formData.coApplicant.address.zipCode}`, yPosition);
        yPosition = addKeyValue(doc, 'Employer', formData.coApplicant.employment.employer, yPosition);
        yPosition = addKeyValue(doc, 'Income', `$${formData.coApplicant.employment.grossIncome}/mo`, yPosition);
        yPosition += 5;
        
        if (formData.vehicle.make || formData.vehicle.model) {
            yPosition = addSection(doc, 'VEHICLE OF INTEREST', yPosition);
            if (formData.vehicle.make) yPosition = addKeyValue(doc, 'Make', formData.vehicle.make, yPosition);
            if (formData.vehicle.model) yPosition = addKeyValue(doc, 'Model', formData.vehicle.model, yPosition);
            if (formData.vehicle.year) yPosition = addKeyValue(doc, 'Year', formData.vehicle.year, yPosition);
            if (formData.vehicle.desiredTerm) yPosition = addKeyValue(doc, 'Term', `${formData.vehicle.desiredTerm} months`, yPosition);
        }
    }
    
    // Save PDF
    const filename = `${formData.type.replace(/ /g, '_')}_${Date.now()}.pdf`;
    doc.save(filename);
    
    return doc.output('dataurlstring');
}

// Helper functions for PDF generation
function addSection(doc, title, yPosition) {
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(title, 20, yPosition);
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    return yPosition + 7;
}

function addKeyValue(doc, key, value, yPosition) {
    const pageHeight = doc.internal.pageSize.height;
    if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
    }
    doc.setFont(undefined, 'bold');
    doc.text(`${key}:`, 20, yPosition);
    doc.setFont(undefined, 'normal');
    doc.text(String(value || 'N/A'), 80, yPosition);
    return yPosition + 7;
}

function addWrappedText(doc, text, x, y, maxWidth) {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + (lines.length * 7);
}

// ============================================
// SEND EMAIL (SIMULATED)
// ============================================
function sendEmail(formData) {
    // In a real implementation, this would send the data to a backend server
    // which would then send emails to sales@unitedautolease.com and ben@unitedautolease.com
    
    console.log('Email would be sent to:', EMAIL_RECIPIENTS);
    console.log('Application Data:', formData);
    
    // Simulate API call
    // fetch('/api/send-application', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ formData, recipients: EMAIL_RECIPIENTS })
    // });
}

// ============================================
// SHOW SUCCESS MODAL
// ============================================
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});