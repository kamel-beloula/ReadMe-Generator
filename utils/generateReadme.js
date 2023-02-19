const licenses = require("./licenses")

// function to generate the Readme file
function generateReadme(response) {

    return `

    # ${response.title} ![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)
  

    ##Description
    ${response.description}
  
  
    ##table of contenet

    *[Installation](#installation)
    *[Usage](#usage)
    *[Link to deployed app](#link to deployed app)
    *[Credits](#credits)
    *[Test](#test)
    *[License](#license)
    *[Question](#installation)
    
    
    ## Installation
    ${response.installation}
    
    
    ## Usage 
    ${response.usage}
    
    
    ##Link to deployed all
    ${licenses.link}
    
    
    ## Credits
    ${response.credits}
    
    
    ## Tests
    ${response.tests}
    
    
    ## License
    Copyright (c) [2020]
    The license is ${response.license}. 
    Read more about it at ${licenseLink}.
    
    
    
    ## Questions
    If you have any additional questions please contact me at ${response.email}.
    GitHub: https://github.com/${response.github}
    `;
    }
    module.exports = generateReadme;