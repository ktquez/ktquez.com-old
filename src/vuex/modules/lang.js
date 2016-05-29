import {
  SET_LANG
} from '../mutation-types'

const state = {
  value: 'pt'
}

const mutations = {
  [SET_LANG] (state, lang) {
    state.lang = lang
  }
}

export default {
  state,
  mutations
}
