const fs = require('fs');
const inquirer = require('inquirer');


const userQuestion = () =>
    inquirer.prompt([
    {
        type: 'input',
        name: 'names',
        message: 'Your name(s)?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: "description",
        message: "Describe your project.",
    },
    {
        type: 'input',
        name: "installation",
        message: "Installation instructions?",
    },
    {
        type: 'input',
        name: "tests",
        message: "Testing instruction",
    },
    {
        type: 'input',
        name: "usage",
        message: "Usage information?",
    },
    {
        type: 'input',
        name: "cont",
        message: "Contribution guidelines?",
    },
    {
        type: 'checkbox',
        name: "license",
        message: "License type?",
        choices: ['Public  domain', 'Permissive', 'LGPL', 'Copyleft', 'Proprietary', 'other']
    },
    {
        type: 'input',
        name: "github",
        message: "GitHub username?",
    },
    {
        type: 'input',
        name: "email",
        message: "Email?",
    },
    ])

userQuestion()
.then((answers) => {


    const file = `${answers.title.toLowerCase().split(' ').join("")}.md`

    const content = `
# ${answers.title.toUpperCase()}
    
## Contributers: 
    ${answers.names}    

## Description:
    ${answers.description}

## Table of Contents:
    -[Contributers](#contributers)
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contribution](#contribution)
    -[License](#license)
    -[Tests](#tests)
    -[Contact me!](#questions)

## Installation:
    ${answers.installation}

## Usage: 
    ${answers.usage}

## Contribution: 
    ${answers.cont}

## License: 
    ${answers.license}

## Tests: 
    ${answers.tests}

## Questions: 
* Any questions can be directed to 
    ${answers.email}
    (https://github.com/${answers.github})
`

    fs.writeFile(file, content, (err) =>
    err? console.error(err) : console.log('Success!'));
});

