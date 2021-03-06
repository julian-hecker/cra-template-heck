# cra-template-heck
Highly opinionated Template for creating React applications

## Usage
```bash
npx create-react-app my-app --template heck
```

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


## Create your own template
Follow the guide at the [Create React App Documentation](https://create-react-app.dev/docs/custom-templates/) to create your own `create-react-app` template

## Resources
- https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/
- https://cheesecakelabs.com/blog/atomic-design-react/

## To Do
- Include support for PWA
