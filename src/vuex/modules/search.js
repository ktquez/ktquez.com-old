import {
  SET_SEARCH
} from '../mutation-types'

const state = {
  isSearch: false
}

const mutations = {
  [SET_SEARCH] (state) {
    state.isSearch = !state.isSearch
  }
}

export default {
  state,
  mutations
}
