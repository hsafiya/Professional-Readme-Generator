// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
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
    {
    type: 'input',
    message: 'Add information about app installation',
    name: 'installation'
    },

        {
            type: 'list',
            message: 'Choose the license from the list',
            name: 'license',
            choices: ['The Unlicense', 'GNU AGPLv3', 'Apache License 2.0', 'None']

            },

            {
                type: 'input',
                message: 'Please explain how to use the app',
                name: 'usage',
            },
            
            {
                type:'input',
                message: 'Please add contributors',
                name: 'contributors'
            },

            {
                type: 'input',
                message: 'Add link to the screenshot',
                name:'screenshot'
            },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err =>{
        if (err){
            console.log(err)
            return;
        }
        console.log("File Created")
    }
        
        )
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions)
.then(readmeData =>{
    return generateMarkdown(readmeData);
})
.then(readme =>{
 return writeToFile("Readme.md",readme);
})

}


// Function call to initialize app
init();
