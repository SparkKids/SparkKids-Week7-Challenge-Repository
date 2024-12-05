const inquirer = require('inquirer');
const fs = require('fs');
const readMeFile = "README.md";
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions = ["Please enter your project title:",
    "Please enter a description for your project:",
    "Please enter the installation instructions for your application:",
    "Please enter the command to run your code:",
    "Please enter the guidelines for contributing to the project:",
    "Please enter testing instructions:",
    "Please select your license:",
    "Please enter your GitHub user name:",
    "Please enter your email address:"];

const licenses = ["Apache 2.0 License", "BSD 2-Clause License", "BSD 3-Clause License",
    "GNU GPL v2", "GNU GPL v3", "The MIT License", "Mozilla Public License 2.0"];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
        });
        console.log('Success!');
    } catch (err) {
        console.error(err);
    }
}
// TODO: Create a function to initialize app

async function init() {
    try {
        const answers = await inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: questions[0],
                validate: (value) => {
                    if (value.trim().length === 0) {
                        return 'Please enter a project title.';
                    }
                    return true;
                }
            },
             {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'tests',
            },
            {
                type: 'rawlist',
                name: 'license',
                message: questions[6],
                choices: [licenses[0], licenses[1], licenses[2], licenses[3], licenses[4],
                licenses[5], licenses[6]],
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            }, 
        ]);
        console.log("answers.license = " + answers.license);

        const readmeContent = `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description || 'No description provided.'}

## Installation
${answers.installation || 'No installation instructions provided.'}

## Usage
${answers.usage || 'No usage information provided.'}

## License
${answers.license || 'No license information provided.'}

## Contributing
${answers.contributing || 'No contribution guidelines provided.'}

## Tests
${answers.tests || 'No tests provided.'}

## Questions
My GitHub Username: ${answers.github || 'Username not provided'}
My GitHub Profile: https://github.com/${answers.github || 'Username not provided'}
Feel free to contact me at ${answers.email || 'no@email.com'} if you have any questions about the project. You can find the GitHub repository at ${answers.github || 'https://github.com/'}.`;
console.log("readmeContent = " + readmeContent);
        var markdown = generateMarkdown(answers);
        console.log("markdown = " + markdown);
        console.log("writeToFile");
        await writeToFile(readMeFile, markdown);
        console.log('README.md has been generated!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

init();
