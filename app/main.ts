import Vue from 'nativescript-vue';
import App from './components/App.vue';
import VueDevtools from 'nativescript-vue-devtools';

import ListPage from './components/ListPage.vue';
import ReversePage from './components/ReversePage.vue';
import TabPage from './components/TabPage.vue';

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// App components registration
Vue.component(ListPage.name, ListPage);
Vue.component(TabPage.name, TabPage);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
