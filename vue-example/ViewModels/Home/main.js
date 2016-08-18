const Vue = require("vue");
const $ = require("jquery");

const v = new Vue({
    el: '#app',
    ready: function () {
       
    },
    data: {
        message: 'Hello Vue.js!',
        serverData: window.preLoadeddata
    },
    methods: {
    }
})