// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer=require("inquirer");


inquirer.prompt([
    {
        type:"input",
        name:"managerName",
        message:"What is the manager's name?"
    },{
        type:"input",
        name:"managerID",
        message:"What is the manager's employee ID?"
    },
    {
        type:"input",
        name:"managerEmail",
        message:"What is the manager's email?"
    },
    {
        type:"input",
        name:"managerOffice",
        message:"What is the manager's office number?"
    },
    {
        type:"input",
        name:"engineerName",
        message:"What is the engineers's name?"
    },
    {
        type:"input",
        name:"engineerGitHub",
        message:"What is the engineers's GitHub?"
    },
    {
        type:"input",
        name:"engineerEmail",
        message:"What is the engineer's email?"
    },
    {
        type:"input",
        name:"engineerID",
        message:"What is the engineer's ID?"
    },
    {
        type:"input",
        name:"internName",
        message:"What is the intern's name?"
    },
    {
        type:"input",
        name:"internID",
        message:"What is the intern's ID?"
    },
    {
        type:"input",
        name:"internEmail",
        message:"What is the intern's email?"
    },
    {
        type:"input",
        name:"internSchool",
        message:"What is the intern's school?"
    }
]).then(result=>{

    
    const newHTML=
    ` 
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
        <title>My Team</title>
      </head>
    
      <body>
        <header class="jumbotron bg-dark text-light text-center">
          <h1 class="display-6">My Team</h1>
        </header>
        <div class="container">
    
          <!-- Team Modules Go Here -->
    
          <div class = "row align-items-start" id="container" style="margin:10px;">
            <div class = "col" id="" style="border:solid 2px; height: auto; width: 300px; padding:10px;margin: 10px; background-color:lightgray;">
                <div class="bg-primary text-light" style="padding: 10px;">
                    <h5>${result.managerName}</h5>
                    <h6>Manager</h6>
                </div>
                <div style="background-color:whitesmoke;padding: 10px;">
                    <p>${result.managerID}</p>
                    <p>${result.managerEmail}</p>
                    <p>${result.managerOffice}</p>
                </div>
            </div>

            <div class = "col" id="" style="border:solid 2px; height: auto; width: 300px;padding:10px;margin:10px;background-color:lightgray;">
                <div class="bg-primary text-light" style="padding: 10px; margin: 0px;">
                    <h5>${result.engineerName}</h5>
                    <h6>Engineer</h6>
                </div>
                <div style="background-color:whitesmoke; padding: 10px;">
                    <p>${result.engineerID}</p>
                    <p>${result.engineerEmail}</p>
                    <p>${result.engineerID}</p>
                    <p>${result.engineerGitHub}</p>
                </div>
            </div>

            <div class = "col" id="" style="border:solid 2px; height: auto; width: 300px; padding:10px;margin:10px;background-color:lightgray;">
                <div class="bg-primary text-light" style="padding: 10px; margin: 0px;">
                    <h5><p>${result.internName}</p></h5>
                    <h6>Intern</h6>
                </div>
                <div style="background-color:whitesmoke; padding: 10px;">
                    <p><p>${result.internID}</p></p>
                    <p><p>${result.internEmail}</p></p>
                    <p><p>${result.internSchool}</p></p>
                </div>
            </div>
          </div>
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="index.js"></script>
      </body>
    </html>

    `;

    fs.writeFile('NewHTML.html', newHTML, function(err){
        if (!err) {
            console.log('HTML file was created/updated')
        }else {console.log('error $[err}')}
        
    });

});




