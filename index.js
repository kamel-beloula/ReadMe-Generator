// Questions for the user
const questions = [
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
]