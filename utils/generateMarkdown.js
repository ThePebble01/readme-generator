const badgeByLicense = new Map([
  ["Apache 2.0", "https://img.shields.io/badge/License-Apache_2.0-blue.svg"],
  ["CC0", "https://licensebuttons.net/l/zero/1.0/80x15.png"],
  ["Eclipse", "https://img.shields.io/badge/License-EPL_1.0-red.svg"],
  ["MIT", "https://img.shields.io/badge/License-MIT-yellow.svg"],
]);
const linkByLicense = new Map([
  ["Apache 2.0", "https://opensource.org/licenses/Apache-2.0"],
  ["CC0", "http://creativecommons.org/publicdomain/zero/1.0/"],
  ["Eclipse", "https://opensource.org/licenses/EPL-1.0"],
  ["MIT", "https://opensource.org/licenses/MIT"],
]);

function renderLicenseBadge(license) {
  var licenseBadgeResultTemplate = "";
  var licenseLink = renderLicenseLink(license);
  if (licenseLink && badgeByLicense.has(license)) {
    licenseBadgeResultTemplate = `[![License](${badgeByLicense.get(
      license
    )})](${licenseLink})`;
  } else {
    licenseBadgeResultTemplate = "";
  }
  return licenseBadgeResultTemplate;
}

function renderLicenseLink(license) {
  return linkByLicense.get(license);
}

function renderLicenseSection(license) {
  return license != "None"
    ? `This application is covered under the ${license} license. \nFor more information, click the badge at the top of the README.`
    : "";
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description

  <p align="center">
    ${data.description}
  </p>

  ## Table of Contents

  ${data.installation ? "- [Installation](#installation)" : ""}
  - [Usage](#usage)
  ${data.contributing ? "- [Contributing](#contributing)" : ""}
  ${data.testing ? "- [Tests](#tests)" : ""}
  - [Questions](#questions)
  ${data.license != "None" ? "- [License](#license)" : ""}

  ${data.installation ? `## Installation\n\n ${data.installation} \n\n` : `\n`}

  ## Usage

  ${data.usage}

  ${data.contributing ? `## Contributing\n\n ${data.contributing} \n\n` : `\n`}

  ${data.testing ? `## Tests\n\n ${data.testing} \n\n` : `\n`}

  ## Questions

  Reach out to me via Github: [${data.githubUsername}](https://github.com/${
    data.githubUsername
  })
  \n
  Or contact me via email: ${data.email}

  ${
    data.license != "None"
      ? `## License\n\n` + renderLicenseSection(data.license) + `\n\n`
      : ""
  }`;
}
module.exports = generateMarkdown;
