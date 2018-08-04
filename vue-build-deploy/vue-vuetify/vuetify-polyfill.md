# Vuetify - IE11 & Safary 9 support

Vuetify utilizes features of ES2015/2017 that require the need to use polyfills for Internet Explorer 11 and Safari 9/10. If you are using vue-cli-3, this is done automatically for you. Otherwise, in your project directory, you can install babel-polyfill:

```shell
// my-project/
$ npm install babel-polyfill --save
// or
$ yarn add babel-polyfill
```

It is important to include the plugin as early as possible within your main index.js file. If using a Vuetify SSR package, this will apply to the client-entry.js file

```js
// my-project/src/index.js
import 'babel-polyfill'
// ...
new Vue()
```

It is recommended that you use babel-preset-env with the corresponding polyfill to ensure only the necessary polyfills are added to your application. For more information on babel-present-env, visit the documentation

```shell
$ yarn add @babel/preset-env -d
// or
$ npm install @babel/preset-env --save-dev
```

Once installed, add the preset to your .babelrc or babel.config.js

```json
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```

```js
// babel.config.js
module.exports = {
  presets: ['@babel/preset-env']
}
```

Due to Internet Explorer's limited support for <template> tags, you must send fully compiled dom elements to the browser. This can be done by either building your Vue code in advance or by creating helper components to replace the dom elements. For instance, if sent directly to IE, this will fail:

```js
<template slot="items" slot-scope="props">
  <td>{‌{ props.item.name }‌}</td>
</template>
```
