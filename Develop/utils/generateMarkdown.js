// function to generate markdown for README
function generateMarkdown(data) {
  return `
### License
${data.license}  

# Title
${data.title}

## Description 
${data.description}

## Installation
${data.install}

## Usage 
${data.about}

Provide instructions and examples for use. Include screenshots as needed. 

## Credits
${data.credits}



---



## Contributing
${data.contribute}


## Tests
${data.test}


`;
}

module.exports = generateMarkdown;

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
