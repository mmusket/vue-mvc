const Vue = require("vue$");
const VueRouter = require("vue-router");
Vue.use(VueRouter);

// Define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var router = new VueRouter({
    mode: "history",
    base: "/vue-mvc/examplevuerouter/",
    routes: [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
});

const vueApp = new Vue({
    el: '#app',
    router: router
});