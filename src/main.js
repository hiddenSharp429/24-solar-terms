import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import 'reset.css'
// import './style/index.css'
import VueLazyload from 'vue-lazyload';
import 'normalize.css'

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高比
  error: 'https://placehold.it/100x100', // 加载失败的图片
  loading: 'https://placehold.it/100x100', // 加载中的图片
  attempt: 1 // 尝试加载图片的次数
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

