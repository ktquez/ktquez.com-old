'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import lang from './modules/lang'
import blog from './modules/blog'
import navMobile from './modules/navmobile'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lang,
    blog,
    navMobile
  }
})
