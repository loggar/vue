# How to create a Vue.js app using Single-File Components, without the CLI.

## Dependencies

`vue`: The JavaScript framework

`vue-loader` and `vue-template-compiler`: Used to convert our Vue files into JavaScript.

`webpack`: The tool that will allow us to pass our code through some transformations and bundle it into one file.

`webpack-cli`: Needed to run the Webpack commands.

`webpack-dev-server`: Although not needed for our small project (since we won’t be making any HTTP requests), we will still “serve” our project from a development server.

`babel-loader`: Transform our ES6 code into ES5. (It needs help from the next two dependencies.)

`@babel/core` and `@babel/preset-env`: Babel by itself doesn’t do anything to your code. These two “add-ons” will allow us to transform our ES6 code into ES5 code.

`css-loader`: Takes the CSS we write in our .vue files or any CSS we might import into any of our JavaScript files and resolve the path to those files. In other words, figure out where the CSS is. This is another loader that by itself won’t do much. We need the next loader to actually do something with the CSS.

`vue-style-loader`: Take the CSS we got from our css-loader and inject it into our HTML file. This will create and inject a style tag in the head of our HTML document.

`html-webpack-plugin`: Take our index.html and inject our bundled JavaScript file in the head. Then, copy this file into the dist folder.

`rimraf`: Allows us, from the command line, to delete files. This will come in handy when we build our project multiple times. We will use this to delete any old builds.

## webpack configurations

