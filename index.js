const inquirer = require('inquirer');
const fs = require('fs');
const questions = require("./utils/questions");

// licences array
const licenses = [
  {
    name: "MIT License",
    link: "https://opensource.org/licenses/MIT",
  },{
    name: "Apache License 2.0",
    link: "https://www.apache.org/licenses/LICENSE-2.0.txt",
  },
  {
    name: "GNU General Public License v3.0",
    link: "https://www.gnu.org/licenses/gpl-3.0.en.html",
  },
  {
    name: "Mozilla Public License 2.0",
    link: "https://www.mozilla.org/en-US/MPL/2.0/",
  },
  {
    name: "The Unilicense",
    link: "https://unlicense.org/",
  },
]

// user prompt questions
inquirer.prompt(questions)
.then((response) => {
console.log(response.license)

  //https://www.codespeedy.com/how-to-replace-space-with-20-in-javascript/    
  let licenceName = response.license.replace(/ /g, "%20");
    
  // write the md coponents in the readme-test file
  fs.writeFile('readme-test',
  
  // display a badge for for the chosen license 
  `![GitHub license](https://img.shields.io/badge/license-${licenceName}-blue.svg)
  
  
  # ${response.title} 


  ## Description
  ${response.description}


  ## Table of contenet

  * [Installation](#installation)
  * [Usage](#usage)
  * [Link to deployed app](#link-to-deployed-app)
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
  Copyright (c) [2023]
  The license is ${response.license}. 
  Read more about it at ${response.Link}.
  
  
  
  ## Questions
  If you have any additional questions please contact me at ${response.email}.
  GitHub: https://github.com/${response.github}
  `,(err) =>
  err ? console.error(err) : console.log('User\'s info logged!')
)
})