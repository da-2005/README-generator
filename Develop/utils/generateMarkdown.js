

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Deployment Link](#Deployment-Link)
  * [Questions](#Questions)
  
  ## Installation
  To install the necessary dependencies, run the following command in README-generator/Develop:
  <br />
  \*\*\*
  ${data.idepend}
  \*\*\*
  
  ## Usage
  ${data.use}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.
  
  ## Contributing
  * ${data.people}
  
  ## Deployment Link
  Here is the link to the deployed application:
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