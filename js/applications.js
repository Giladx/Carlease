// ============================================
// US STATES
// ============================================
const US_STATES = [
    ['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],
    ['CA','California'],['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],
    ['FL','Florida'],['GA','Georgia'],['HI','Hawaii'],['ID','Idaho'],
    ['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],
    ['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],
    ['MA','Massachusetts'],['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],
    ['MO','Missouri'],['MT','Montana'],['NE','Nebraska'],['NV','Nevada'],
    ['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],['NY','New York'],
    ['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],
    ['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],
    ['SD','South Dakota'],['TN','Tennessee'],['TX','Texas'],['UT','Utah'],
    ['VT','Vermont'],['VA','Virginia'],['WA','Washington'],['WV','West Virginia'],
    ['WI','Wisconsin'],['WY','Wyoming']
];

function populateStateSelect(selectId) {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    sel.innerHTML = '<option value="">Select State</option>';
    // Florida first
    const fl = US_STATES.find(s => s[0] === 'FL');
    const opt = document.createElement('option');
    opt.value = fl[0]; opt.textContent = fl[1];
    sel.appendChild(opt);
    US_STATES.filter(s => s[0] !== 'FL').forEach(([code, name]) => {
        const o = document.createElement('option');
        o.value = code; o.textContent = name;
        sel.appendChild(o);
    });
}

// ============================================
// APPLICATION FORM HANDLING
// ============================================

// Initialize form handlers
document.addEventListener('DOMContentLoaded', function() {
    // Populate all state dropdowns
    ['licenseState','state','businessState','guarantorState','state1','state2'].forEach(populateStateSelect);
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
async function handlePersonalApplication(e) {
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

    await processApplication(formData);
}

// ============================================
// BUSINESS APPLICATION HANDLER
// ============================================
async function handleBusinessApplication(e) {
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

    await processApplication(formData);
}

// ============================================
// JOINT APPLICATION HANDLER
// ============================================
async function handleJointApplication(e) {
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

    await processApplication(formData);
}

// ============================================
// PROCESS APPLICATION
// ============================================
async function processApplication(formData) {
    // Generate PDF
    const generatedPdf = generatePDF(formData);
    
    try {
        await sendEmail(formData, generatedPdf);
        showSuccessModal();
    } catch (error) {
        if (typeof showNotification === 'function') {
            showNotification('Submission failed. Please try again or call 305-724-5534.', 'error');
        } else {
            alert('Submission failed. Please try again or call 305-724-5534.');
        }
        console.error('Application form email error:', error);
    }
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
    const pdfBlob = doc.output('blob');
    doc.save(filename);
    
    return { filename, pdfBlob };
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
// SEND EMAIL
// ============================================
async function sendEmail(formData, generatedPdf) {
    const customerEmail = getApplicationCustomerEmail(formData);
    const customerName = getApplicationCustomerName(formData);
    const sender = getEmailSender();

    return sender({
        subject: `${formData.type}: ${customerName}`,
        formType: formData.type,
        customerEmail,
        customerName,
        customerMessage: formData.comments || '',
        fields: flattenFormData(formData),
        attachments: generatedPdf?.pdfBlob ? [{
            filename: generatedPdf.filename || 'application.pdf',
            blob: generatedPdf.pdfBlob
        }] : []
    });
}

function flattenFormData(d) {
    const f = {};
    f['Submitted At'] = d.submittedAt;

    if (d.type === 'Personal Credit Application') {
        f['First Name'] = d.personalInfo?.firstName;
        f['Middle Name'] = d.personalInfo?.middleName;
        f['Last Name'] = d.personalInfo?.lastName;
        f['Suffix'] = d.personalInfo?.suffix;
        f['Date of Birth'] = d.personalInfo?.dateOfBirth;
        f['SSN'] = d.personalInfo?.ssn;
        f["Driver's License"] = d.personalInfo?.driversLicense;
        f['License State'] = d.personalInfo?.licenseState;
        f['Email'] = d.contactInfo?.email;
        f['Phone'] = d.contactInfo?.phone;
        f['Alternate Phone'] = d.contactInfo?.alternatePhone;
        f['Street Address'] = d.address?.street;
        f['City'] = d.address?.city;
        f['State'] = d.address?.state;
        f['ZIP Code'] = d.address?.zipCode;
        f['Residence Type'] = d.address?.residenceType;
        f['Monthly Payment'] = d.address?.monthlyPayment ? '$' + d.address.monthlyPayment : '';
        f['Time at Address'] = d.address?.timeAtAddress ? d.address.timeAtAddress + ' yrs' : '';
        f['Employment Status'] = d.employment?.status;
        f['Employer'] = d.employment?.employer;
        f['Occupation'] = d.employment?.occupation;
        f['Employer Phone'] = d.employment?.employerPhone;
        f['Time Employed'] = d.employment?.timeEmployed ? d.employment.timeEmployed + ' yrs' : '';
        f['Gross Monthly Income'] = d.employment?.grossIncome ? '$' + d.employment.grossIncome : '';
        f['Employer Address'] = d.employment?.employerAddress;
        f['Vehicle Make'] = d.vehicle?.make;
        f['Vehicle Model'] = d.vehicle?.model;
        f['Vehicle Year'] = d.vehicle?.year;
        f['Desired Term'] = d.vehicle?.desiredTerm ? d.vehicle.desiredTerm + ' months' : '';
        f['Comments'] = d.comments;
    } else if (d.type === 'Business Credit Application') {
        f['Business Legal Name'] = d.businessInfo?.legalName;
        f['DBA'] = d.businessInfo?.dba;
        f['EIN'] = d.businessInfo?.ein;
        f['Business Type'] = d.businessInfo?.businessType;
        f['Year Established'] = d.businessInfo?.yearEstablished;
        f['Industry'] = d.businessInfo?.industry;
        f['Annual Revenue'] = d.businessInfo?.annualRevenue;
        f['Business Email'] = d.businessContact?.email;
        f['Business Phone'] = d.businessContact?.phone;
        f['Business Fax'] = d.businessContact?.fax;
        f['Website'] = d.businessContact?.website;
        f['Business Street'] = d.businessAddress?.street;
        f['Business City'] = d.businessAddress?.city;
        f['Business State'] = d.businessAddress?.state;
        f['Business ZIP'] = d.businessAddress?.zipCode;
        f['Guarantor Name'] = (d.guarantor?.firstName || '') + ' ' + (d.guarantor?.lastName || '');
        f['Title'] = d.guarantor?.title;
        f['Guarantor DOB'] = d.guarantor?.dateOfBirth;
        f['Guarantor SSN'] = d.guarantor?.ssn;
        f['Guarantor Email'] = d.guarantor?.email;
        f['Guarantor Phone'] = d.guarantor?.phone;
        f['Ownership %'] = d.guarantor?.ownershipPercent ? d.guarantor.ownershipPercent + '%' : '';
        f['Guarantor Street'] = d.guarantorAddress?.street;
        f['Guarantor City'] = d.guarantorAddress?.city;
        f['Guarantor State'] = d.guarantorAddress?.state;
        f['Guarantor ZIP'] = d.guarantorAddress?.zipCode;
        f['Vehicle Make'] = d.vehicle?.make;
        f['Vehicle Model'] = d.vehicle?.model;
        f['Vehicle Year'] = d.vehicle?.year;
        f['Number of Vehicles'] = d.vehicle?.numberOfVehicles;
        f['Desired Term'] = d.vehicle?.desiredTerm ? d.vehicle.desiredTerm + ' months' : '';
        f['Business Purpose'] = d.businessPurpose;
        f['Comments'] = d.comments;
    } else if (d.type === 'Joint Credit Application') {
        const p = d.primaryApplicant;
        f['Primary: Name'] = (p?.personalInfo?.firstName || '') + ' ' + (p?.personalInfo?.middleName || '') + ' ' + (p?.personalInfo?.lastName || '');
        f['Primary: DOB'] = p?.personalInfo?.dateOfBirth;
        f['Primary: SSN'] = p?.personalInfo?.ssn;
        f['Primary: License'] = p?.personalInfo?.driversLicense;
        f['Primary: Email'] = p?.personalInfo?.email;
        f['Primary: Phone'] = p?.personalInfo?.phone;
        f['Primary: Address'] = p?.address?.street;
        f['Primary: City'] = p?.address?.city;
        f['Primary: State'] = p?.address?.state;
        f['Primary: ZIP'] = p?.address?.zipCode;
        f['Primary: Residence Type'] = p?.address?.residenceType;
        f['Primary: Monthly Payment'] = p?.address?.monthlyPayment ? '$' + p.address.monthlyPayment : '';
        f['Primary: Employment Status'] = p?.employment?.status;
        f['Primary: Employer'] = p?.employment?.employer;
        f['Primary: Occupation'] = p?.employment?.occupation;
        f['Primary: Gross Income'] = p?.employment?.grossIncome ? '$' + p.employment.grossIncome + '/mo' : '';
        const c = d.coApplicant;
        f['Co-Applicant: Name'] = (c?.personalInfo?.firstName || '') + ' ' + (c?.personalInfo?.middleName || '') + ' ' + (c?.personalInfo?.lastName || '');
        f['Co-Applicant: DOB'] = c?.personalInfo?.dateOfBirth;
        f['Co-Applicant: SSN'] = c?.personalInfo?.ssn;
        f['Co-Applicant: License'] = c?.personalInfo?.driversLicense;
        f['Co-Applicant: Email'] = c?.personalInfo?.email;
        f['Co-Applicant: Phone'] = c?.personalInfo?.phone;
        f['Co-Applicant: Address'] = c?.address?.street;
        f['Co-Applicant: City'] = c?.address?.city;
        f['Co-Applicant: State'] = c?.address?.state;
        f['Co-Applicant: ZIP'] = c?.address?.zipCode;
        f['Co-Applicant: Residence Type'] = c?.address?.residenceType;
        f['Co-Applicant: Monthly Payment'] = c?.address?.monthlyPayment ? '$' + c.address.monthlyPayment : '';
        f['Co-Applicant: Employment Status'] = c?.employment?.status;
        f['Co-Applicant: Employer'] = c?.employment?.employer;
        f['Co-Applicant: Occupation'] = c?.employment?.occupation;
        f['Co-Applicant: Gross Income'] = c?.employment?.grossIncome ? '$' + c.employment.grossIncome + '/mo' : '';
        f['Vehicle Make'] = d.vehicle?.make;
        f['Vehicle Model'] = d.vehicle?.model;
        f['Vehicle Year'] = d.vehicle?.year;
        f['Desired Term'] = d.vehicle?.desiredTerm ? d.vehicle.desiredTerm + ' months' : '';
        f['Comments'] = d.comments;
    }

    // Remove empty values
    Object.keys(f).forEach(k => { if (!f[k]) delete f[k]; });
    return f;
}

function getEmailSender() {
    if (typeof window.sendFormEmails === 'function') {
        return window.sendFormEmails;
    }
    return sendEmailDirectly;
}

async function sendEmailDirectly({
    subject,
    formType,
    customerEmail,
    customerName,
    customerMessage,
    fields,
    attachments = []
}) {
    // Convert any Blob attachments to base64 for JSON transport
    const processedAttachments = await Promise.all(
        attachments
            .filter(a => a && a.blob)
            .map(async (a) => ({
                filename: a.filename || 'attachment.pdf',
                content: await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result.split(',')[1]);
                    reader.onerror = reject;
                    reader.readAsDataURL(a.blob);
                })
            }))
    );

    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            subject,
            formType,
            customerEmail,
            customerName,
            customerMessage,
            fields,
            attachments: processedAttachments
        })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
        throw new Error(result.error || 'Email sending failed');
    }
    return result;
}

function getApplicationCustomerEmail(formData) {
    if (formData.type === 'Personal Credit Application') {
        return formData.contactInfo?.email || '';
    }
    if (formData.type === 'Business Credit Application') {
        return formData.businessContact?.email || formData.guarantor?.email || '';
    }
    if (formData.type === 'Joint Credit Application') {
        return formData.primaryApplicant?.personalInfo?.email || formData.coApplicant?.personalInfo?.email || '';
    }
    return '';
}

function getApplicationCustomerName(formData) {
    if (formData.type === 'Personal Credit Application') {
        return `${formData.personalInfo?.firstName || ''} ${formData.personalInfo?.lastName || ''}`.trim() || 'Applicant';
    }
    if (formData.type === 'Business Credit Application') {
        return formData.businessInfo?.legalName || `${formData.guarantor?.firstName || ''} ${formData.guarantor?.lastName || ''}`.trim() || 'Applicant';
    }
    if (formData.type === 'Joint Credit Application') {
        const primary = `${formData.primaryApplicant?.personalInfo?.firstName || ''} ${formData.primaryApplicant?.personalInfo?.lastName || ''}`.trim();
        const co = `${formData.coApplicant?.personalInfo?.firstName || ''} ${formData.coApplicant?.personalInfo?.lastName || ''}`.trim();
        return [primary, co].filter(Boolean).join(' & ') || 'Applicants';
    }
    return 'Applicant';
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
