# Vuetify

Vue.js Material Component Framework

## Create vuetify app

vue-cli version 3 above is needed.

```shell
npm uninstall -g vue-cli

npm install -g @vue/cli
```

create vue app and add vuetify

```shell
vue create my-app

cd my-app

vue add vuetify
```

## Add vuetify into an Existing app

```shell
$ npm install --save vuetify
# or
$ yarn add vuetify
```

navigate vuetify to your app-entry-point

```javascript
// index.js
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
```

You will also need to include the Vuetify css file. Simply include the Vuetify css file in your index.html or import the actual stylus file or the minified css.
```javascript
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
```

```scss
// main.styl
@import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader
```

Some components like the date picker use Material Icons. The easiest way to include them is to add a link tag to your index.html file.
```html
<head>
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
</head>
```

Alternatively use npm or yarn to install material-design-icons-iconfont.
```javascript
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
```
