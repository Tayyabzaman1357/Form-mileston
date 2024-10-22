document.addEventListener("DOMContentLoaded", () => {
    const cvContent = document.getElementById("cvContent");

    // Retrieve the form data from localStorage
    const cvData = JSON.parse(localStorage.getItem("cvData"));

    if (cvData) {
        cvContent.innerHTML = `
            <h2>Personal Information</h2>
            <div><strong>First Name:</strong> ${cvData.firstName}</div>
            <div><strong>Email:</strong> ${cvData.email}</div>
            <div><strong>Password:</strong> ${cvData.password}</div>
            <div><strong>School Name:</strong> ${cvData.schoolName}</div>
            <div><strong>Job Title:</strong> ${cvData.jobTitle}</div>
            <div><strong>Skills:</strong></div>
            <ul>${cvData.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
        `;
    } else {
        cvContent.innerHTML = "<p>No CV data found.</p>";
    }
});