import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

import routes from "./routes/routes";

Vue.config.productionTip = false;

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";
import MaterialDashboard from "./material-dashboard";
import Chartist from "chartist";

// configure router
const router = new VueRouter({
    routes,
    linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

Vue.prototype.$Chartist = Chartist;

new Vue({
    el: "#app",
    render: h => h(App),
    router,
    data: {
        Chartist: Chartist
    }
});
