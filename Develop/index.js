// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your username?',
    name: 'github',
    validate: githubInput => {
        if (githubInput){
            return true;
        } else {
            console.log ('What is your username?')
            return false;
        }
    }
},
    {
        type: 'input',
        message: 'What id your email address?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else{
                console.log('Please peovide your email');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'Provide your title',
        name: 'title',
        validate: titleInput =>{
            if (titleInput){
                return true;
            } else{
                console.log('provide your title name');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'Put any description',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else{
                console.log('Provide descrition please');
                return false;
            }
        }
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
