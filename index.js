//Code provided for this homework follow the live code.
// ---------- declarations ---------- //
const fs = require ("fs"); //filesystem module
const inquirer = require ("inquirer"); //inquirer module
const generateMarkdown = require ("./utils/generateMarkdown.js"); //generateMarkdown module included in the files for this project
const questions = [
    "Project Title: ",
    "Project Description:",
    "Project Installation Instructions:",
    "Project Usage Information:",
    "Project License Information:",
    "Project Contribution Guidelines:",
    "Project Test Instructions:",
    "Your Github Username:",
    "Your Email Address:"
];

//Writes the final markdown file to the hard drive
function writeToFile (fileName, data) {
    fs.writeFile (fileName, `${data}`, (err) => 
        err ? console.log (err) : console.log ("Your README.md file is complete.")
    )
};

//Begins the prompts for the user, sends that data to generateMarkdown.js to expand the license-badge 
//information and build the license section of the readme file, and the calls the function to write the
//readme file to disk.
function init () {
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
            },
            {
                name: "license",
                message: questions[4],
                type: "list",
                choices: [
                    "", 
                    "Apache License 2.0", 
                    "GNU General Public License v3.0", 
                    "MIT License", 
                    "BSD 2-Clause Simplified License", 
                    "BSD 3-Clause New or Revised License", 
                    "Boost Software License 1.0", 
                    "Creative Commons Zero v1.0 Universal", 
                    "Eclipse Public License v2.0", 
                    "GNU Lesser General Public License v2.0", 
                    "Mozilla Public License 2.0", 
                    "The Unilicense"
                ]
            }
        ])
        .then ((responses) => {
            const newReadMe = generateMarkdown (responses)
            const fileName = "README.md"
            writeToFile (fileName, newReadMe)
        })
}

// Function call to initialize app
init ();

//Supplied Code
// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
