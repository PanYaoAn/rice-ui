import Vue from "vue";
import App from "./App.vue";
import Rice from '../packages/index'
Vue.config.productionTip = false;
Vue.use(Rice)
new Vue({
    render: h => h(App)
}).$mount("#app");