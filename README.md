# Jan.Movies

Main goal was to try building a website from scratch using NodeJS, ReactJS, Webpack and Materialize-css.<br><br>
Try the demo at http://jan-movies.surge.sh<br><br>
The website itself represents a possible website promoting my movie-making skills (simplified version).

## Project Status:
Finished for technology demonstation and practice purposes.

### What'd need to be done to make it fully functional:
Enable/change some links' functionality.<br>
Improve story told + possibly colors (depending on A/B testing).

## What I learned:
To build a simple website for promotion of a product.<br>
To tell a story and write an appealing content = storytelling was huge here for me.<br>
Use Materialize-css framework + customize it.<br>
That full-website deployment of NodeJS webpack-based can be a pain in the ass and making it work could
be a miracle (unless you find something like surge.sh which solves your deployment nightmare, haha).<br>
Sometimes sacrificing some extra tools can be a real win (usage of react-create-app) would solve many
problems I struggled with.

## Possible improvements for future:
Create responsivity - remove inline styling and create separate .css files for every part (component).<br> 
However, this website is really clean and simple, therefore perhaps customized graphics would help.<br>
Add on-line e-mail form.<br>
Dev vs deployment version, customized webpack setup.<br>
HMR for faster developemnt.<br>

## Deployment:
Beware: just uploading the project on surge won't make it work, unless you pre-compile the index.js and 
image file locally - they are already in the project and surge will simply read them. Therefore, when 
changing something, re-compile the project using `webpack ./src/main.js` -> the files will be outputted
to a new folder with the same name as the project has, you take them from there and copy to the original
project (nasty workaround, just a quick deployment solution).

### To run the project locally:
`npm install` (installing all packages and dependencies)
`npm start` (staring the localhost server)
