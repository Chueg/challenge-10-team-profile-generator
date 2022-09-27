const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateMarkdown = require("./dist/generateMarkdown");

const grib = [];

function writeToFile(fileName, data) {

    
    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('Successfully created READ ME!'))


}

function engineerAdd()
{
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Engineer's Name: ",
            name: 'name',
            validate: valName => {
                if(valName)
                {
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Employee id: ',
            name: 'id',
            validate: valId => {
                if(parseInt(valId))
                {
                    return true;
                }
                else{
                    console.log('Try again bad id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Email: ',
            name: 'email',
            validate: email =>{
                function isReal(email) {
                        var regx = /\S+@\S+\.\S+/;
                        return regx.test(email);}
                if(email && isReal(email) === true){
                    return true;
                }else{
                    console.log('Try again bad email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Github: ',
            name: 'github',
            validate: valGit => {
                if(valGit)
                {
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Add another employee?: ',
            name: 'add',
            choices: [
                
                "Intern",
                "Engineer",
                'none'
            ]
        }
    ])
    .then(function slam(response){
        const bunky = new Engineer(response.name, response.id, response.email, response.github);
        grib.push(bunky);


        switch (response.add) {
            case 'Intern':
                internAdd();
                
                break;
            
            case 'Engineer':
                engineerAdd();
                break;

            case 'none':
                console.log(grib);
                writeToFile('smokeee.html', generateMarkdown(grib));
                break;
        }
    })
}

function internAdd()
{
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Intern's Name: ",
            name: 'name',
            validate: valName => {
                if(valName)
                {
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Employee id: ',
            name: 'id',
            validate: valId => {
                if(parseInt(valId))
                {
                    return true;
                }
                else{
                    console.log('Try again bad id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Email: ',
            name: 'email',
            validate: email =>{
                function isReal(email) {
                        var regx = /\S+@\S+\.\S+/;
                        return regx.test(email);}
                if(email && isReal(email) === true){
                    return true;
                }else{
                    console.log('Try again bad email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'School: ',
            name: 'school',
            validate: valSchool => {
                if(valSchool)
                {
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Add another employee?: ',
            name: 'add',
            choices: [
                
                "Intern",
                "Engineer",
                'none'
            ]
        }
    ])
    .then(function slam(response){
        const bunky = new Intern(response.name, response.id, response.email, response.school);
        grib.push(bunky);


        switch (response.add) {
            case 'Intern':
                internAdd();
                
                break;
            
            case 'Engineer':
                engineerAdd();
                break;

            case 'none':
                console.log(grib);
                writeToFile('smokeee.html', generateMarkdown(grib));
                break;
        }
    })
}



function init()
{
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Team Managers Name: ',
            name: 'name',
            validate: valName => {
                if(valName)
                {
                    return true;
                }
                else{
                    
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Employee id: ',
            name: 'id',
            validate: valId => {
                if(parseInt(valId))
                {
                    return true;
                }
                else{
                    console.log('Try again bad id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Email: ',
            name: 'email',
            validate: email =>{
                function isReal(email) {
                        var regx = /\S+@\S+\.\S+/;
                        return regx.test(email);}
                if(email && isReal(email) === true){
                    return true;
                }else{
                    console.log('Try again bad email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Office Number: ',
            name: 'office',
            validate: valOff => {
                if(parseInt(valOff))
                {
                    return true;
                }
                else{
                    console.log('Try again bad office #');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Add another employee?: ',
            name: 'add',
            choices: [
                
                "Intern",
                "Engineer",
                'none'
            ]
        }
    ])
    .then(function slam(response){
        const manago = new Manager(response.name, response.id, response.email, response.office);
        grib.push(manago);

        switch (response.add) {
            case 'Intern':
                internAdd();
                break;
            
            case 'Engineer':
                engineerAdd();
                break;

            case 'none':
                console.log(grib);
                writeToFile('smokeee.html', generateMarkdown(grib));
                break;
        }
    })
    
}

init();
