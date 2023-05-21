// including packages required for this application

//inquirer package used for questions prompting
const inquirer = require('inquirer');
//fs package to create new file with data
const fs = require('fs');
//importing generateMarkdown from util file where its exported used to generate data inside md file
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

//Array of questions that needs to be prompted for readme file creation.
const questions = [
    {
        type: "list",
        name: "license",
        message: "what license should be used for this new readme file? ",
        choices: ["MIT", "NCSA", "ZLIB", "ISC", "GPL", "LGPL", "No License Rquired"]
    },
    {
        type: "input",
        name: 'title',
        message: 'What is the title of this application? ',
        validate: validateTitle => {
            if (validateTitle) {
                return true;
            } else {
                console.log('Please provide a title for the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: 'description',
        message: 'Give description of this project. ',
        validate: validateDesc => {
            if (validateDesc) {
                return true;
            } else {
                console.log('Please provide a Description for the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: 'installation',
        message: 'How should we install this project. ',
    },
    {
        type: "input",
        name: 'usage',
        message: 'How to use this application?. ',
    },
    {
        type: "input",
        name: 'features',
        message: 'Provide the features of this application. ',
    },
    {
        type: "input",
        name: 'howtocontribute',
        message: 'How to contribute for this application?. ',
    },
    {
        type: "input",
        name: 'run',
        message: 'How to run this application?. ',
    },
    {
        type: "input",
        name: 'tests',
        message: 'How to test this application?. ',
    },
    {
        type: "input",
        name: 'username',
        message: 'What is your Github username?. ',
        validate: validateUsername => {
            if (validateUsername) {
                return true;
            } else {
                console.log('Please provide your username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your e-mail?. ',
        validate: validateEmail => {
            if (validateEmail) {
                return true;
            } else {
                console.log('Please provide your email!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: 'filename',
        message: 'What is the filename of new readme file to be created?. ',
        validate: validateTitle => {
            if (validateTitle) {
                return true;
            } else {
                console.log('Please provide a file name!');
                return false;
            }
        }
    },
];

// based on the file name and data, creating the new md file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data,
        (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated and is found in root folder of this project.`))
}

//function getting called on init which is prompting questions to user 
function init() {
    inquirer.prompt(questions).then(userProvidedInputs => {
        //and calling write to file function with filename and data generated from generateMarkDown js in util
        writeToFile(userProvidedInputs.filename, generateMarkdown(userProvidedInputs));
    })
}

// Function call to initialize app
init();