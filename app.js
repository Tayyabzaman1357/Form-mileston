document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("infoForm");
    const skillsContainer = document.getElementById("skillsContainer");
    const addSkillButton = document.getElementById("addSkill");

    // Add new skill input
    addSkillButton.addEventListener("click", () => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");

        skillItem.innerHTML = `
            <input type="text" class="skill-input" placeholder="Enter skill" required>
            <button type="button" class="remove-skill">Remove</button>
        `;

        skillsContainer.appendChild(skillItem);

        // Remove skill input
        const removeButton = skillItem.querySelector(".remove-skill");
        removeButton.addEventListener("click", () => {
            skillItem.remove();
        });
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const schoolName = document.getElementById("schoolName").value;
        const jobTitle = document.getElementById("jobTitle").value;
        const skillInputs = document.querySelectorAll(".skill-input");
        const skills = Array.from(skillInputs).map(input => input.value).filter(value => value.trim() !== "");

        // Store form data in localStorage
        localStorage.setItem("cvData", JSON.stringify({
            firstName,
            email,
            password,
            schoolName,
            jobTitle,
            skills
        }));

        // Show success alert
        alert("Your form has been submitted successfully!");

        // Redirect to CV page
        setTimeout(() => {
            window.location.href = "cv.html";
        }, 100);  // Redirect after a short delay to ensure the alert is displayed
    });
});