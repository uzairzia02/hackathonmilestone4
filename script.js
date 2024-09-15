var _a;
// personal information section interactivity
var personalInfoSection = document.getElementById("personalInfoSection");
var togglePersonalInformation = document.getElementById("togglePersonalInformation");
var isPersonalInformationSectionVisible = true;
togglePersonalInformation.addEventListener("click", function () {
    if (isPersonalInformationSectionVisible) {
        personalInfoSection.style.display = "none";
        togglePersonalInformation.textContent = "Show Personal Information";
    }
    else {
        personalInfoSection.style.display = "block";
        togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
});
// personal Education section interactivity
var educationSection = document.getElementById("education");
var toggleEducationButton = document.getElementById("toggleEducationButton");
toggleEducationButton.addEventListener("click", function () {
    if (educationSection.style.display === "none") {
        educationSection.style.display = "block";
        toggleEducationButton.textContent = "Hide Education";
    }
    else {
        educationSection.style.display = "none";
        toggleEducationButton.textContent = "Show Education";
    }
});
// summary section interactivity
var professionalSummarySection = document.getElementById("professionalSummary");
var toggleProfessionalSummary = document.getElementById("toggleProfessionalSummary");
toggleProfessionalSummary.addEventListener("click", function () {
    if (professionalSummarySection.style.display === "none") {
        professionalSummarySection.style.display = "block";
        toggleProfessionalSummary.textContent = "Hide Professional Summary";
    }
    else {
        professionalSummarySection.style.display = "none";
        toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
});
// Experience section interactivity 
var experienceSection = document.getElementById("experience");
var toggleExperienceButton = document.getElementById("toggleExperienceButton");
toggleExperienceButton.addEventListener("click", function () {
    if (experienceSection.style.display === "none") {
        experienceSection.style.display = "block";
        toggleExperienceButton.textContent = "Hide Experience";
    }
    else {
        experienceSection.style.display = "none";
        toggleExperienceButton.textContent = "Show Experience";
    }
});
// Skils section interactivity
var skillSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggleSkillsButton");
toggleSkillsButton.addEventListener("click", function () {
    if (skillSection.style.display === "none") {
        skillSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
});
// resume Output
// listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var resumeOutputDisplay = document.getElementById('resumeOutput').style.display = 'block';
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var cityElement = document.getElementById('city');
    var professionalSummaryElement = document.getElementsByName('professionalSummary')[0];
    var educationElement = document.getElementsByName('education')[0];
    var experienceElement = document.getElementsByName('experience')[0];
    var skillsElement = document.getElementsByName('skills')[0];
    //create resume Output
    var allElements = profilePictureInput && nameElement && emailElement && phoneElement && cityElement && professionalSummaryElement && educationElement && experienceElement && skillsElement;
    if (allElements) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var city = cityElement.value;
        var professionalSummary = professionalSummaryElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n\n  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n  <p><strong>Name:</strong> <span contenteditable= \"true\"> ").concat(name_1, "</span></p>\n  <p><strong>Email:</strong> <span contenteditable= \"true\"> ").concat(email, "</span></p>\n  <p><strong>Phone:</strong> <span contenteditable= \"true\"> ").concat(phone, "</span></p>\n  <p><strong>City:</strong> <span contenteditable= \"true\"> ").concat(city, "</span></p>\n  <h3>Professional Summary</h3>\n  <p contenteditable= \"true\">").concat(professionalSummary.replace(/\n/g, '<br>'), "</p>\n  <h3>Education Details</h3>\n  <p contenteditable= \"true\">").concat(education.replace(/\n/g, '<br>'), "</p>\n  <h3>Experience</h3>\n  <p contenteditable= \"true\">").concat(experience.replace(/\n/g, '<br>'), "</p>\n  <h3>Skills</h3>\n  <p contenteditable= \"true\">").concat(skills, "</p>\n\n  ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume Output elements are missing');
        }
    }
    else {
        console.error('one or more output');
    }
});
