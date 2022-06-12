import { createApp }  from 'vue'
import axios from "axios";

// set config file here based on env
const config = require(`../../../${process.env.NODE_ENV}.config.json`);

const ApiService = {
    /**
     * [Public] This method used for get data
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    get(resource) {
        return axios.get(`${config.application.appUrl}${resource}`)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
    },

    /**
     * [Public] This method used for post data
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    post(resource, params) {
        return createApp.axios.post(`${config.application.appUrl}${resource}`, params);
    },
    /**
     * [Public] This method used for delete data by id
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    delete(resource) {
        return createApp.axios.delete(`${config.application.appUrl}${resource}`).catch(error => {
            throw error;
        });
    },
    /**
     * [Public] This method used for edit data
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    patch(resource, params) {
        return createApp.axios.patch(`${config.application.appUrl}${resource}`, params);
    },
    /**
     * [Public] This method used for edit data
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    put(resource, params) {
        return createApp.axios.put(`${config.application.appUrl}${resource}`, params);
    },
    /**
     * [Public] This method is used for multiple request
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    all(resource) {
        return createApp.axios.all(`${config.application.appUrl}${resource}`);
    },
    
};

export default ApiService;