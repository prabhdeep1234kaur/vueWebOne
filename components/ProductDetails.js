app.component('product-details',{
    template:
     /*html*/ 
    `<ul>
        <li v-for="detailval in details">{{ detailval }}</li>
    </ul>`
    ,
    // data(){

    // },
    // computed:{

    // },
    // methods: {
        
    // },
    props:{
        details:{
            type: Array, 
            required: true
        }
    }

});