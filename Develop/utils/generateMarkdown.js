

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.project}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  <br />
  * ${data.idepend}
  
  ## Usage
  ${data.use}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.
  
  ## Contributing
  * ${data.contribution}
  
  ## Tests
  To run tests on this app, run the following command:
  <br />
  * ${data.test}
  
  ## Questions
  For questions regarding the app, please contact me here:
  <br />
  * Email: ${data.email}
  * GitHub: ${data.username}
  `;
}

module.exports = generateMarkdown;