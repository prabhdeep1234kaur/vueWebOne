app.component('product-display',{
    //display all product related template code //using <--html extension
    template: 
    /*html*/ 
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- image goes here -->
            <img :class="{ 'out-of-stock-img': !inStock }" :src="imageComputed">
            <!-- <img :src="image"> -->

            <a :href="url" target="_blank">Check this</a>
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="instockComputed" > In stock</p>
            <p v-else> Out of stock</p><p>{{isOnSale}}</p>
            <!--OR for toddle <p style="display: none;">In stock</p>-->
            <!-- <p v-show="inStock">In stock</p> -->

            <!-- <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p>
            <p v-else>out of stock</p> -->
            <p>Shipping : {{shipping}}</p>
            <p>{{ description }}</p>
            <!--<ul>
              <li v-for="detail in detailsData">{{detail}}</li>
            </ul>-->
             <!-- solution suing props -->
            <product-details :details="detailsData"></product-details>
            <!-- solution -->
            <div v-for="(variant,index) in variantColorData" 
              :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{backgroundColor:variant.color}"
            >
            </div>
            <p v-show="onSale">On Sale</p>
            <!-- <button class="button" v-on:click="addToCart">Add to Cart</button> -->
            <button class="button" @click="removeFromCart">Delete</button>
            <button 
            class="button" 
            @click="addToCart"
            :class="{disabledButton : !instockComputed}"
            :disabled="!instockComputed"
            >
            Add to Cart</button><!--  // :disabled="!inStock"-->
          </div>
        </div>
        <review-list :reviews="reviewsData"></review-list>
        <review-forms @review-submitted="addReview"></review-forms>
    </div>`,
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description :'Super comfy and skin friendly !',
            image : './assets/images/socks_green.jpg',
            url:'https://www.google.com',
            selectedVariant:0,
            inStock: false,
            inventory:10,
            onSale: true,
            detailsData: ['50% cotton', '30% wool', '20% polyester'],
            variantColorData: [
                {id:111, color:'green',image : './assets/images/socks_green.jpg',quantity:12, sale:true},
                {id:112, color: 'blue',image : './assets/images/socks_blue.jpg',quantity:0, sale:false}
            ],
            reviewsData:[],
        }
    },
    methods: {
        addToCart(){
            //this.cart += 1;
            this.$emit('add-to-cart', this.variantColorData[this.selectedVariant].id);
        },
        removeFromCart(){
            this.$emit('delete-from-cart');
            
        },
        updateVariant(index){
            this.selectedVariant=index;
        },
        addReview(review){
            this.reviewsData.push(review);
        }
    },
    computed:{
        title(){
            return this.brand+" "+this.product;
        },

        imageComputed(){
            return this.variantColorData[this.selectedVariant].image;
        },

        instockComputed(){
            return this.variantColorData[this.selectedVariant].quantity;
        },

        isOnSale(){
            if(this.variantColorData[this.selectedVariant].sale)return "On sale";
        },
        shipping(){
            if(this.premium) {return "Free"} return "$2.99"
        }

    },
    props:{
        premium:{
            type: Boolean, required: true
        }
    }
})