app.component(
    'review-forms',{
        template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name"> Name: </label>
            <input id="name" v-model="name">

            <label for="review"> Review: </label>
            <textarea id="name"  v-model="review"></textarea>

            <label for="rating"> Rating: </label>
            <select id="rating" v-model.number="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <label for="recommend"> Would you recommend this product? </label>
            <select id="recommend" v-model.number="recommend">
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>

            <input type="submit" class="button" value="Submit">
        </form>`,
        data(){
            return{ 
                name:"",
                review: "",
                rating: "",
                recommend: ""
            }
        },
        methods:{
            onSubmit(){
                let productReview={ //creating an object payload
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                this.$emit('review-submitted',productReview);
                //clear the 
                this. name="",
                this. review= "",
                this. rating= null,
                this.recommend= null
            }
        },

    }


)