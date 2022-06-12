<template>
    <div>
        <v-container v-if="productDetails">
            <div class="back-button"><v-btn @click="goBack" color="orange" plain>Go Back</v-btn></div>
            <v-row>
                <v-col cols="4"><v-img :src="productDetails.image"></v-img></v-col>
                <v-col cols="8">
                    <v-card-title class="text-h5" style="margin-bottom: 30px;">{{ productDetails.title }}</v-card-title>
                    <v-card-subtitle class="category-details">{{productDetails.category}}</v-card-subtitle>
                    <v-card-subtitle>{{ productDetails.description }}</v-card-subtitle>
                    <v-card-title>{{ productDetails.price }}</v-card-title>
                    <v-card-actions style="margin-top: 20px;">
                        <v-btn color="orange" >Add To Cart</v-btn>
                        <v-btn color="orange">Buy Now</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-container>
        <div class="custom-loader" v-else>
            <img src="/img/ezgif-2-6d0b072c3d3f.gif" alt="Loading...">
        </div>
    </div>
</template>


<script>
import { FETCH_PRODUCT_DETAILS } from "@/store/const/actions";
import { mapGetters } from "vuex";
export default {
    props: ['products'],
    

    created() {
        this.init()
    },
    computed: {
        ...mapGetters(['productDetails'])
    },
    methods: {
        init() {
            this.$store.dispatch(FETCH_PRODUCT_DETAILS, this.$route.params.id)
        },
        goBack() {
            window.history.back()
        },
        addToCard(total){
            this.$store.dispatch('addToCart', {
                products:this.products,
                quantity: total + 1
            })
        }
    }
}
</script>

<style>
.back-button {
    margin: 20px 0px 24px 10px;
}
.category-details {
    margin-bottom: 10px;
    font-style: italic;
    color: orange;
}
</style>