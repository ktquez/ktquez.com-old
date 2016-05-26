/* MODULE POSTS */
export const setPosts = ({ dispatch }, posts) => {
  dispatch('SET_POSTS', posts)
}

export const setCurrentPost = ({ dispatch }, post) => {
  dispatch('SET_CURRENT_POST', post)
}
