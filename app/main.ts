import Vue from 'nativescript-vue';
import App from './components/App.vue';
import VueDevtools from 'nativescript-vue-devtools';

import List from './components/ListPage.vue';
import Reverse from './components/ReversePage.vue';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// App components registration
Vue.component(List.name, List)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
