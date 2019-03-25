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
      <p>If you get lost, the <a href="https://ionicframework.com/docs">ionic docs</a> will be your guide.
      </p>
    </ion-content>
    <ion-button @click="goToAbout" full>About</ion-button>
  </ion-app>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  methods: {
    goToAbout() {
      this.$router.push('/about')
    }
  }
}
</script>