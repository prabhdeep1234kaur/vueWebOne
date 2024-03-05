app.component('review-list',{
    props:{
        reviews:{
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    `<div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(reviewList, index) in reviews" :key="index" >
                Name : {{reviewList.name}}<br />Rating: {{reviewList.rating}}<br />
                Review : {{reviewList.review}} <br>
                Recommended ? : {{reviewList.recommend}}
            </li>
        </ul>
    </div>`
})