<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>

    <div>
      <Counter />
    </div>

    <div>
      <ApiExample />
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import ApiExample from './components/ApiExample.vue';

export default {
  components: {
    Counter,
    ApiExample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a {
  font-weight: bold;
  color: #42b983;
  padding: 0 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>