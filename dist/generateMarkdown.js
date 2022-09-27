

function generateMarkdown(oats)
{
    const main = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
      <link rel="stylesheet" href="./src/style.css">
      <script type="text/javascript">
        
      </script>
      <title>Team Profiles</title>
    </head>
    
    <header>
    <h3 class = "toppy">Team Profile Generator</h3>
    </header>
    <main>
    <body>
    
    
    `;

    const bot = `</main>
    </body>`;
    let tempText = ``;
    for(let i = 0; i < oats.length; i++)
    {
        let tempSlam = oats[i];
        switch (oats[i].getRole()) {

            case 'Manager':
                tempText = tempText + 
`<figure>
<h1>${tempSlam.name}</h1>
<h1>${oats[i].getRole()}</h1>
<p>Id: ${tempSlam.id}</p>
<p>Email: <a href="mailto:${tempSlam.email}">${tempSlam.email}</a></p>
<p>Office Number:${tempSlam.officeNumber}</p>
</figure>
`
                break;
        
            case 'Intern' :
                tempText = tempText + 
`<figure>
<h1>${tempSlam.name}</h1>
<h1>${oats[i].getRole()}</h1>
<p>Id: ${tempSlam.id}</p>
<p>Email: <a href="mailto:${tempSlam.email}">${tempSlam.email}</a></p>
<p>School: ${tempSlam.school}</p>
</figure>
`
                break;
            
            case 'Engineer' :
                tempText = tempText + 
`<figure>
<h1>${tempSlam.name}</h1>
<h1>${oats[i].getRole()}</h1>
<p>Id: ${tempSlam.id}</p>
<p>Email: <a href="mailto:${tempSlam.email}">${tempSlam.email}</a></p>
<p>Github: <a href="https://github.com/${tempSlam.github}">${tempSlam.github}</a></p>
</figure>
                `
                break;
            default:
                break;
        }

    }

    return main + tempText + bot;
}

module.exports = generateMarkdown;