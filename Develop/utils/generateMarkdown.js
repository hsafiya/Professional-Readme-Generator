// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }
  else if( license === 'Apache License 2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  `
  } else if ( license === 'GNU AGPLv3'){
    return`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  `
  } else if (license === 'The Unlicense') {
  return`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  ` 
  }     
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
  
## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
  
## Installation
${data.installation}
## Usage 
${data.usage}
## Credits
${data.contributors}
## License
${data.license}

## Screenshot
![alt text](${data.screenshot})

## Contact us

GitHub: https://github.com/${data.github}

email:${data.email}  
`;
}

module.exports = generateMarkdown;
