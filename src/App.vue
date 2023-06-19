<template>
    <div class="menu">
      <router-link class="link" to="/teleport-example">
        Teleport Example
      </router-link>
      <router-link class="link" to="/suspense-example">
        SuspenseExample
      </router-link>
      <router-link class="link" to="/v-model-example">
        Multi v-model
      </router-link>
    </div>
  <router-view />
</template>

<script>
//  import TeleportDemo from './components/TeleportDemo'
export default {
  name: 'App',
  setup() {
    
  }
}
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
.menu {
  margin-bottom: 46px;
}
a {
  margin: 0 20px
}
</style>
