const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require('./util/generateLogo');
const questions = require('./library/questions');

function writeToFile(filename, data) {
    return new Promise((resolve, reject) => {
        const content = generateLogo(data);
        fs.writeFile(filename, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const filename = 'logo.svg';
        await writeToFile(filename, data);
        console.log('File has been written successfully.');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

init();