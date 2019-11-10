const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: `root`,
    password: `password`,
    database: `bamazon_db`
  })
// main menu function
const mainMenu = _ => {
    inquirer
        .prompt([
            {type: 'list',
            message: 'What would you like to buy?',
            name: 'choice',
            choices: ['Fishing Rod', 'PS4', 'Xbox', 'Tv', 'Biek', 'Scooter', 'Bed', 'Computer', 'Couch', 'Lamp']
            }
        ])
        .then(choices => {
            secondPromt()
    })
}

// second question function
const secondPromt = _ => {
    inquirer
        .prompt([
            {type: 'number',
            name: 'input',
            message: 'How many would you like to buy?'
            }
        ])
        .then(qauntity => {
            console.log(qauntity.input)
            db.query
        })
}

mainMenu()