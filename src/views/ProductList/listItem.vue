<template>
    <v-container>
        <div v-if="isLoading">
            <div class="custom-loader">
                <img src="/img/ezgif-2-6d0b072c3d3f.gif" alt="Loading...">
            </div>
        </div>
        <div v-else>
            <v-row v-if="productList && productList.length">
                <v-col md="3" v-for="(item, index) in productList" :key="index">
                    <singleCard :title="item.hasOwnProperty('title') ? item.title : 'Title not available'"
                        :btnText="'Add To Cart'" :img="item.hasOwnProperty('image') ? item.image : null"
                        :subtitle="item.hasOwnProperty('price') ? `${item.price}` : null"
                        :desc="item.hasOwnProperty('description') ? item.description : 'Description not available'"
                        :truncateLength="80" :subDesc="item.category" @click1="detailsPage(item.id)"
                        @click2="addToCart(item) ? addToCart(item) : 'Data is not addded'" />

                </v-col>
            </v-row>
            <div class="custom-loader" v-else>
                <img src="https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png" alt="no data..">
            </div>
        </div>
    </v-container>
</template>

<script>
import singleCard from '@/components/Card/singleCard.vue';
import { FETCH_PRODUCT_LIST } from "@/store/const/actions";
import session from '../../store/common/sessionServices'
import { mapGetters } from 'vuex';
export default {
    components: {
        singleCard
    },
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapGetters(['productList'])
    },
    created() { // Call init function after page loads
        this.init()
    },
    methods: {
        async init() {
            this.isLoading = true;
            await this.$store.dispatch(FETCH_PRODUCT_LIST);
            this.isLoading = false;
        },
        detailsPage(id) {
            this.$router.push(`/product-details/${id}`).catch(() => { });
        },
        addToCart(data) {
            if (data) {
                session.localStorage({ method: 'POST', key: 'productList', data });
            }
        },
    }
}
</script>