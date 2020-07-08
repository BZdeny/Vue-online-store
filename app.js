const webstore = new Vue({
    el: '#app',
    data:{
        sitename: 'Vue pet store',
        products: [],
        cart: [],
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            gift: "Send As A Gift",
            sendGift: "Send As A Gift",
            dontSendGift: "Do Not Send As A Gift",
            method: "Home Address",
            home: "Home Address",
            business: "Business Address"
        },
        states: {
            AL: "Alabama",
            AR: "Arizona",
            CA: "California",
            NV: "Nevada"
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
    created: function() {
        axios.get('./products.json')
        .then ((response) => {
            this.products = response.data.products
            console.log(this.products)
        })
    },
    methods: {
        addToCart: function() {
            this.cart.push(aProduct.id)
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true
        },
        submitForm() {
            alert("Submitted!")
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0
        },
        canAddToCart(aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id)
        },
        cartCount(id) {
            let count = 0
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] = id) {
                    count++
                }
            }
            return count
        }
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || ''
        },
    }
})