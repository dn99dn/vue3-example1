<template>
  <Header />
  <div id="content" class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
