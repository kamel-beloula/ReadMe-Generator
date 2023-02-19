const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require("./utils/generateReadme");
const questions = require("./utils/questions");
const licenses = require("./utils/licenses");

inquirer.prompt(questions)
.then((response) => {
  fs.writeFile('readme-demo.md', generateReadme(),
      err ? console.error(err) : console.log("Successfully wrote to DEMO-README.md")
  )
})