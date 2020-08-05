## Heck React App
Created with [Create React App](https://github.com/facebook/create-react-app) and the [SERN template](https://github.com/julian-hecker/cra-template-heck).

My personal template for starting a new React project. 

## Available Scripts

### `npm run start`
Runs the React development server.

### `npm run build`
Creates a production build

### `npm run test`
Runs tests (not implemented by default)

### `npm run eject`
Ejects react app (won't be able to receive CRA updates)


## Output

```bash
project-root
├───public/ # static files for react app
│   ├───favicon.ico # icon displayed in browser tab
│   ├───index.html # includes all js
│   ├───logo192.png 
│   ├───logo512.png
│   ├───manifest.json # used in PWAs
│   └───robots.txt # specifies web crawler rules
├───src/ # react source files
│   ├───assets/ # images, fonts, etc.
│   ├───components/ # reusable components
│   │   ├───atoms/ # p, buttons, inputs, etc.
│   │   ├───molecules/ # forms, cards, ui chunks
│   │   └───organisms/ # navbar, footer, ui sections
│   ├───contexts/ # react state management here
│   ├───routes/ # Router and pages go here
│   └───index.js # Main Entry Point
values
├───.gitignore
├───.prettierrc.json # prettier plugin configuration
├───package-lock.json
├───package.json # dependencies, scripts
└───README.md # guide
```


## Generate Favicons
Very useful site to create the required favicons [https://favicon.io/favicon-converter/]
