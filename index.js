const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");

// user prompt questions
inquirer.prompt(questions).then((response) => {
  console.log(response.license);

  //https://www.codespeedy.com/how-to-replace-space-with-20-in-javascript/
  let licenceName = response.license.replace(/ /g, "%20");

  // write the md coponents in the readme-test file
  fs.writeFile(
    "ReadMe-Test",

    // display a badge for the chosen license
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
  

  ## Link to deployed app
  ${response.url}
  
  
  ## Credits
  ${response.credits}
  
  
  ## Test
  ${response.tests}
  
  
  ## License
  Copyright (c) [2023]
  The license is ${response.license}. 
  
  
  
  ## Questions
  If you have any additional questions please contact me at ${response.email}.
  GitHub: https://github.com/${response.github}
  `,
    (err) => (err ? console.error(err) : console.log("Readme file generated"))
  );
});
