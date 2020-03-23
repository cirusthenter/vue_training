// Create tabs for “Shipping” and “Details” that display the shipping cost and product details, respectively.

// Create a Vue Instance
var app = new Vue({
    el: '#app', // <div id="app"></div> と繋ぎますよ！という意味
    data: {
        brand: 'Apple',
        product: 'MacBook Pro',
        image: '../img/green.jpg'
    }
})

Vue.config.productionTip = false