/*
    GIVEN a command-line application that accepts user input
    WHEN I am prompted for information about my application repository
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    
    WHEN I enter my project title
    THEN this is displayed as the title of the README
    
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    
    WHEN I choose a license for my application from a list of options
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    
    WHEN I enter my email address
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    
    WHEN I click on the links in the Table of Contents
    THEN I am taken to the corresponding section of the README

*/
// TODO: Include packages needed for this application
const fs = require("fs"); //writes to and reads from files
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//prompting over an array does not pause execution while we wait for the user's input...
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //generateMarkdown as a helper in this block.  only creates .md content
  //fs write to file would happen here
}

// TODO: Create a function to initialize app
function init() {
  console.log(generateMarkdown({ title: "test" }));
  //https://www.npmjs.com/package/inquirer/v/8.2.4#user-content-question
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your README?",
        name: "readMeTitle",
      },
      {
        type: "input",
        message: "What is the description of your app?",
        name: "readMeDescription",
      },
      {
        type: "input",
        message: "What are your app's installation instructions?",
        name: "readMeInstallation",
      },
      {
        type: "input",
        message: "Describe how someone can use your app.",
        name: "readMeUsage",
      },
      {
        type: "input",
        message: "What are your app's contribution guidelines?",
        name: "readMeContributing",
      },
      {
        type: "input",
        message: "What are your app's test instructions?",
        name: "readMeTesting",
      },
    ])
    .then((response) => {
      console.log(response);
      console.log(response.readMeInstallation);
    })
    .catch((error) => {
      //
    });
}

// Function call to initialize app
init();
