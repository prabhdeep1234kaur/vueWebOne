const app = Vue.createApp({
    /**everything relate to product will be found in prodict display component */
    data(){
        return {
            cart:[],
            premiumVal: false,
        }
    },
    methods:{
        updateCart(id){
            //this.cart ++;
            this.cart.push(id);
        },
        deleteCart(){
            if(this.cart.length >  0)this.cart.pop();
        }
    }
})
//attribute binding