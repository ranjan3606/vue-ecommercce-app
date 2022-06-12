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
                        :truncateLength="80" :subDesc="item.category" @click1="detailsPage(item.id)" :showBtn="false" />
                </v-col>
            </v-row>
            <div class="custom-loader" v-else>
                <img src="/img/not-data-found.png" alt="no data..">
            </div>
        </div>
    </v-container>
</template>

<script>
import singleCard from '@/components/Card/singleCard.vue';
import session from '../../store/common/sessionServices'
export default {
    data() {
        return {
            productList: null,
            isLoading: false,
            deleteItem: null,
        }
    },
    components: {
        singleCard
    },
    created() { // Call init function after page loads
        this.init()
    },
    methods: {
        async init() {
            this.isLoading = true;
            this.productList = await session.localStorage({ method: 'GET', key: 'productList' }).data;
            this.isLoading = false;

        },
        detailsPage(id) {
            this.$router.push(`/product-details/${id}`).catch(() => { });
        },
        deleteData(id) {
            this.id = session.localStorage({ method: 'DELETE', key: 'productList', id }) - id;
        },

    }
}
</script>
