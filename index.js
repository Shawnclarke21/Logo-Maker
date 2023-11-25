const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./library/shapes');
const questions = require('./library/questions');

const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Creating svg file...");
            switch (`${data.Shape}`) {
                case 'Square':
                    const Square = new Square();
                    newSquare.setcolor(data.color);
                    fs.writeFile("main/output/logo.svg", newSquare.render(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Square was created');
                        }
                    });
                    break;
               
                default:
                    console.log('Invalid shape');
            }
        });
};

init();