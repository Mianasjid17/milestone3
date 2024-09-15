var _a;
(_a = document.getElementById('ResumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experinceElement = document.getElementById('experince');
    var skillsElement = document.getElementById('skills');
    var name = '', email = '', phone = '', education = '', experince = '', skills = '';
    if (nameElement && emailElement && phoneElement && educationElement && experinceElement && skillsElement) {
        name = nameElement.value;
        email = emailElement.value;
        phone = phoneElement.value;
        education = educationElement.value;
        experince = experinceElement.value;
        skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experince, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('ResumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
