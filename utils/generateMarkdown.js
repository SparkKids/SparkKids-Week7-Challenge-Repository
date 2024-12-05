//Array of licenses user chooses from.
const licenses = ["Apache 2.0 License", "BSD 2-Clause License", "BSD 3-Clause License",
  "GNU GPL v2", "GNU GPL v3", "The MIT License", "Mozilla Public License 2.0"];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//10/19/2024 SGray - Done
function renderLicenseBadge(pageIndex) {
  const badges = ["https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
    "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    "https://img.shields.io/badge/License-GPL_v2-blue.svg",
    "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "https://img.shields.io/badge/License-MIT-yellow.svg",
    "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"];
  if (pageIndex == undefined) {
    //User did not select a license, return a blank string
    return "";
  } else {
    return badges[pageIndex];
  }
}//function renderLicenseBadge(pageIndex)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//10/19/2024 SGray - Done
function renderLicenseLink(pageIndex) {
  const licenselinks = ["https://opensource.org/licenses/Apache-2.0",
    "https://opensource.org/licenses/BSD-2-Clause",
    "https://opensource.org/licenses/BSD-3-Clause",
    "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    "https://www.gnu.org/licenses/gpl-3.0",
    "https://opensource.org/licenses/MIT",
    "https://opensource.org/licenses/MPL-2.0"];
  if (pageIndex == undefined) {
    //User did not select a license, return a blank string
    return "";
  } else {
    return licenselinks[pageIndex];
  }
}//function renderLicenseLink(license)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  //All arrays will have the same index position. Save it so we only have 
  //to look it up once.
  var arraysIndex;
  if (answers.license == undefined) {
    arraysIndex = undefined;
  } else {
    arraysIndex = licenses.indexOf(answers.license);
  }
  const licenseBadge = renderLicenseBadge(arraysIndex);
  const licenseLink = renderLicenseLink(arraysIndex);
  return `
 

  # ${answers.title}

  ## License Badge
 [![${answers.license}](${licenseBadge})](${licenseLink})

 ## Description

  ${answers.description} 
    
    
  ## Table of Contents 
       
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
      
  ## Installation
      
  ${answers.installation} 
  
  ## Usage
      
  ${answers.usage}
      
      
  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}
      
    
  ## License

  [${answers.license}](${licenseLink})

 
  ## Questions
  My GitHub Username: ${answers.username || 'Username not provided'}
  
  [My GitHub Profile](https://github.com/${answers.username || 'Username not provided'})

  Feel free to contact me at [${answers.email}](mailto:${answers.email}) if you have any questions about the project.
  `;
}
module.exports = generateMarkdown;

