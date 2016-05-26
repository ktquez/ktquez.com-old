import {
  SET_POSTS
} from '../mutation-types'

const state = {
  posts: []
}

const mutations = {
  [SET_POSTS] (state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  mutations
}
