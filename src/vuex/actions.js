/* MODULE POSTS */
export const setPosts = ({ dispatch }, posts) => {
  dispatch('SET_POSTS', posts)
}
export const setCurrentPost = ({dispatch}, post) => {
  dispatch('SET_CURRENT_POST', post)
}

/* MODULE NAV MOBILE */
export const setStateNavMobile = ({ dispatch }) => {
  dispatch('SET_NAV_MOBILE')
}

/* MODULE LANG */
export const setLang = ({dispatch}, lang) => {
  dispatch('SET_LANG', lang)
}
