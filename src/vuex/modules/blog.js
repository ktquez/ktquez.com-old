import {
  SET_POSTS,
  SET_CURRENT_POST
} from '../mutation-types'

const state = {
  posts: [],
  currentPost: {}
}

const mutations = {
  [SET_POSTS] (state, posts) {
    state.posts = posts
  },
  [SET_CURRENT_POST] (state, post) {
    state.currentPost = post
  }
}

export default {
  state,
  mutations
}
