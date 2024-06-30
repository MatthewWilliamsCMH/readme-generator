//Code provided for this homework follow the live code.

//Using the license value from index.js, retrieve a badge image from the internet.
//This and the function that follows it can be combined by returning one string with
//both the badge image and the url
function renderLicenseBadge (licenseEl) {
  switch (licenseEl) {
    case "":
      return "";
    case "Apache License 2.0": 
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    case "GNU General Public License v3.0": 
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case "MIT License": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case "BSD 2-Clause Simplified License": 
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
    case "BSD 3-Clause New or Revised License": 
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    case "Boost Software License 1.0": 
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
    case "Creative Commons Zero v1.0 Universal": 
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
    case "Eclipse Public License v2.0": 
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
    case "GNU Lesser General Public License v3.0": 
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
    case "Mozilla Public License 2.0": 
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    case "The Unilicense": 
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
    default:
      return "";
  }
};

//using the license value from index.js, retrieve a badge image
function renderLicenseLink (licenseEl) {
  switch (licenseEl) {
    case "":
      return "";
    case "Apache License 2.0": 
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0": 
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License": 
      return "(https://opensource.org/licenses/MIT)";
    case "BSD 2-Clause Simplified License": 
      return "(https://opensource.org/licenses/BSD-2-Clause)";
    case "BSD 3-Clause New or Revised License": 
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Boost Software License 1.0": 
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal": 
      return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License v2.0": 
      return "(https://opensource.org/licenses/EPL-1.0)";
    case "GNU Lesser General Public License v3.0": 
      return "(https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0": 
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "The Unilicense": 
      return "(http://unlicense.org/)";
    default:
      return "";
  }
};

//Combine the badge-image link and the url into a single string.
//This would be unnecessary if the two functions above were condensed.
function renderLicenseSection (badgeStr, linkStr, data) {
  if (badgeStr !== "" && linkStr !== "") {
    licenseStr = `## License\n${badgeStr}${linkStr}\n${data}\n`;
    return licenseStr;
  } else {
    licenseStr = "";
  }
};

//Calls the functions above to gather data for the license badge.
function generateMarkdown (data) {
  const licenseEl = data.license;
  const newBadge = renderLicenseBadge (licenseEl);
  const newLink = renderLicenseLink (licenseEl);
  const newLicense = renderLicenseSection (newBadge, newLink, licenseEl);

//The string-literal text below has to be flush left so that it will be flush left in the readme.
//Two spaces follow the github line to force a linebreak.
return `# ${data.title}

${licenseStr !== "" ? newLicense : ""}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
You can see my github repositories at [${data.github}](https://github.com/${data.github}/).  
Drop me a line at [${data.email}](mailto:${data.email}).`;
};

//Exports the complete markdown file to index.js so it can be written to the disk.
module.exports = generateMarkdown;

//Supplied Code
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
