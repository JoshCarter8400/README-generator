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
      name: "about",
      message: "Please add Table of Contents of your Project:",
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
      name: "instructions",
      message: "Please Add contribution guidelines here:",
    },
    {
      type: "input",
      name: "test",
      message: "Please add instructions for testing here:",
    },
  ]);
};
console.log(questions);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
