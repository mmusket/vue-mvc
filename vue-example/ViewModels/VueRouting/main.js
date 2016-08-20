const Vue = require("vue");
const VueRouter = require("vue-router");
Vue.use(VueRouter);

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var App = Vue.extend({});

var router = new VueRouter({
    history: true,
    root: window.VueRouterUrl
});

router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

router.start(App, '#app');
