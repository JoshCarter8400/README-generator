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
        "Artistic license 2.0",
        "MIT",
        "ISC",
        "Microsoft Public license",
        "Mozilla Public license",
        "Academic Free license",
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
