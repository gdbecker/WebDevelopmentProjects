## 05 - Webpack Basic Setup

### Topics Covered

- "dist" folder is for the production code which goes to the server
- Setting up "src" folder
- Making sure index.html connected to bundle.js which will be built with the "build": "webpack" command in package.json
- Configuring webpack.config.js file
- Installing style and css loaders
- Installing html-webpack-plugin
- Making an html template for the builds to use
- Setting up devServer so webpack will build after files are saved -> avoid having to run "npm run build" every time you want the page updated after changes
- Adding in Babel to accommodate for older browsers
- Adding in css-mini plugin so css is separated out into its own file in the dist folder
