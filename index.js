// TODO: Include packages needed for this application
// ---------- declarations ---------- //
const fs = require ("fs");
const inquirer = require ("inquirer");

// TODO: Create an array of questions for user input
 const questions = [
    "Project Title: ",
    "Project Description:",
    "Project Installation Instructions:",
    "Project Usage Information:",
    "Project License Information:", //must have a list of options
    "Project Contribution Guidelines:",
    "Project Test Instructions:",
    "Your Github Username:", //must include link
    "Your Email Address:"
];
 
//below is the boilerplate text for the README.md file with variables for incoming string data
//I believe badges go at the top of the file, not in a separate section, but I've left it there for now
//add links to the sections
const newReadMe = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
`# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
You can see my github repositories at ${github}.
Drop me a line at ${email}.

## Badges`;

inquirer
    .prompt ([
        {
            name: "title", 
            message: questions[0],
            type: "input"
        },
        {
            name: "description",
            message: questions[1],
            type: "input"
        },
        {
            name: "installation",
            message: questions[2],
            type: "input"
        },
        {
            name: "usage",
            message: questions[3],
            type: "input"
        },
        {
            name: "license",
            message: questions[4],
            type: "list",
            choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License v2.0", "GNU Lesser General Public License v2.0", "Mozilla Public License 2.0", "The Unilicense"]
        },
        {
            name: "contributing",
            message: questions[5],
            type: "input"
        },
        {
            name: "tests",
            message: questions[6],
            type: "input"
        },
        {
            name: "github",
            message: questions[7],
            type: "input"
        },
        {
            name: "email",
            message: questions[8],
            type: "input"
        }
    ])
    .then ((responses) => {
        const myData = newReadMe(responses)
        fs.writeFile("README.md", `${myData}`, (err) =>
            err ? console.log(err) : console.log("Your README.md file is complete.") 
        )
    })
    


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
 }

// TODO: Create a function to initialize app
function init () {
    }

// Function call to initialize app
init ();
