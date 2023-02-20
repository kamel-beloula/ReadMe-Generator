const inquirer = require('inquirer');
const fs = require('fs');
const questions = require("./utils/questions");

// licenses names and urls
const licenses = [
  {
    name: "MIT License",
    url: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Apache License 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0.txt",
  },
  {
    name: "GNU General Public License v3.0",
    url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
  },
   
  {
    name: "Mozilla Public License 2.0",
    url: "https://www.mozilla.org/en-US/MPL/2.0/",
  },
  {
    name: "The Unilicense",
    url: "https://unlicense.org/",
  },
];

const badge = "";
switch (licenseChoice) {
  case 'MIT license':
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "Apache License 2.0":
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
  case "GNU General Public License v3.0":
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0/)";
    break;
  case "Mozilla Public License 2.0":
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
  case "Common Development and Distribution License 1.0 (CDDL)":
    badge = "[![License: MIT](https://img.shields.io/badge/License-CDDL-green.svg)](https://opensource.org/license/cddl-1-0/)";
  break;
  case "The Unlicense":
    badge = "[![License](https://img.shields.io/badge/License-Unlicense-green.svg)](https://opensource.org/license/unlicense)";
  break;
  default:
    break;
}


inquirer.prompt(questions)
.then((response) => {

  fs.writeFile('readme-test.md',
  

  ` ${badge}


  ## Description
  ${response.description}


  ##table of contenet

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Test](#test)
  * [License](#license)
  * [Question](#installation)
  
  
  ## Installation
  ${response.installation}
  
  
  ## Usage 
  ${response.usage}
  
  
  ## Credits
  ${response.credits}
  
  
  ## Test
  ${response.tests}
  
  
  ## License
  Copyright (c) [2020]
  The license is ${response.license}. 
  Read more about it at ${licenses.Link}.
  
  
  
  ## Questions
  If you have any additional questions please contact me at ${response.license.replace(/ /g, "%20")}.
  GitHub: https://github.com/${response.github}
  `,
  (err) =>
  err ? console.error(err) : console.log('User\'s info logged!')
)
})