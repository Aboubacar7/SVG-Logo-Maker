const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const Triangle = require('./lib/Triangle')
const generateSVG = require('./lib/template');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const chosenShape = []

inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please coose a shape you want add to your logo',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'Please enter your logo text.',
            validate: (text) => {
                if(text.length > 3) {
                  return 'LogoText cannnot be no more than 3 characters long.';
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a keyword for your text color.',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: ' Please enter a keyword for your shape color'
        }
    ]).then(answers => {
        if (answers.shape === "triangle") {
            const newShape = new Triangle(answers.text, answers.textColor, answers.shapeColor)
            chosenShape.push(newShape)
        }else if (answers.shape === "square"){
            const newShape = new Square(answers.text, answers.textColor, answers.shapeColor)
            chosenShape.push(newShape)
        }else if (answers.shape === "circle"){
            const newShape = new Circle(answers.text, answers.textColor, answers.shapeColor)
            chosenShape.push(newShape)
        }
        fs.writeFile('logo.svg', generateSVG(chosenShape), (err) => {
            if (err) throw err;
            console.log("Generated logo.svg") 
        })
    })