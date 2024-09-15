
// personal information section interactivity
const personalInfoSection = document.getElementById(
    "personalInfoSection"
  ) as HTMLElement;
  const togglePersonalInformation = document.getElementById(
    "togglePersonalInformation"
  ) as HTMLElement;
  
  let isPersonalInformationSectionVisible = true;
  
  togglePersonalInformation.addEventListener("click", () => {
    if (isPersonalInformationSectionVisible) {
      personalInfoSection.style.display = "none";
      togglePersonalInformation.textContent = "Show Personal Information";
    } else {
      personalInfoSection.style.display = "block";
      togglePersonalInformation.textContent = "Hide Personal Information";
    }
    isPersonalInformationSectionVisible = !isPersonalInformationSectionVisible;
  });
  


// personal Education section interactivity

  const educationSection = document.getElementById(
    "education"
  ) as HTMLTextAreaElement;
  const toggleEducationButton = document.getElementById(
    "toggleEducationButton"
  ) as HTMLButtonElement;
  
  toggleEducationButton.addEventListener("click", () => {
    if (educationSection.style.display === "none") {
      educationSection.style.display = "block";
      toggleEducationButton.textContent = "Hide Education";
    } else {
      educationSection.style.display = "none";
      toggleEducationButton.textContent = "Show Education";
    }
  });




// summary section interactivity

  const professionalSummarySection = document.getElementById(
    "professionalSummary"
  ) as HTMLTextAreaElement;
  const toggleProfessionalSummary = document.getElementById(
    "toggleProfessionalSummary"
  ) as HTMLButtonElement;
  
  toggleProfessionalSummary.addEventListener("click", () => {
    if (professionalSummarySection.style.display === "none") {
      professionalSummarySection.style.display = "block";
      toggleProfessionalSummary.textContent = "Hide Professional Summary";
    } else {
      professionalSummarySection.style.display = "none";
      toggleProfessionalSummary.textContent = "Show Professional Summary";
    }
  });





 // Experience section interactivity 
const experienceSection = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const toggleExperienceButton = document.getElementById(
    "toggleExperienceButton"
  ) as HTMLButtonElement;
  
  toggleExperienceButton.addEventListener("click", () => {
    if (experienceSection.style.display === "none") {
      experienceSection.style.display = "block";
      toggleExperienceButton.textContent = "Hide Experience";
    } else {
      experienceSection.style.display = "none";
      toggleExperienceButton.textContent = "Show Experience";
    }
  });
  
  

 // Skils section interactivity

const skillSection = document.getElementById("skills") as HTMLTextAreaElement;
const toggleSkillsButton = document.getElementById(
  "toggleSkillsButton"
) as HTMLButtonElement;

toggleSkillsButton.addEventListener("click", () => {
  if (skillSection.style.display === "none") {
    skillSection.style.display = "block";
    toggleSkillsButton.textContent = "Hide Skills";
  } else {
    skillSection.style.display = "none";
    toggleSkillsButton.textContent = "Show Skills";
  }
});


// resume Output

// listing elements

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const resumeOutputDisplay = document.getElementById('resumeOutput')!.style.display = 'block'
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
  const nameElement = document.getElementById('name') as HTMLInputElement
  const emailElement = document.getElementById('email') as HTMLInputElement
  const phoneElement = document.getElementById('phone') as HTMLInputElement
  const cityElement = document.getElementById('city') as HTMLInputElement
  const professionalSummaryElement = document.getElementsByName('professionalSummary')[0] as HTMLTextAreaElement
  const educationElement = document.getElementsByName('education')[0] as HTMLTextAreaElement
  const experienceElement = document.getElementsByName('experience')[0] as HTMLTextAreaElement
  const skillsElement = document.getElementsByName('skills')[0] as HTMLTextAreaElement


  //create resume Output

  let allElements = profilePictureInput && nameElement && emailElement && phoneElement && cityElement && professionalSummaryElement && educationElement && experienceElement && skillsElement
  if(allElements) {

    const name = nameElement.value
    const email = emailElement.value
    const phone = phoneElement.value
    const city = cityElement.value
    const professionalSummary = professionalSummaryElement.value
    const education = educationElement.value
    const experience = experienceElement.value
    const skills = skillsElement.value
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
  


  const resumeOutput = `

  <h2><u><i><center>Congratulations! Your Resume has been Generated</u></i></h2>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}

  <p><strong>Name:</strong> <span contenteditable= "true"> ${name}</span></p>
  <p><strong>Email:</strong> <span contenteditable= "true"> ${email}</span></p>
  <p><strong>Phone:</strong> <span contenteditable= "true"> ${phone}</span></p>
  <p><strong>City:</strong> <span contenteditable= "true"> ${city}</span></p>
  <h3>Professional Summary</h3>
  <p contenteditable= "true">${professionalSummary.replace(/\n/g,'<br>')}</p>
  <h3>Education Details</h3>
  <p contenteditable= "true">${education.replace(/\n/g, '<br>')}</p>
  <h3>Experience</h3>
  <p contenteditable= "true">${experience.replace(/\n/g, '<br>')}</p>
  <h3>Skills</h3>
  <p contenteditable= "true">${skills}</p>

  `

  const resumeOutputElement = document.getElementById('resumeOutput')
  if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
  } else {
    console.error ('Resume Output elements are missing')
  } 

  } else {
    console.error ('one or more output')
  }
  
})

