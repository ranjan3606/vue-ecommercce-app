import { createStore } from 'vuex'

import ecommerce from './modules/ecommerce'

export default createStore({
  modules: {
    ecommerce
  }
})
