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
    <div class="row no-gutters">
      <div class="col-12">
        <MissionSection/>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12">
        <SectionHeader id="about" content="William Funk" prefix="ABOUT"/>
        <AboutSection/>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './components/SectionHeader.vue';
import HeaderContent from './components/HeaderContent.vue';
import Navigation from './components/Navigation.vue';
import MissionSection from './components/MissionSection.vue';
import AboutSection from './components/AboutSection.vue';

export default {
  name: 'App',
  components: {
    SectionHeader,
    HeaderContent,
    Navigation,
    MissionSection,
    AboutSection
  }
}
</script>

<style lang='scss'>
  #app {
    font-family: 'Open Sans', sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
  }
</style>
