<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hot Reload Sample."
    };
  }
};
</script>

<style>
body {
  font: 100% Helvetica, sans-serif;
  color: #ecf0f1;
  text-align: center;
  background-color: #34495e;
}
.container {
  margin: 0 auto;
  padding-top: 70px;
}
</style>
