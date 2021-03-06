# Capacitor tutorial

- refs) https://github.com/techiediaries/vue-capacitor-ionic-app/tree/master

## create a vue project

```
npm install -D @vue/cli
```

```
npx vue create capacitor-demo
```

```
cd capacitor-demo

npm run serve
```

install vue-router

```
npm install -S vue-router
```

## ionic4

`public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <link
      href="https://unpkg.com/@ionic/core@4.1.2/css/ionic.bundle.css"
      rel="stylesheet"
    />
    <title>capacitor-demo</title>
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but capacitor-demo doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <scrip
      src="https://unpkg.com/@ionic/core@4.0.0-alpha.7/dist/ionic.js"
    ></scrip>
  </body>
</html>
```

`src/App.vue`

```
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
</style>
```

- `ion-app` is an Ionic component. It should be the top-level component that wraps other components.
- `router-view` is the Vue router outlet. A component matching a path will be rendered here by the Vue router.

`console [Vue warn]:`

```
vue.runtime.esm.js?2b0e:619 [Vue warn]: Unknown custom element: <ion-app> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

found in

---> <App>
       <Root>
```

`src/main.js`

```js
import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});

new Vue({ router, render: h => h(App) }).$mount('#app');
```

`src/components/Home.vue`

```vue
<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          Vue Capacitor
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      The world is your oyster.
      <p>
        If you get lost, the
        <a href="https://ionicframework.com/docs">ionic docs</a> will be your
        guide.
      </p>
    </ion-content>
    <ion-button @click="goToAbout" full>About</ion-button>
  </ion-app>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  methods: {
    goToAbout() {
      this.$router.push('/about');
    }
  }
};
</script>
```

`src/components/About.vue`

```
<template>
<ion-app>
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>
      Vue Capacitor | About
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
<p>This is the About page.</p>

<ion-button @click="goBackHome()" full>Go Back!</ion-button>

</ion-content>

</ion-app>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goBackHome () {
      this.$router.push('/')
    }
  }
}
</script>
```

When running the application on a real mobile device or emulator, you will notice a scaling issue. To solve this, we need to simply add some meta tags that correctly set the viewport.

`public/index.html`

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<meta
  name="viewport"
  content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>
<meta name="format-detection" content="telephone=no" />
<meta name="msapplication-tap-highlight" content="no" />
```

## capacitor

```
npm install -S @capacitor/core @capacitor/cli

npx cap init <app name> <app package id>

npx cap init capacitor-demo com.loggar.ex.vuecapacitor
```

`capacitor.config.json`

```json
{
  "appId": "com.example.vuecapacitordemo",
  "appName": "vuecapacitordemo",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```

```
npm run build
```

```
npx cap add android
```

### Using Capacitor Plugins

Example: Adding a Capacitor Plugin

`src/components/Home.vue`
```
import {Pligins} from '@capacitor/core';

// ...
methods: {
  // ...
  async showDialogAlert() {
    awat Plugins.Modals.alert({
      title: 'Alert',
      message: 'Msg'
    });
  }
}

// ...
<ion-button @click="showDialogAlert" full>Show Alert</ion-button>
```

## Building the App for Target Platforms

1. Generate a production build of your Vue application.
2. Copy all web assets into the native project (Android, in our example) generated by Capacitor.
3. Open your Android project in Android Studio (or Xcode for iOS), and use the native integrated development environment (IDE) to build and run your application on a real device (if attached) or an emulator.

```
npm run build

npm cap copy

npx cap open android
```
