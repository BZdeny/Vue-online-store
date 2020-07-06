const webstore = new Vue({
    el: '#app',
    data:{
        sitename: 'Vue pet store',
        product: {
            id: 1,
            title: 'ProPlan Sterilised, 3kg',
            description: "А 3 kg bag of <em>irrestible</em>,"+
                          " organic goodness for your cat.",
            price: 2000,
            image: 'img/PP-3kg.jpg',
            availableInventory: 5
        },
        cart: [],
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    },
    filters: {
        formatPrice: function(price) {
            if (!parseInt(price)) { return '' }

            if (price > 99999) {
                const priceString = (price / 100).toFixed(2)
                let priceArray = priceString.split('').reverse()
                let index = 3
                while (priceArray.length > index + 3) {
                    priceArray.splice(index+3, 0, ',');
                    index += 4;
                }
                return '$' + priceArray.reverse().join('')
            } else {
                return '$' + (price / 100).toFixed(2)
            }
        }
    },
    methods: {
        addToCart: function() {
            this.cart.push(this.product.id)
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || ''
        },
        canAddToCart: function() {
            return this.product.availableInventory > this.cartItemCount
        }
    }
})