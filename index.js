const inquirer = require('inquirer');
const fs = require('fs');


//licenses names and urls
const licenses = [
  {
    name: "Apache License 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0.txt",
  },
  {
    name: "GNU General Public License v3.0",
    url: "https://www.gnu.org/licenses/gpl-3.0.en.html",
  },
  {
    name: "MIT License",
    url: "https://opensource.org/licenses/MIT",
  },
  {
    name: "BSD T-Clause 'Simplified' License",
    url: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    url: "https://spdx.org/licenses/BSD-3-Clause.html",
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    url: "https://choosealicense.com/licenses/cc0-1.0/",
  },
  {
    name: "Eclipse Public License 2.0",
    url: "https://www.eclipse.org/legal/epl-2.0/",
  },
  {
    name: "GNU Affero General Public License v2.1",
    url: "https://www.gnu.org/licenses/agpl-3.0.en.html",
  },
  {
    name: "GNU General Public License v2.0",
    url: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    name: "GNU Lesser General Public License v2.1",
    url: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html",
  },
  {
    name: "GNU Lesser General Public License v3.0",
    url: "https://www.gnu.org/licenses/lgpl-3.0.en.html",
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
console.log(licenses.name)

// Questions for the user
inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
     {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instruction for your project',
        name: 'installation',
    },
   {
        type: 'input',
        message: 'Please provide usage instructions for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide a link to your deployed project',
        name: 'url',
    },
    {
        type: 'input',
        message: 'Please add credits',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Please provide test instructions for your project',
        name:'test',
    },
    {
        type: 'list',
        message: 'choose a license for your project:',
        name: 'license',
        choices: [
                    "Apache License 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD T-Clause 'Simplified' License",
                    "BSD 3-Clause 'New' or 'Revised' License",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v2.1",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "GNU Lesser General Public License v3.0",
                    "Mozilla Public License 2.0",
                    "The Unilicense",
                ]
    },
    {
        type:'input',
        message:'what is your github username?',
        name: 'github',
    },
    {
        type:'input',
        message:'what is your email address?',
        name: 'email',
    },
])
.then((response) => {

//we have our responses and license, we can generate the ms file

    fs.writeFile('readme-demo.md',`title is: ${response.title}`,(err) =>
    err ? console.error(err) : console.log('readme.md generated'));
})

const link = "";
function generateReadme(response){
  //loop to display the chosen licnese
  for (let i = 0; i <= licenses.length; i++){
    if (response.licence === licenses[i].name){
      link = licenses[i].url;
  }
}
return `# ${response.title} ![GitHub license](https://img.shields.io/badge/license-${response.licence}-blue.svg)

##Description
${response.description}

##table of contenet

*[Installation](#installation)
*[Usage](#usage)
*[Link to deployed app](#link to deployed app)
*[Credits](#credits)
*[Test](#test)
*[Question](#installation)
}
