// The licenses array is used to lookup the index of the license
// chosen by the user
const licenses = ["Apache 2.0 License", "BSD 2-Clause License", "BSD 3-Clause License",
  "GNU GPL v2", "GNU GPL v3", "The MIT License", "Mozilla Public License 2.0"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//
// function renderLicenseBadge(pageIndex)
// Description: Takes the users answer to "Please select your 
// license:" and returns a link to the badge for the license
// Arguments:
//  pageIndex - The license chosen by the user. Used as the index 
//    to badges[]
// Return: badges[pageIndex] - The URL for the selected badge.
// 12/05/2024 SGray - Done
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
//
// function renderLicenseLink(pageIndex)
// Description: Takes the users answer to "Please select your 
// license:" and returns a link to the text for the license
// Arguments:
//  pageIndex - The license chosen by the user. Used as the index 
//    to licenselinks[]
// Return: licenselinks[pageIndex] - The URL for the selected badges
//    license text.
// 12/05/2024 SGray - Done
//
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

// TODO: Create a function to generate markdown for README
//
// function generateMarkdown(data)
// Description: Takes the passed in answers collected by init() and
//  generates the markdown text to be written to the README file. Uses 
//  templating to generate the markdown.
// Arguments:
//  data - The structure containing the user answers collected by inquirer
//    in init()
// Return: licenselinks[pageIndex] - The URL for the selected badges
//    license text.
// 12/05/2024 SGray - Done
//
function generateMarkdown(data) {
  console.log("Tests " + data.tests);
  //All arrays will have the same index position. Save it so we only have 
  //to look it up once.
  var arraysIndex;
  if (data.license == undefined) {
    arraysIndex = undefined;
  } else {
    arraysIndex = licenses.indexOf(data.license);
  }
  const licenseBadge = renderLicenseBadge(arraysIndex);
  const licenseLink = renderLicenseLink(arraysIndex);
  
  //Return the templated text
  return `
  # ${data.title}

  [![${data.license}](${licenseBadge})](${licenseLink})

  ## Description

  ${data.description} 
    
    
  ## Table of Contents 
       
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
      
  ## Installation
      
  ${data.installation} 
  
  ## Usage
      
  ${data.usage}
      
      
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}
      
    
  ## License

  [${data.license}](${licenseLink})

 
  ## Questions

  [GitHub ${data.username}](https://github.com/${data.username})

  [${data.email}](mailto:${data.email})



    
    
  `
}

module.exports = generateMarkdown;
