// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
            name: 'title',
            message: "What is your project's name?"        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description for your project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [ 
                'Apache',
                'Academic',
                'GNU',
                'ISC',
                'MIT',
                'Mozilla',
                'Open'
                    ],
        },
        {
            type: 'input',
            name: 'idepend',
            message: 'What command should be run to install dependencies?'
        },
        {
            type: 'input',
            name: 'deployedLink',
            message: 'Paste the link to your application here.'
        }, 
        {
            type: 'input',
            name: 'use',
            message: 'Paste your demo link here.'
        },
        {
            type: 'input',
            name:'people',
            message: 'Who contributed to the application?'
        }   
    ])
    .then((data) => {
        console.log(data);
        const generateReadMe = generateMarkdown(data);
        fs.writeFile('README.md', generateReadMe, (err) =>
            err ? console.log(err) : console.log('Successfully created READMe.md')
        );
    });
