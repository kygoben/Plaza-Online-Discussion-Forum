# Plaza

## External Tools
Here is the link to our [figma page](https://www.figma.com/file/VgE8XkgR3Uhg7tAJx1b7zJ/Plaza-Prototype?node-id=0%3A1).

## Starting Devlopment Server
Make sure you have the packages installed (like React, all the other things listed in the `package.json` file). If you see a folder called `node_modules`, then everything is installed. If not, run either `npm i`, `npm install`, or `npm ci`.

To start the server, use `npm run start` (or `npm start` also works)  

`"npm"` tells the computer that this is `Node Package Manager`, `run` tells the computer to look at the `scripts` section of the `package.json` file, and `start` tells it to run the script that is under start. In our case, there is a `webpack` script defiend there. If you want to know more about webpack, google it. This entire setup is from the [internet](https://dev.to/riddhiagrawal001/create-react-app-without-create-react-app-2lgd).

## CKEditor
This app uses `CKEditor`, an open source rich text editor. The link to the documentation can be found [here](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html). It has a few problems so it might get replaced later, but for now it works good enough.

## Redux
This app uses `redux, react-redux, and redux toolkit`. If anyone goes into frontend development, these will be useful to know of. They attempt to solve the problem of state management in some clever ways. The state of this application is complex enough that these will be helpful. The tutorial I followed for the setup I found is [here](https://redux-toolkit.js.org/tutorials/quick-start), the general documentation is found [here](https://redux.js.org/introduction/getting-started). A google search for `redux`, `react redux`, or `redux toolkit` will give you lots of good information. If anyone is familiar with [design patterns](https://refactoring.guru/design-patterns/command), redux follows the [command pattern](https://abhiaiyer.medium.com/the-command-pattern-c51292e22ea7).
