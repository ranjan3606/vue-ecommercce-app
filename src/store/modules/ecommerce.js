import ApiService from "@/store/common/apiServices";
import { FETCH_PRODUCT_LIST, FETCH_PRODUCT_DETAILS } from "../const/actions";
import { SET_ERROR, SET_PRODUCT_LIST, SET_PRODUCT_DETAILS } from "../const/mutations";

const state = {
    productList: null,
    productDetails: null,
};

const getters = {
    productList: (state) => state.productList,
    productDetails: (state) => state.productDetails,
};

const actions = {
    /**
     * [Public] use case fetching product list.
     * @author Ranjan Kumar <ranjan17@navgurukul.org>
     */
     [FETCH_PRODUCT_LIST](context) {
        return new Promise(resolve => {
            ApiService.get(`/products`)
            .then((data) => {
                let result = data.data;
                context.commit(SET_PRODUCT_LIST, result);
                resolve(result)
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data);
                resolve(response.data)
            });
        });
    },

    /**
     * [Public] use case fetching product detail.
     * @author Ranjan Kumar <ranjan17@navgurukul.org>
     */
     [FETCH_PRODUCT_DETAILS](context, id) {
        state.productDetails = null;
        return new Promise(resolve => {
            ApiService.get(`/products/${id}`)
            .then((data) => {
                let result = data.data;
                context.commit(SET_PRODUCT_DETAILS, result);
                resolve(result)
            })
            .catch(({ response }) => {
                context.commit(SET_ERROR, response.data);
                resolve(response.data)
            });
        });
    },
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error
    },
    [SET_PRODUCT_LIST](state, productList) {
        state.productList = productList
    },
    [SET_PRODUCT_DETAILS](state, productDetails) {
        state.productDetails = productDetails
    },

};

export default {
    state,
    actions,
    mutations,
    getters
};