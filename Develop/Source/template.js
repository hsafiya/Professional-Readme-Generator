module.exports = initialreadme => {
    const {github,email,title,description,installation,license,usage,contributors,screenshot} =initialreadme;
    return `
# ${title}

## Description
${description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${installation}
## Usage 
${usage}
## Credits
${contributors}
## License
${license}
## Badges
## Screenshot
![alt text](${screenshot})
`
}