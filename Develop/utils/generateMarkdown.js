//function that returns license badge and if there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"; break;
    case 'NCSA': return "[![License: NCSA](https://img.shields.io/badge/License-NCSA-lightgrey.svg)](https://opensource.org/licenses/NCSA)"; break;
    case 'ZLIB': return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"; break;
    case 'ISC': return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"; break;
    case 'GPL': return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"; break;
    case 'LGPL': return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"; break;
    default: return '';
  }
}

//function that returns license link and if there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return `[${license}](https://opensource.org/licenses/MIT)`; break;
    case 'NCSA': return `[${license}](https://opensource.org/licenses/NCSA)`; break;
    case 'ZLIB': return `[${license}](https://opensource.org/licenses/ZLIB)`; break;
    case 'ISC': return `[${license}](https://opensource.org/licenses/ISC)`; break;
    case 'GPL': return `[${license}](https://opensource.org/licenses/GPL)`; break;
    case 'LGPL': return `[${license}](https://opensource.org/licenses/LGPL)`; break;
    default: return '';
  }
}

//function that returns license section and if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== 'No License Rquired') {
    return `Read more about ${license} here:`
  } else {
    return '';
  }
}

// function to generate markdown data for README
function generateMarkdown(data) {
  return `# ${data.title}
## Badges
${renderLicenseBadge(data.license)}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [How to Contribute](#how-to-contribute)
* [How to Run Application](#how-to-run-application)
* [How to Test Application](#how-to-test-application)
* [Reach me here?](#reach-me-here)
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Features
${data.features}

## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/) 
${data.howtocontribute}

## How to Run Application
${data.run}

## How to Test Application
${data.tests}

### Reach me here: 
[${data.username}](https://github.com/${data.username}) 
${data.email}
`;
}

//exporting generateMarkdown function so that it can be imported and used in index file
module.exports = generateMarkdown;