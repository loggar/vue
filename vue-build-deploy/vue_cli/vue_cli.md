# Vue 

## Installation

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## vue create

```
vue create hello-world
```

## Using the GUI

```
vue ui
# localhost:8000/project/create
```

## Runtime + Compiler vs. Runtime-only

```
// this requires the compiler
new Vue({
  template: '<div>{{ hi }}</div>'
})

// this does not
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})
```

webpack

```
module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
```

rollup

```
const alias = require('rollup-plugin-alias')

rollup({
  // ...
  plugins: [
    alias({
      'vue': 'vue/dist/vue.esm.js'
    })
  ]
})
```

browserify

```
// package.json

{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}
```

parcel

```
// package.json

{
  // ...
  "alias": {
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
}

```

## Development vs. Production Mode

webpack

```
// webpack 4

module.exports = {
  mode: 'production'
}

// webpack 3 (or below)

var webpack = require('webpack')

module.exports = {
  // ...
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
```

rollup

```
const replace = require('rollup-plugin-replace')

rollup({
  // ...
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}).then(...)
```

browserify

``` shell
NODE_ENV=production browserify -g envify -e main.js | uglifyjs -c -m > build.js
```
