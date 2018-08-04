# Instant Prototyping

## install

```
npm install -g @vue/cli-service-global
```

## vue serve

```
// App.vue

<template>
  <h1>Hello!</h1>
</template>
```

in the directory with the app.vue or App.vue file, run:

```
vue serve
```

vue serve uses the same default setup (webpack, babel, postcss & eslint) as projects created by vue create. It automatically infers the entry file in the current directory - the entry can be one of main.js, index.js, App.vue or app.vue. You can also explicitly specify the entry file:

```
vue serve MyComponent.vue
```

## vue build

You can also build the target file into a production bundle for deployment with vue build:

```
vue build MyComponent.vue
```
