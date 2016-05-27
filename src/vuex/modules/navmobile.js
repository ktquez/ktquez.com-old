import {
  SET_NAV_MOBILE
} from '../mutation-types.js'

const state = {
  visible: false
}

const mutations = {
  [SET_NAV_MOBILE] (state) {
    state.visible = !state.visible
  }
}

export default {
  state,
  mutations
}
