const Vue = require("vue");


const v = new Vue({
    el: '#app',
    ready: function() {
        loadData(); 
    },
    data: {
        message: 'Hello Vue.js!',
        serverData: null
    },
    methods: {
        loadData: function(viewerUserId, posterUserId) {
            const that = this;
            
            $.ajax({
                contentType: "application/json",
                dataType: "json",
                url: window.ServerUrl + "/Home/GetData",
                method: "GET",
                success: function(response) {
                  that.$data.serverData = response.data
                },
                error: function() {
                    console.log("Oops");
                }
            });
        }
    }
})