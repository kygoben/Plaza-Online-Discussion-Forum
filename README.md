# Plaza

## External Tools
Here is the link to our [figma page](https://www.figma.com/file/VgE8XkgR3Uhg7tAJx1b7zJ/Plaza-Prototype?node-id=0%3A1).  
Here is the link to our [gitlab repo](https://git.linux.iastate.edu/Spring2022-CS319/g19/plaza).  
Here is the link to our [trello board](https://trello.com/b/cN1yAJkW/g19).

## Starting Devlopment Server
Make sure you have the packages installed (like React, all the other things listed in the `package.json` file). If you see a folder called `node_modules`, then everything is installed. If not, run either `npm i`, `npm install`, or `npm ci`.

To start the server, use `npm run start` (or `npm start` also works)  

`"npm"` tells the computer that this is `Node Package Manager`, `run` tells the computer to look at the `scripts` section of the `package.json` file, and `start` tells it to run the script that is under start. In our case, there is a `webpack` script defiend there. If you want to know more about webpack, google it. This entire setup is from the [internet](https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-2lgd).

## CKEditor
This app uses `CKEditor`, an open source rich text editor. The link to the documentation can be found [here](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html). It has a few problems so it might get replaced later, but for now it works good enough.