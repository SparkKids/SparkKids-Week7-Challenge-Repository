const inquirer = require('inquirer');
const fs = require('fs');
const readMeFile = "README.md";
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// 11/30/2024 SGray - Done

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
// 12/04/2024 SGray - Done
async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
        });
    } catch (err) {
        console.error(err);
    }
}
// TODO: Create a function to initialize app
//
// function init()
// Description: Prompts the user for all the fields in README.md
//  Then calls the functions to generate the markdown text. Finally,
//  calls a function to write the markdown text to the README file.
// Arguments:
//  none
// Return: none
// 12/04/2024 SGray - Done
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
        //Generate the text for README.md
        var markdown = generateMarkdown(answers);
        //Write the markdown text to a new README.md
        await writeToFile(readMeFile, markdown);
        console.log('README.md has been generated!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}//init()

//Invoke the Inquirer prompts to gather user input and 
//generate README.md
init();
