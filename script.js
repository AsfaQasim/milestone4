var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    event.preventDefault();
    // Collecting input values
    var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.trim();
    var email = (_d = (_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.trim();
    var phone = (_f = (_e = document.getElementById('phone')) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.trim();
    var education = (_h = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.trim();
    var experience = (_k = (_j = document.getElementById('experience')) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.trim();
    var skills = (_m = (_l = document.getElementById('skills')) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.trim();
    // Check if the required fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("All fields are required.");
        return;
    }
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        // Clear previous content
        resumeOutputElement.innerHTML = '';
        // Create and append resume elements
        var resumeTitle = document.createElement('h2');
        resumeTitle.textContent = 'Resume';
        var nameElement = document.createElement('p');
        nameElement.innerHTML = "<strong>Name:</strong> <span class=\"editable\">".concat(name, "</span>");
        var emailElement = document.createElement('p');
        emailElement.innerHTML = "<strong>Email:</strong> <span class=\"editable\">".concat(email, "</span>");
        var phoneElement = document.createElement('p');
        phoneElement.innerHTML = "<strong>Phone:</strong> <span class=\"editable\">".concat(phone, "</span>");
        var educationTitle = document.createElement('h3');
        educationTitle.textContent = 'Education';
        var educationElement = document.createElement('p');
        educationElement.innerHTML = "<span class=\"editable\">".concat(education, "</span>");
        var experienceTitle = document.createElement('h3');
        experienceTitle.textContent = 'Experience';
        var experienceElement = document.createElement('p');
        experienceElement.innerHTML = "<span class=\"editable\">".concat(experience, "</span>");
        var skillsTitle = document.createElement('h3');
        skillsTitle.textContent = 'Skills';
        var skillsElement = document.createElement('p');
        skillsElement.innerHTML = "<span class=\"editable\">".concat(skills, "</span>");
        resumeOutputElement.appendChild(resumeTitle);
        resumeOutputElement.appendChild(nameElement);
        resumeOutputElement.appendChild(emailElement);
        resumeOutputElement.appendChild(phoneElement);
        resumeOutputElement.appendChild(educationTitle);
        resumeOutputElement.appendChild(educationElement);
        resumeOutputElement.appendChild(experienceTitle);
        resumeOutputElement.appendChild(experienceElement);
        resumeOutputElement.appendChild(skillsTitle);
        resumeOutputElement.appendChild(skillsElement);
        // Enable inline editing on click for all sections
        var editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(function (element) {
            element.addEventListener('click', function () {
                var _this = this;
                var originalContent = this.textContent;
                var input = document.createElement('input');
                input.type = 'text';
                input.value = originalContent;
                this.textContent = ''; // Clear the content to place the input field
                this.appendChild(input);
                input.focus();
                // Update content when the input loses focus
                input.addEventListener('blur', function () {
                    _this.textContent = input.value.trim() || originalContent; // Revert to original content if empty
                });
                // Allow updating content on pressing 'Enter'
                input.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        _this.textContent = input.value.trim() || originalContent; // Update or revert on Enter
                        input.blur(); // Trigger blur event after pressing Enter
                    }
                });
            });
        });
    }
    else {
        console.error('The resume output element is missing');
    }
});
