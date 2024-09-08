document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collecting input values
    const name = document.getElementById('name')?.value?.trim();
    const email = document.getElementById('email')?.value?.trim();
    const phone = document.getElementById('phone')?.value?.trim();
    const education = document.getElementById('education')?.value?.trim();
    const experience = document.getElementById('experience')?.value?.trim();
    const skills = document.getElementById('skills')?.value?.trim();

    // Check if the required fields are filled
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("All fields are required.");
        return;
    }

    const resumeOutputElement = document.getElementById('resumeOutput');

    if (resumeOutputElement) {
        // Clear previous content
        resumeOutputElement.innerHTML = '';

        // Create and append resume elements
        const resumeTitle = document.createElement('h2');
        resumeTitle.textContent = 'Resume';

        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<strong>Name:</strong> <span class="editable">${name}</span>`;

        const emailElement = document.createElement('p');
        emailElement.innerHTML = `<strong>Email:</strong> <span class="editable">${email}</span>`;

        const phoneElement = document.createElement('p');
        phoneElement.innerHTML = `<strong>Phone:</strong> <span class="editable">${phone}</span>`;

        const educationTitle = document.createElement('h3');
        educationTitle.textContent = 'Education';

        const educationElement = document.createElement('p');
        educationElement.innerHTML = `<span class="editable">${education}</span>`;

        const experienceTitle = document.createElement('h3');
        experienceTitle.textContent = 'Experience';

        const experienceElement = document.createElement('p');
        experienceElement.innerHTML = `<span class="editable">${experience}</span>`;

        const skillsTitle = document.createElement('h3');
        skillsTitle.textContent = 'Skills';

        const skillsElement = document.createElement('p');
        skillsElement.innerHTML = `<span class="editable">${skills}</span>`;

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
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(element => {
            element.addEventListener('click', function () {
                const originalContent = this.textContent;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = originalContent;
                this.textContent = '';  // Clear the content to place the input field
                this.appendChild(input);
                input.focus();

                // Update content when the input loses focus
                input.addEventListener('blur', () => {
                    this.textContent = input.value.trim() || originalContent;  // Revert to original content if empty
                });

                // Allow updating content on pressing 'Enter'
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.textContent = input.value.trim() || originalContent;  // Update or revert on Enter
                        input.blur();  // Trigger blur event after pressing Enter
                    }
                });
            });
        });
    } else {
        console.error('The resume output element is missing');
    }
});
