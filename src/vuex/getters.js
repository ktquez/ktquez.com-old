/* MODULE POSTS */
export const getPosts = ({blog}) => blog.posts
export const getCurrentPost = ({blog}) => blog.currentPost

/* MODULE NAV MOBILE */
export const getStateNavMobile = ({navMobile}) => navMobile.visible

/* MODULE LANG */
export const getLang = ({lang}) => lang.value

/* MODULE SEARCH */
export const isSearch = ({search}) => search.isSearch
