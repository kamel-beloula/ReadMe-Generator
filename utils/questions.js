// questions array
const questions= [
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
        "MIT License", 
        "Apache License 2.0", 
        "GNU General Public License v3.0",
        "Creative Commons Zero v1.0 Universal",
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
];

module.exports = questions;