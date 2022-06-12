<template>
    <v-toolbar navbar primary>
        <v-toolbar-items>
            <v-btn :to="`/`">
                {{ title }}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-tab>
                <v-btn dark icon :to="`/product-cart`">
                    <v-badge :content="productList ? productList : 0" color="orange">
                        <v-icon color="black">{{icon}}</v-icon>
                    </v-badge>
                </v-btn>
            </v-tab>

        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import session from '@/store/common/sessionServices'

export default {
    name: 'app',
    props: {
        title: {
            type: String,
            default: "Go to home"
        },
        subtitle: {
            type: String,
            default: "This is sub-title"
        },
        icon: {
            type: String,
            default: "mdi-shopping"
        }
    },
    created() { // Call init function after page loads
        this.init()
    },
    methods: {
        async init() {
            this.productList = await session.localStorage({ method: 'GET', key: 'productList' }).data.length;
        },

    }
};
</script>
<style>
</style>
