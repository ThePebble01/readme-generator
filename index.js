const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is the title of your README?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your app?",
    name: "description",
  },
  {
    type: "input",
    message: "If your app has installation instructions, please enter them.",
    name: "installation",
  },
  {
    type: "input",
    message: "Describe how someone can use your app.",
    name: "usage",
  },
  {
    type: "input",
    message: "If your app has contribution guidelines, please enter them.",
    name: "contributing",
  },
  {
    type: "input",
    message: "If your app has test instructions, please enter them.",
    name: "testing",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "list",
    message: "Which type of license do you need to use?",
    name: "license",
    choices: ["Apache 2.0", "CC0", "Eclipse", "MIT", "None"],
  },
];

function writeToFile(fileName, data) {
  var markdownContent = generateMarkdown(data);
  fs.writeFile(fileName, markdownContent, (error) => console.log(error));
}

function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response);
      writeToFile("README.md", response);
    })
    .catch((error) => {
      console.log("A problem occurred!");
      console.error(error);
    });
}

init();
