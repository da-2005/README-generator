// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
//     "What is your GitHub username?",
//     "What is your email address?",
//     "What is your project's name?",
//     "Please write a short description fo your project?",
//     "What kind of license should your project have?",
//     "What command should be run to install dependencies?",
//     "What command should be run to run tests?",
//     "What does the user need to know about using the repo?",
//     "What does the user need to know about contributing to the repo?"
// ];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'project',
            message: "What is your project's name"        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description fo your project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [ 'Apache License 2.0', 
                       'GNU General Public License', 
                       'MIT License', 
                       'BSD 2-Clause Simplified License',
                       'BSD 3-Clause New License',
                       'Boost Software License 1.0',
                       'Creative Commons Zero v1.0 Universal',
                       'Eclipse Public License 2.0',
                       'GNU Affero General Public License 3.0',
                       'GNU General Public License v2.0',
                       'GNU Lesser General Public License v2.1',
                       'Mozilla Public License 2.0',
                       'The Unlicense'
                    ],
        },
        {
            type: 'input',
            name: 'idepend',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'runtests',
            message: 'What command should be run to run tests?'
        }, 
        {
            type: 'input',
            name: 'use',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name:'contribution',
            message: 'What does the user need to know about contributing to the repo?'
        }   
    ])
    .then((data) => {
        console.log(data);
    })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();