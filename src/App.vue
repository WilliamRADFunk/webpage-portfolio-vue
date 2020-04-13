<template>
  <div id="app" class="container-fluid px-0 bg-white">
    <div class="fixed-top bg-white">
      <div class="row no-gutters py-1 py-sm-2 py-lg-3">
        <div class="col-12 col-md-10 offset-md-1">
          <HeaderContent/>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12">
          <Navigation/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderContent from './components/HeaderContent.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    HeaderContent,
    Navigation
  }
}
</script>

<style lang='scss'>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
