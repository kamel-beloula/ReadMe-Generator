const inquirer = require('inquirer');
const fs = require('fs');


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

    fs.writeFile('readme-demo.md',`title is: ${response.title}`,(err) =>
    err ? console.error(err) : console.log('readme.md generated'));
})

const license = {
    [
            // licenses from GitHub
            // details from //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
            { id: 'Apache 2.0', name: 'Apache License 2.0',                         badge: { message: 'Apache_2.0', colour: 'blue', url: 'https://opensource.org/licenses/Apache-2.0' } },
            { id: 'GNU GPL v3', name: 'GNU General Public License v3.0',            badge: { message: 'GPLv3', colour: 'blue', url: 'https://www.gnu.org/licenses/gpl-3.0' } },
            { id: 'MIT', name: 'MIT License',                                       badge: { message: 'MIT', colour: 'yellow', url: 'https://opensource.org/licenses/MIT' } },
            { id: 'BSD 2-Clause', name: 'BSD 2-Clause "Simplified" License',        badge: { message: 'BSD_2--Clause', colour: 'orange', url: 'https://opensource.org/licenses/BSD-2-Clause' } },
            { id: 'BSD 3-Clause', name: 'BSD 3-Clause "New" or "Revised" License',  badge: { message: 'BSD_3--Clause', colour: 'blue', url: 'https://opensource.org/licenses/BSD-3-Clause' } },
            { id: 'Boost 1.0', name: 'Boost Software License 1.0',                  badge: { message: 'Boost_1.0', colour: 'lightblue', url: 'https://www.boost.org/LICENSE_1_0.txt' } },
            { id: 'CC0 1.0', name: 'Creative Commons Zero v1.0 Universal',          badge: { message: 'CC0_1.0', colour: 'lightgrey', url: 'http://creativecommons.org/publicdomain/zero/1.0/' } },
            { id: 'EPL 2.0', name: 'Eclipse Public License 2.0',                    badge: { message: 'EPL_2.0', colour: 'red', ur: 'https://opensource.org/licenses/EPL-2.0' } },
            { id: 'GNU AGPL v3', name: 'GNU Affero General Public License v3.0',    badge: { message: 'AGPL_v3', colour: 'blue', url: 'https://www.gnu.org/licenses/agpl-3.0' } },
            { id: 'GNU GPL v2', name: 'GNU General Public License v2.0',            badge: { message: 'GPL_v2', colour: 'blue', url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html' } },
            { id: 'GNU LGPL v2.1', name: 'GNU Lesser General Public License v2.1',  badge: { message: 'LGPL_v2.1', colour: 'blue', url: 'https://www.gnu.org/licenses/lgpl-2.1' } },
            { id: 'Mozilla Public License 2.0', name: 'Mozilla Public License 2.0', badge: { message: 'MPL_2.0', colour: 'brightgreen', url: 'https://opensource.org/licenses/MPL-2.0' } },
            { id: 'The Unlicense', name: 'The Unlicense',                           badge: { message: 'Unlicense', colour: 'blue', url: 'https://unlicense.org/' } },
            { name: noLicense }
    ]
}
