import Vue from 'vue';
import { BootstrapVue, DropdownPlugin, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';

import './styles.scss';

Vue.use(BootstrapVue);
Vue.use(DropdownPlugin);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
