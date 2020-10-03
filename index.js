const fs = require("fs");

const markDown = require("./Develop/utils/generateMarkdown.js");

const inquirer = require("inquirer");

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please add a description of your Project:",
    },
    {
      type: "input",
      name: "install",
      message: "Please add installation instructions for your Project:",
    },
    {
      type: "input",
      name: "about",
      message: "Please describe the usage of your Project:",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license from the list below.",
      choices: [
        {
          message: "Apache 2.0",
          key: "Apache 2.0",
          value:
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },
        {
          message: "MIT",
          key: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          message: "ISC",
          key: "ISC",
          value:
            "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        },
        {
          message: "IBM Public license",
          key: "IBM Public license",
          value:
            "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
        },
        {
          message: "Mozilla Public license",
          key: "Mozilla Public license",
          value:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        },
        {
          message: "Artistic license 2.0",
          key: "Artistic license 2.0",
          value:
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        },
      ],
    },
    {
      type: "input",
      name: "credits",
      message:
        "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section:",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "List your collaborators, if any, with links to their GitHub profiles",
    },
    {
      type: "input",
      name: "test",
      message: "Please add instructions for testing here:",
    },
    {
      type: "input",
      name: "info1",
      message: "Please enter Github username:",
    },
    {
      type: "input",
      name: "link",
      message: "Please add link to your to your github profile",
    },
    {
      type: "input",
      name: "link1",
      message: "Please enter email address:",
    },
  ]);
};
questions().then((answers) => {
  console.log(answers);

  var template = markDown(answers);
  writeToFile("name.md", template);
});

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    return console.log("success");
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
